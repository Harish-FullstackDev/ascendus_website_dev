"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import matterPhoto from "@/assets/WhatWeDo/Intelligent Automation/new/Positioning.jpg";

export default function PositioningStatement() {
    return (
        <section className="w-full px-6 py-10 sm:pl-[72px] sm:pr-[40px] sm:py-[40px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-center mb-10 sm:mb-16"
            >
                <h2 className="text-black text-2xl font-medium">
                    Positioning Statement
                </h2>

                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Work Smarter. Automate Faster.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[143px]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-[700px] shrink-0 flex flex-col gap-5 text-[#3d3d4e]"
                >
                    <p className="text-3xl font-normal leading-normal">
                        Work Smarter. Automate Faster.
                    </p>

                    <p className="text-xl font-light leading-[1.3]">
                        Manual, repetitive processes quietly drain enterprise capacity. We
                        identify where automation delivers real time and cost savings, then build the RPA, workflow,
                        and AI-powered automation to capture it, without adding fragile, unmanageable bots to
                        your environment.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1,
                    }}
                    className="relative w-full lg:w-[467px] lg:ml-auto shrink-0 aspect-[467/357] overflow-hidden"
                >
                    <Image src={matterPhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}

