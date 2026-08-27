"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import highlightBg from "@/assets/WhatWeDo/Experience Design/Section7_UserResearch_Bg.png";

const COLUMNS = [
    {
        title: "Internet of Things (IoT):",
        items: ["We design connected systems that turn operational data into real-time visibility and faster decisions."],
    },
    {
        title: " Prototyping",
        items: ["We build virtual replicas of physical assets and processes that let you test and optimize before committing resources"],
    },
    {
        title: " Industry 4.0",
        items: ["We help manufacturers and operators connect equipment, data, and processes into a smart, responsive operation."],
    },
    {
        title: "Edge Computing",
        items: ["We bring processing closer to where data is generated, cutting latency for time-sensitive operations."],
    },
];

export default function Accessibility() {
    return (
        <section className="w-full py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[46px] px-6"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Industry 4.0, IoT & Digital Twins</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    Core emerging tech capabilities for real-world enterprise application.

                </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 border border-black/70 w-full  mx-auto">
                {COLUMNS.map((col, index) => (
                    <motion.div
                        key={col.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="group relative border border-black/70  px-6 py-10 sm:py-14 min-h-[380px] sm:min-h-[620px] overflow-hidden text-black transition-colors duration-300 hover:text-white"
                    >
                        <div
                            aria-hidden
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            <div className="absolute inset-0 bg-[#0a2b3e]/90" />
                        </div>
                        <div className="relative md:mt-15 flex flex-col gap-12 sm:gap-16">
                            <p className="text-xl sm:text-[32px] font-normal">{col.title}</p>
                            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm sm:text-lg font-light">
                                {col.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
