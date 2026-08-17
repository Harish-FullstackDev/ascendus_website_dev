import "./globals.css";
import "./font.css";
// import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
// import BackgroundMusic from "../components/BackgroundMusic/BackgroundMusic";
import CookieConsent from "../components/Cookies/CookieConsent";
import ContactUsButton from "../components/Contactusbutton/contact_us_button";
import { generateOrganizationSchema } from "@/lib/seo";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#2e3033",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ascendus.com'), // TODO: swap for the real Ascendus domain
  title: {
    default: "Ascendus | Enterprise SAP & IT Consulting GCC",
    template: "%s | Ascendus"
  },
  description: "Ascendus provides premium SAP consulting, IT managed services, and digital transformation solutions for enterprises in the UAE, Saudi Arabia, and the wider GCC region.",
  keywords: [
    "SAP Consulting GCC",
    "IT Services UAE",
    "Digital Transformation Saudi Arabia",
    "Enterprise Software Solutions",
    "Cloud Managed Services",
    "S/4HANA Migration Dubai",
    "IT Strategy Riyadh"
  ],
  authors: [{ name: "Ascendus", url: "https://www.ascendus.com" }],
  creator: "Ascendus Engineering",
  publisher: "Ascendus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-us",
      "en-AE": "/en-ae",
      "en-SA": "/en-sa",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ascendus.com",
    siteName: "Ascendus",
    title: "Ascendus | Enterprise SAP & IT Consulting GCC",
    description: "Leading SAP and IT consulting firm specializing in enterprise digital transformation across the GCC region.",
    images: [
      {
        url: "/og-image.png", // Asset request tracking in pending_assets.md
        width: 1200,
        height: 630,
        alt: "Ascendus Enterprise Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascendus | SAP & IT Experts",
    description: "Enterprise SAP and IT consulting services for the GCC market.",
    images: ["/twitter-image.png"], // Asset request tracking in pending_assets.md
    creator: "@AscendusTech", // TODO: confirm real handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "pending_verification_code", // TODO: Add once provided
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth" style={{ "--lineWidth": "2px" } as React.CSSProperties}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        {/* <ScrollToTop /> */}
        {/* <ContactUsButton /> */}
        {/* <BackgroundMusic /> */}
        <CookieConsent />
      </body>
    </html>
  );
}
