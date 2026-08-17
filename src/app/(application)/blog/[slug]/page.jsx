import { supabase } from "@/lib/supabaseClient";
import BlogPostClient from "./BlogPostClient";

const stripHtml = (value) => (value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const { data: blog } = await supabase
        .from("blogs")
        .select("title, author, cover_image, sections")
        .eq("slug", slug)
        .single();

    if (!blog) {
        return { title: "Article Not Found" };
    }

    const firstSectionText = stripHtml(blog.sections?.[0]?.content);
    const description = firstSectionText
        ? `${firstSectionText.slice(0, 157)}${firstSectionText.length > 157 ? "..." : ""}`
        : `Read "${blog.title}" on the Ascendus blog.`;

    return {
        title: blog.title,
        description,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            type: "article",
            title: blog.title,
            description,
            url: `/blog/${slug}`,
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

export default function BlogPostDetailPage() {
    return <BlogPostClient />;
}

