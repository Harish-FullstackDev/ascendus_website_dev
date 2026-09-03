import InsightDetail from "@/components/Insights/InsightDetail";
import { getCaseStudyBySlug } from "@/lib/caseStudies";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudyBySlug(slug);

    if (!caseStudy) {
        return { title: "Case Study Not Found" };
    }

    return {
        title: caseStudy.title,
        description: caseStudy.summary,
        alternates: {
            canonical: `/case-studies/${slug}/`,
        },
        openGraph: {
            type: "article",
            title: caseStudy.title,
            description: caseStudy.summary,
            url: `/case-studies/${slug}/`,
            authors: caseStudy.author ? [caseStudy.author] : undefined,
            images: caseStudy.cover_image
                ? [{ url: caseStudy.cover_image, width: 1200, height: 630, alt: caseStudy.title }]
                : undefined,
        },
    };
}

export default async function CaseStudyDetailPage({ params }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudyBySlug(slug);

    return (
        <InsightDetail item={caseStudy} basePath="/case-studies" backLabel="Back to Case Studies" />
    );
}
