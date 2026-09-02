import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <PageClient />;
}
