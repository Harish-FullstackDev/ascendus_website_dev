"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import domainIcon from "@/assets/Industries/icons/deeper-domain-understanding.svg";
import experienceIcon from "@/assets/Industries/icons/enhanced-user-experience.svg";
import collaborationIcon from "@/assets/Industries/icons/cross-functional-collaboration.svg";
import teamsIcon from "@/assets/Industries/icons/user-multiple.svg";

// Figma labels the first and fourth card identically ("Deeper Domain
// Understanding") while giving them different icons — a target and a group of
// people. That reads as a copy-paste slip in the fourth label, but the copy is
// reproduced verbatim; flag it with the designer rather than inventing a title.
const OUTCOMES = [
    { icon: domainIcon, title: "Deeper Domain Understanding" },
    { icon: experienceIcon, title: "Enhanced User Experience" },
    { icon: collaborationIcon, title: "Cross-Functional Collaboration" },
    { icon: teamsIcon, title: "Deeper Domain Understanding" },
];

// The one dark band on the page. Both neighbours are a different background, so
// it pays the full 64px top and bottom rather than splitting with either.
export default function IndustryExpertiseThatDeliversOutcomes() {
    return (
        <section
            id="why-it-matters"
            className="w-full scroll-mt-24 border-t border-[#f1f5f9] bg-[#00223d] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16"
        >
            {/* Figma: a 436px heading column beside an 834px card track with a
                48px gutter. */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,436px)_minmax(0,1fr)] gap-10 lg:gap-12 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.6px] text-[#5189c5] leading-4">
                        Why It Matters
                    </p>
                    <h2 className="mt-4 text-2xl sm:text-[32px] font-semibold text-[#f8f8f8] leading-[1.4]">
                        Industry Expertise
                        <br className="hidden sm:inline" /> That Delivers Outcomes
                    </h2>
                </motion.div>

                {/* Hairline rules separate the four outcomes — a left rule on the
                    track plus a right rule on each card. They only apply from lg
                    up, where the four sit on one row; below that the cards stack
                    and the rules would cut across the flow. */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:border-l lg:border-[#f8f8f8]/40">
                    {OUTCOMES.map((outcome, index) => (
                        <motion.div
                            key={`${outcome.title}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            className="flex flex-col items-center justify-center gap-2 px-2 py-1.5 lg:border-r lg:border-[#f8f8f8]/40"
                        >
                            <span className="flex size-16 items-center justify-center rounded-[10px]">
                                <Image src={outcome.icon} alt="" className="size-12" />
                            </span>

                            <h3 className="max-w-[132px] pt-2 text-center text-base sm:text-lg font-normal text-[#f8f8f8] leading-[1.3]">
                                {outcome.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
