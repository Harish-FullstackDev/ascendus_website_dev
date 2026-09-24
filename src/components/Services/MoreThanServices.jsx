"use client";

import { motion } from "framer-motion";

import ServicePillar from "./ServicePillar";

import iconDeepExpertise from "@/assets/Services/icons/deep-expertise-48.svg";
import iconIndustryFocused from "@/assets/Services/icons/industry-focused-48.svg";
import iconEndToEndCapabilities from "@/assets/Services/icons/end-to-end-capabilities-48.svg";
import iconMeasurableOutcomes from "@/assets/Services/icons/measurable-outcomes-48.svg";

const PILLARS = [
    { icon: iconDeepExpertise, label: "Deep Expertise" },
    { icon: iconIndustryFocused, label: "Industry Focused" },
    { icon: iconEndToEndCapabilities, label: "End-to-End Capabilities" },
    { icon: iconMeasurableOutcomes, label: "Measurable Outcomes" },
];

// Section 4 — dark band between two white sections, so it keeps its full 64px
// top and bottom; a white/coloured boundary is never halved.
export default function MoreThanServices() {
    return (
        <section className="w-full bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12"
            >
                <div className="flex w-full flex-col gap-3 lg:w-[300px] lg:shrink-0">
                    <p className="text-[14px] font-semibold uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                        Why Our Services
                    </p>

                    {/* Figma sets this heading in a 300px box and still fits
                        "More Than Services." on one line. Switzer runs a few px
                        wider in the browser, so the two authored lines are held
                        with nowrap rather than widening the column — the pillars
                        beside it have room to spare. */}
                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#f8f8f8] lg:whitespace-nowrap">
                        More Than Services.
                        <br className="hidden lg:block" /> A True Partner.
                    </h2>
                </div>

                {/* The hairlines are dividers between pillars, not card borders, so
                    they are drawn with divide-* on the row and disappear once the
                    pillars wrap onto two rows at tablet width. */}
                <div className="grid w-full grid-cols-2 gap-y-10 lg:flex lg:flex-1 lg:grid-cols-none lg:gap-y-0 lg:divide-x lg:divide-[#f8f8f8]">
                    {PILLARS.map((pillar) => (
                        <ServicePillar key={pillar.label} icon={pillar.icon} label={pillar.label} tone="dark" />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
