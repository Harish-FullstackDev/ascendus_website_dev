import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabaseClient';

export const runtime = 'nodejs';

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

const REQUIRED_FIELDS = [
  'firstName', 'lastName', 'email', 'phone',
  'addressLine1', 'city', 'state', 'zip', 'country',
  'position', 'experience', 'keySkills', 'startDate',
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Translate Postgres error codes to user-facing messages
function resolveDbError(code, fallback) {
  const errorMap = {
    '23505': 'An application with these details has already been submitted.',
    '23514': 'One or more fields contain an invalid value.',
    '23503': 'Submission failed due to a reference error. Please try again.',
  };
  return errorMap[code] || fallback || 'Failed to save application. Please try again later.';
}

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
}

// POST /api/careers/apply — Insert a job application (with resume upload) into Supabase
export async function POST(req) {
  let supabase;
  let storagePath;

  try {
    const formData = await req.formData();

    const fields = {};
    for (const key of formData.keys()) {
      if (key === 'resume') continue;
      const value = formData.get(key);
      fields[key] = typeof value === 'string' ? value.trim() : '';
    }

    // --- Required field validation (mirrors JSX `required` props) ---
    const missing = REQUIRED_FIELDS.filter((f) => !fields[f]);
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required field(s): ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    if (!fields.consent || fields.consent === 'false') {
      return NextResponse.json(
        { error: 'You must consent to data processing to submit an application.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(fields.email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }
    if (fields.refEmail && !EMAIL_REGEX.test(fields.refEmail)) {
      return NextResponse.json({ error: 'Please provide a valid reference email address.' }, { status: 400 });
    }

    // --- Resume file validation (mirrors parse-resume/route.js) ---
    const file = formData.get('resume');
    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'Resume/CV is required.' }, { status: 400 });
    }

    const fileName = file.name || 'resume';
    const isPdf = /\.pdf$/i.test(fileName);
    const isDoc = /\.docx?$/i.test(fileName);
    if (!isPdf && !isDoc) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PDF and Word documents are allowed.' },
        { status: 400 }
      );
    }
    if (file.size > MAX_RESUME_SIZE) {
      return NextResponse.json({ error: 'Resume file exceeds maximum size of 5MB.' }, { status: 400 });
    }

    supabase = createAdminClient();

    // --- Upload resume to Storage (collision-safe path) ---
    const applicationId = crypto.randomUUID();
    storagePath = `${Date.now()}-${applicationId}-${sanitizeFilename(fileName)}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(storagePath, buffer, {
        contentType: file.type || 'application/octet-stream',
        upsert: false,
      });

    if (uploadError) {
      console.error('[POST /api/careers/apply] Resume upload failed:', uploadError);
      return NextResponse.json(
        { error: 'Failed to upload resume. Please try again.' },
        { status: 500 }
      );
    }

    // --- Insert application row ---
    const { error: insertError } = await supabase.from('job_applications').insert({
      id: applicationId,
      first_name: fields.firstName,
      last_name: fields.lastName,
      email: fields.email.toLowerCase(),
      phone: fields.phone,
      address_line1: fields.addressLine1,
      address_line2: fields.addressLine2 || null,
      city: fields.city,
      state: fields.state,
      zip: fields.zip,
      country: fields.country,
      position: fields.position,
      experience: fields.experience,
      job_title: fields.jobTitle || null,
      employer: fields.employer || null,
      key_skills: fields.keySkills,
      cover_letter: fields.coverLetter || null,
      resume_path: storagePath,
      resume_filename: fileName,
      start_date: fields.startDate,
      current_salary: fields.currentSalary || null,
      expected_salary: fields.expectedSalary || null,
      linkedin: fields.linkedin || null,
      portfolio: fields.portfolio || null,
      ref_name: fields.refName || null,
      ref_relationship: fields.refRelationship || null,
      ref_email: fields.refEmail || null,
      ref_phone: fields.refPhone || null,
      hear_about: fields.hearAbout || null,
      consent_given: true,
      status: 'New',
    });

    if (insertError) {
      console.error('[POST /api/careers/apply] Insert failed:', insertError);
      // Best-effort cleanup of the orphaned upload since the row failed
      await supabase.storage.from('resumes').remove([storagePath]);
      return NextResponse.json(
        { error: resolveDbError(insertError.code, insertError.message) },
        { status: insertError.code === '23505' ? 409 : 500 }
      );
    }

    console.log(`[POST /api/careers/apply] Application captured. ID: ${applicationId}`);

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully.', data: { id: applicationId } },
      { status: 201 }
    );

  } catch (err) {
    console.error('[POST /api/careers/apply] Unhandled exception:', err.message);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}
