"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import heroRule from "@/assets/Careers/icons/hero-rule.svg";

// Figma (1619:10952) drops the login card and stats: the hero is now just the
// copy block, roughly 28% down the 800px frame (top 227.5), with the hairline
// under the eyebrow running the full 809px text column.
export default function CareersPageHeroText() {
    return (
        <div className="absolute inset-x-0 top-[24%] px-6 sm:top-[28%] sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex w-full max-w-[809px] flex-col gap-3"
            >
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium uppercase leading-[1.2] tracking-[1.8px] text-white sm:text-[18px]">
                        Careers
                    </p>
                    <Image src={heroRule} alt="" className="h-px w-full" />
                </div>

                <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-medium capitalize leading-[1.2] text-white">
                    Enterprise Transformation.
                    <br className="hidden sm:block" /> Delivered with SAP Expertise.
                </h1>

                <p className="text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                    We help enterprises modernize SAP, transform business processes
                    <br className="hidden lg:block" /> and build connected digital enterprises that create lasting
                    business value.
                </p>
            </motion.div>
        </div>
    );
}
