"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import highlightBg from "@/assets/WhatWeDo/Experience Design/Section7_UserResearch_Bg.png";

const COLUMNS = [
    {
        title: "Internet of Things (IoT)",
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

export default function IndustryDigitalTwins() {
    // Autoplay: cycles which column is "active" (hover-revealed state)
    // automatically, same behavior as OurAIServices and other WhatWeDo cards.
    // Pauses the instant the mouse enters the grid so manual hover still
    // drives the active column, and resumes cycling from wherever it left
    // off on mouse leave — it does not reset back to the first column.
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % COLUMNS.length);
        }, 3500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16 px-6 sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-2xl font-semibold">Industry 4.0, IoT & Digital Twins</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Core emerging tech capabilities for real-world enterprise application.

                </p>
            </motion.div>

            <div
                className="grid grid-cols-2 lg:grid-cols-4  w-full  mx-auto"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {COLUMNS.map((col, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <motion.div
                            key={col.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`relative px-6 py-10 sm:py-14 min-h-[380px] sm:min-h-[550px] overflow-hidden transition-colors duration-300
                                ${isActive ? "text-white" : "text-[#2E3033]"}
                                /* Mobile */
                                border border-[#8794A3]
                                border-l-0
                                ${index > 1 ? "border-t-0" : ""}

                                /* Desktop */
                                lg:border-t
                                lg:border-b
                                lg:border-r
                                lg:border-l-0
                                ${index === 3 ? "lg:border-r-0" : ""}`}
                        >
                            <div
                                aria-hidden
                                className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                            >
                                <div className="absolute inset-0 bg-[#0a2b3e]/90" />
                            </div>
                            <div className="relative md:mt-15 flex flex-col gap-12 sm:gap-20">
                                <h2 className="text-xl sm:text-[32px] font-semibold">
                                    {col.title}
                                </h2>

                                <div className="flex flex-col gap-2 text-sm sm:text-xl font-light">
                                    {col.items.map((item) => (
                                        <p key={item}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section >
    );
}
