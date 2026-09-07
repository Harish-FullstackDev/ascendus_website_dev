"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { supabase } from "@/lib/supabaseClient";
import AuthorsSection from "@/components/blog/author";
import Hero from "@/components/blog/Hero";
import HeroText from "@/components/blog/HeroText";
import BlogCardGrid from "@/components/blog/BlogCardGrid";
import BlogCreationModal from "@/components/blog/BlogCreationModal";
import { staticBlogsData } from "@/data/blogsData";

export default function BlogPage() {
    const router = useRouter();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form states
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [sections, setSections] = useState([
        { id: 1, heading: "", content: "", showImage: false, imageFile: null, imagePreview: null, caption: "" }
    ]);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            const { data } = await supabase
                .from("blogs")
                .select("author");

            const uniqueAuthors = [...new Set(data.map(item => item.author))];
            setAuthors(uniqueAuthors);
        };

        fetchAuthors();
    }, []);

    // Fetch blogs: prepend static entries, then append DB posts
    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .order("publish_date", { ascending: false });

            if (error) {
                throw error;
            }

            // Merge: static blogs first (newest first by publish_date), then DB posts
            const dbBlogs = data || [];
            const staticSlugs = new Set(staticBlogsData.map((b) => b.slug));
            const filteredDb = dbBlogs.filter((b) => !staticSlugs.has(b.slug));
            const merged = [...staticBlogsData, ...filteredDb];
            setBlogs(merged);
        } catch (err) {
            console.error("Error fetching blogs:", err.message);
            // Show static blogs even if Supabase fails
            setBlogs(staticBlogsData);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isFormOpen) setIsFormOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isFormOpen]);

    // Lock body scroll when form is open
    useEffect(() => {
        document.body.style.overflow = isFormOpen ? "hidden" : "unset";
    }, [isFormOpen]);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            if (!title.trim() || !author.trim() || !publishDate || !imageFile) {
                throw new Error("Title, Author, Publish Date, and Cover Image are required.");
            }

            // Verify each section has a heading and content
            for (let i = 0; i < sections.length; i++) {
                if (!sections[i].heading.trim() || !sections[i].content.trim()) {
                    throw new Error(`Section ${i + 1} must have a heading and content.`);
                }
            }

            const formData = new FormData();
            formData.append("title", title.trim());
            formData.append("author", author.trim());
            formData.append("publish_date", publishDate);
            formData.append("image", imageFile);

            // Construct sections array with file markers
            const sectionsData = sections.map((sec, idx) => {
                if (sec.showImage && sec.imageFile) {
                    const fileKey = `section_image_${idx}`;
                    formData.append(fileKey, sec.imageFile);
                    return {
                        heading: sec.heading.trim(),
                        content: sec.content.trim(),
                        image: fileKey,
                        caption: sec.caption.trim() || null
                    };
                } else {
                    return {
                        heading: sec.heading.trim(),
                        content: sec.content.trim(),
                        image: null,
                        caption: null
                    };
                }
            });

            formData.append("sections", JSON.stringify(sectionsData));

            const response = await fetch("/api/blog", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to publish blog.");
            }

            // Reload details smoothly
            await fetchBlogs();

            // Reset states & close modal
            setTitle("");
            setAuthor("");
            setPublishDate("");
            setSections([{ id: 1, heading: "", content: "", showImage: false, imageFile: null, imagePreview: null, caption: "" }]);
            setImageFile(null);
            setImagePreview(null);
            setIsFormOpen(false);
        } catch (err) {
            console.error(err);
            setError(err.message || "An unexpected error occurred during submission.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[340px] sm:-mt-[80vh] bg-white">
                <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12 md:py-20">
                    <BlogCardGrid
                        blogs={blogs}
                        loading={loading}
                        onCardClick={(blog) => router.push(`/blog/${blog.slug}`)}
                        onWriteFirstPost={() => setIsFormOpen(true)}
                    />
                </main>
            </div>

            <BlogCreationModal
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                title={title}
                setTitle={setTitle}
                author={author}
                setAuthor={setAuthor}
                publishDate={publishDate}
                setPublishDate={setPublishDate}
                sections={sections}
                setSections={setSections}
                imagePreview={imagePreview}
                setImageFile={setImageFile}
                setImagePreview={setImagePreview}
                onImageChange={handleImageChange}
                isSubmitting={isSubmitting}
                error={error}
                onSubmit={handleFormSubmit}
            />

            <section>
                <AuthorsSection authors={authors} />
            </section>
            <Footer />
        </div>
    );
}
