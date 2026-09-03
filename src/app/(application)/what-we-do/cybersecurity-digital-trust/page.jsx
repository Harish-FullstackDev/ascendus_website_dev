import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/what-we-do/cybersecurity-digital-trust/" },
  description: "Identity, access, governance and security architecture embedded into the systems the business runs on, not added around them.",
  openGraph: {
    title: "Enterprise Cybersecurity and Digital Trust | Ascendus",
    description: "Identity, access, governance and security architecture embedded into the systems the business runs on, not added around them.",
    url: "/what-we-do/cybersecurity-digital-trust/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Enterprise Cybersecurity and Digital Trust",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/what-we-do/cybersecurity-digital-trust/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/what-we-do/cybersecurity-digital-trust/",
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
