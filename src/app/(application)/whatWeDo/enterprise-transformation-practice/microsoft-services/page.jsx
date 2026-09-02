import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/enterprise-transformation-practice/microsoft-services" },
  description: "Microsoft platform delivery — Azure, Dynamics 365 and Power Platform — scoped to work alongside an SAP-centered enterprise architecture.",
  openGraph: {
    title: "Microsoft Services for Enterprise Transformation | Ascendus",
    description: "Microsoft platform delivery — Azure, Dynamics 365 and Power Platform — scoped to work alongside an SAP-centered enterprise architecture.",
    url: "/whatWeDo/enterprise-transformation-practice/microsoft-services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Microsoft Services for Enterprise Transformation",
};

export default function Page() {
  return <PageClient />;
}
