"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import roadmapBg from "@/assets/WhatWeDo/Business Advisory/Section12_Transformation_Roadmap_Bg.svg";

const STEPS = [
    { title: "Vision & Strategy Alignment", desc: "Anchor the roadmap in a shared vision so every initiative ladders up to the same business strategy." },
    { title: "Initiative Prioritization", desc: "Rank strategic initiatives by impact and feasibility so effort goes where it moves the business forward." },
    { title: "Investment Planning", desc: "Sequence funding and resources against priorities to keep the roadmap realistic and fundable." },
    { title: "Implementation Timeline", desc: "Break the roadmap into phased milestones with clear owners and dependencies." },
    { title: "Risk Assessment", desc: "Surface transformation risks early and build mitigation plans into every phase." },
];

export default function TransformationRoadmap() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="w-full py-10 sm:py-16 flex flex-col items-center gap-8 sm:gap-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[841px] text-center px-6"
            >
                <h2 className="text-black text-2xl font-normal">Transformation Roadmap</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Develop a practical, phased roadmap that aligns strategic initiatives, technology investments,
                    and business priorities to achieve successful transformation.
                </p>
            </motion.div>

            {/* Mobile: stacked list — the 5-column banner is unreadable this narrow */}
            <div className="flex sm:hidden w-full flex-col gap-3 px-6">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-4 rounded-[10px] bg-[#f0f0f0] px-5 py-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-medium text-white">
                            {index + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-black text-base font-medium">{step.title}</p>
                            <p className="text-[#515151] text-sm font-light leading-snug">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: horizontal image banner with a highlighted active step on hover */}
            <div className="relative hidden sm:block w-full h-[544px] overflow-hidden">
                <Image src={roadmapBg} alt="" fill className="object-cover" />
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: "linear-gradient(to bottom, rgba(102,102,102,0) 0%, rgba(0,0,0,0.77) 85.6%)" }}
                />

                <div className="absolute inset-0 flex">
                    {STEPS.map((step, index) => {
                        const isHovered = index === hoveredIndex;
                        return (
                            <div
                                key={step.title}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`relative flex-1 flex flex-col items-center justify-center gap-5 px-4 text-center transition-colors duration-300 ${
                                    isHovered ? "bg-black/53 cursor-pointer" : "cursor-pointer"
                                }`}
                            >
                                <p className="text-white text-xl font-medium">{step.title}</p>
                                {isHovered && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white text-base font-light leading-snug max-w-[240px]"
                                    >
                                        {step.desc}
                                    </motion.p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
