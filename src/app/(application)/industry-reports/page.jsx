import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/industry-reports" },
  description: "Benchmark data and market analysis on SAP adoption, cloud infrastructure spending, cybersecurity threats, and AI adoption across the industries we serve.",
  openGraph: {
    title: "Industry Reports | Ascendus",
    description: "Benchmark data and market analysis on SAP adoption, cloud infrastructure spending, cybersecurity threats, and AI adoption across the industries we serve.",
    url: "/industry-reports",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Industry Reports",
};

export default function Page() {
  return <PageClient />;
}
