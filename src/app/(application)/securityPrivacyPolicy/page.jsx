import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/securityPrivacyPolicy" },
  description: "The technical and organizational controls Ascendus applies to protect data confidentiality, integrity and availability across its systems.",
  title: "Security and Privacy Policy",
};

export default function Page() {
  return <PageClient />;
}
