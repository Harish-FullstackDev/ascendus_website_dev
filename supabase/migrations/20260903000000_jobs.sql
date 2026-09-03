-- supabase/migrations/20260903000000_jobs.sql

-- =============================================================================
-- MODULE: Jobs (Careers listings)
-- Replaces the static src/components/Constants/Career/jobsData.js registry.
-- Schema documented here matches what already exists on the live project
-- (table was provisioned ahead of this migration file) — kept idempotent so
-- it's also safe to run against a fresh environment.
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Table: jobs
CREATE TABLE IF NOT EXISTS public.jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR NOT NULL,
    slug VARCHAR UNIQUE NOT NULL,
    company VARCHAR NOT NULL DEFAULT 'Support Studio Technologies',
    location VARCHAR NOT NULL,
    mode_of_work VARCHAR NOT NULL DEFAULT 'On-site',
    type_of_work VARCHAR NOT NULL DEFAULT 'Full-time',
    experience_level VARCHAR NOT NULL,
    categories TEXT[] DEFAULT '{}'::text[] NOT NULL,
    about_job TEXT NOT NULL DEFAULT '',
    responsibilities TEXT[] DEFAULT '{}'::text[] NOT NULL,
    qualifications TEXT[] DEFAULT '{}'::text[] NOT NULL,
    status VARCHAR NOT NULL DEFAULT 'Draft',
    posted_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Indexing
CREATE INDEX IF NOT EXISTS idx_jobs_slug ON public.jobs(slug);
CREATE INDEX IF NOT EXISTS idx_jobs_posted_at ON public.jobs(posted_at);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON public.jobs(status);

-- 3. Row-Level Security
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'jobs' AND policyname = 'Public can view open jobs') THEN
        CREATE POLICY "Public can view open jobs" ON public.jobs FOR SELECT USING (status = 'Open');
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'jobs' AND policyname = 'Admins have full access to jobs') THEN
        CREATE POLICY "Admins have full access to jobs" ON public.jobs FOR ALL TO authenticated USING (true);
    END IF;
END $$;

-- 4. updated_at trigger
-- Reuses update_updated_at_column(), defined in 20260624000002_final_relational_schema.sql.
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_jobs_updated_at ON public.jobs;
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON public.jobs FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- 5. Seed — the three roles live on the site today (from the retired
-- src/components/Constants/Career/jobsData.js static registry). company is
-- set explicitly to 'Ascendus' (the table default is the parent entity).
INSERT INTO public.jobs (slug, title, company, location, mode_of_work, type_of_work, experience_level, status, posted_at, categories, about_job, responsibilities, qualifications)
VALUES
(
    'sap-consultant',
    'SAP Consultant',
    'Ascendus',
    'Pondicherry, India',
    'On-site',
    'Full-time',
    '6-10 years',
    'Open',
    now() - interval '7 days',
    ARRAY['SAP & Enterprise Applications'],
    'We''re seeking an experienced SAP Consultant to support enterprise business processes, optimize SAP solutions, and collaborate with business and technical teams to deliver scalable and efficient implementations.',
    ARRAY['Configure, implement, and support SAP solutions based on business requirements','Analyze business processes and translate requirements into SAP solutions','Collaborate with functional and technical teams on SAP implementation projects','Troubleshoot system issues and provide timely resolution','Develop and maintain SAP documentation, configurations, and process workflows','Support system upgrades, integrations, testing, and continuous process improvements'],
    ARRAY['6-10 years of experience working with SAP systems','Strong understanding of SAP modules and enterprise business processes','Experience with SAP implementation, configuration, and support','Knowledge of SAP integration with other enterprise applications','Strong analytical, communication, and problem-solving skills','Bachelor''s degree in Computer Science, Information Technology, Business, or related field']
),
(
    'marketing-executive',
    'Marketing Executive',
    'Ascendus',
    'Pondicherry, India',
    'On-site',
    'Full-time',
    '1-3 years',
    'Open',
    now() - interval '3 days',
    '{}'::text[],
    'We''re looking for a Marketing Executive to plan and execute campaigns that build brand visibility and generate qualified pipeline across our enterprise technology and SAP consulting offerings.',
    ARRAY['Plan and execute digital and offline marketing campaigns','Manage content calendars across website, social, and email channels','Coordinate with design and content teams on campaign assets','Track campaign performance and report on key marketing metrics','Support event, webinar, and lead-generation initiatives','Maintain brand consistency across all marketing materials'],
    ARRAY['1-3 years of experience in marketing or a related field','Familiarity with digital marketing tools and social media platforms','Strong written and verbal communication skills','Basic understanding of SEO and campaign analytics','Ability to manage multiple projects and deadlines','Bachelor''s degree in Marketing, Communications, or related field']
),
(
    'business-development-executive',
    'Business Development Executive',
    'Ascendus',
    'Pondicherry, India',
    'On-site',
    'Full-time',
    '0-1 years',
    'Open',
    now() - interval '2 days',
    '{}'::text[],
    'We''re seeking a highly motivated and ambitious individual to join our team as a Business Development Executive, driving lead generation and client relationships for our SAP solutions and services.',
    ARRAY['Identify and generate leads through channels such as LinkedIn, cold calling, emails, and networking','Build and maintain strong relationships with potential and existing clients to understand their business needs','Conduct research on industry trends, competitors, and potential clients to identify new business opportunities','Contact potential clients through calls, emails, and meetings to present our SAP solutions and services','Prepare business proposals, sales presentations, and pitch decks tailored to client needs'],
    ARRAY['Bachelor''s degree in BE or Business Administration','0-1 years of experience','Strong communication and interpersonal skills, presentation skills, and the ability to confidently engage with clients and build relationships','Excellent organizational and time management skills, with the ability to prioritize tasks effectively','Ability to work both independently and collaboratively in a team-oriented environment','Prior internship or part-time work experience in sales or BDE is a plus']
)
ON CONFLICT (slug) DO NOTHING;
