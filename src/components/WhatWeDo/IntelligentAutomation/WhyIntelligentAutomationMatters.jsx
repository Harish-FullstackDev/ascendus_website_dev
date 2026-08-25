"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import matterPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section2_image.svg";

export default function WhyIntelligentAutomationMatters() {
    return (
        <section className="w-full max-w-[1280px] mx-auto py-10 px-6 sm:px-[50px] flex flex-col sm:flex-row items-center gap-10 sm:gap-[143px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-7 w-full sm:w-[623px] shrink-0"
            >
                <h2 className="text-black text-2xl font-normal">Positioning Statement</h2>
                {/* <p className="text-black text-lg font-light">Work Smarter. Automate Faster.</p> */}
                <p className="text-[#3d3d4e] text-lg font-light">
                    Manual, repetitive processes quietly drain enterprise capacity. We
                    identify where automation delivers real time and cost savings, then build the RPA, workflow,
                    and AI-powered automation to capture it, without adding fragile, unmanageable bots to
                    your environment.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full sm:w-[414px] h-[220px] sm:h-[332px] shrink-0 bg-black"
            >
                <Image src={matterPhoto} alt="" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
