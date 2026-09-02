import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/intelligent-automation" },
  description: "Process discovery, RPA and workflow automation applied after the process itself has been corrected rather than before.",
  openGraph: {
    title: "Intelligent Process Automation Services | Ascendus",
    description: "Process discovery, RPA and workflow automation applied after the process itself has been corrected rather than before.",
    url: "/whatWeDo/intelligent-automation",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Intelligent Process Automation Services",
};

export default function Page() {
  return <PageClient />;
}
