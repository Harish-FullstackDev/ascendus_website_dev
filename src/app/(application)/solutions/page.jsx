import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/" },
  description:
    "The SAP solutions Ascendus delivers — S/4HANA, Ariba, SuccessFactors, BTP, Analytics, Integration, EHS, CX, RISE with SAP and GROW with SAP — end to end, with industry expertise behind each.",
  openGraph: {
    title: "Solutions | SAP Solutions for a Smarter, Stronger Tomorrow.",
    description:
      "The SAP solutions Ascendus delivers — S/4HANA, Ariba, SuccessFactors, BTP, Analytics, Integration, EHS, CX, RISE with SAP and GROW with SAP — end to end, with industry expertise behind each.",
    url: "/solutions/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "Solutions | SAP Solutions for a Smarter, Stronger Tomorrow." },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/solutions/"));

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
