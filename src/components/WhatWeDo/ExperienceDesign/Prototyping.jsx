"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import prototypingBg from "@/assets/WhatWeDo/Experience Design/Section6_Prototyping_Bg.png";

export default function Prototyping() {
    return (
        <div className="relative w-full h-[420px] sm:h-[520px] overflow-hidden">
            <Image src={prototypingBg} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-y-0 left-0 flex flex-col justify-center gap-4 sm:gap-6 max-w-[620px] px-6 sm:px-[60px]"
            >
                <h2 className="text-white text-2xl sm:text-[32px] font-semibold">Prototyping</h2>
                <p className="text-white text-lg sm:text-2xl font-normal">From Concept to Clickable Reality</p>
                <div className="text-white/80 text-base sm:text-2xl font-light space-y-3 sm:space-y-4">
                    <p>
                        Interactive prototypes let stakeholders and users experience a product before a single line of
                        code is written, turning abstract ideas into tangible, testable interfaces.
                    </p>
                    <p>
                        Rapid iteration on real user feedback catches usability issues early, reducing costly rework
                        and de-risking the build phase.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
