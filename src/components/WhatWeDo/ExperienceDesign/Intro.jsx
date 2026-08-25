"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section2_image.svg";

const capabilities = [
    "Research-led design process",
    "Enterprise UX specialization",
    "Reusable design systems",
    "Accessibility built in",
    "Engineering-ready handoff",
    "Cross-platform design capability",
];

export default function Intro() {
    return (
        <section className="w-full max-w-[1280px] mx-auto py-10 px-6 sm:px-[50px] flex flex-col gap-10">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1011px] text-center mx-auto"
            >
                <h2 className="text-black text-2xl font-medium">
                    Our Design Capabilities
                </h2>

                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Key differentiators of our design practice
                </p>
            </motion.div>

            {/* Content */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-10 sm:gap-[143px]">

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
                    className="flex flex-col gap-7 w-full sm:w-[623px] shrink-0"
                >
                    <ul className="text-[#3d3d4e] text-lg font-light list-disc pl-5 space-y-1">
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
                    className="relative w-full sm:w-[414px] h-[220px] sm:h-[332px] shrink-0 bg-black"
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