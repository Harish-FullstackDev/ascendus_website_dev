"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessmentImage from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/webp/Cybersecurity_Security_Assessment.webp";

const AREAS = [
    {
        title: "Internal Networks",
        desc: "Independent assessment of your security posture, gaps, and priorities, grounded in your actual risk exposure",
    },
    {
        title: "Cybersecurity Consulting",
        desc: "Systematic identification of weaknesses across your infrastructure, applications, and SAP landscape.",
    },
    {
        title: "Vulnerability Assessment",
        desc: "Modern cyber threats require continuous monitoring supported by advanced analytics, automation, and threat intelligence.",
    },
    {
        title: "Penetration Testing",
        desc: "Controlled, real-world attack simulations that show you where defenses actually hold and where they don't.",
    },
    {
        title: "Cloud Security",
        desc: "Security architecture and controls purpose-built for cloud and hybrid environments.",
    },
];

export default function SecurityAssessmentCloudDefense() {
    return (
        // Vertical breathing room (py-10/[82px]) lives on this outer section, OUTSIDE the
        // colored block below — so it's preserved. The colored block itself is w-full with
        // no horizontal constraint, so it now runs edge-to-edge like the Figma frame instead
        // of leaving page-white gutters on either side.
        <section className="w-full py-10 sm:py-[32px]">
            <div className="w-full bg-[#f3f6f9] flex flex-col items-center gap-10 sm:gap-16 px-6 sm:px-[64px] py-8 sm:py-[32px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
                >
                    <h2 className="font-heading text-black text-2xl font-semibold">Security Assessment & Cloud Defense</h2>
                    <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                        Targeted security assessments and cloud protection services.
                    </p>
                </motion.div>

                {/* Figma sizes both columns equally (546px each) — lg:flex-1 on both reproduces
                    that 50/50 split fluidly instead of pinning each to a literal 546px. */}
                <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-[47px]">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-4 sm:gap-[15px] w-full lg:flex-1"
                    >
                        {/* aspect-[546/806] keeps Figma's portrait ratio intact as the column's
                            width scales, instead of a fixed 750px height that only matched at one
                            specific viewport width. */}
                        <div className="relative w-full aspect-[546/806]">
                            <Image src={assessmentImage} alt="" fill className="object-cover" />
                        </div>
                    </motion.div>

                    {/* Figma gives both columns the same total height and spreads these 5 items
                        across it with justify-between (rather than a fixed gap) so the last item's
                        divider lines up with the image's bottom edge. lg:items-stretch on the row
                        (below) makes this column's height match the image column's automatically;
                        justify-between then does the distributing — no fixed height needed. */}
                    <div className="flex flex-col gap-8 sm:gap-10 lg:gap-0 lg:justify-between w-full lg:flex-1">
                        {AREAS.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                                className="flex flex-col gap-4 sm:gap-[23px] w-full"
                            >
                                <div className="flex flex-col gap-3 sm:gap-5">
                                    <h2 className="text-[#2E3033] text-2xl font-semibold">{area.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{area.desc}</p>
                                </div>
                                <div className="h-px w-[139px] bg-[#3d3d4e]/40" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
