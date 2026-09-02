import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whitepapers" },
  description: "Research and reference material on enterprise SAP, cloud and AI decisions. Published only once an asset exists — check back as the library grows.",
  openGraph: {
    title: "Whitepapers | Ascendus",
    description: "Research and reference material on enterprise SAP, cloud and AI decisions. Published only once an asset exists — check back as the library grows.",
    url: "/whitepapers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Whitepapers",
};

export default function Page() {
  return <PageClient />;
}
