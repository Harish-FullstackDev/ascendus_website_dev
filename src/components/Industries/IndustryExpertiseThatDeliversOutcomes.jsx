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
//
// Each label is carried as its two lines rather than one string. Figma sets all
// four on two lines over a 211px column, and left to wrap on their own they
// straighten out to a single line as soon as the track is wider than the 1440
// frame — which is most desktops.
const OUTCOMES = [
    { icon: domainIcon, lines: ["Deeper Domain", "Understanding"] },
    { icon: experienceIcon, lines: ["Enhanced", "User Experience"] },
    { icon: collaborationIcon, lines: ["Cross-Functional", "Collaboration"] },
    { icon: teamsIcon, lines: ["Deeper Domain", "Understanding"] },
];

// The one dark band on the page. Both neighbours are a different background, so
// it pays the full 64px top and bottom rather than splitting with either.
export default function IndustryExpertiseThatDeliversOutcomes() {
    return (
        <section
            id="why-it-matters"
            className="w-full scroll-mt-24 border-t border-[#f1f5f9] bg-[#00223d] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16"
        >
            {/* Figma 258:1349 — the heading column hugs its copy rather than
                taking a fixed track, and the outcomes take everything left over
                across a 48px gutter. */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-start gap-3 lg:shrink-0"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.7px] text-[#68c2f2] leading-4">
                        Why It Matters
                    </p>
                    <h2 className="text-2xl sm:text-[32px] font-medium text-white leading-[1.2]">
                        Industry Expertise
                        <br className="hidden sm:inline" /> That Delivers Outcomes
                    </h2>
                </motion.div>

                {/* Hairline rules sit between the four outcomes, so every card but
                    the last carries a right rule and the track carries none of
                    its own. They only apply from lg up, where the four sit on one
                    row; below that the cards stack and the rules would cut across
                    the flow. */}
                <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-8 lg:h-[149px] lg:gap-0 lg:items-center">
                    {OUTCOMES.map((outcome, index) => (
                        <motion.div
                            key={`${outcome.lines.join(" ")}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            className={
                                "flex flex-col items-center justify-center gap-2 px-2 py-1.5 lg:h-[135px] " +
                                (index < OUTCOMES.length - 1 ? "lg:border-r lg:border-[#f8f8f8]/40" : "")
                            }
                        >
                            <span className="flex size-16 items-center justify-center rounded-[10px]">
                                <Image src={outcome.icon} alt="" className="size-12" />
                            </span>

                            <h3 className="max-w-[211px] pt-2 text-center text-base font-normal text-white leading-[1.5]">
                                {outcome.lines.map((line) => (
                                    <span key={line} className="block">
                                        {line}
                                    </span>
                                ))}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
