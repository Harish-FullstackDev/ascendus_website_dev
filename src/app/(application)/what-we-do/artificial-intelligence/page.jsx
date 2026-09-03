import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/what-we-do/artificial-intelligence/" },
  description: "Applied AI taken from pilot to production — use-case selection, data readiness, integration architecture, governance and operations.",
  openGraph: {
    title: "Enterprise AI Consulting and Implementation | Ascendus",
    description: "Applied AI taken from pilot to production — use-case selection, data readiness, integration architecture, governance and operations.",
    url: "/what-we-do/artificial-intelligence/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Enterprise AI Consulting and Implementation",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/what-we-do/artificial-intelligence/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/what-we-do/artificial-intelligence/",
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
