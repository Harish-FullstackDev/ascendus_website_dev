import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/data-intelligence" },
  description: "Governed data foundations, semantic consistency and analytics that give business and AI workloads access to trusted operational information.",
  openGraph: {
    title: "Enterprise Data Engineering and Analytics | Ascendus",
    description: "Governed data foundations, semantic consistency and analytics that give business and AI workloads access to trusted operational information.",
    url: "/whatWeDo/data-intelligence",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Enterprise Data Engineering and Analytics",
};

export default function Page() {
  return <PageClient />;
}
