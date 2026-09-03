"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/overview.png";

export default function Overview() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-[64px] sm:py-[64px] flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full sm:flex-1"
            >
                <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold">
                    Microsoft, running next to SAP,<br /> not instead of it
                </h2>
                <p className="text-[#55595E] text-lg font-light leading-[1.5]">
                    Most enterprises we work with run Microsoft and SAP side by side already, Microsoft handling
                    productivity, subsidiary operations, or reporting that doesn&apos;t need full SAP weight behind
                    it. Microsoft Services covers the cloud, collaboration, low-code, CRM, and analytics work on
                    that side of the landscape, designed to connect cleanly to the SAP core rather than duplicate it.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full sm:w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={overviewImage} alt="" fill className="object-cover" />
            </motion.div>
        </section>
    );
}