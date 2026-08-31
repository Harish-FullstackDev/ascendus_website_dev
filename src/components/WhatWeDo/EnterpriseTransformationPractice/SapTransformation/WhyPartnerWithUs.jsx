"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import awardIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/icons/award.svg";
import supportIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/icons/support.svg";
import gridIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/icons/grid.svg";
import pathEditIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/icons/path-edit.svg";

const REASONS = [
    {
        icon: awardIcon,
        title: "Official SAP Partner Status",
        desc: "RISE with SAP, GROW with SAP, and S/4HANA delivery credentials are part of our standing with SAP, not something we're building toward.",
    },
    {
        icon: supportIcon,
        title: "Delivery and Support Under One Roof",
        desc: "The team that migrates your system is the same practice that supports it afterward, not a handoff to a different vendor once the project ends.",
    },
    {
        icon: gridIcon,
        title: "Pattern Recognition Across 150+ Engagements",
        desc: "Most of what goes wrong in an SAP migration has already gone wrong somewhere else. We've usually seen the specific failure mode before it becomes yours.",
    },
    {
        icon: pathEditIcon,
        title: "Path for Every Landscape",
        desc: "Greenfield, brownfield, or bluefield, the right path depends on your system, not on which one we're set up to sell.",
    },
];

export default function WhyPartnerWithUs() {
    return (
        <section className="w-full bg-white pt-10 pb-8 sm:pt-16 sm:pb-[32px] px-6 sm:px-[64px] flex flex-col items-center gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-5 max-w-[818px] text-center"
            >
                <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold">Why Partner With Us For SAP</h2>
                <p className="text-[#55595E] text-lg font-light leading-[1.5]">
                    Choose the engagement model that fits your needs, from focused projects to ongoing support and
                    strategic guidance.
                </p>
            </motion.div>

            {/* Figma: no extra max-w on the grid beyond the section's own 64px
                padding (max-w-[1150px] here was double-constraining it, leaving
                unwanted whitespace past the true padded edge on wide screens).
                Column gap is ~180px at the 1150px reference width (≈15.6%,
                implemented as a fluid %), row gap is 32px. Every card cell is
                also a fixed 240px tall in Figma regardless of its own text
                length (the shortest card, "Path for Every Landscape", still
                gets the full 240px) — without that min-height, CSS Grid sizes
                each row to only as tall as its shortest content, which is what
                was reading as cramped even though the 32px gap itself was
                already correct. */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-[15.6%]">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: (index % 2) * 0.1 }}
                        className="flex flex-col gap-6 sm:min-h-[240px]"
                    >
                        <Image src={reason.icon} alt="" className="size-12" />
                        <h2 className="text-[#2E3033] text-xl font-semibold leading-[1.3]">{reason.title}</h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.3]">{reason.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
