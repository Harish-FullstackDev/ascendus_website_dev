import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

const description =
    "Move to SAP S/4HANA with a clear plan, a simpler landscape and a foundation your teams can build on — assessment, implementation, migration, integration, testing and run, delivered by one Ascendus team.";

export const metadata = {
    alternates: { canonical: "/sap-s4hana-transformation/" },
    description,
    openGraph: {
        title: "SAP S/4HANA Transformation | Your SAP Core Should Move Your Business Forward",
        description,
        url: "/sap-s4hana-transformation/",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
    },
    title: { absolute: "SAP S/4HANA Transformation | Your SAP Core Should Move Your Business Forward" },
};

export default function Page() {
    const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/sap-s4hana-transformation/"));

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PageClient />
        </>
    );
}
