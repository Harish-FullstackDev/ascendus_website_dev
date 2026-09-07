"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { supabase } from "@/lib/supabaseClient";
import { getStaticBlogBySlug } from "@/data/blogsData";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostMobileTOC from "@/components/blog/BlogPostMobileTOC";
import BlogPostSidebarTOC from "@/components/blog/BlogPostSidebarTOC";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostAuthorMeta from "@/components/blog/BlogPostAuthorMeta";

export default function BlogPostClient() {
    const params = useParams();
    const slug = params.slug;

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [activeSectionId, setActiveSectionId] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [copied, setCopied] = useState(false);

    // Fetch blog post – static first, then Supabase fallback
    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                setLoading(true);

                // 1. Check static data first
                const staticBlog = getStaticBlogBySlug(slug);
                if (staticBlog) {
                    setBlog(staticBlog);
                    if (staticBlog.sections?.length > 0) {
                        setActiveSectionId("section-0");
                    }
                    return;
                }

                // 2. Fall back to Supabase for DB-backed posts
                const { data, error: fetchError } = await supabase
                    .from("blogs")
                    .select("*")
                    .eq("slug", slug)
                    .single();

                if (fetchError) {
                    throw fetchError;
                }

                if (!data) {
                    throw new Error("Post not found");
                }

                setBlog(data);

                // Set initial active section
                if (data.sections && data.sections.length > 0) {
                    setActiveSectionId("section-0");
                }
            } catch (err) {
                console.error("Error fetching blog post:", err.message);
                setError(err.message || "Could not load the requested article.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchBlogPost();
        }
    }, [slug]);


    // Scroll Direction Tracking (to adjust mobile sticky TOC bar relative to sliding Navbar)
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY <= 10) {
                setScrollDirection("up");
                return;
            }
            if (currentScrollY - lastScrollY > 10) {
                setScrollDirection("down");
            } else if (currentScrollY - lastScrollY < -10) {
                setScrollDirection("up");
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // IntersectionObserver Scroll Spy
    useEffect(() => {
        if (!blog?.sections?.length) return;

        const handleScroll = () => {
            const headings = document.querySelectorAll("[id^='section-']");

            const OFFSET =
                window.innerWidth >= 1024
                    ? window.innerHeight * 0.25 // 25% down the screen
                    : 170;

            let active = "section-0";

            headings.forEach((heading) => {
                const rect = heading.getBoundingClientRect();

                if (rect.top <= OFFSET) {
                    active = heading.id;
                }
            });

            setActiveSectionId((prev) =>
                prev === active ? prev : active
            );
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, [blog]);

    // Scroll helper with exact offset for sticky header components
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = window.innerWidth >= 1024 ? 100 : 130;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const getShareUrl = () => window.location.href;

    // Copy Share Link
    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(getShareUrl());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Share via Email
    const handleShareEmail = () => {
        if (typeof window === "undefined") return;
        const subject = encodeURIComponent(blog?.title || "Check out this article");
        const body = encodeURIComponent(getShareUrl());
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    // Share on WhatsApp
    const handleShareWhatsApp = () => {
        if (typeof window === "undefined") return;
        const text = encodeURIComponent(getShareUrl());
        window.open(
            `https://wa.me/?text=${text}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    // Share on LinkedIn
    const handleShareLinkedIn = () => {
        if (typeof window === "undefined") return;
        const text = encodeURIComponent(getShareUrl());
        window.open(
            `https://www.linkedin.com/feed/?shareActive=true&text=${text}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 flex flex-col font-sans">
                <Navbar />
                <div className="flex-grow flex items-center justify-center py-40">
                    <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 flex flex-col font-sans">
                <Navbar />
                <div className="flex-grow flex flex-col items-center justify-center py-40 px-6 text-center">
                    <h1 className="text-2xl font-black text-slate-800 dark:text-white mb-4">
                        Article Not Found
                    </h1>
                    <p className="text-slate-500 dark:text-neutral-400 mb-8 max-w-md">
                        The article you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-md"
                    >
                        <ArrowLeft className="w-5 h-5" /> Back to Blogs
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const sections = blog.sections || [];
    const activeSectionIndex = parseInt(activeSectionId.replace("section-", "")) || 0;
    const activeHeadingName = sections[activeSectionIndex]?.heading;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">
            <Navbar />

            <BlogPostHero
                blog={blog}
                copied={copied}
                onShare={handleShare}
                onShareEmail={handleShareEmail}
                onShareWhatsApp={handleShareWhatsApp}
                onShareLinkedIn={handleShareLinkedIn}
            />

            <BlogPostMobileTOC
                sections={sections}
                activeSectionId={activeSectionId}
                activeHeadingName={activeHeadingName}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                scrollDirection={scrollDirection}
                scrollToSection={scrollToSection}
            />

            {/* Content & TOC Grid */}
            <main className="flex-grow w-full px-16 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <BlogPostSidebarTOC
                        sections={sections}
                        activeSectionId={activeSectionId}
                        scrollToSection={scrollToSection}
                    />
                    <BlogPostContent sections={sections} />
                </div>

                {/* Author Section - Outside Grid */}
                <BlogPostAuthorMeta blog={blog} />
            </main>
            <Footer />
        </div>
    );
}
