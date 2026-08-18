"use client";

import { useState } from "react";
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
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="w-full py-10 sm:py-16 flex flex-col items-center gap-8 sm:gap-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[841px] text-center px-6"
            >
                <h2 className="text-black text-2xl font-normal">Modern Stack & API Engineering</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
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
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0061af] text-sm font-medium text-white">
                            {index + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-black text-base font-medium">{step.title}</p>
                            <p className="text-[#515151] text-sm font-light leading-snug">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: horizontal image banner with a highlighted active step on hover */}
            <div className="relative hidden sm:block w-full h-[544px] overflow-hidden">
                <Image src={changeBg} alt="" fill className="object-cover" />
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to bottom, rgba(102,102,102,0) 0%, rgba(0,0,0,0.77) 85.6%)" }} />

                <div className="absolute inset-0 flex">
                    {STEPS.map((step, index) => {
                        const isHovered = index === hoveredIndex;
                        return (
                            <div
                                key={step.title}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`relative flex-1 flex flex-col items-center justify-center gap-5 px-4 text-left transition-colors duration-300 ${isHovered ? "bg-[#0061af]/75 cursor-pointer" : "cursor-pointer"
                                    }`}
                            >
                                <p className="text-white text-xl font-medium w-[240px]">{step.title}</p>
                                {isHovered && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white text-base font-light leading-snug w-[240px]"
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

