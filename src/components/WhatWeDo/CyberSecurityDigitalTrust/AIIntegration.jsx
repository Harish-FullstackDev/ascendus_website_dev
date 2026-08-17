"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import integrationImage1 from "@/assets/WhatWeDo/Artificial Intelligence/Section8_AIIntegration_Image1.jpg";
import integrationImage2 from "@/assets/WhatWeDo/Artificial Intelligence/Section8_AIIntegration_Image2.jpg";


export default function AIIntegration() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[100px]">
            <div className="flex flex-col gap-10 sm:gap-[70px] max-w-screen mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 max-w-[560px] mx-auto text-center"
                >
                    <h2 className="text-black text-2xl sm:text-[28px] font-medium">
                        Access Control & Simulated Attacks
                    </h2>
                    <p className="text-[#515151] text-base sm:text-lg font-light">
                        Securing SAP permissions and testing environments against real-world threats.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[23px]"
                >
                    <div className="flex flex-col gap-5 w-full">
                        <p className="text-black text-lg sm:text-2xl font-light">Access Control That Actually Holds</p>
                        <p className="text-[#4a5568] text-base sm:text-lg font-light">
                            We design identity and access management, including
                            SAP segregation of duties, so the right people have the right access and nothing more,
                            closing the gaps that generic access reviews miss.
                        </p>

                    </div>
                    <div className="relative w-full lg:w-[560px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                        <Image src={integrationImage1} alt="" fill className="object-cover" />
                    </div>
                </motion.div>

                <div className="flex flex-col gap-8 sm:gap-11">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[23px]"
                    >
                        <div className="relative w-full lg:w-[560px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                            <Image src={integrationImage2} alt="" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <p className="text-black text-lg sm:text-2xl font-light">
                                Finding the Gaps Before Attackers Do                            </p>
                            <p className="text-[#4a5568] text-base sm:text-lg font-light">

                                We run vulnerability assessments and penetration
                                testing that go beyond automated scans, simulating real attack paths across your
                                infrastructure, applications, and SAP environment
                            </p>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}

