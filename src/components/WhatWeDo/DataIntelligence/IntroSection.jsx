"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introImage from "@/assets/WhatWeDo/Data Inteligent/Section2_image.svg";

export default function IntroSection() {
    return (
        <section className="w-full overflow-x-hidden py-10 sm:py-[40px] px-6 sm:px-[0px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center max-w-screen mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[850px] shrink-0 pl-0 sm:pl-[100px]"
                >
                    <h2 className="text-black text-xl sm:text-2xl font-semibold">
                        Infrastructure Services
                    </h2>
                    <p className="text-black text-base sm:text-lg font-light">
                        Build a Reliable Technology Foundation
                    </p>
                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light leading-relaxed">
                        Design, deploy, and manage enterprise infrastructure that supports business-critical
                        applications with high availability and performance .Design, deploy, and manage enterprise
                        infrastructure that supports business-critical applications with high availability and
                        performance Design, deploy, and manage enterprise infrastructure that supports business-critical
                        applications with high availability and performance Design, deploy, and manage enterprise infrastructure
                        that supports business-critical applications with high availability and performance
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[503px] h-[280px] sm:h-[340px] lg:h-[396px] shrink-0 bg-black lg:ml-auto"
                >
                    <Image src={introImage} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}