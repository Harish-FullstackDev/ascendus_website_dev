import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/what-we-do/cloud-infrastructure/" },
  description: "Cloud migration, workload modernization and the operating model, monitoring and resilience practices that keep platforms running afterwards.",
  openGraph: {
    title: "Cloud Infrastructure and Modernization Services | Ascendus",
    description: "Cloud migration, workload modernization and the operating model, monitoring and resilience practices that keep platforms running afterwards.",
    url: "/what-we-do/cloud-infrastructure/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Cloud Infrastructure and Modernization Services",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/what-we-do/cloud-infrastructure/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/what-we-do/cloud-infrastructure/",
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
