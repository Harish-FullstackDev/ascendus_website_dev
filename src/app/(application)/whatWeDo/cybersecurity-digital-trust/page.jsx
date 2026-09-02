import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/cybersecurity-digital-trust" },
  description: "Identity, access, governance and security architecture embedded into the systems the business runs on, not added around them.",
  openGraph: {
    title: "Enterprise Cybersecurity and Digital Trust | Ascendus",
    description: "Identity, access, governance and security architecture embedded into the systems the business runs on, not added around them.",
    url: "/whatWeDo/cybersecurity-digital-trust",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Enterprise Cybersecurity and Digital Trust",
};

export default function Page() {
  return <PageClient />;
}
