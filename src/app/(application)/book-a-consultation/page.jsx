import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/book-a-consultation/" },
  description: "Book a working session with an architect or practice lead. Choose the consultation type and tell us what your estate looks like now.",
  openGraph: {
    title: "Book a Consultation | Ascendus",
    description: "Book a working session with an architect or practice lead. Choose the consultation type and tell us what your estate looks like now.",
    url: "/book-a-consultation/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Book a Consultation",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/book-a-consultation/"));

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
