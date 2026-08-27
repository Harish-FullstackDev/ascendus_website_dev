"use client";

import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section7_Bg.svg";

export default function EdgeComputing() {
    return (
        <section className="relative w-full h-[420px] sm:h-[471px] overflow-hidden bg-[#c2e3f9]">
            {/* Fixed Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${buildingPhoto.src})`,
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c2e3f9] via-[#c2e3f9]/80 sm:via-[#c2e3f9]/30 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 h-full flex flex-col justify-center gap-4 sm:gap-6 px-6 sm:px-[52px] max-w-[540px]"
            >
                <h2 className="text-black text-2xl sm:text-[32px] font-semibold">
                    Support Studio Technologies Innovation Edge
                </h2>

                <p className="text-black text-lg sm:text-2xl font-normal">
                    Why enterprises choose Support Studio Technologies for emerging tech deployment.
                </p>

                <p className="text-black text-base sm:text-lg font-light leading-snug">
                    SAP-integrated emerging tech deployment
                    o Pilot-to-scale methodology
                    o Cross-industry innovation experience
                    o Early quantum readiness assessment
                    o Industry 4.0 delivery capability
                    o Value-first technology evaluation
                </p>
            </motion.div>
        </section>
    );
}