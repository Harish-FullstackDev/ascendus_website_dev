import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/contact-us" },
  description: "Route your enquiry to the right team — new engagements, existing clients, partnerships, careers or media — with a stated response time.",
  title: { absolute: "Contact Ascendus" },
};

export default function Page() {
  return <PageClient />;
}
