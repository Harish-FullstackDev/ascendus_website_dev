"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Check, Link2, Mail, User } from "lucide-react";

export default function BlogPostHero({ blog, copied, onShare, onShareEmail, onShareWhatsApp, onShareLinkedIn }) {
    return (
        <header className="w-full px-16 pt-12 md:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 md:border-b md:border-slate-200 md:dark:border-neutral-800">

                {/* Left: Meta Details */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-4 lg:pl-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-blue-500 transition-colors mb-2 sm:mb-5 self-start"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Blogs
                    </Link>
                    <p className="text-2xl md:text-2xl font-semibold sm:w-[93%]">
                        {blog.title}
                    </p>
                    <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-neutral-850 mt-6 text-slate-500 dark:text-neutral-400">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <User className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Author</span>
                                <span className=" font-normal  text-slate-800 text-sm">{blog.author}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Published</span>
                                <span className="font-normal text-slate-800 text-sm">
                                    {new Date(blog.publish_date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Share Section */}
                    <div className="flex items-center gap-4 pt-2">
                        <span className="text-sm font-bold text-slate-500 dark:text-neutral-400">
                            Share:
                        </span>
                        <div className="flex items-center gap-2.5">
                            <button
                                onClick={onShareEmail}
                                aria-label="Share via Email"
                                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-600 dark:bg-neutral-800 dark:text-neutral-300 flex items-center justify-center transition-colors cursor-pointer"
                            >
                                <Mail className="w-4 h-4" />
                            </button>
                            <button
                                onClick={onShareWhatsApp}
                                aria-label="Share on WhatsApp"
                                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-600 dark:bg-neutral-800 dark:text-neutral-300 flex items-center justify-center transition-colors cursor-pointer"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.909.532 3.694 1.455 5.215L2 22l4.918-1.397A9.955 9.955 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.093a8.05 8.05 0 0 1-4.116-1.128l-.295-.176-3.03.86.826-2.995-.192-.307A8.05 8.05 0 1 1 20.05 12a8.06 8.06 0 0 1-8.049 8.093z" />
                                </svg>
                            </button>
                            <button
                                onClick={onShareLinkedIn}
                                aria-label="Share on LinkedIn"
                                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-600 dark:bg-neutral-800 dark:text-neutral-300 flex items-center justify-center transition-colors cursor-pointer"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
                                </svg>
                            </button>
                            <button
                                onClick={onShare}
                                aria-label="Copy link"
                                className="relative w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-600 dark:bg-neutral-800 dark:text-neutral-300 flex items-center justify-center transition-colors cursor-pointer"
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right: Cover Image */}
                <div className="lg:col-span-6 flex justify-center">
                    <div className="inline-flex rounded-none overflow-hidden shadow-lg bg-neutral-100">
                        <img
                            src={blog.cover_image}
                            alt={blog.title}
                            className="block max-h-[250px] md:max-h-[400px] w-auto object-contain rounded-none"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
