import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whitepapers" },
  description: "Research and reference material on enterprise SAP, cloud and AI decisions. Published only once an asset exists — check back as the library grows.",
  title: "Whitepapers",
};

export default function Page() {
  return <PageClient />;
}
