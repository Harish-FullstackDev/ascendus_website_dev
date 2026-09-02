import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/privacyCommitment" },
  description: "The principles Ascendus follows when handling client and candidate data, and how those principles are enforced in practice.",
  title: "Our Privacy Commitment",
};

export default function Page() {
  return <PageClient />;
}
