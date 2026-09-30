"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import chevronRight from "@/assets/SAP-S4HanaTransformation/icons/chevron-right-24.svg";
import heroRule from "@/assets/SAP-S4HanaTransformation/icons/hero-rule.svg";

// Figma (828:949) puts the copy block roughly 30% down the 800px frame and runs
// the hairline under the eyebrow across the full 1056px text column. The
// "Services" crumb is muted (#5c7088) and links back to the parent page.
export default function SapS4HanaHeroText() {
    return (
        <div className="absolute inset-x-0 top-[24%] px-6 sm:top-[30%] sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex w-full max-w-[1056px] flex-col gap-3"
            >
                <div className="flex flex-col gap-3">
                    <p className="flex flex-wrap items-center gap-x-1 text-sm font-medium uppercase leading-[1.2] tracking-[1.8px] text-white sm:text-[18px]">
                        <Link href="/services/" className="text-[#5c7088] transition-colors duration-300 hover:text-white">
                            Services
                        </Link>
                        <Image src={chevronRight} alt="" className="size-5 sm:size-6" />
                        <span>SAP S/4HANA Transformation</span>
                    </p>
                    <Image src={heroRule} alt="" className="h-px w-full" />
                </div>

                <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-medium capitalize leading-[1.2] text-white">
                    Your SAP Core Should Move
                    <br className="hidden sm:block" /> Your Business Forward
                </h1>

                <p className="max-w-[562px] text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                    Move to S/4HANA with a clear plan, a simpler landscape and a foundation your teams can build on
                    for the next decade.
                </p>
            </motion.div>
        </div>
    );
}
