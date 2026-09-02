import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/cloud-infrastructure" },
  description: "Cloud migration, workload modernization and the operating model, monitoring and resilience practices that keep platforms running afterwards.",
  openGraph: {
    title: "Cloud Infrastructure and Modernization Services | Ascendus",
    description: "Cloud migration, workload modernization and the operating model, monitoring and resilience practices that keep platforms running afterwards.",
    url: "/whatWeDo/cloud-infrastructure",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Cloud Infrastructure and Modernization Services",
};

export default function Page() {
  return <PageClient />;
}
