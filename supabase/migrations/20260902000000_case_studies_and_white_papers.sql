-- supabase/migrations/20260902000000_case_studies_and_white_papers.sql

-- =============================================================================
-- MODULE: Case Studies & White Papers content tables
-- Mirrors the existing (unmigrated) `blogs` table shape plus fields already
-- used by the static caseStudiesData.js / whitepapersData.js content.
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Table: case_studies
CREATE TABLE IF NOT EXISTS public.case_studies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    summary TEXT NOT NULL,
    cover_image TEXT NOT NULL,
    publish_date DATE NOT NULL DEFAULT current_date,
    author TEXT NOT NULL,
    meta_line TEXT,
    tags TEXT[] DEFAULT '{}'::text[] NOT NULL,
    highlights JSONB DEFAULT '[]'::jsonb NOT NULL,
    sections JSONB DEFAULT '[]'::jsonb NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Table: white_papers
CREATE TABLE IF NOT EXISTS public.white_papers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    summary TEXT NOT NULL,
    cover_image TEXT NOT NULL,
    publish_date DATE NOT NULL DEFAULT current_date,
    author TEXT NOT NULL,
    meta_line TEXT,
    tags TEXT[] DEFAULT '{}'::text[] NOT NULL,
    file_info TEXT,
    download_url TEXT,
    sections JSONB DEFAULT '[]'::jsonb NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Indexing
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON public.case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_publish_date ON public.case_studies(publish_date);
CREATE INDEX IF NOT EXISTS idx_case_studies_category ON public.case_studies(category);

CREATE INDEX IF NOT EXISTS idx_white_papers_slug ON public.white_papers(slug);
CREATE INDEX IF NOT EXISTS idx_white_papers_publish_date ON public.white_papers(publish_date);
CREATE INDEX IF NOT EXISTS idx_white_papers_category ON public.white_papers(category);

-- 4. Row-Level Security
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.white_papers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Case studies are readable by everyone" ON public.case_studies FOR SELECT USING (true);
CREATE POLICY "White papers are readable by everyone" ON public.white_papers FOR SELECT USING (true);

CREATE POLICY "Admins have full access to case_studies" ON public.case_studies FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins have full access to white_papers" ON public.white_papers FOR ALL TO authenticated USING (true);

-- 5. updated_at trigger
-- Reuses update_updated_at_column(), defined in 20260624000002_final_relational_schema.sql.
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON public.case_studies FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_white_papers_updated_at BEFORE UPDATE ON public.white_papers FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
