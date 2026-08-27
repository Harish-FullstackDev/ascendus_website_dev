"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import grcBg from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/Section8_Bg.svg";

export default function GovernanceRiskCompliance() {
    return (
        <div className="relative h-[140vh] sm:h-[200vh]">
            <div className="sticky top-0 h-[70vh] sm:h-screen w-full overflow-hidden">
                {/* Fixed Background */}
                <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${grcBg.src})`,
                    }}
                />

                <div className="absolute inset-0 bg-black/40 sm:hidden" />
            </div>

            <div className="absolute inset-0 z-10 flex my-10 justify-center sm:items-start sm:justify-start">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="
                                w-[90%]
                                max-w-md
                                sm:max-w-[616px]
                                h-[350px]
                                sm:min-h-0


                                p-6
                                sm:p-0

                                
                                bg-white/10
                                backdrop-blur-xl
                                border border-white/20
                                shadow-2xl

                                sm:rounded-none
                                sm:bg-transparent
                                sm:backdrop-blur-none
                                sm:border-0
                                sm:shadow-none

                                sm:px-[52px]
                                sm:pt-[8%]
                            "
                >
                    <h2 className="font-heading text-white sm:text-black text-2xl sm:text-[32px] font-semibold">
                        Governance, Risk &amp; Compliance
                    </h2>

                    <p className="text-white/90 sm:text-black text-lg sm:text-2xl">
                        Establishing Security Governance Across the Enterprise
                    </p>
                    <div className="text-white/80 sm:text-black/80 text-base sm:text-2xl font-light space-y-4">
                        <p>
                            Governance, Risk &amp; Compliance (GRC) provides the framework for managing cyber risks while ensuring
                            alignment with legal, regulatory, and organizational requirements.
                        </p>
                        <p>
                            An effective GRC program enables informed decision-making, strengthens accountability, and supports
                            continuous compliance across the enterprise.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
