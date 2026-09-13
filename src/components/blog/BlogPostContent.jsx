"use client";

import ReactMarkdown from "react-markdown";

export default function BlogPostContent({ sections }) {
    return (
        <div className="lg:col-span-9 space-y-12">
            {sections.map((sec, idx) => (
                <section key={idx} className="space-y-4 border-b border-slate-100 pb-8 last:border-none last:pb-0">
                    <h2
                        id={`section-${idx}`}
                        className="text-[#2E3033] text-2xl md:text-2xl font-semibold scroll-mt-28 pt-2"
                    >
                        {sec.heading}
                    </h2>
                    <div className="text-[#55595E] text-base md:text-lg leading-relaxed whitespace-pre-wrap font-light [&_strong]:font-bold">
                        <ReactMarkdown>{sec.content}</ReactMarkdown>
                    </div>
                    {sec.image && (
                        <div className="my-6 space-y-2">
                            <div className="flex justify-center">
                                <div className="inline-flex rounded-none overflow-hidden border border-slate-200 shadow-md bg-neutral-100 p-2.5">
                                    <img
                                        src={sec.image}
                                        alt={sec.caption || sec.heading}
                                        className="block max-h-[350px] w-auto object-contain rounded-none"
                                    />
                                </div>
                            </div>
                            {sec.caption && (
                                <p className="text-center text-xs md:text-sm text-[#55595E] font-light">
                                    {sec.caption}
                                </p>
                            )}
                        </div>
                    )}
                </section>
            ))}
        </div>
    );
}
