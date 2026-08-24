"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import panelImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/capabilities-panel.png";

// Figma only fills in real copy for item 1's expanded panel (a skeleton-design
// artifact, same pattern noted elsewhere on this site) — items 2–7 keep the
// same title Figma gives, with a description and bullet list written to match
// that first item's tone and length rather than being left blank.
const ITEMS = [
    {
        title: "SAP S/4HANA Migration & Implementation",
        desc: "End-to-end migration from ECC to S/4HANA, planned around your compliance deadlines and cutover windows, not a generic timeline.",
        bullets: [
            "Landscape assessment and readiness review",
            "Migration path selection (greenfield, brownfield, or selective)",
            "Data migration and validation",
            "Cutover and hypercare support",
        ],
    },
    {
        title: "RISE with SAP",
        desc: "Full RISE with SAP delivery: infrastructure, migration, and managed operations bundled under a single SAP-backed contract.",
        bullets: [
            "Infrastructure and hyperscaler setup",
            "Migration and technical delivery",
            "Application management after go-live",
            "One accountable contract with SAP",
        ],
    },
    {
        title: "GROW with SAP",
        desc: "Cloud-native S/4HANA on SAP's best-practice reference architecture, built for organizations without legacy customization to carry over.",
        bullets: [
            "Best-practice reference architecture",
            "Rapid, templated deployment",
            "Built-in analytics and AI",
            "Minimal custom code to maintain",
        ],
    },
    {
        title: "SAP Business Technology Platform",
        desc: "Extend and integrate your SAP core with the BTP services that connect it to the rest of your technology estate.",
        bullets: [
            "Integration Suite for system connectivity",
            "Extension apps that don't touch the core",
            "Low-code/no-code development tools",
            "A unified data and analytics layer",
        ],
    },
    {
        title: "SAP Analytics Cloud",
        desc: "Planning, prediction, and reporting on live SAP data, without exporting it into a separate BI stack.",
        bullets: [
            "Live connectivity to SAP data sources",
            "Predictive and augmented analytics",
            "Integrated planning and forecasting",
            "Self-service dashboards for business teams",
        ],
    },
    {
        title: "SAP BW/4HANA",
        desc: "A modernized data warehouse layer for enterprises that still need structured, governed reporting at scale.",
        bullets: [
            "Migration from legacy BW versions",
            "Simplified data modeling",
            "High-performance HANA-native queries",
            "Governed, auditable reporting",
        ],
    },
    {
        title: "Application Managed Services (AMS)",
        desc: "Ongoing support, monitoring, and enhancement for your SAP landscape after go-live, from the same team that built it.",
        bullets: [
            "24/7 monitoring and incident response",
            "Regular patching and compliance updates",
            "A continuous improvement backlog",
            "One team across build and run",
        ],
    },
];

export default function CapabilitiesAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = ITEMS[activeIndex];

    return (
        <section className="w-full bg-[#f3f6f9] pt-10 pb-10 sm:pt-16 sm:pb-16 flex flex-col items-center gap-10 sm:gap-20">
            <div className="w-full px-6 sm:px-[64px] flex justify-center">
                <motion.div
                    key={active.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center gap-5 max-w-[1074px] text-center"
                >
                    <h2 className="text-[#10161d] text-2xl sm:text-[24px] font-medium">{active.title}</h2>
                    <p className="text-[#6c6c6c] text-lg font-light leading-[1.4]">{active.desc}</p>
                </motion.div>
            </div>

            <div className="w-full pl-6 pr-6 sm:pl-[64px] sm:pr-0 flex flex-col lg:flex-row items-stretch">
                {/* justify-between (not packed) so the 7 items spread across the full
                    stretched height with visible gaps between each item's own border
                    segment, rather than one continuous line — matching how
                    EnterpriseSoftware.jsx (Digital Engineering) spaces its tab list.
                    items-stretch on the row makes this column match the image panel's
                    height exactly, so the first item's top lines up with the image's
                    top edge and the last with its bottom edge. 40% width, not a fixed
                    px column. */}
                <div className="flex flex-col justify-between w-full lg:w-[40%] shrink-0">
                    {ITEMS.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-pressed={isActive}
                                className={`text-left w-full py-[12.5px] px-[15px] border-l-[3px] transition-colors ${isActive ? "border-[#2d8ec5]" : "border-[#6c6c6c]/60"
                                    }`}
                            >
                                <span
                                    className={`text-lg font-light leading-[1.4] transition-colors ${isActive ? "text-[#10161d]" : "text-[#6c6c6c]/70"
                                        }`}
                                >
                                    {item.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Figma now has a real photo here (was a flat #1C5F85 placeholder) — one
                    shared background behind all 7 items, not per-item photography,
                    matching the single image asset the design actually provides. */}
                <div className="relative bg-[#1c5f85] w-full lg:w-[60%] aspect-[825/587] mt-6 lg:mt-0 overflow-hidden">
                    <Image src={panelImage} alt="" fill className="object-cover" />
                    <AnimatePresence mode="wait">
                        {/* Bottom-flush against the image (Figma: card bottom = panel
                            bottom exactly), inset from the left/top/right rather than
                            padded on every side. Mobile keeps a simpler, fully-inset
                            card since the asymmetric figma proportions only read well
                            once the panel is wide enough. */}
                        <motion.div
                            key={active.title}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="absolute left-6 right-6 bottom-0 sm:left-[25%] sm:right-[6%] sm:top-[31%] bg-white p-6 sm:p-10 flex flex-col gap-6 sm:justify-between"
                        >
                            <h3 className="text-[#10161d] text-lg font-medium leading-[1.4]">{active.desc}</h3>
                            <ul className="list-disc pl-5 flex flex-col gap-1 text-[#3d3d4e] text-base font-light leading-[1.4]">
                                {active.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
