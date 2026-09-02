import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/managed-services" },
  description: "Managed operations covering incident and problem management, release support, service reporting and systematic root-cause elimination.",
  title: "Application Managed Services",
};

export default function Page() {
  return <PageClient />;
}
