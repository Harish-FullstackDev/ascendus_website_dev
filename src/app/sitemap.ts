import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabaseClient';
import { jobs } from '@/components/Constants/Career/jobsData';
import { industryReportsData } from '@/data/industryReportsData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.ascendus.tech';
  const now = new Date().toISOString();

  // 1. Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/who-we-are',
    '/contact-us',
    '/careers',
    '/careers/apply',
    '/bookacall',
    '/trustcenter',
    '/sstpartner',
    '/blog',
    '/case-studies',
    '/industry-reports',
    '/whitepapers',
    '/privacyPolicy',
    '/termsOfService',
    '/privacyCommitment',
    '/securityPrivacyPolicy',
    '/cookiePolicy',
    '/whatWeDo/enterprise-transformation',
    '/whatWeDo/enterprise-transformation/broader-technology-services',
    '/whatWeDo/enterprise-transformation/microsoft-services',
    '/whatWeDo/enterprise-transformation/sap-transformation',
    '/whatWeDo/artificial-intelligence',
    '/whatWeDo/business-advisory',
    '/whatWeDo/cloud-infrastructure',
    '/whatWeDo/customer-experience',
    '/whatWeDo/cybersecurity-digital-trust',
    '/whatWeDo/data-intelligence',
    '/whatWeDo/digital-engineering',
    '/whatWeDo/experience-design',
    '/whatWeDo/innovation-emerging-technologies',
    '/whatWeDo/intelligent-automation',
    '/whatWeDo/managed-services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Careers — static job listings
  const careerRoutes: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // 3. Industry reports — static data
  const industryReportRoutes: MetadataRoute.Sitemap = industryReportsData.map((report) => ({
    url: `${baseUrl}/industry-reports/${report.slug}`,
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
        url: `${baseUrl}/blog/${row.slug}`,
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
        url: `${baseUrl}/case-studies/${row.slug}`,
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
        url: `${baseUrl}/whitepapers/${row.slug}`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error('Sitemap: whitepapers fetch failed', error);
  }

  return [...staticRoutes, ...careerRoutes, ...industryReportRoutes, ...dynamicRoutes];
}
