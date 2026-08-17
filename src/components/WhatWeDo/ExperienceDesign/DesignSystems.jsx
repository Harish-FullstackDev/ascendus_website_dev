"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import bgPhoto from "@/assets/WhatWeDo/Experience Design/Section4_DesignSystems_Bg.jpg";

function ArrowIcon({ className }) {
    return (
        <svg viewBox="0 0 74 74" fill="none" className={className}>
            <path
                d="M37 61.4V12.3M18.4 30.7L37 12.3l18.6 18.4"
                stroke="currentColor"
                strokeWidth="4.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const ITEMS = [
    {
        tag: "Design Systems",
        title: "UI Component Libraries",
        desc: "Build the Next Generation of Digital Solutions. Reusable, well-documented components that let teams ship consistent interfaces faster without reinventing the wheel.",
    },
    {
        tag: "Design Systems",
        title: "Design Tokens & Theming",
        desc: "Centralized color, spacing, and typography tokens that keep every product on-brand and make light/dark theming effortless to maintain.",
    },
    {
        tag: "Design Systems",
        title: "Style Guide Documentation",
        desc: "Living documentation that pairs design intent with usage guidelines, keeping designers and engineers aligned as the system evolves.",
    },
    {
        tag: "Design Systems",
        title: "Accessibility Standards",
        desc: "Accessibility built into every component by default, so inclusive design is the baseline rather than an afterthought.",
    },
    {
        tag: "Design Systems",
        title: "Cross-Platform Consistency",
        desc: "One shared design language across web, mobile, and enterprise platforms for a seamless experience everywhere.",
    },
    {
        tag: "Design Systems",
        title: "Component Governance",
        desc: "Clear contribution and versioning guidelines that keep the design system scalable as more teams adopt it.",
    },
];

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

export default function DesignSystems() {
    const [[index, direction], setPage] = useState([0, 1]);
    const maxIndex = ITEMS.length - 2;
    const left = ITEMS[index];
    const right = ITEMS[index + 1];

    const goTo = (next, dir) => setPage([Math.max(0, Math.min(maxIndex, next)), dir]);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[42px]"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">Design Systems</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Scalable design systems that keep every product consistent, accessible, and easy to build on.
                </p>
            </motion.div>

            <div className="max-w-[1300px] mx-auto flex flex-col lg:relative lg:w-full lg:aspect-[1220/592]">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-[320px] sm:h-[420px]
                   lg:absolute lg:left-0 lg:top-0
                   lg:h-full lg:w-[49%]"
                >
                    <Image
                        src={bgPhoto}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Cards */}
                <div className="flex flex-col lg:contents">

                    {/* Blue Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-[#16171A]
                       w-full mt-6
                       lg:absolute
                       lg:left-[25%]
                       lg:top-[17%]
                       lg:w-[36%]
                       lg:h-[64%]
                       px-8 py-10"
                    >
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.45 }}
                                className="flex flex-col justify-between h-full"
                            >
                                <div>
                                    <p className="text-lg text-white font-light">
                                        {left.tag}
                                    </p>

                                    <h3 className="text-3xl font-medium text-white mt-6">
                                        {left.title}
                                    </h3>
                                </div>

                                <p className="text-[#d4d4d4] leading-8 text-base">
                                    {left.desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Grey Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: .1 }}
                        className="relative bg-[#F4F4F4]
                       w-full mt-5
                       lg:absolute
                       lg:left-[62%]
                       lg:top-[17%]
                       lg:w-[36%]
                       lg:h-[64%]
                       px-8 py-10"
                    >
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={`right-${index}`}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.45 }}
                                className="flex flex-col justify-between h-full"
                            >
                                <div>
                                    <p className="text-lg text-black font-light">
                                        {right.tag}
                                    </p>

                                    <h3 className="text-3xl font-medium text-black mt-6">
                                        {right.title}
                                    </h3>
                                </div>

                                <p className="text-[#666] leading-8 text-base">
                                    {right.desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                </div>

            </div>


            <div className="flex justify-center md:justify-end md:-mt-8">
                <div className="bg-[#141C22] border border-[#141C22] rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2">

                    {/* Previous */}
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => goTo(index - 1, -1)}
                        disabled={index === 0}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px]
                rounded-full border transition-all duration-300 shrink-0
                ${index === 0
                                ? "border-[#666] text-[#666] cursor-not-allowed"
                                : "border-white text-white hover:bg-white hover:text-black hover:border-black"
                            }`}
                    >
                        ←
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-[10px]">
                        {ITEMS.slice(0, maxIndex + 1).map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                type="button"
                                aria-label={`Go to slide ${dotIndex + 1}`}
                                onClick={() =>
                                    goTo(dotIndex, dotIndex > index ? 1 : -1)
                                }
                                className={`size-[8px] rounded-full border transition-colors duration-300 ${dotIndex === index
                                    ? "bg-[#0061AF] border-[#0061AF]"
                                    : "border-white"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => goTo(index + 1, 1)}
                        disabled={index === maxIndex}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px]
                rounded-full border transition-all duration-300 shrink-0
                ${index === maxIndex
                                ? "border-[#666] text-[#666] cursor-not-allowed"
                                : "border-white text-white hover:bg-white hover:text-black hover:border-black"
                            }`}
                    >
                        →
                    </button>
                </div>
            </div>

        </section >
    );
}
