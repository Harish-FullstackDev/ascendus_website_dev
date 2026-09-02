import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/bookacall" },
  description: "Book a working session with an architect or practice lead. Choose the consultation type and tell us what your estate looks like now.",
  openGraph: {
    title: "Book a Consultation | Ascendus",
    description: "Book a working session with an architect or practice lead. Choose the consultation type and tell us what your estate looks like now.",
    url: "/bookacall",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Book a Consultation",
};

export default function Page() {
  return <PageClient />;
}
