import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/digital-engineering" },
  description: "Modernizing and building enterprise applications, APIs and integration layers where legacy architecture has become the constraint.",
  openGraph: {
    title: "Application Modernization and Digital Engineering | Ascendus",
    description: "Modernizing and building enterprise applications, APIs and integration layers where legacy architecture has become the constraint.",
    url: "/whatWeDo/digital-engineering",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Application Modernization and Digital Engineering",
};

export default function Page() {
  return <PageClient />;
}
