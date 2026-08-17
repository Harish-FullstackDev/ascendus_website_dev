"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introPhoto from "@/assets/WhatWeDo/Experience Design/Section2_Image.jpg";

const capabilities = [
    "Research-led design process",
    "Enterprise UX specialization",
    "Reusable design systems",
    "Accessibility built in",
    "Engineering-ready handoff",
    "Cross-platform design capability",
];

export default function OurDesignCapabilities() {
    return (
        <section className="w-full px-6 py-10 sm:pl-[72px] sm:pr-[70px] sm:py-[40px]">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-center mb-10 sm:mb-16"
            >
                <h2 className="text-black text-2xl font-medium">
                    Our Design Capabilities
                </h2>

                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Key differentiators of our design practice
                </p>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row items-center lg:justify-between sm:px- gap-10 lg:gap-[143px]">

                {/* Capabilities List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1,
                    }}
                    className="flex flex-col gap-7 w-full lg:flex-[623] lg:max-w-[623px] min-w-0"
                >
                    <ul className="text-[#3d3d4e] text-lg sm:text-xl font-light list-disc pl-5 space-y-4">
                        {capabilities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.2,
                    }}
                    className="relative w-full lg:flex-[560] lg:max-w-[560px] aspect-[467/357] overflow-hidden bg-black"
                >
                    <Image
                        src={introPhoto}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </motion.div>

            </div>
        </section>
    );
}
