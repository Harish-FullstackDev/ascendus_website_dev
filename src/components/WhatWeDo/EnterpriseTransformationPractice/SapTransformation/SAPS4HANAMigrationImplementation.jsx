"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import panelImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/capabilities-panel.png";

// Figma only fills in real copy for item 1's expanded panel — item 1's own
// panel frame is still an empty skeleton placeholder there, so its copy below
// is written to match the site's tone rather than sourced from Figma. Items
// 2–7 now have real desc/bullet copy in Figma (get_design_context on each
// item's panel frame) and are transcribed verbatim below.
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
            "Contract and scope planning",
            "Infrastructure provisioning",
            "Migration execution",
            "Ongoing operations under the RISE model",
        ],
    },
    {
        title: "GROW with SAP",
        desc: "Cloud-native S/4HANA on SAP's best-practice reference architecture, built for organizations without legacy customization to carry over.",
        bullets: [
            "Fit-to-standard workshops",
            "Rapid configuration against best-practice processes",
            "Process adoption support",
            "Go-live support",
        ],
    },
    {
        title: "SAP Business Technology Platform",
        desc: "Extend SAP without touching the core: integration, automation, and app development on BTP, upgrade safe by design.",
        bullets: [
            "Integration Suite setup",
            "Low-code app development",
            "Workflow automation",
            "API management and governance",
        ],
    },
    {
        title: "SAP Analytics Cloud",
        desc: "Planning, forecasting, and reporting built directly on your SAP data, no separate BI layer to maintain.",
        bullets: [
            "Planning model design",
            "Predictive forecasting",
            "Live connections to S/4HANA",
            "Dashboard and report build",
        ],
    },
    {
        title: "SAP BW/4HANA",
        desc: "Data warehousing built for SAP-native reporting at enterprise scale, migrated or built fresh on HANA.",
        bullets: [
            "Migration from legacy BW",
            "Data model design",
            "Performance tuning",
            "Reporting layer build",
        ],
    },
    {
        title: "Application Managed Services (AMS)",
        desc: "Ongoing support, monitoring, and continuous improvement for SAP environments already live, not just the ones we implement.",
        bullets: [
            "Incident and problem management",
            "Basis and functional support",
            "Regulatory and compliance updates",
            "SLA-backed reporting",
        ],
    },
];

export default function SAPS4HANAMigrationImplementation() {
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
                    className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
                >
                    <h2 className="text-[#2E3033] text-2xl sm:text-[24px] font-semibold">{active.title}</h2>
                    <p className="text-[#55595E] text-lg font-light leading-[1.4]">{active.desc}</p>
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
                                    className={`text-2xl font-['Houschka_Pro'] font-semibold leading-[1.4] transition-colors ${isActive ? "text-[#2E3033]" : "text-[#6c6c6c]/70"
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
                        {/* Card footprint (position/size against the image) is unchanged —
                            still bottom-flush, top-31%, inset from the left/right. Figma's
                            sibling item frames (e.g. "RISE with SAP") all share the same
                            spec for this content: a 462×256 box centered inside the 571×403
                            card — i.e. equal insets on every side (54.5/571 ≈ 9.55% left+right,
                            73.5/403 ≈ 18.24% top+bottom), with justify-between spreading the
                            title and bullets inside that box rather than a flat padding value.
                            That symmetric inset is what reads as "centered" — a flat padding
                            with top-anchored content always pools leftover space at the
                            bottom once the copy is shorter than the card. Mobile keeps a
                            simple inset-6 since the asymmetric figma proportions only read
                            well once the panel is wide enough. */}
                        <motion.div
                            key={active.title}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="absolute left-6 right-6 bottom-0 sm:left-[25%] sm:right-[6%] sm:top-[31%] bg-white"
                        >
                            <div className="absolute inset-6 sm:inset-auto sm:left-[9.55%] sm:right-[9.55%] sm:top-[18.24%] sm:bottom-[18.24%] flex flex-col justify-between gap-6">
                                <h2 className="text-[#2E3033] text-lg font-semibold leading-[1.4]">{active.desc}</h2>
                                <ul className="list-disc pl-5 flex flex-col gap-1 text-[#55595E] text-lg font-light leading-[1.4]">
                                    {active.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
