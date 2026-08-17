"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDesignPhoto from "@/assets/WhatWeDo/Digital Engineering/new/Longevity.jpg";

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
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[52px] bg-[#f5f6f6]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-3 max-w-[1390px] mx-auto mb-10 sm:mb-[47px]"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">Longevity & Legacy Refactoring</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    How we engineer software for scale and long-term stability.                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full lg:w-auto shrink-0 mt-0 md:mt-[180px]"
                >
                    {BOXES.map((box) => (
                        <div
                            key={box.title}
                            className="bg-white w-full sm:w-[350px] min-h-[331px] p-8 flex flex-col justify-between gap-6"
                        >
                            <p className="text-black text-2xl font-medium">{box.title}</p>
                            <p className="text-[#6c6c6c] text-base font-light">{box.desc}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[600px] h-[300px] sm:h-[480px] lg:h-[560px] overflow-hidden"
                >
                    <Image src={serviceDesignPhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
