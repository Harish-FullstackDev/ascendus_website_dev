import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/who-we-are" },
};

export default function Page() {
  return <PageClient />;
}
