import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/careers/apply/" },
  description: "Submit your application for an open role at Ascendus. Tell us about your experience and what you would bring to the team.",
  openGraph: {
    title: "Job Application | Ascendus",
    description: "Submit your application for an open role at Ascendus. Tell us about your experience and what you would bring to the team.",
    url: "/careers/apply/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Job Application",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/careers/apply/"));

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
