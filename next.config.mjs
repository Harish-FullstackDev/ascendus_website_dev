/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  trailingSlash: true,
  serverExternalPackages: ['pdf-parse', 'pdfjs-dist', '@napi-rs/canvas'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/contact-us', destination: '/contact/', permanent: true },
      { source: '/bookacall', destination: '/book-a-consultation/', permanent: true },
      { source: '/termsOfService', destination: '/legal/terms/', permanent: true },
      { source: '/privacyPolicy', destination: '/legal/privacy/', permanent: true },
      { source: '/securityPrivacyPolicy', destination: '/legal/security/', permanent: true },
      { source: '/cookiePolicy', destination: '/legal/cookies/', permanent: true },
      { source: '/whatWeDo/:path*', destination: '/what-we-do/:path*/', permanent: true },
    ];
  },
};
 
export default nextConfig;              
 