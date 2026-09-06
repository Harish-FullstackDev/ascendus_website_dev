import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabaseClient';
import { industryReportsData } from '@/data/industryReportsData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.ascendus.tech';
  const now = new Date().toISOString();

  // 1. Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/who-we-are',
    '/contact',
    '/careers',
    '/careers/apply',
    '/book-a-consultation',
    '/trustcenter',
    '/sstpartner',
    '/blog',
    '/case-studies',
    '/industry-reports',
    '/whitepapers',
    '/legal/privacy',
    '/legal/terms',
    '/legal/privacyCommitment',
    '/legal/security',
    '/legal/cookies',
    '/what-we-do/enterprise-transformation',
    '/what-we-do/enterprise-transformation/broader-technology-services',
    '/what-we-do/enterprise-transformation/microsoft-services',
    '/what-we-do/enterprise-transformation/sap-transformation',
    '/what-we-do/artificial-intelligence',
    '/what-we-do/business-advisory',
    '/what-we-do/cloud-infrastructure',
    '/what-we-do/customer-experience',
    '/what-we-do/cybersecurity-digital-trust',
    '/what-we-do/data-intelligence',
    '/what-we-do/digital-engineering',
    '/what-we-do/experience-design',
    '/what-we-do/innovation-emerging-technologies',
    '/what-we-do/intelligent-automation',
    '/what-we-do/managed-services',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 3. Industry reports — static data
  const industryReportRoutes: MetadataRoute.Sitemap = industryReportsData.map((report) => ({
    url: `${baseUrl}/industry-reports/${report.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 4. Dynamic content from Supabase (blog, case studies, whitepapers)
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const { data: blogs } = await supabase.from('blogs').select('slug, updated_at');
    (blogs || []).forEach((row: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/blog/${row.slug}/`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error('Sitemap: blogs fetch failed', error);
  }

  try {
    const { data: caseStudies } = await supabase.from('case_studies').select('slug, updated_at');
    (caseStudies || []).forEach((row: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/case-studies/${row.slug}/`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error('Sitemap: case studies fetch failed', error);
  }

  try {
    const { data: whitepapers } = await supabase.from('white_papers').select('slug, updated_at');
    (whitepapers || []).forEach((row: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/whitepapers/${row.slug}/`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error('Sitemap: whitepapers fetch failed', error);
  }

  try {
    const { data: jobs } = await supabase.from('jobs').select('slug, updated_at').eq('status', 'Open');
    (jobs || []).forEach((row: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/careers/${row.slug}/`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error('Sitemap: jobs fetch failed', error);
  }

  return [...staticRoutes, ...industryReportRoutes, ...dynamicRoutes];
}
