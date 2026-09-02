import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/enterprise-transformation-practice" },
  openGraph: {
    title: "Enterprise Transformation Services | Ascendus",
    description: "Transformation programs that keep architecture, process and integration decisions aligned across every workstream, from design through implementation.",
    url: "/whatWeDo/enterprise-transformation-practice",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  description: "Transformation programs that keep architecture, process and integration decisions aligned across every workstream, from design through implementation.",
  title: "Enterprise Transformation Services",
};

export default function Page() {
  return <PageClient />;
}
