-- supabase/migrations/20261021000000_jobs_job_code.sql

-- =============================================================================
-- MODULE: Jobs — human-readable Job ID
-- The careers pages show a 9-digit "Job ID" (e.g. 000100001) on the job
-- detail banner and on each My Application card. The UUID primary key stays
-- the real identifier; job_code is display-only. Idempotent.
-- =============================================================================

CREATE SEQUENCE IF NOT EXISTS public.jobs_job_code_seq START WITH 100001;

ALTER TABLE public.jobs
    ADD COLUMN IF NOT EXISTS job_code VARCHAR(9);

-- New rows get the next code automatically.
ALTER TABLE public.jobs
    ALTER COLUMN job_code SET DEFAULT lpad(nextval('public.jobs_job_code_seq')::text, 9, '0');

-- Existing rows get codes in the order they were posted.
UPDATE public.jobs AS j
SET job_code = lpad(nextval('public.jobs_job_code_seq')::text, 9, '0')
FROM (SELECT id FROM public.jobs WHERE job_code IS NULL ORDER BY posted_at, created_at) AS pending
WHERE j.id = pending.id;

ALTER TABLE public.jobs ALTER COLUMN job_code SET NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS idx_jobs_job_code ON public.jobs(job_code);
