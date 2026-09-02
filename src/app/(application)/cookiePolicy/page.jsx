import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/cookiePolicy" },
  description: "How Ascendus uses cookies and similar technologies on this site, what each category does, and how to manage your preferences.",
  openGraph: {
    title: "Cookie Policy | Ascendus",
    description: "How Ascendus uses cookies and similar technologies on this site, what each category does, and how to manage your preferences.",
    url: "/cookiePolicy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Cookie Policy",
};

export default function Page() {
  return <PageClient />;
}
