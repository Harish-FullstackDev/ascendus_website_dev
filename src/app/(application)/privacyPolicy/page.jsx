import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/privacyPolicy" },
  description: "How Ascendus collects, uses, stores and protects personal data submitted through this site, and the rights available to you under applicable law.",
  title: "Privacy Policy",
};

export default function Page() {
  return <PageClient />;
}
