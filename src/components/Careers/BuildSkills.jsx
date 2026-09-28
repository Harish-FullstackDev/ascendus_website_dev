"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import iconLearning from "@/assets/Careers/icons/learning-certifications-48.svg";
import iconEnterprise from "@/assets/Careers/icons/enterprise-project-exposure-48.svg";
import iconProgression from "@/assets/Careers/icons/career-progression-48.svg";
import iconCrossFunctional from "@/assets/Careers/icons/cross-functional-experience-48.svg";

// Titles keep Figma's forced line breaks; the descriptions carry Figma's own
// text-box widths so they wrap where the design wraps.
const CARDS = [
    {
        icon: iconLearning,
        title: ["Learning &", "Certifications"],
        description: "Continuous technical and professional development.",
        bodyWidth: "max-w-[180px]",
    },
    {
        icon: iconEnterprise,
        title: ["Enterprise Project", "Exposure"],
        description: "Work on real transformation initiatives across industries.",
        bodyWidth: "max-w-[160px]",
    },
    {
        icon: iconProgression,
        title: ["Career", "Progression"],
        description: "Structured opportunities to take on greater responsibilities.",
        bodyWidth: "max-w-[163px]",
    },
    {
        icon: iconCrossFunctional,
        title: ["Cross-Functional", "Experience"],
        description: "Collaborate across SAP, technology, consulting and business teams.",
        bodyWidth: "max-w-[168px]",
    },
];

// Section 4 — dark band, full 64 on both edges. Figma's eyebrow here reads
// "Solution" (602:2309), which looks carried over from another page; kept as
// drawn and flagged.
export default function BuildSkills() {
    return (
        <section className="w-full bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-10 xl:flex-row xl:items-center xl:gap-12"
            >
                <div className="flex flex-col gap-3 xl:w-[390px] xl:shrink-0">
                    <p className="flex h-8 items-center text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                        Solution
                    </p>

                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-white">
                        Build Skills.
                        <br /> Gain Experience.
                        <br /> Grow Your Career.
                    </h2>

                    <p className="max-w-[379px] text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                        We invest in our people and provide opportunities to learn, grow and take on meaningful
                        challenges.
                    </p>
                </div>

                <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:flex-1">
                    {CARDS.map((card) => (
                        <div
                            key={card.title.join(" ")}
                            className="flex min-h-[238px] flex-col justify-between gap-4 rounded-[16px] border border-[#d0d0d0] bg-white p-[25px]"
                        >
                            <Image src={card.icon} alt="" className="size-12" />

                            <h3 className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">
                                {card.title[0]}
                                <br />
                                {card.title[1]}
                            </h3>

                            <p className={`text-[14px] leading-[1.4] text-[#0e2b4b] ${card.bodyWidth}`}>
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
