import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/careers" },
  description: "Engineering, SAP, cloud, data and delivery roles at Ascendus, with the employing entity and work location stated on every posting.",
  openGraph: {
    title: "Careers at Ascendus",
    description: "Engineering, SAP, cloud, data and delivery roles at Ascendus, with the employing entity and work location stated on every posting.",
    url: "/careers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "Careers at Ascendus" },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/careers"));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
