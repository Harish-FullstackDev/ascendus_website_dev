/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  trailingSlash: true,
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
      // '/contact-us' used to 301 to '/contact/'. It is now a real page of its
      // own (src/app/(application)/contact-us), so the redirect is gone — the
      // old '/contact/' page is untouched and still reachable at its own URL.
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
 