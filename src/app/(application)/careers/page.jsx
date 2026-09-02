import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/careers" },
  description: "Engineering, SAP, cloud, data and delivery roles at Ascendus, with the employing entity and work location stated on every posting.",
  title: { absolute: "Careers at Ascendus" },
};

export default function Page() {
  return <PageClient />;
}
