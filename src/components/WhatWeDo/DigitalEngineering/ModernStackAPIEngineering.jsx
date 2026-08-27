"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import changeBg from "@/assets/WhatWeDo/Digital Engineering/webp/Digital_ModernStack.webp";

const STEPS = [
    { title: "Web Development", desc: "Enterprise-grade web platforms built for performance, security, and scale." },
    { title: "Mobile Applications", desc: "Native and cross-platform mobile experiences engineered for enterprise reliability." },
    { title: "API Development", desc: "Well-documented, secure APIs that make your systems easy to integrate and extend." },
    { title: "Microservices", desc: "Modular architectures that let you deploy, scale, and update services independently." },
    { title: "DevOps", desc: "CI/CD pipelines and delivery practices that get software into production faster, with fewer defects." },
];

export default function ModernStackAPIEngineering() {
    // First step is active by default; hovering another step takes over,
    // and the last-hovered step stays open (no reset to nothing). When the
    // user isn't interacting, it auto-advances every few seconds, pausing
    // while the row is hovered.
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setHoveredIndex((prev) => (prev + 1) % STEPS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full py-10 sm:py-16 flex flex-col items-center gap-8 sm:gap-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[841px] text-center px-6"
            >
                <h2 className="text-[#2E3033] text-[28px] font-semibold">Modern Stack & API Engineering</h2>
                <p className="text-[#55595E] text-lg sm:text-lg font-light">
                    Specialized engineering services from mobile to microservices.
                </p>
            </motion.div>

            {/* Mobile: stacked list — the 5-column banner is unreadable this narrow */}
            <div className="flex sm:hidden w-full flex-col gap-3 px-6">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-4 rounded-[10px] bg-[#eef6fb] px-5 py-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2d8ec5] text-sm font-semibold text-white">
                            {index + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#2E3033] text-base font-semibold">{step.title}</p>
                            <p className="text-[#55595E] text-sm font-light leading-snug">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: horizontal image banner with a highlighted active step on hover */}
            <div className="relative hidden sm:block w-full h-[544px] overflow-hidden">
                <Image src={changeBg} alt="" fill className="object-cover" />
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to bottom, rgba(102,102,102,0) 0%, rgba(0,0,0,0.77) 85.6%)" }} />

                <div
                    className="absolute inset-0 flex"
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {STEPS.map((step, index) => {
                        const isHovered = index === hoveredIndex;
                        return (
                            <div
                                key={step.title}
                                onMouseEnter={() => {
                                    setIsPaused(true);
                                    setHoveredIndex(index);
                                }}
                                className={`relative flex-1 flex flex-col items-center justify-center gap-5 px-4 text-left transition-colors duration-300 ${isHovered ? "bg-[#2d8ec5]/75 cursor-pointer" : "cursor-pointer"
                                    }`}
                            >
                                <h2 className="text-white text-2xl font-semibold w-[240px]">{step.title}</h2>
                                {isHovered && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white text-lg font-light leading-snug w-[240px]"
                                    >
                                        {step.desc}
                                    </motion.p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

