import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/sap-insights/" },
  description: "Practical guidance on SAP S/4HANA, RISE with SAP, SAP BTP and SuccessFactors from Ascendus's SAP practice.",
  openGraph: {
    title: "SAP Insights | Ascendus",
    description: "Practical guidance on SAP S/4HANA, RISE with SAP, SAP BTP and SuccessFactors from Ascendus's SAP practice.",
    url: "/sap-insights/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "SAP Insights",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/sap-insights/"));

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
