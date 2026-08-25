"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDesignPhoto from "@/assets/WhatWeDo/Digital Engineering/webp/Digital_Longevity.webp";

const BOXES = [
    {
        title: "Applications Built to Last",
        desc: "We engineer enterprise applications with the architecture discipline to handle real transaction volume and change over years, not just the first release cycle",
    },
    {
        title: "Modernizing Without Starting Over",
        desc: "Capacity planning, cost governance, and automation are built into the architecture from the start, so growth does not force a redesign eighteen months later.",
    },
];

export default function LongevityLegacyRefactoring() {
    return (
        <section className="w-full py-10 px-6 sm:p-[64px] bg-[#f3f6f9]">
            {/* Two columns fill the full padded width via proportional flex-grow (≈654:475,
                the Figma ratio) instead of fixed px, so they scale together on any desktop
                width instead of leaving a mismatched gap between them. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-6 w-full">
                {/* Left column: title/description sits only above the cards, level with the image's top */}
                <div className="flex flex-col gap-10 lg:gap-[75px] w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-[28px] font-medium">Longevity &amp; Legacy Refactoring</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            How we engineer software for scale and long-term stability.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6 w-full lg:flex-1"
                    >
                        {BOXES.map((box) => (
                            <div
                                key={box.title}
                                className="bg-white w-full sm:flex-1 lg:h-full flex flex-col items-start gap-12 lg:gap-16 px-6 py-8"
                            >
                                <p className="text-[#2E3033] text-2xl font-medium">{box.title}</p>
                                <p className="text-[#55595E] text-lg font-light">{box.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:flex-[475_1_0%] aspect-auto lg:aspect-[475/563] overflow-hidden"
                >
                    <Image src={serviceDesignPhoto} alt="" fill className="object-cover object-bottom" />
                </motion.div>
            </div>
        </section>
    );
}

