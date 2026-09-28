"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import heroRule from "@/assets/HomePage/icons/hero-rule.svg";

// Figma labels both the 70+ and the 8+ figure "Countries". Kept as drawn; one
// of them is presumably meant to be something else.
const STATS = [
    { value: "200+", label: "Consultants & Specialists" },
    { value: "70+", label: "Countries" },
    { value: "8+", label: "Countries" },
    { value: "5+", label: "Years of Experience" },
];

// Figma (633:4798) draws the hero at 800px; here it is one viewport tall, like
// Careers. The copy is centred in the space between the navbar and the stats,
// and the stats sit on Figma's 120px bottom inset (15% of the 800px frame),
// easing down to 40px on short screens.
export default function HomeHeroText() {
    return (
        <div className="absolute inset-0 flex flex-col px-6 pb-10 pt-[64px] sm:px-[64px] lg:pb-[clamp(40px,15vh,120px)] lg:pt-[68px]">
            <div className="flex flex-1 items-center py-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex w-full max-w-[1056px] flex-col gap-3"
                >
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium uppercase leading-[1.2] tracking-[1.8px] text-white sm:text-[18px]">
                            Home
                        </p>
                        <Image src={heroRule} alt="" className="h-px w-full" />
                    </div>

                    <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-medium capitalize leading-[1.2] text-white">
                        Enterprise Transformation.
                        <br className="hidden sm:block" /> Delivered with SAP Expertise.
                    </h1>

                    <p className="text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                        We help enterprises modernize SAP, transform business processes
                        <br className="hidden lg:block" /> and build connected digital enterprises that create
                        lasting business value.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="grid w-full max-w-[595px] grid-cols-2 gap-y-6 sm:flex sm:items-start sm:justify-between"
            >
                {/* Dividers are plain 1px rules, not the rotated 70x1 SVG export:
                    rotating that image lands it on a half pixel and Chrome paints
                    nothing. */}
                {STATS.map((stat, index) => (
                    <Fragment key={`${stat.value}-${stat.label}`}>
                        {index > 0 ? (
                            <div aria-hidden className="hidden h-[70px] w-px shrink-0 bg-[#f8f8f8] sm:block" />
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
