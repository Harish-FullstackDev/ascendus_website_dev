import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/trustcenter" },
  description: "Security practices, data protection commitments and compliance posture — the reference point for a procurement or security review.",
  title: "Trust Center",
};

export default function Page() {
  return <PageClient />;
}
