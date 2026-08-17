import { getArticleBySlug } from "@/components/Constants/Service/insightsData";
import ServiceInsightClient from "./ServiceInsightClient";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = getArticleBySlug(slug);

    if (!blog) {
        return { title: "Insight Not Found" };
    }

    const firstSectionText = (blog.sections?.[0]?.content || "").replace(/\s+/g, " ").trim();
    const description = firstSectionText
        ? `${firstSectionText.slice(0, 157)}${firstSectionText.length > 157 ? "..." : ""}`
        : `Read "${blog.title}" on the Ascendus blog.`;

    return {
        title: blog.title,
        description,
        alternates: {
            canonical: `/services/blog/${slug}`,
        },
        openGraph: {
            type: "article",
            title: blog.title,
            description,
            url: `/services/blog/${slug}`,
            authors: blog.author ? [blog.author] : undefined,
            images: blog.cover_image
                ? [{ url: blog.cover_image, width: 1200, height: 630, alt: blog.title }]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description,
            images: blog.cover_image ? [blog.cover_image] : undefined,
        },
    };
}

export default function ServiceInsightDetailPage() {
    return <ServiceInsightClient />;
}

