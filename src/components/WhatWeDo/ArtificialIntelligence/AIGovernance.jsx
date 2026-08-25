"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import governanceBg from "@/assets/WhatWeDo/Artificial Intelligence/Section12_AIGovernance_Bg.jpg";

const ITEMS = [
    {
        title: "Responsible AI Frameworks",
        desc: "Establish clear principles and guardrails for how AI is built, deployed, and used across the organization.",
    },
    {
        title: "AI Risk Management",
        desc: "Identify, assess, and mitigate risks across every model and AI-powered process before they impact the business.",
    },
    {
        title: "Model Transparency & Explainability",
        desc: "Make model decisions understandable and auditable so stakeholders can trust every recommendation.",
    },
    {
        title: "Data Privacy & Compliance",
        desc: "Keep AI initiatives aligned with data protection regulations and internal privacy standards at every stage.",
    },
    {
        title: "Bias Detection & Mitigation",
        desc: "Continuously test models for bias and fairness to ensure equitable outcomes across every user group.",
    },
];

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

export default function AIGovernance() {
    const [[index, direction], setPage] = useState([0, 1]);
    const maxIndex = ITEMS.length - 2;
    const active = ITEMS[index];
    const next = ITEMS[index + 1];

    const goTo = (nextIndex, dir) => setPage([Math.max(0, Math.min(maxIndex, nextIndex)), dir]);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[60px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">AI Governance</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Turn Data into Intelligent Decisions
                </p>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Build responsible AI practices that keep every model transparent, compliant, and accountable.
                </p>
            </motion.div>

            <div className="relative max-w-[1220px] mx-auto sm:h-[592px] sm:overflow-hidden">
                <div className="relative h-[680px] overflow-hidden sm:h-full sm:overflow-visible">
                    <div className="absolute inset-0 bg-[#5c5c5c] sm:w-1/2">
                        <Image src={governanceBg} alt="" fill className="object-cover" />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:justify-start sm:gap-[21px] sm:px-0 sm:pl-[25%]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-[21px]"
                            >
                                <div className="bg-[#0a2b3e] w-full sm:w-[380px] h-[280px] sm:h-[377px] p-6 sm:p-[27px] flex flex-col justify-center gap-4 sm:gap-6 text-white">
                                    <p className="text-sm sm:text-lg font-light">AI Governance</p>
                                    <p className="text-xl sm:text-2xl font-medium">{active.title}</p>
                                    <p className="text-[#ce9d9d] text-sm sm:text-base font-light leading-relaxed">
                                        {active.desc}
                                    </p>
                                </div>
                                <div className="bg-[#f1f1f1] w-full sm:w-[380px] h-[280px] sm:h-[377px] p-6 sm:p-[27px] flex flex-col justify-center gap-4 sm:gap-6 text-black">
                                    <p className="text-sm sm:text-lg font-light">AI Governance</p>
                                    <p className="text-xl sm:text-2xl font-medium">{next.title}</p>
                                    <p className="text-[#6c6c6c] text-sm sm:text-base font-light leading-relaxed">
                                        {next.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="relative mt-4 ml-auto mr-4 bg-[#f1f1f1] rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2 sm:absolute sm:mt-0 sm:mr-0 sm:right-0 sm:bottom-[0px]">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => goTo(index - 1, -1)}
                        disabled={index === 0}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border shrink-0 transition-transform hover:scale-110 ${index === 0 ? "border-[#a4a7a5] text-[#a4a7a5]" : "border-black text-black"
                            }`}
                    >
                        ←
                    </button>
                    <div className="flex items-center gap-[10px]">
                        {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
                            <button
                                key={dotIndex}
                                type="button"
                                aria-label={`Go to slide ${dotIndex + 1}`}
                                onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                                className={`size-[8px] rounded-full border-[0.5px] transition-colors ${dotIndex === index ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-black"
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => goTo(index + 1, 1)}
                        disabled={index === maxIndex}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border shrink-0 transition-transform hover:scale-110 ${index === maxIndex ? "border-[#a4a7a5] text-[#a4a7a5]" : "border-black text-black"
                            }`}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}

