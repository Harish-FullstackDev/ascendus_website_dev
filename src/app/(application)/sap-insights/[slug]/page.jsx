import InsightDetail from "@/components/Insights/InsightDetail";
import { sapInsightsData, getSapInsightBySlug } from "@/data/sapInsightsData";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const insight = getSapInsightBySlug(slug);

    if (!insight) {
        return { title: "SAP Insight Not Found" };
    }

    return {
        title: insight.title,
        description: insight.summary,
        alternates: {
            canonical: `/sap-insights/${slug}/`,
        },
        openGraph: {
            type: "article",
            title: insight.title,
            description: insight.summary,
            url: `/sap-insights/${slug}/`,
            authors: insight.author ? [insight.author] : undefined,
            images: insight.cover_image
                ? [{ url: insight.cover_image, width: 1200, height: 630, alt: insight.title }]
                : undefined,
        },
    };
}

export function generateStaticParams() {
    return sapInsightsData.map((item) => ({ slug: item.slug }));
}

export default async function SapInsightDetailPage({ params }) {
    const { slug } = await params;
    const insight = getSapInsightBySlug(slug);

    return (
        <InsightDetail item={insight} basePath="/sap-insights" backLabel="Back to SAP Insights" />
    );
}
