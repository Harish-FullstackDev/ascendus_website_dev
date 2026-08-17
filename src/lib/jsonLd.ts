export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ascendus",
    "url": "https://www.ascendus.com", // TODO: swap for the real Ascendus domain
    "logo": "https://www.ascendus.com/Brand/Ascendus_Logo_Primary.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-XX-XXXXXXX",
      "contactType": "customer service",
      "areaServed": ["AE", "SA", "BH", "QA", "OM", "KW"],
      "availableLanguage": ["en", "ar"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/ascendus", // TODO: confirm real handle
      "https://twitter.com/AscendusTech" // TODO: confirm real handle
    ]
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateServiceSchema(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Ascendus",
      "url": "https://www.ascendus.com"
    },
    "areaServed": ["AE", "SA", "BH", "QA", "OM", "KW"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SAP Ecosystem Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SAP Implementation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SAP Integration"
          }
        }
      ]
    },
    "url": url
  };
}
