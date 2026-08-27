"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import scalabilityPhoto from "@/assets/WhatWeDo/Digital Engineering/webp/Digital_Software_Scalability.webp";

export default function SoftwareScalability() {
    return (
        <section className="w-full px-6 py-10 sm:px-16 sm:pb-[32px] sm:pt-16">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-10 flex flex-col items-center gap-2 text-center sm:mb-16"
            >
                <h2 className="text-[28px] font-semibold text-[#2E3033]">
                    Software Scalability
                </h2>

                <p className="text-base font-light text-[#55595E] sm:text-lg">
                    Positioning enterprise software as a driver of agility
                    rather than operational constraint.
                </p>
            </motion.div>

            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[143px]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex w-full flex-1 flex-col gap-5 text-[#3d3d4e]"
                >
                    <h2 className="text-2xl font-semibold text-[#2E3033]">
                        Positioning enterprise software as a driver of agility
                        rather than operational constraint.
                    </h2>

                    <p className="text-lg font-light leading-normal text-[#55595E]">
                        Introductory Focus: Enterprise applications age fast
                        when they are built without architecture discipline. We
                        engineer software, from customer-facing platforms to
                        internal enterprise systems, built for performance,
                        integration, and long-term maintainability, not just
                        launch day.
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
                    className="relative w-full shrink-0 overflow-hidden lg:w-[567px] lg:flex-none"
                >
                    <Image
                        src={scalabilityPhoto}
                        alt=""
                        width={467}
                        height={357}
                        className="h-auto w-full object-cover sm:h-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}
