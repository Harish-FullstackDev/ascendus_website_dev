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

// Figma (681:1224) draws the hero at 800px; here it is one viewport tall, like
// Home. The layout copies HomeHeroText so the two heroes line up: the stats sit
// on Home's bottom inset (Figma's 120px, easing down to 40px on short screens)
// and the copy is centred in the space between the navbar and the stats.
//
// The login card's bottom edge is level with the stats row's bottom, as in
// Figma (178 + 500 = 608 + 70). It is 500px tall where there is room. The site
// navbar is 80px tall, not Figma's 68, so the card keeps at least 64px below
// it (top 144). On short screens the card gets shorter instead of the hero
// growing, because the hero is locked to 100vh. The card only fits beside the
// copy from lg up; below that the PageClient renders it under the hero.
export default function CareersPageHeroText() {
    return (
        <div className="absolute inset-0 flex flex-col px-6 pb-10 pt-[64px] sm:px-[64px] lg:pb-[clamp(40px,15vh,120px)] lg:pt-[68px]">
            <div className="flex w-full flex-1 items-end justify-between gap-10">
                <div className="flex h-full w-full min-w-0 flex-col">
                    <div className="flex flex-1 items-center py-6">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="flex w-full max-w-[700px] flex-col gap-3"
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

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="hidden w-[438px] shrink-0 lg:block"
                >
                    {/* 144 is the navbar (80) plus the 64 gap; the rest of the
                        height goes to the stats' bottom inset. */}
                    <CandidateLoginCard
                        className="h-[min(500px,calc(100vh-144px-clamp(40px,15vh,120px)))] justify-center"
                        paddingClassName="py-5"
                    />
                </motion.div>
            </div>
        </div>
    );
}
