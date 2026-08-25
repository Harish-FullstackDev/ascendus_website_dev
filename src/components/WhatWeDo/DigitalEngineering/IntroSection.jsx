"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introImage from "@/assets/WhatWeDo/Digital Engineering/Section2_Image.svg";

export default function IntroSection() {
    return (
        <section className="w-full py-10 sm:py-[40px] px-6 sm:px-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[143px] items-center max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[590px] shrink-0"
                >
                    <h2 className="text-black text-xl sm:text-2xl font-normal leading-snug">
                        Engineering Scalable Digital Products &amp; Enterprise Applications
                    </h2>

                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light leading-relaxed">
                        Modern businesses need digital platforms that are scalable, secure, resilient, and built for
                        continuous innovation. At Support Studio Technology (SST), we design, develop, and modernize
                        enterprise-grade applications that power business transformation. From custom web and mobile
                        applications to cloud-native platforms, microservices, DevOps, and system integration, we
                        deliver high-performance digital solutions that accelerate growth and enhance operational
                        efficiency.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full max-w-[414px] aspect-[414/268] lg:w-[414px] shrink-0 bg-black"
                >
                    <Image
                        src={introImage}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}