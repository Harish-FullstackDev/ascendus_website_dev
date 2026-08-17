"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import sectionImage from "@/assets/WhatWeDo/Artificial Intelligence/Section2_Image.jpg";

export default function WhyAIMatters() {
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
                    <h2 className="text-black text-xl sm:text-2xl font-normal">Why Artificial Intelligence Matters</h2>
                    <p className="text-black text-base sm:text-lg font-light">AI That Delivers Real Business Outcomes</p>
                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light leading-relaxed">
                        Leverage Generative AI to automate content creation, accelerate software development, improve
                        knowledge management, and enhance employee productivity.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[414px] h-[220px] sm:h-[268px] md:ml-[100px] shrink-0 bg-black"
                >
                    <Image src={sectionImage} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
