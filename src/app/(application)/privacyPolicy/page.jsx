import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/privacyPolicy" },
  description: "How Ascendus collects, uses, stores and protects personal data submitted through this site, and the rights available to you under applicable law.",
  openGraph: {
    title: "Privacy Policy | Ascendus",
    description: "How Ascendus collects, uses, stores and protects personal data submitted through this site, and the rights available to you under applicable law.",
    url: "/privacyPolicy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Privacy Policy",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/privacyPolicy"));

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
