import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/whatWeDo/business-advisory" },
  description: "Target-state architecture, roadmap and business-case work produced in a form delivery teams can actually execute.",
  openGraph: {
    title: "Business & Technology Advisory Services | Ascendus",
    description: "Target-state architecture, roadmap and business-case work produced in a form delivery teams can actually execute.",
    url: "/whatWeDo/business-advisory",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
  title: "Business & Technology Advisory Services",
};

export default function Page() {
  return <PageClient />;
}
