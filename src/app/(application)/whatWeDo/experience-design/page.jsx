import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/whatWeDo/experience-design" },
  description: "Interface and service design for enterprise systems, including design systems that keep complex applications consistent as they grow.",
  openGraph: {
    title: "Enterprise Experience Design | Ascendus",
    description: "Interface and service design for enterprise systems, including design systems that keep complex applications consistent as they grow.",
    url: "/whatWeDo/experience-design",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Enterprise Experience Design",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/whatWeDo/experience-design")
  );

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
