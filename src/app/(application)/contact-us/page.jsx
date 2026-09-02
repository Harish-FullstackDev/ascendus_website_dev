import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/contact-us" },
  description: "Route your enquiry to the right team — new engagements, existing clients, partnerships, careers or media — with a stated response time.",
  openGraph: {
    title: "Contact Ascendus",
    description: "Route your enquiry to the right team — new engagements, existing clients, partnerships, careers or media — with a stated response time.",
    url: "/contact-us",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: { absolute: "Contact Ascendus" },
};

export default function Page() {
  return <PageClient />;
}
