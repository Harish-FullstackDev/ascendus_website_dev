import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/contact-us/" },
  description:
    "Talk to Ascendus about a new engagement, a solution assessment, or support for an existing one — and find the office closest to you.",
  openGraph: {
    title: "Contact Ascendus | Talk About What's Next",
    description:
      "Talk to Ascendus about a new engagement, a solution assessment, or support for an existing one — and find the office closest to you.",
    url: "/contact-us/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "Contact Ascendus | Talk About What's Next" },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/contact-us/"));

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
