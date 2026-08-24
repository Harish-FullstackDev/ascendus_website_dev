"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import highlightBg from "@/assets/WhatWeDo/Experience Design/Section7_UserResearch_Bg.png";

const COLUMNS = [
    {
        title: "Service Design",
        items: ["We design the end-to-end service experience, not just the interface, across every touchpoint."],
    },
    {
        title: "Prototyping",
        items: ["Interactive prototypes that let you test and validate design decisions before development begins."],
    },
    {
        title: "Accessibility",
        items: ["Design that meets accessibility standards, so every user can engage with your platform"],
    },
    {
        title: "Interaction Design",
        items: ["Micro-interactions and flows designed to make digital products feel responsive and intuitive."],
    },
];

export default function SpecializedDesignDisciplines() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-10 sm:pb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 w-full mx-auto text-center mb-10 sm:mb-16 px-6"
            >
                <h2 className="text-[#16171A] text-2xl sm:text-[40px] leading-tight">
                    Specialized Design Disciplines
                </h2>
                <p className="text-[#3D3D4E] text-base sm:text-lg font-light">
                    Additional services including service design, prototyping, and accessibility.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 w-full mx-auto">
                {COLUMNS.map((col, index) => (
                    <motion.div
                        key={col.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className={`group relative px-6 sm:px-8 py-8 sm:py-10 min-h-[380px] sm:min-h-[480px] overflow-hidden text-black transition-colors duration-300 hover:text-white flex items-center
                                /* Mobile */
                                border border-[#8794A3] 
                                border-l-0
                                ${index > 1 ? "border-t-0" : ""}

                                /* Desktop */
                                lg:border-t
                                lg:border-b
                                lg:border-r
                                lg:border-l-0
                                ${index === 3 ? "lg:border-r-0" : ""}`}
                    >
                        <div
                            aria-hidden
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            <div className="absolute inset-0 bg-[#16171a]/90" />
                        </div>
                        <div className="relative flex flex-col gap-8 sm:gap-10 text-left">
                            <p className="text-2xl sm:text-[32px] font-light">{col.title}</p>
                            <div className="flex flex-col gap-2 text-sm sm:text-lg font-light">
                                {col.items.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
