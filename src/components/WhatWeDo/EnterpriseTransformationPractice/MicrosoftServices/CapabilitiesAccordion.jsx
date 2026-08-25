"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// All 5 items have real Figma copy this time (unlike the SAP Transformation
// page, where only item 1 was filled in) — the other 4 panels were laid out
// as separate hover/click-reveal mockups off to the side of the main frame,
// confirmed as the alternate states for this same list+panel component.
const ITEMS = [
    {
        title: "Microsoft Azure",
        desc: "Cloud infrastructure and hosting for workloads that need to sit close to, or integrate directly with, your SAP environment.",
        bullets: [
            "Infrastructure design and provisioning",
            "Workload migration",
            "Azure-to-SAP connectivity",
            "Cost and performance management",
        ],
    },
    {
        title: "Microsoft 365",
        desc: "Productivity and collaboration tools configured for how your teams actually work, with governance and security set from day one.",
        bullets: [
            "Tenant setup and configuration",
            "Identity and access governance",
            "Collaboration workflow design",
            "Ongoing security management",
        ],
    },
    {
        title: "Power Platform",
        desc: "Low-code apps, workflows, and automation built by IT and governed like IT, not shadow tools that show up unmanaged.",
        bullets: [
            "App and workflow development",
            "Governance and environment management",
            "Integration with SAP and other systems",
            "User training and handoff",
        ],
    },
    {
        title: "Dynamics 365",
        desc: "CRM and business applications for teams and subsidiaries that don't need the full weight of an SAP deployment.",
        bullets: [
            "Implementation and configuration",
            "Data and process integration with SAP",
            "Customization and workflow setup",
            "Deployment and support",
        ],
    },
    {
        title: "Power BI",
        desc: "Reporting and dashboards pulling from SAP and non-SAP sources alike, one view instead of five spreadsheets.",
        bullets: [
            "Data model design",
            "Dashboard and report build",
            "Live connections to SAP and Microsoft sources",
            "Governance and access management",
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

            {/* justify-between (not packed) so the items spread across the full
                stretched height with visible gaps between each item's own border
                segment. items-stretch on the row makes this column match the
                image panel's height exactly, so the first item's top lines up
                with the panel's top edge and the last with its bottom edge. */}
            <div className="w-full pl-6 pr-6 sm:pl-[64px] sm:pr-0 flex flex-col lg:flex-row items-stretch">
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

                {/* Solid #1C5F85 panel (Figma has no photo here, unlike the SAP
                    Transformation page's equivalent section). */}
                <div className="relative bg-[#1c5f85] w-full lg:w-[60%] aspect-[825/587] mt-6 lg:mt-0 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {/* Bottom-flush against the panel (Figma: card bottom = panel
                            bottom exactly), inset from the left/top/right. */}
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
