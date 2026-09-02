import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/enterprise-transformation/sap-transformation" },
  description: "SAP transformation programs — S/4HANA migration, RISE and GROW delivery — scoped around process design and data readiness, not a fixed template.",
  title: "SAP Transformation Services",
};

export default function Page() {
  return <PageClient />;
}
