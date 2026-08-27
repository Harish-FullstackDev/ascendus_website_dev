"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import lifecycleBg from "@/assets/WhatWeDo/Artificial Intelligence/Section13_AILifecycle_Bg.svg";

const STEPS = [
    {
        number: 1,
        title: "Assess",
        desc: "Evaluate your current security posture, risks, and compliance requirements.",
    },
    {
        number: 2,
        title: "Protect",
        desc: "Implement preventive controls across applications, infrastructure, users, and data.",
    },
    {
        number: 3,
        title: "Monitor",
        desc: "Continuously monitor systems to identify threats, anomalies, and security events in real time.",
    },
    {
        number: 4,
        title: "Respond",
        desc: "Contain incidents quickly through structured response plans and expert security support.",
    },
    {
        number: 5,
        title: "Recover",
        desc: "Restore business operations while maintaining data integrity and operational resilience.",
    },
    {
        number: 6,
        title: "Improve",
        desc: "Continuously strengthen your cybersecurity strategy to address emerging",
    },
];

export default function AILifecycle() {
    return (
        <section className="w-full">
            <div className="relative h-[220px] sm:h-[544px] sm:-mb-[304px]">
                <Image src={lifecycleBg} alt="" fill className="object-cover object-[center_0%]" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative bg-black/80 w-full py-10 sm:py-0 sm:h-[304px] flex items-center px-6 sm:px-[69px]"
            >
                <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-x-4 gap-y-8 sm:gap-0 w-full">
                    {STEPS.map((step) => (
                        <div
                            key={step.number}
                            className="flex flex-col items-center gap-3 sm:gap-[11px] w-[45%] sm:w-[160px] text-center"
                        >
                            <div className="bg-white rounded-full size-[44px] sm:size-[60px] flex items-center justify-center text-black text-xl sm:text-[32px] font-semibold shrink-0">
                                {step.number}
                            </div>
                            <p className="text-white text-base sm:text-xl font-semibold">{step.title}</p>
                            <p className="text-[#b7b7b7] text-sm sm:text-base font-light text-center sm:text-left sm:translate-x-12 leading-snug">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

