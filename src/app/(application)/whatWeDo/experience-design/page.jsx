import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/experience-design" },
  description: "Interface and service design for enterprise systems, including design systems that keep complex applications consistent as they grow.",
  openGraph: {
    title: "Enterprise Experience Design | Ascendus",
    description: "Interface and service design for enterprise systems, including design systems that keep complex applications consistent as they grow.",
    url: "/whatWeDo/experience-design",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Enterprise Experience Design",
};

export default function Page() {
  return <PageClient />;
}
