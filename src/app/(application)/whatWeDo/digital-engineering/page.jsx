import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/digital-engineering" },
  description: "Modernizing and building enterprise applications, APIs and integration layers where legacy architecture has become the constraint.",
  title: "Application Modernization and Digital Engineering",
};

export default function Page() {
  return <PageClient />;
}
