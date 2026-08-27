"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import infraPhoto from "@/assets/WhatWeDo/Cloud and Infrastructure/Section7_image.svg";

export default function InfrastructureServices() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[0px] flex justify-center">
            <div className="w-full max-w-screen flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-[80px]">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left w-full lg:w-[647px] pl-6 sm:pl-[100px]"
                >
                    <h2 className="text-[#0d0c22] text-2xl font-semibold">Infrastructure Services</h2>
                    <p className="text-black text-lg font-normal">Build a Reliable Technology Foundation</p>
                    <p className="text-[#3d3d4e] text-lg font-light">
                        Design, deploy, and manage enterprise infrastructure that supports business-critical
                        applications with high availability and performance.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full max-w-[503px] h-[240px] sm:h-[340px] lg:h-[412px] lg:ml-auto shrink-0 overflow-hidden"
                >
                    <Image src={infraPhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
