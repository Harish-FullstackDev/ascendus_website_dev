import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/securityPrivacyPolicy" },
  description: "The technical and organizational controls Ascendus applies to protect data confidentiality, integrity and availability across its systems.",
  openGraph: {
    title: "Security and Privacy Policy | Ascendus",
    description: "The technical and organizational controls Ascendus applies to protect data confidentiality, integrity and availability across its systems.",
    url: "/securityPrivacyPolicy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Security and Privacy Policy",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/securityPrivacyPolicy"));

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
