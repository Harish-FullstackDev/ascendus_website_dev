"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/IndustriesWeServe/bg.png";

const INDUSTRIES = [
    "Manufacturing & Industrial",
    "Life Sciences & Healthcare",
    "Financial Services",
    "Retail & Consumer Goods",
    "Logistics & Supply Chain",
    "Public Sector",
];

export default function IndustriesWeServe() {
    return (
        // Figma now uses a real photo behind a 70% black overlay here, replacing
        // the flat #1C5F85 placeholder this was originally built against.
        <section className="relative w-full overflow-hidden px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col items-center gap-10 sm:gap-14">
            <Image src={bgImage} alt="" fill className="object-cover pointer-events-none" />
            <div className="absolute inset-0 bg-black/70 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center gap-4 text-center"
            >
                <h2 className="text-white text-2xl sm:text-[28px] font-medium">Industries</h2>
                <p className="text-white text-lg font-light">Built for the sectors running SAP at scale</p>
            </motion.div>

            <div className="relative z-10 w-full max-w-[1152px] grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6 sm:gap-y-10">
                {INDUSTRIES.map((industry, index) => (
                    <motion.div
                        key={industry}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="border-b border-white/50 pb-4 flex items-center justify-center"
                    >
                        <p className="text-[#f3f6f9] text-xl sm:text-2xl font-extralight text-center">{industry}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
