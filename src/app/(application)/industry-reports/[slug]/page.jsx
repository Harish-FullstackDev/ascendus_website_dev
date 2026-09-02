import InsightDetail from "@/components/Insights/InsightDetail";
import { industryReportsData, getIndustryReportBySlug } from "@/data/industryReportsData";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const report = getIndustryReportBySlug(slug);

    if (!report) {
        return { title: "Industry Report Not Found" };
    }

    return {
        title: report.title,
        description: report.summary,
        alternates: {
            canonical: `/industry-reports/${slug}`,
        },
        openGraph: {
            type: "article",
            title: report.title,
            description: report.summary,
            url: `/industry-reports/${slug}`,
            authors: report.author ? [report.author] : undefined,
            images: report.cover_image
                ? [{ url: report.cover_image, width: 1200, height: 630, alt: report.title }]
                : undefined,
        },
    };
}

export function generateStaticParams() {
    return industryReportsData.map((item) => ({ slug: item.slug }));
}

export default async function IndustryReportDetailPage({ params }) {
    const { slug } = await params;
    const report = getIndustryReportBySlug(slug);

    return (
        <InsightDetail item={report} basePath="/industry-reports" backLabel="Back to Industry Reports" />
    );
}
