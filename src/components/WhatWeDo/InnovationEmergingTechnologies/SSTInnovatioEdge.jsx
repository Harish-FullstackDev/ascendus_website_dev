"use client";

import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/webp/Innovation_SST_EDGE.webp";

export default function SSTInnovatioEdge() {
    return (
        <section className="relative w-full min-h-[460px] sm:min-h-[471px] overflow-hidden bg-[#66cdf3]">
            {/* Fixed Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${buildingPhoto.src})`,
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#66cdf3] via-[#66cdf3]/80 sm:via-[#66cdf3]/30 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 h-full flex flex-col justify-center gap-4 sm:gap-6 px-6 sm:px-[64px] py-10 sm:py-14 max-w-[690px]"
            >
                <h2 className="text-black text-2xl sm:text-[32px] font-medium">
                    Ascendus Innovation Edge
                </h2>

                <p className="text-black text-lg sm:text-2xl font-normal">
                    Why enterprises choose Ascendus for emerging tech deployment.
                </p>

                <ul className="list-disc text-black text-base sm:text-lg font-light leading-snug space-y-1">
                    <li>SAP-integrated emerging tech deployment</li>
                    <li>Pilot-to-scale methodology</li>
                    <li>Cross-industry innovation experience</li>
                    <li>Early quantum readiness assessment</li>
                    <li>Industry 4.0 delivery capability</li>
                    <li>Value-first technology evaluation</li>
                </ul>
            </motion.div>
        </section>
    );
}
