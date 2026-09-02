import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/blog" },
  description: "Practitioner analysis of enterprise technology decisions — SAP modernization, cloud operating models, data foundations and applied AI.",
  title: "Blog",
};

export default function Page() {
  return <PageClient />;
}
