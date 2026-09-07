"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

export default function BlogPostMobileTOC({
    sections,
    activeSectionId,
    activeHeadingName,
    isDropdownOpen,
    setIsDropdownOpen,
    scrollDirection,
    scrollToSection,
}) {
    return (
        <div className={`lg:hidden sticky z-40 transition-all duration-300 ${scrollDirection === 'down' ? 'top-0' : 'top-[64px]'} border-b border-slate-200 dark:border-neutral-850 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-sm`}>
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex justify-between items-center text-sm font-bold text-slate-800 dark:text-white cursor-pointer"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-blue-500 font-semibold">📑</span>
                        {activeHeadingName || "Table of Contents"}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 dark:border-neutral-850 shadow-xl overflow-hidden py-3 z-50 flex flex-col gap-1 max-h-[300px] overflow-y-auto"
                        >
                            {sections.map((sec, idx) => {
                                const targetId = `section-${idx}`;
                                const isActive = activeSectionId === targetId;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            scrollToSection(targetId);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`flex items-center justify-between px-6 py-2.5 text-left text-sm transition-colors cursor-pointer ${isActive
                                            ? "text-[#0061AF] bg-blue-50/50 dark:bg-blue-900/10 font-semibold"
                                            : "text-slate-655 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-neutral-800"
                                            }`}
                                    >
                                        <span>{sec.heading}</span>
                                        {isActive && <Check className="w-4 h-4 text-[#0061AF]" />}
                                    </button>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
