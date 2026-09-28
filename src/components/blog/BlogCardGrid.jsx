"use client";

import { ArrowRight } from "lucide-react";

// Same card tokens as InsightsListing: rounded-[12px] corners, the
// #0061af / #0e2b4b / #415773 palette, font-medium headings.
export default function BlogCardGrid({ blogs, loading, onCardClick, onWriteFirstPost }) {
    if (loading) {
        return (
            <div className="flex items-center justify-center py-40">
                <div className="size-12 animate-spin rounded-full border-4 border-[#0061af]/20 border-t-[#0061af]" />
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div className="rounded-[12px] border border-dashed border-[#c9d0d8] bg-white p-8 py-40 text-center">
                <p className="text-base text-[#415773] sm:text-lg">
                    No blog posts found. Please check back soon.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <article
                    key={blog.id}
                    onClick={() => onCardClick(blog)}
                    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[12px] border border-[#c9d0d8] bg-white transition-shadow duration-300 hover:shadow-[0px_12px_30px_rgba(10,58,82,0.12)]"
                >
                    <div className="relative h-56 w-full overflow-hidden">
                        <img
                            src={blog.cover_image}
                            alt={blog.title}
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-1 flex-col gap-2 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.7px] text-[#0061af]">
                            By {blog.author}
                        </p>
                        <h3 className="line-clamp-2 min-h-[42px] text-lg font-medium leading-[1.2] text-[#0e2b4b]">
                            {blog.title}
                        </h3>

                        <div className="mt-4 mt-auto flex items-center justify-between border-t border-[#e2e8f0] pt-4">
                            <span className="text-xs text-[#7c8a9c]">
                                {new Date(blog.publish_date).toLocaleDateString("en-US", {
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
    );
}
