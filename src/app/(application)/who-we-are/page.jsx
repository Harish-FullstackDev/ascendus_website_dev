import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/who-we-are" },
  description: "Who Ascendus is, how we are structured, where we deliver from, and what a client can independently verify before engaging us.",
  title: { absolute: "About Ascendus | Enterprise Technology Services" },
};

export default function Page() {
  return <PageClient />;
}
