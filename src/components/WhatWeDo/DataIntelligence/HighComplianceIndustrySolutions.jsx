"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/WhatWeDo/Data Inteligent/webp/Data_High_Complaince.webp";

export default function HighComplianceIndustrySolutions() {
    return (
        <section className="w-full py-10 sm:py-16">
            <div className="flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[760px] mx-auto text-center px-6"
                >
                    <h2 className="text-[#2E3033] text-[28px] font-medium">
                        High-Compliance Industry Solutions
                    </h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Data environments built for strictly regulated regional sectors.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col items-center sm:items-stretch lg:flex-row lg:items-center gap-8 lg:gap-[14px] px-6 sm:px-0 sm:pl-[10px] pt-10 sm:pt-[73px] pb-8 sm:pb-[52px]"
                >
                    <div className="hidden sm:block absolute left-0 top-0 h-full md:h-75 w-[9px] bg-[#1c5f85] mt-[40px]" />

                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-5 w-full lg:flex-1 sm:pl-[50px] sm:pr-[50px] lg:pr-40">
                        <p className="text-[#2E3033] text-lg sm:text-2xl font-medium">
                            Overview<span className="font-light">.</span>
                        </p>
                        <div className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed flex flex-col gap-4">
                            <p>
                                We deliver secure, traceable solutions built around stringent regulatory
                                requirements. Our platforms enable transparent data management, real-time
                                visibility, and controlled access.
                            </p>
                            <p>
                                From compliance to reporting, every workflow is designed for consistency,
                                accountability, and trust.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[46%] lg:max-w-[569px] aspect-[569/252] shrink-0 bg-[#565656]">
                        <Image src={overviewImage} alt="" fill className="object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

