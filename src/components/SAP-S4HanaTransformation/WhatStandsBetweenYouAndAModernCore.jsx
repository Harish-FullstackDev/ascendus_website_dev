"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import challengesBg from "@/assets/SAP-S4HanaTransformation/transformation-challenges-bg.webp";

const CHALLENGES = [
    {
        title: "Ageing ECC systems",
        description: "Maintenance costs rise every year while the room to change anything shrinks.",
    },
    {
        title: "A deadline you do not control",
        description: "SAP sets the end of support dates. Waiting only narrows your options.",
    },
    {
        title: "Custom code nobody wants to touch",
        description: "Years of modifications that few people fully understand.",
    },
    {
        title: "Data scattered across sources",
        description: "Large volumes with quality problems that surface late in the program.",
    },
    {
        title: "Work still done by hand",
        description: "Spreadsheets and re-keying that slow down closes, approvals and reporting.",
    },
];

// One curve for the lift, the fill and the text flip, so the hover reads as a
// single motion. Tailwind 4 animates `translate` as its own property, so the
// transition list has to name it rather than `transform`.
const MOTION =
    "transition-[translate,background-color,color] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";

// Figma (828:1026) draws card 2 raised and #005192 only as the hover example.
// Every card rests 23px lower on white and lifts into that state on hover.
function ChallengeCard({ challenge }) {
    return (
        <div
            className={`group flex min-h-[180px] flex-col gap-[26px] rounded-[12px] bg-white px-6 py-8 shadow-[0px_4px_29.7px_0px_rgba(0,0,0,0.25)] hover:-translate-y-[23px] hover:bg-[#005192] xl:h-[212px] ${MOTION}`}
        >
            <h3 className={`text-[18px] font-medium leading-[1.2] text-[#0e2b4b] group-hover:text-white ${MOTION}`}>
                {challenge.title}
            </h3>
            <p className={`text-[14px] font-normal leading-[1.4] text-[#415773] group-hover:text-white ${MOTION}`}>
                {challenge.description}
            </p>
        </div>
    );
}

// Section 3 — #f1f3f5 band. The starfield photo is full-bleed along the bottom
// 237px and the cards straddle its top edge: at 1440 they start 103px above it
// and the photo runs 105px below them, which is what the wrapper's top offset
// and bottom padding reproduce. The band therefore has no bottom padding of its
// own — the photo is its bottom edge.
export default function WhatStandsBetweenYouAndAModernCore() {
    return (
        <section className="relative w-full border-t border-[#8695a7]/30 bg-[#f1f3f5] pt-10 sm:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 px-6 sm:px-[64px] lg:flex-row lg:items-end lg:justify-between lg:gap-8"
            >
                <div className="flex flex-col gap-3 lg:w-[497px] lg:shrink-0">
                    <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                        Transformation Challenges
                    </p>
                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-[#0f172a]">
                        What Stands Between You and a Modern Core
                    </h2>
                </div>
                <p className="text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base lg:w-[490px]">
                    Every SAP journey starts from a different place. These are the obstacles we see most often in
                    enterprise programs across the region.
                </p>
            </motion.div>

            <div className="relative mt-16 pb-[105px] lg:mt-[110px]">
                <div className="absolute inset-x-0 bottom-0 top-[103px] overflow-hidden bg-black">
                    <Image src={challengesBg} alt="" fill sizes="100vw" className="object-cover" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative grid grid-cols-1 gap-6 px-6 pt-[23px] sm:grid-cols-2 sm:px-8 md:grid-cols-3 xl:grid-cols-5 xl:gap-[clamp(1.5rem,4.45vw,4rem)]"
                >
                    {CHALLENGES.map((challenge) => (
                        <ChallengeCard key={challenge.title} challenge={challenge} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
