"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/WhatWeDo/Experience Design/icons/accordion-toggle-circle.svg";

// Figma's "Can you help with regional compliance requi—" cuts off mid-word with
// no fuller version elsewhere in the file; completed here to match the GCC
// compliance language already used in WhyEnterprisePartnerWithUs on this page.
// Figma also carried a stray duplicate row (a truncated repeat of the SAP
// landscape question) — dropped here, keeping only the complete version.
const QUESTIONS = [
    {
        q: "How long does a typical SAP implementation take?",
        a: "Timelines vary by scope, but most full implementations run 4 to 9 months. Phased rollouts and platform migrations can move faster once the initial landscape is assessed.",
    },
    {
        q: "Do you only work with new SAP builds, or can you take over an existing landscape?",
        a: "Both. We take on new builds, and we regularly step into existing SAP landscapes mid-engagement, whether that means stabilizing what's there or continuing a transformation someone else started.",
    },
    {
        q: "Can you help with regional compliance requirements like e-invoicing and data residency?",
        a: "Yes. We work inside the regulatory realities of the GCC, from e-invoicing mandates to data residency requirements, so compliance is built into the landscape rather than bolted on afterward.",
    },
    {
        q: "Do you replace our internal IT team, or work alongside them?",
        a: "We work alongside your team. Most engagements pair our specialists with your internal staff, transferring knowledge as we go rather than creating a dependency on us.",
    },
    {
        q: "Can you work with our existing technology and systems?",
        a: "Yes. We design around what you already have, integrating with existing ERP, cloud, and business systems rather than asking you to rip and replace what already works.",
    },
    {
        q: "How do you measure the success of an engagement?",
        a: "Against the outcomes we agree on upfront, uptime, adoption, process efficiency, or cost, not just go-live dates. We review progress against those metrics throughout the engagement, not just at the end.",
    },
];

export default function EnterpriseBuyerFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-white border-t border-[#8794a3] pt-10 pb-16 px-6 sm:px-[64px] flex flex-col items-center gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 w-full"
            >
                <h2 className="text-[28px] font-medium">
                    <span className="text-[#2E3033]">Questions Enterprise Buyers </span>
                    <span className="text-[#0061AF]">Actually Ask</span>
                </h2>
                <p className="text-[#55595E] text-lg font-light leading-[1.4] max-w-[954px]">
                    Research-led design capabilities that connect user needs, business objectives, and digital
                    product requirements.
                </p>
            </motion.div>

            <div className="flex flex-col items-start w-full">
                {QUESTIONS.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.q} className="w-full border-b border-[#a4a7a5]">
                            <button
                                type="button"
                                onClick={() => handleClick(index)}
                                className="flex w-full items-center justify-between gap-6 py-5 sm:py-[26px] text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="text-[#2E3033] text-lg sm:text-2xl font-light leading-[1.6]">
                                    {item.q}
                                </span>
                                <span className="relative shrink-0 size-8 sm:size-[37px] flex items-center justify-center">
                                    <Image src={circleIcon} alt="" fill className="object-contain" />
                                    <span className="absolute w-[14px] h-[2px] bg-[#2D8EC5] rounded-full" />
                                    <motion.span
                                        className="absolute w-[2px] h-[14px] bg-[#2D8EC5] rounded-full"
                                        animate={{ rotate: isOpen ? 90 : 0 }}
                                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
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
                                            {item.a}
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
