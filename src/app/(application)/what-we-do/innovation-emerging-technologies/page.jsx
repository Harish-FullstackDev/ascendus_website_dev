import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/what-we-do/innovation-emerging-technologies/" },
  description: "Emerging technology evaluated against real operational constraints — where it earns a place in the roadmap, and where it isn't yet ready to bet on.",
  openGraph: {
    title: "Innovation and Emerging Technology Services | Ascendus",
    description: "Emerging technology evaluated against real operational constraints — where it earns a place in the roadmap, and where it isn't yet ready to bet on.",
    url: "/what-we-do/innovation-emerging-technologies/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Innovation and Emerging Technology Services",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/what-we-do/innovation-emerging-technologies/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/what-we-do/innovation-emerging-technologies/",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageClient />
    </>
  );
}
