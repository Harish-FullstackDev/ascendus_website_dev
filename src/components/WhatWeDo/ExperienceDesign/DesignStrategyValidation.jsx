"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/WhatWeDo/Experience Design/icons/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "Experience Strategy",
        desc: "We translate business goals, user expectations, and product requirements into a clear experience strategy that defines priorities, opportunities, and the overall direction of the digital experience.",
    },
    {
        title: "User & Business Research",
        desc: "We study user behaviours, needs, pain points, and expectations while understanding business objectives, market conditions, and product requirements to identify meaningful design opportunities.",
    },
    {
        title: "Experience Prioritization",
        desc: "We identify the most important experience challenges and prioritize improvements based on user impact, business value, technical feasibility, and product priorities.",
    },
    {
        title: "Concept Validation",
        desc: "We turn ideas into prototypes and test them with users to understand what works, identify gaps, and validate concepts before significant development effort is invested.",
    },
    {
        title: "Usability Evaluation",
        desc: "We evaluate key user journeys and workflows to uncover usability issues, friction points, navigation problems, and interaction challenges that may affect the overall product experience.",
    },
    {
        title: "Design Decision Support",
        desc: "We use research findings, usability insights, user feedback, and product data to support design decisions and ensure that solutions are based on evidence rather than assumptions.",
    },
    {
        title: "Continuous Optimization",
        desc: "We continuously learn from user feedback, testing, and product performance to refine existing experiences, improve usability, and create better digital products over time.",
    },
];

export default function DesignStrategyValidation() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full py-8 sm:py-10 lg:py-[64px] px-6 sm:px-[64px] flex flex-col items-center gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center w-full"
            >
                <h2 className="text-[#2E3033] text-[28px] font-semibold">Design Strategy &amp; Validation</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Research-led design capabilities that connect user needs, business objectives, and digital
                    product requirements.
                </p>
            </motion.div>

            <div className="flex flex-col items-start w-full">
                {ITEMS.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                            <button
                                type="button"
                                onClick={() => handleClick(index)}
                                className="flex w-full items-center justify-between py-5 sm:py-6 lg:py-[26px] text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="font-['Houschka_Pro'] text-[#2E3033] text-lg sm:text-2xl font-semibold">
                                    {item.title}
                                </span>
                                <span className="relative shrink-0 size-8 sm:size-[37px] flex items-center justify-center">
                                    <Image src={circleIcon} alt="" fill className="object-contain" />

                                    {/* Horizontal line */}
                                    <span className="absolute w-[14px] h-[2px] bg-[#2D8EC5] rounded-full" />

                                    {/* Vertical line: rotates to turn + into − on open */}
                                    <motion.span
                                        className="absolute w-[2px] h-[14px] bg-[#2D8EC5] rounded-full"
                                        animate={{
                                            rotate: isOpen ? 90 : 0,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
                                    />
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-5 sm:pb-6 pr-10 sm:pr-16 text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
