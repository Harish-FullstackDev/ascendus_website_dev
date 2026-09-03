import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/case-studies" },
  description: "Documented delivery evidence from enterprise technology programs, published with the client's approval and a stated measurement basis.",
  openGraph: {
    title: "Client Outcomes and Case Studies | Ascendus",
    description: "Documented delivery evidence from enterprise technology programs, published with the client's approval and a stated measurement basis.",
    url: "/case-studies",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Client Outcomes and Case Studies",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/case-studies"));

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
