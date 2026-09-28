"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import heroRule from "@/assets/Careers/icons/hero-rule.svg";
import CandidateLoginCard from "./CandidateLoginCard";

const STATS = [
    { value: "200+", label: "Consultants & Specialists" },
    { value: "8+", label: "Countries" },
    { value: "One", label: "Global Team" },
];

// Figma (602:2046) draws the hero at 800px. Here the hero is one viewport tall,
// so the layout keeps Figma's relationships instead of its coordinates: the
// stats block ends 33px above the bottom edge (697 + 70 of 800), and the copy
// starts 78px below the login card's top (201.5 - 123.5).
//
// The site navbar is 80px tall, not Figma's 68, so the card is held at least
// 64px below it (68 + 76 = 144). The bottom padding is 53px at 800px tall, so
// at that height the card lands exactly at 144. On taller screens the card
// centres, as in Figma. On shorter ones the padding shrinks to 24px, and below
// 771px tall (68 + 76 + 500 + 24 + 70 + 33) the card itself gets shorter,
// because the hero is locked to 100vh. The card only fits beside the copy from
// lg up; below that the PageClient renders it under the hero.
export default function CareersPageHeroText() {
    return (
        <div className="absolute inset-0 flex flex-col px-6 pb-8 pt-[64px] sm:px-[64px] lg:pb-[33px] lg:pt-[68px]">
            <div className="flex flex-1 items-center py-6 lg:pb-[clamp(24px,calc(100vh_-_747px),53px)] lg:pt-[76px]">
                <div className="flex w-full items-start justify-between gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex w-full max-w-[700px] flex-col gap-3 lg:mt-[78px]"
                    >
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium uppercase leading-[1.2] tracking-[1.8px] text-white sm:text-[18px]">
                                Careers
                            </p>
                            <Image src={heroRule} alt="" className="h-px w-full" />
                        </div>

                        <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-medium capitalize leading-[1.2] text-white">
                            Build a Career That Creates
                            <br className="hidden xl:block" /> Real Impact.
                        </h1>

                        <p className="text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                            Join a team that solves complex business challenges with
                            <br className="hidden xl:block" /> technology, collaboration and a shared purpose.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hidden w-[438px] shrink-0 lg:block"
                    >
                        {/* Figma's card is 500px tall with 65px top/bottom padding around
                            370px of content. The hero is locked to 100vh, so on short
                            screens the card gives up padding rather than overlap the
                            stats: 271px is everything else in the column at its
                            tightest (68 + 76 + 24 + 70 + 33). */}
                        <CandidateLoginCard
                            className="h-[min(500px,calc(100vh-271px))] justify-center"
                            paddingClassName="py-5"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex w-full max-w-[464px] items-start justify-between"
            >
                {/* Dividers are plain 1px rules, not the rotated 70x1 SVG export:
                    rotating that image lands it on a half pixel and Chrome paints
                    nothing. */}
                {STATS.map((stat, index) => (
                    <Fragment key={stat.value}>
                        {index > 0 ? (
                            <div aria-hidden className="h-[70px] w-px shrink-0 bg-[#f8f8f8]" />
                        ) : null}
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-white">
                                {stat.value}
                            </p>
                            <p className="whitespace-nowrap text-[11px] leading-[15.13px] text-[#f8f8f8]">{stat.label}</p>
                        </div>
                    </Fragment>
                ))}
            </motion.div>
        </div>
    );
}
