"use client";

import React, { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import StickyHero from "@/components/CommonComponents/StickyHero";
import Hero from "@/components/Insights/Hero";
import HeroText from "@/components/Insights/HeroText";

// Shared listing page for Case Studies, SAP Insights, Industry Insights and
// Whitepapers. The hero is the same sticky curtain as /services/, /solutions/,
// /partnership/, /industries/ and /contact-us/, and the cards below follow the
// same design tokens as those pages: rounded-[12px] corners, the #0061af /
// #0e2b4b / #415773 palette, and font-medium headings rather than font-bold.
export default function InsightsListing({
    items,
    basePath,
    backgroundImage,
    subtitle,
    title,
    description,
    emptyStateText = "No entries found yet. Please check back soon.",
    loading = false,
}) {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
        const unique = [...new Set(items.map((item) => item.category))];
        return ["All", ...unique];
    }, [items]);

    const filteredItems = useMemo(() => {
        if (activeCategory === "All") return items;
        return items.filter((item) => item.category === activeCategory);
    }, [items, activeCategory]);

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero
                background={<Hero backgroundImage={backgroundImage} />}
                overlay={<HeroText subtitle={subtitle} title={title} description={description} />}
            >
                <main className="w-full px-6 py-10 sm:px-[64px] sm:py-16">
                    {categories.length > 1 && (
                        <div className="mb-10 flex flex-wrap gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCategory(cat)}
                                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                                        activeCategory === cat
                                            ? "border-[#0061af] bg-[#0061af] text-white"
                                            : "border-[#c9d0d8] bg-white text-[#415773] hover:border-[#0061af] hover:text-[#0061af]"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {loading ? (
                        <div className="flex items-center justify-center py-40">
                            <div className="size-12 animate-spin rounded-full border-4 border-[#0061af]/20 border-t-[#0061af]" />
                        </div>
                    ) : filteredItems.length === 0 ? (
                        <div className="rounded-[12px] border border-dashed border-[#c9d0d8] bg-white p-8 py-40 text-center">
                            <p className="text-base text-[#415773] sm:text-lg">{emptyStateText}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredItems.map((item) => (
                                <article
                                    key={item.id}
                                    onClick={() => router.push(`${basePath}/${item.slug}`)}
                                    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[12px] border border-[#c9d0d8] bg-white transition-shadow duration-300 hover:shadow-[0px_12px_30px_rgba(10,58,82,0.12)]"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img
                                            src={item.cover_image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col gap-2 p-6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.7px] text-[#0061af]">
                                            {item.category}
                                        </p>
                                        <h3 className="line-clamp-2 text-lg font-medium leading-[1.2] text-[#0e2b4b]">
                                            {item.title}
                                        </h3>
                                        <p className="line-clamp-2 text-sm font-normal leading-[1.5] text-[#415773]">
                                            {item.summary}
                                        </p>

                                        <div className="mt-4 mt-auto flex items-center justify-between border-t border-[#e2e8f0] pt-4">
                                            <span className="text-xs text-[#7c8a9c]">
                                                {new Date(item.publish_date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </span>
                                            <span className="flex size-8 items-center justify-center rounded-full border border-[#0061af] text-[#0061af] transition-transform duration-300 group-hover:translate-x-0.5">
                                                <ArrowRight className="size-4" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </main>
            </StickyHero>

            <Footer />
        </div>
    );
}
