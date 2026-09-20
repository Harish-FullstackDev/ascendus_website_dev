import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/industries/" },
  description:
    "The industries Ascendus serves — manufacturing, retail, government, banking, energy, healthcare, technology, transportation, education and more — and the deep domain expertise behind each.",
  openGraph: {
    title: "Industries | Different Industries. A Smarter Tomorrow.",
    description:
      "The industries Ascendus serves — manufacturing, retail, government, banking, energy, healthcare, technology, transportation, education and more — and the deep domain expertise behind each.",
    url: "/industries/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "Industries | Different Industries. A Smarter Tomorrow." },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/industries/"));

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
