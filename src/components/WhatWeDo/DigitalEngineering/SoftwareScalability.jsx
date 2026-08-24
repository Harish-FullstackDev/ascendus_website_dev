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
                className="flex flex-col items-center gap-2 text-center mb-10 sm:mb-16"
            >
                <h2 className="text-black text-2xl font-medium">
                    Software Scalability
                </h2>

                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Positioning enterprise software as a driver of agility rather than operational constraint.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[143px] lg:items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full flex-1 flex-col gap-5 text-[#3d3d4e]"
                >
                    <p className="text-3xl font-normal leading-normal">
                        Positioning enterprise software as a driver of agility
                        rather than operational constraint.
                    </p>

                    <p className="text-xl font-light leading-[1.3]">
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
                    className="relative w-full lg:w-[567px] shrink-0 overflow-hidden lg:flex-none"
                >
                    <Image
                        src={scalabilityPhoto}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}

