import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private', '/api', '/_next'],
    },
    sitemap: 'https://www.ascendus.tech/sitemap.xml',
  };
}
