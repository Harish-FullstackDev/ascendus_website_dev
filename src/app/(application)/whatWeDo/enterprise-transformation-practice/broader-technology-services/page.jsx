import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/enterprise-transformation-practice/broader-technology-services" },
  description: "Technology services that extend an SAP-centered estate — integration, platform and infrastructure work scoped around the digital core.",
  openGraph: {
    title: "Broader Technology Services for SAP Estates | Ascendus",
    description: "Technology services that extend an SAP-centered estate — integration, platform and infrastructure work scoped around the digital core.",
    url: "/whatWeDo/enterprise-transformation-practice/broader-technology-services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Broader Technology Services for SAP Estates",
};

export default function Page() {
  return <PageClient />;
}
