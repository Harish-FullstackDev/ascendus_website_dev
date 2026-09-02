import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/artificial-intelligence" },
  description: "Applied AI taken from pilot to production — use-case selection, data readiness, integration architecture, governance and operations.",
  openGraph: {
    title: "Enterprise AI Consulting and Implementation | Ascendus",
    description: "Applied AI taken from pilot to production — use-case selection, data readiness, integration architecture, governance and operations.",
    url: "/whatWeDo/artificial-intelligence",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Enterprise AI Consulting and Implementation",
};

export default function Page() {
  return <PageClient />;
}
