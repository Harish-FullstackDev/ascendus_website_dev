import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/enterprise-transformation-practice/sap-transformation" },
  description: "SAP transformation programs — S/4HANA migration, RISE and GROW delivery — scoped around process design and data readiness, not a fixed template.",
  openGraph: {
    title: "SAP Transformation Services | Ascendus",
    description: "SAP transformation programs — S/4HANA migration, RISE and GROW delivery — scoped around process design and data readiness, not a fixed template.",
    url: "/whatWeDo/enterprise-transformation-practice/sap-transformation",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "SAP Transformation Services",
};

export default function Page() {
  return <PageClient />;
}
