"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import workflowPhoto from "@/assets/WhatWeDo/Intelligent Automation/webp/Intelligent_Why_Partner.webp";

const SERVICES = [
    "Process mining before automation",
    "SAP-integrated automation delivery",
    "Hyper automation capability",
    "Governance and monitoring built in",
    "Exception handling by design",
    "Proven high-volume deployments",
];

export default function WhyPartnerWithUs() {
    return (
        <section className="w-full py-10 sm:py-16 flex flex-col items-center gap-8 sm:gap-16">
            {/* Title + description now sit above the card, centered like the
                rest of this page's sections (see OurAutomationApproach /
                HyperAutomation). Only this block carries horizontal padding —
                the card below is intentionally full-bleed. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[760px] text-center px-6 sm:px-10"
            >
                <h2 className="text-[#2E3033] text-[28px] sm:text-[28px] font-semibold">
                    Why Partner With Us
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Our proven methods for building automation that remains maintainable at scale.
                </p>
            </motion.div>

            {/* ===== Desktop / tablet: card spans the full viewport width, edge
                to edge — no side padding on this row. The panel's left edge is
                a % of the row (matches Figma's panel meeting the frame's
                right edge exactly) so it keeps reaching the browser edge at
                any width; the image gets a fluid width capped by max-width so
                it doesn't balloon on very wide screens. ===== */}
            <div className="hidden sm:block relative w-full sm:h-[460px] lg:h-[600px]">
                {/* Panel — the list now dominates the section, so it gets the
                    full remaining width instead of a narrow fixed column. */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute left-[32%] right-0 top-[5%] h-[85%] bg-[#f3f6f9] overflow-hidden flex items-center pl-[clamp(2rem,7vw,6.5rem)] pr-6 lg:pr-10"
                >
                    <ul className="w-full max-w-[620px]">
                        {SERVICES.map((item) => (
                            <li
                                key={item}
                                className="ms-9 list-disc text-[#55595E] text-lg lg:text-2xl font-light leading-[1.9]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Image — overlaps the panel's left edge and stays flush with
                    the true browser edge. */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="absolute left-0 bottom-0 w-[41%] max-w-[540px] h-[78%] z-10 overflow-hidden"
                >
                    <Image src={workflowPhoto} alt="" fill className="object-cover" />
                </motion.div>

                {/* Accent lines — the vertical one sits in front of the image
                    (z-20); the horizontal one is intentionally behind it
                    (no z-index, so it loses to the image's z-10), so only the
                    tail past the image's right edge peeks out at the bottom,
                    same as the original design. Fixed px width/offset since
                    it's a small decorative divider anchored to the image,
                    which itself is still flush with the true left edge. */}
                <div className="absolute left-[8.5%] top-0 w-px h-[33%] bg-[#2d8ec5] z-20" />
                <div className="absolute left-[100px] top-[93%] w-[555px] h-px bg-[#2d8ec5]" />
            </div>

            {/* ===== Mobile: simple stacked layout, still edge-to-edge ===== */}
            <div className="sm:hidden w-full flex flex-col">
                <div className="relative w-full h-[220px] overflow-hidden">
                    <Image src={workflowPhoto} alt="" fill className="object-cover" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full bg-[#f3f6f9] px-6 py-10"
                >
                    <ul>
                        {SERVICES.map((item) => (
                            <li
                                key={item}
                                className="ms-6 list-disc text-[#55595E] text-base font-light leading-relaxed"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

