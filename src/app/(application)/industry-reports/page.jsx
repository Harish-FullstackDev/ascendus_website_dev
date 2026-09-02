import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/industry-reports" },
  description: "Benchmark data and market analysis on SAP adoption, cloud infrastructure spending, cybersecurity threats, and AI adoption across the industries we serve.",
  title: "Industry Reports",
};

export default function Page() {
  return <PageClient />;
}
