import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabaseClient';

// POST /api/inquiries
// Validates that the lead_id already exists in the `leads` table before
// inserting the inquiry, enforcing referential integrity at the API layer.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      lead_id,
      inquiry_type,
      message,
      preferred_callback_time,
      utm_metadata,
    } = body;

    // --- Input Validation ---
    if (!lead_id || typeof lead_id !== 'string') {
      return NextResponse.json({ error: 'lead_id is required and must be a valid UUID string.' }, { status: 400 });
    }

    // Must match InquiryOrigin union in database.types.ts
    const validInquiryTypes = ['Contact Form', 'Service Detail', 'Callback Request', 'Newsletter'];
    if (!inquiry_type || !validInquiryTypes.includes(inquiry_type)) {
      return NextResponse.json(
        { error: `inquiry_type must be one of: ${validInquiryTypes.join(', ')}.` },
        { status: 400 }
      );
    }

    // message is required (non-nullable) in the DB schema
    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'message is required and must be a non-empty string.' }, { status: 400 });
    }

    const supabase = createAdminClient();

    // --- Referential Integrity Check: Verify lead_id exists before binding ---
    const { data: leadExists, error: leadCheckError } = await supabase
      .from('leads')
      .select('id')
      .eq('id', lead_id)
      .maybeSingle();

    if (leadCheckError) {
      console.error('[POST /api/inquiries] Lead existence check failed:', leadCheckError);
      return NextResponse.json(
        { error: 'Unable to verify lead reference. Please try again.', code: leadCheckError.code },
        { status: 500 }
      );
    }

    if (!leadExists) {
      return NextResponse.json(
        { error: `No lead found with ID: ${lead_id}. Cannot create an orphaned inquiry.` },
        { status: 404 }
      );
    }

    // --- Insert Inquiry Record ---
    const { data: newInquiry, error: inquiryError } = await supabase
      .from('inquiries')
      .insert({
        lead_id,
        inquiry_type: inquiry_type as 'Contact Form' | 'Service Detail' | 'Callback Request' | 'Newsletter',
        message: message.trim(),
        preferred_callback_time: preferred_callback_time?.trim() || null,
        utm_metadata: utm_metadata && typeof utm_metadata === 'object' ? utm_metadata : {},
      })
      .select('id')
      .single();

    if (inquiryError) {
      console.error('[POST /api/inquiries] Inquiry insert failed:', inquiryError);

      // Foreign key constraint violation (should not happen after API check, but guard defensively)
      if (inquiryError.code === '23503') {
        return NextResponse.json(
          { error: 'The referenced lead_id is no longer valid.', code: inquiryError.code },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: 'Failed to register your inquiry. Please try again later.', code: inquiryError.code },
        { status: 500 }
      );
    }

    if (!newInquiry) {
      return NextResponse.json({ error: 'Insert succeeded but no record was returned.' }, { status: 500 });
    }

    console.log(`[POST /api/inquiries] Successfully created inquiry. ID: ${newInquiry.id} for Lead: ${lead_id}`);

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully.', inquiry_id: newInquiry.id },
      { status: 201 }
    );

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unexpected server error.';
    console.error('[POST /api/inquiries] Unhandled exception:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
