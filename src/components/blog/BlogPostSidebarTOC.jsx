"use client";

import { motion } from "framer-motion";

export default function BlogPostSidebarTOC({ sections, activeSectionId, scrollToSection }) {
    return (
        <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Table of Contents
                </h3>
                <ul className="relative border-l border-slate-300 ml-2">
                    {sections.map((sec, idx) => {
                        const targetId = `section-${idx}`;
                        const isActive = activeSectionId === targetId;

                        return (
                            <li key={idx} className="relative">
                                <button
                                    onClick={() => scrollToSection(targetId)}
                                    className={`relative w-full pl-6 pr-2 py-4 text-left transition-colors duration-200 ${isActive
                                        ? "text-[#0061AF] font-semibold"
                                        : "text-slate-700 hover:text-slate-900"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="toc-indicator"
                                            className="absolute left-[-2px] top-0 h-full w-[3px] rounded-full bg-[#0061AF]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 450,
                                                damping: 35,
                                            }}
                                        />
                                    )}

                                    {sec.heading}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}
