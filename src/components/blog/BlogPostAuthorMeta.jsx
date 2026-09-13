"use client";

import { Calendar, User } from "lucide-react";

export default function BlogPostAuthorMeta({ blog }) {
    return (
        <div className="lg:ml-[25%] lg:w-[75%] mt-12">
            <div className="border-t border-slate-200 pt-8">
                <div className="flex flex-wrap items-center gap-8">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-[#55595E]">
                                Author
                            </p>
                            <p className="font-normal text-[#2E3033]">
                                {blog.author}
                            </p>
                        </div>
                    </div>

                    {/* Published */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-[#55595E]">
                                Published
                            </p>
                            <p className="font-normal text-[#2E3033]">
                                {new Date(blog.publish_date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
