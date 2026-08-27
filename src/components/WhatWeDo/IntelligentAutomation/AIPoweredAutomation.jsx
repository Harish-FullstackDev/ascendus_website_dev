"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import bannerBg from "@/assets/WhatWeDo/Intelligent Automation/Section10_Bg.svg";
import leftArrow from "@/assets/WhatWeDo/Intelligent Automation/icons/Left-arrow.svg";
import rightArrow from "@/assets/WhatWeDo/Intelligent Automation/icons/Right-arrow.svg";

const SLIDES = [
    {
        title: "AI Decision Support",
        subtitle: "Smarter Automation Through Artificial Intelligence",
        desc: "Enhance automation with AI capabilities that understand language, interpret data, learn from patterns, and make intelligent recommendations.",
    },
    {
        title: "Intelligent Process Discovery",
        subtitle: "Let AI Find the Automation Opportunities",
        desc: "Use machine learning to continuously surface new candidates for automation as your processes evolve.",
    },
    {
        title: "Adaptive Workflow Optimization",
        subtitle: "Workflows That Improve Themselves",
        desc: "Let AI monitor outcomes and fine-tune automated workflows over time without manual reconfiguration.",
    },
];

export default function AIPoweredAutomation() {
    const [active, setActive] = useState(0);
    const step = (dir) => setActive((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
    const slide = SLIDES[active];

    return (
        <section className="w-full py-10 sm:py-16 flex flex-col items-center gap-8 sm:gap-[35px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[736px] text-center px-6"
            >
                <h2 className="text-black text-2xl font-normal">AI-Powered Automation</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Layer artificial intelligence into your automation stack to make smarter, faster decisions.
                </p>
            </motion.div>

            <div className="relative w-full h-[420px] sm:h-[556px] overflow-hidden">
                <Image src={bannerBg} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                
                <div className="relative z-10 h-full flex items-center justify-center gap-4 sm:gap-[17px] px-4 sm:px-[186px]">
                    {/* Left arrow */}
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => step(-1)}
                        className="shrink-0 text-white text-2xl sm:text-3xl hover:text-[#2d8ec5] transition-colors -translate-x-0 sm:-translate-x-20"
                    >
                        <Image src={leftArrow} alt="" width={32} height={32} />
                    </button>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center gap-6 sm:gap-8 text-center text-white max-w-[776px]"
                        >
                            <p className="text-2xl sm:text-[32px] font-semibold">{slide.title}</p>
                            <p className="text-lg sm:text-2xl font-semibold">{slide.subtitle}</p>
                            <p className="text-base sm:text-2xl font-light max-w-[598px]">{slide.desc}</p>
                        </motion.div>
                    </AnimatePresence>
                    {/* Right arrow */}
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => step(1)}
                        className="shrink-0 text-white text-2xl sm:text-3xl hover:text-[#2d8ec5] transition-colors translate-x-0 sm:translate-x-20"
                    >
                        <Image src={rightArrow} alt="" width={32} height={32} />
                    </button>
                </div>
            </div>
        </section>
    );
}
