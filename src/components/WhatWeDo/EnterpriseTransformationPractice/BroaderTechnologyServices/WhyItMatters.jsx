"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/hero-bg.png";

export default function WhyItMatters() {
    return (
        <section className="relative w-full px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col items-center gap-8 sm:gap-10 overflow-hidden">
            <Image src={bgImage} alt="" fill className="object-cover -z-20" />
            <div className="absolute inset-0 bg-[#1c5f85]/80 -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-white text-2xl sm:text-[28px] font-medium">Why It Matters</h2>
                <p className="text-white/90 text-lg font-light">
                    Integration is where most transformations actually fail
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    The SAP core rarely causes a transformation to stall. What surrounds it does: systems that
                    don&apos;t talk to each other, data no one trusts, users who quietly revert to their old
                    process.
                </p>
                <p>
                    We treat that surrounding work as core to delivery, not an afterthought bolted onto the SAP
                    project plan after the budget for it has already been spent elsewhere.
                </p>
            </motion.div>
        </section>
    );
}
