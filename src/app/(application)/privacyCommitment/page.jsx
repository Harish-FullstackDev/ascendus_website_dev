import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/privacyCommitment/" },
  description: "The principles Ascendus follows when handling client and candidate data, and how those principles are enforced in practice.",
  openGraph: {
    title: "Our Privacy Commitment | Ascendus",
    description: "The principles Ascendus follows when handling client and candidate data, and how those principles are enforced in practice.",
    url: "/privacyCommitment/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Our Privacy Commitment",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/privacyCommitment/"));

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
