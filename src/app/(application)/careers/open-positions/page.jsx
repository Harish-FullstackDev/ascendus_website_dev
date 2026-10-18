import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/careers/open-positions/" },
  description: "Search open roles at Ascendus by department, location, experience level and work type.",
  openGraph: {
    title: "Open Positions at Ascendus",
    description: "Search open roles at Ascendus by department, location, experience level and work type.",
    url: "/careers/open-positions/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "Open Positions at Ascendus" },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/careers/open-positions/"));

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
