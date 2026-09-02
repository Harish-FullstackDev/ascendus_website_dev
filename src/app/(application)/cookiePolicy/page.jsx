import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/cookiePolicy" },
  description: "How Ascendus uses cookies and similar technologies on this site, what each category does, and how to manage your preferences.",
  title: "Cookie Policy",
};

export default function Page() {
  return <PageClient />;
}
