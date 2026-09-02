import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/case-studies" },
  description: "Documented delivery evidence from enterprise technology programs, published with the client's approval and a stated measurement basis.",
  title: "Client Outcomes and Case Studies",
};

export default function Page() {
  return <PageClient />;
}
