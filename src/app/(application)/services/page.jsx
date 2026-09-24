import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/" },
  description:
    "The services Ascendus delivers — SAP transformation, business transformation and digital & technology transformation — with deep expertise, industry focus and measurable outcomes behind each.",
  openGraph: {
    title: "Services | Transform Ideas Into Impact.",
    description:
      "The services Ascendus delivers — SAP transformation, business transformation and digital & technology transformation — with deep expertise, industry focus and measurable outcomes behind each.",
    url: "/services/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "Services | Transform Ideas Into Impact." },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/services/"));

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
