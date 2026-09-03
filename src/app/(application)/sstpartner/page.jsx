import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/sstpartner" },
  description: "Apply to the Ascendus partner program — the qualification criteria, engagement model and next steps for prospective partners.",
  openGraph: {
    title: "Partner Program | Ascendus",
    description: "Apply to the Ascendus partner program — the qualification criteria, engagement model and next steps for prospective partners.",
    url: "/sstpartner",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Partner Program",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/sstpartner"));

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
