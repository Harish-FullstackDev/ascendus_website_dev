import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/partnership/" },
  description:
    "Explore the Ascendus partner ecosystem — strategic, SAP, technology and alliance partnerships, and the ways to build, sell and go to market with us.",
  openGraph: {
    title: "Ascendus Partnership | Stronger Together for Greater Impact",
    description:
      "Explore the Ascendus partner ecosystem — strategic, SAP, technology and alliance partnerships, and the ways to build, sell and go to market with us.",
    url: "/partnership/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "Ascendus Partnership | Stronger Together for Greater Impact" },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/partnership/"));

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
