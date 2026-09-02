import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/trustcenter" },
  description: "Security practices, data protection commitments and compliance posture — the reference point for a procurement or security review.",
  openGraph: {
    title: "Trust Center | Ascendus",
    description: "Security practices, data protection commitments and compliance posture — the reference point for a procurement or security review.",
    url: "/trustcenter",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Trust Center",
};

export default function Page() {
  return <PageClient />;
}
