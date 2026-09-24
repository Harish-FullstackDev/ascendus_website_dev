"use client";

import { motion } from "framer-motion";

import ServicePillar from "./ServicePillar";

import iconIndustryExpertise from "@/assets/Services/icons/industry-expertise-across-sectors-48.svg";
import iconEndToEndServiceCapabilities from "@/assets/Services/icons/end-to-end-service-capabilities-48.svg";
import iconEndToEndServiceCapabilities2 from "@/assets/Services/icons/end-to-end-service-capabilities-2-48.svg";
import iconFlexibleEngagementModels from "@/assets/Services/icons/flexible-engagement-models-48.svg";

// Cards 2 and 3 carry the same label in Figma (370:3581 and 370:3588) on two
// different glyphs. Transcribed as drawn — almost certainly a copy slip, so
// raise it with the designer rather than guessing the intended third label.
const HIGHLIGHTS = [
    { icon: iconIndustryExpertise, label: "Industry Expertise Across Sectors" },
    { icon: iconEndToEndServiceCapabilities, label: "End-to-End Service Capabilities" },
    { icon: iconEndToEndServiceCapabilities2, label: "End-to-End Service Capabilities" },
    { icon: iconFlexibleEngagementModels, label: "Flexible Engagement Models" },
];

// Section 6 — the pale strip directly under the About Us band. Figma gives it
// no section padding of its own: a 160px band around 126px cards, i.e. 17px.
// It reads as a divider strip rather than a full section, so the 64/32 rhythm
// the other bands follow is deliberately not applied here.
export default function AboutUsHighlights() {
    return (
        <section className="w-full bg-[#ecf2f9] px-6 py-8 sm:px-0 sm:py-[17px]">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid w-full grid-cols-2 gap-y-8 sm:flex sm:items-center sm:justify-center sm:gap-y-0 sm:divide-x sm:divide-[#00223d]"
            >
                {HIGHLIGHTS.map((highlight, index) => (
                    <ServicePillar
                        key={`${highlight.label}-${index}`}
                        icon={highlight.icon}
                        label={highlight.label}
                        tone="light"
                    />
                ))}
            </motion.div>
        </section>
    );
}
