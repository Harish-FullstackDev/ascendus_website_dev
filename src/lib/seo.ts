/**
 * SEO Utility for generating JSON-LD Structured Data
 * Target: Enterprise search intent for IT and SAP consulting services.
 */

import { InquiryOrigin } from "@/types/database.types";

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ascendus",
    "alternateName": "Ascendus Technologies",
    "url": "https://www.ascendus.tech",
    "logo": "https://www.ascendus.tech/Brand/Ascendus_Logo_Primary.svg",
    "description": "Ascendus is a premium enterprise IT and SAP consulting firm providing digital transformation, cloud managed services, and S/4HANA migration across the UAE, Saudi Arabia, and the GCC.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7731 King Saud Ibn Abdulaziz Saud, 2839 Al Murabba Dist.",
      "addressLocality": "Riyadh",
      "postalCode": "12624",
      "addressCountry": "SA"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ascendus-company/?viewAsMember=true",
      "https://twitter.com/AscendusTech" // TODO: confirm real handle
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-XXXX-XXXX", // Tracking in pending_assets.md
        "contactType": "customer service",
        "areaServed": ["AE", "SA", "BH", "QA", "OM", "KW"],
        "availableLanguage": ["en", "ar"]
      }
    ]
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ascendus",
    "url": "https://www.ascendus.tech"
  };
};

export const generateBreadcrumbSchema = (crumbs: { name: string; item: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith('http') ? crumb.item : `https://www.ascendus.tech${crumb.item}`
    }))
  };
};

export const generateServiceSchema = (service: { name: string; description: string; url: string; category?: string }) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.category || "IT Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Ascendus",
      "url": "https://www.ascendus.tech"
    },
    "name": service.name,
    "description": service.description,
    "url": service.url.startsWith('http') ? service.url : `https://www.ascendus.tech${service.url}`,
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "Bahrain" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise IT Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SAP S/4HANA Consulting"
          }
        }
      ]
    }
  };
};
