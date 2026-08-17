"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import devSecOpsBg from "@/assets/WhatWeDo/Cloud and Infrastructure/Section8_Bg.svg";

export default function DevSecOps() {
    return (
        <section className="w-full px-6 sm:px-0">
            <div className="relative w-full max-w-screen mx-auto h-[380px] sm:h-[440px] lg:h-[488px] overflow-hidden">
                <Image src={devSecOpsBg} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 sm:from-white/80 via-white/10 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative h-full flex flex-col justify-center gap-4 sm:gap-6 max-w-[500px] px-6 sm:px-[52px]"
                >
                    <p className="text-black text-2xl sm:text-[32px] font-medium">Architectural Resilience Strategy</p>
                    <p className="text-black text-xl sm:text-2xl font-normal">
                        The principles that guide our cloud and infrastructure deployments
                    </p>
                    <p className="text-black text-base sm:text-lg font-light">
                        Infrastructure should be the thing your business never has to think about. That takes deliberate design.
                    </p>

                </motion.div>
            </div>
        </section>
    );
}
