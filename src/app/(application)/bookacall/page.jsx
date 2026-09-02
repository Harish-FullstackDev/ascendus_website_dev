import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/bookacall" },
  description: "Book a working session with an architect or practice lead. Choose the consultation type and tell us what your estate looks like now.",
  title: "Book a Consultation",
};

export default function Page() {
  return <PageClient />;
}
