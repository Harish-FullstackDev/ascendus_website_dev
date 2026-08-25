"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import matterPhoto from "@/assets/WhatWeDo/Intelligent Automation/new/Positioning.jpg";

export default function PositioningStatement() {
    return (
        <section className="w-full px-6 py-10 sm:pl-[64px] sm:pr-[64px] sm:py-[64px] bg-[#f3f6f9]">

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[143px]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-[700px] shrink-0 flex flex-col gap-2 text-[#3d3d4e]"
                >
                    <h2 className="text-[28px] text-[#2E3033] font-medium leading-normal">
                        Smart Automation
                    </h2>

                    <p className="text-lg text-[#55595E] font-light leading-relaxed">
                        Enterprise teams lose valuable time to manual, repetitive work. We identify high-impact opportunities for automation and transform them into intelligent RPA, workflow, and AI-powered solutions that improve efficiency, reduce costs, and scale with your business—without creating a complex ecosystem of fragile bots.
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


