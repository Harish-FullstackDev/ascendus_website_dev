import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whitepapers" },
};

export default function Page() {
  return <PageClient />;
}
