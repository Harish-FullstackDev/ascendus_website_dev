import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/customer-experience" },
  description: "CRM architecture, Salesforce delivery and omnichannel journeys designed so customer context survives every handoff.",
  openGraph: {
    title: "CRM and Customer Experience Technology | Ascendus",
    description: "CRM architecture, Salesforce delivery and omnichannel journeys designed so customer context survives every handoff.",
    url: "/whatWeDo/customer-experience",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "CRM and Customer Experience Technology",
};

export default function Page() {
  return <PageClient />;
}
