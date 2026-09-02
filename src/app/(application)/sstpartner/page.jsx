import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/sstpartner" },
  description: "Apply to the Ascendus partner program — the qualification criteria, engagement model and next steps for prospective partners.",
  openGraph: {
    title: "Partner Program | Ascendus",
    description: "Apply to the Ascendus partner program — the qualification criteria, engagement model and next steps for prospective partners.",
    url: "/sstpartner",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Partner Program",
};

export default function Page() {
  return <PageClient />;
}
