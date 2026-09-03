import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/legal/cookies/" },
  description: "How Ascendus uses cookies and similar technologies on this site, what each category does, and how to manage your preferences.",
  openGraph: {
    title: "Cookie Policy | Ascendus",
    description: "How Ascendus uses cookies and similar technologies on this site, what each category does, and how to manage your preferences.",
    url: "/legal/cookies/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Cookie Policy",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/legal/cookies/"));

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
