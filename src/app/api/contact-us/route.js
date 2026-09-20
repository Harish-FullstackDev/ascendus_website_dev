import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabaseClient';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED_FIELDS = ['fullName', 'email', 'company', 'jobTitle', 'country', 'areaOfInterest', 'message'];

// Translate Postgres error codes to user-facing messages
function resolveDbError(code, fallback) {
  const errorMap = {
    '23505': 'This email address has already been registered.',
    '23514': 'One or more fields contain an invalid value.',
    '23503': 'Submission failed due to a reference error. Please try again.',
  };
  return errorMap[code] || fallback || 'Failed to save your enquiry. Please try again later.';
}

// The `leads` table stores a first/last name pair, while the contact-us form
// collects a single "Full Name" field. Everything before the first space is the
// first name; the remainder (or a placeholder when only one word was given)
// becomes the last name.
function splitFullName(fullName) {
  const parts = fullName.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return { firstName: parts[0], lastName: '-' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

// POST /api/contact-us — capture a general enquiry from the /contact-us/ page.
// Writes the same `leads` + `inquiries` pair as /api/contact, but with the
// contact-us field set (job title, area of interest, attachment name) rather
// than the legacy contact form's.
export async function POST(req) {
  try {
    const body = await req.json();

    const fields = {};
    for (const key of [...REQUIRED_FIELDS, 'attachmentName']) {
      const value = body[key];
      fields[key] = typeof value === 'string' ? value.trim() : '';
    }

    const missing = REQUIRED_FIELDS.filter((field) => !fields[field]);
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required field(s): ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(fields.email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const supabase = createAdminClient();
    const leadId = crypto.randomUUID();
    const { firstName, lastName } = splitFullName(fields.fullName);

    const { error: leadError } = await supabase.from('leads').insert({
      id: leadId,
      first_name: firstName,
      last_name: lastName,
      email: fields.email.toLowerCase(),
      // Company/job title/area of interest are folded into problem_summary the
      // same way /api/contact does it — the two leads migrations disagree on
      // whether a `company` column exists, so this route stays on the column
      // set the existing contact route is already proven against.
      problem_summary: `Country: ${fields.country} | Company: ${fields.company} | Job Title: ${fields.jobTitle} | Area of Interest: ${fields.areaOfInterest} | Enquiry: ${fields.message}`,
      lead_source: 'Contact Us Page Form',
      consent_given: true,
      status: 'New',
    });

    if (leadError) {
      console.error('[POST /api/contact-us] Lead insert failed:', leadError);
      return NextResponse.json(
        { error: resolveDbError(leadError.code, leadError.message) },
        { status: leadError.code === '23505' ? 409 : 500 }
      );
    }

    // Non-fatal: the lead is already captured, so a failure here is logged and
    // the submission still counts as successful.
    const { error: inquiryError } = await supabase.from('inquiries').insert({
      lead_id: leadId,
      // `inquiry_type` is the inquiry_origin enum — 'Contact Form' is its
      // closest member; `lead_source` above is what distinguishes this page's
      // submissions from the legacy /contact/ form's.
      inquiry_type: 'Contact Form',
      message: fields.message,
      utm_metadata: {
        area_of_interest: fields.areaOfInterest,
        attachment_name: fields.attachmentName || null,
        company: fields.company,
        country: fields.country,
        job_title: fields.jobTitle,
      },
    });

    if (inquiryError) {
      console.warn('[POST /api/contact-us] Inquiry insert failed (non-fatal):', inquiryError);
    }

    console.log(`[POST /api/contact-us] Enquiry captured. Lead ID: ${leadId}`);

    return NextResponse.json(
      { success: true, message: 'Enquiry submitted successfully.', data: { id: leadId } },
      { status: 201 }
    );
  } catch (err) {
    console.error('[POST /api/contact-us] Unhandled exception:', err.message);
    return NextResponse.json({ error: 'Failed to submit your enquiry.' }, { status: 500 });
  }
}
