"use client";

import { ArrowRight, Plus } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function BlogCardGrid({ blogs, loading, onCardClick, onWriteFirstPost }) {
    if (loading) {
        return (
            <div className="flex items-center justify-center py-40">
                <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div className="text-center py-40 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-white">
                <p className="text-[#55595E] font-light text-lg mb-6">
                    No blog posts found. Due too techenical issue
                </p>
                {/* <button
                    onClick={onWriteFirstPost}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Write First Post
                </button> */}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    onClick={() => onCardClick(blog)}
                    className="cursor-pointer h-full"
                >
                    <CardContainer
                        className="inter-var h-[491px]"
                        containerClassName="h-full py-0"
                    >
                        <CardBody className="bg-[#F5F6F6] p-6 border shadow-md hover:shadow-2xl flex flex-col h-full">

                            <div className="flex-1 my-7">
                                <div className="h-52 overflow-hidden">
                                    <img
                                        src={blog.cover_image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <CardItem
                                    translateZ="0"
                                    className="mt-4 text-lg font-semibold text-[#2E3033] line-clamp-2 min-h-[56px]"
                                >
                                    {blog.title}
                                </CardItem>

                                <CardItem
                                    translateZ="0"
                                    className="mt-3 text-xs uppercase tracking-wider text-[#0A3A52]"
                                >
                                    By {blog.author}
                                </CardItem>
                            </div>

                            <div className="mt-auto flex items-center justify-between border-t pt-4">
                                <CardItem translateZ={20} className="text-xs text-neutral-500">
                                    {new Date(blog.publish_date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </CardItem>

                                <CardItem
                                    translateZ={20}
                                    as="div"
                                    className="w-8 h-8 rounded-full border border-black bg-[#F5F6F6] flex items-center justify-center"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </CardItem>
                            </div>

                        </CardBody>
                    </CardContainer>
                </div>
            ))}
        </div>
    );
}
