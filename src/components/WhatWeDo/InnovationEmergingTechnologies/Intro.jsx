"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section2_image.svg";

export default function Intro() {
    return (
        <section className="w-full py-10 sm:py-10 px-6 sm:px-[50px] flex flex-col sm:flex-row items-center gap-10 sm:gap-[80px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-5 max-w-[760px]"
            >
                <h2 className="text-black text-2xl font-normal">Innovation &amp; Emerging Technologies</h2>
                <p className="text-black text-lg font-light">
                    Helping Organizations Prepare for the Future with Next-Generation Technologies
                </p>
                <p className="text-[#3d3d4e] text-lg font-light">
                    Innovation is the foundation of long-term business success. As emerging technologies reshape
                    industries, organizations must embrace new possibilities to remain competitive and resilient. At
                    Support Studio Technology (SST), we help enterprises explore, adopt, and scale next-generation
                    technologies that drive innovation, optimize operations, and unlock new business opportunities.
                    From IoT and Digital Twins to Blockchain, Extended Reality, and Industry 4.0, we turn innovation
                    into measurable business value.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full lg:w-full h-[260px] lg:h-[360px] justify-self-end overflow-hidden"
            >
                <Image src={introPhoto} alt="" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
