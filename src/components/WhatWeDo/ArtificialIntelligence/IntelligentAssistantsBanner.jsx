"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bannerBg from "@/assets/WhatWeDo/Artificial Intelligence/Section7_IntelligentAssistants_Bg.svg";

export default function IntelligentAssistantsBanner() {
    return (
        <section className="relative w-full h-[420px] sm:h-[560px] overflow-hidden bg-black">
            {/* Fixed Background */}
            <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bannerBg.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/10" />
            <div className="absolute inset-0 flex items-center px-6 sm:px-[50px] lg:px-[80px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-5 sm:gap-6 max-w-[620px] text-white"
                >
                    <h2 className="text-2xl sm:text-4xl font-medium">Intelligent Assistants</h2>
                    <p className="text-base sm:text-lg font-light text-white/90">
                        Deploy AI-powered assistants that understand context, execute multi-step tasks, and
                        continuously learn from every interaction — extending your team&apos;s capacity without
                        extending headcount.
                    </p>
                    <p className="text-base sm:text-lg font-light text-white/90">
                        From automating routine workflows to orchestrating complex, multi-agent processes,
                        intelligent assistants free your people to focus on judgment, creativity, and relationships.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
