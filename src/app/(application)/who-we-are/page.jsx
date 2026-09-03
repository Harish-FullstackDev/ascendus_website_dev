import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/who-we-are/" },
  description: "Who Ascendus is, how we are structured, where we deliver from, and what a client can independently verify before engaging us.",
  openGraph: {
    title: "About Ascendus | Enterprise Technology Services",
    description: "Who Ascendus is, how we are structured, where we deliver from, and what a client can independently verify before engaging us.",
    url: "/who-we-are/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "About Ascendus | Enterprise Technology Services" },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/who-we-are/"));

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
