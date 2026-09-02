import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/blog" },
  description: "Practitioner analysis of enterprise technology decisions — SAP modernization, cloud operating models, data foundations and applied AI.",
  openGraph: {
    title: "Blog | Ascendus",
    description: "Practitioner analysis of enterprise technology decisions — SAP modernization, cloud operating models, data foundations and applied AI.",
    url: "/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Blog",
};

export default function Page() {
  return <PageClient />;
}
