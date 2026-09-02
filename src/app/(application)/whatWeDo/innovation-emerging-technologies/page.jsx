import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/innovation-emerging-technologies" },
  description: "Emerging technology evaluated against real operational constraints — where it earns a place in the roadmap, and where it isn't yet ready to bet on.",
  openGraph: {
    title: "Innovation and Emerging Technology Services | Ascendus",
    description: "Emerging technology evaluated against real operational constraints — where it earns a place in the roadmap, and where it isn't yet ready to bet on.",
    url: "/whatWeDo/innovation-emerging-technologies",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Innovation and Emerging Technology Services",
};

export default function Page() {
  return <PageClient />;
}
