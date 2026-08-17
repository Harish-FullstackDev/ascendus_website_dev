"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import architecturePhoto from "@/assets/WhatWeDo/Business Advisory/Section5_Enterprise_Architecture.svg";

const TABS = [
    {
        label: " UI/UX Design",
        title: " UI/UX Design",
        subtitle: "Make Smarter Technology Decisions",
        desc: "Provide strategic IT consulting to optimize technology investments, improve governance, and modernize enterprise systems. Our assessments help identify operational bottlenecks, align systems, and establish a foundation for scalable growth."
    },
    {
        label: "Product Design",
        title: "Product Design",
        subtitle: "Optimize Your Software Portfolio",
        desc: "Rationalize and modernize your application landscape to reduce complexity, lower operational costs, and support business agility. We design robust architectures that ensure seamless application communication and long-term sustainability."
    },
    {
        label: " User Research",
        title: " User Research",
        subtitle: "Build a Resilient Infrastructure",
        desc: "Establish modern infrastructure, hardware, and network blueprints that support high performance, scalability, and security. We design tech stacks that adapt to changing business demands and future technological trends."
    },
    {
        label: " Design Systems",
        title: " Design Systems",
        subtitle: "Bridge Strategy and Operations",
        desc: "Align your business strategies with operational structures, capabilities, and key processes. We help define organizational structures and workflow paths that make strategy execution smoother and more predictable."
    },
];

export default function EnterpriseArchitecture() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TABS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const activeTab = TABS[active];

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px] flex flex-col items-center gap-8 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1011px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">User Research & Design Systems
                </h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Flagship UX/UI, product, and design system capabilities
                </p>
            </motion.div>

            {/* Matches Figma "Frame 2147240234": justify-between, padding 60/57, gap 14 */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center gap-8 lg:gap-3.5 w-full lg:py-[60px] lg:px-[57px]">
                {/* Tabs column: w-96 h-[553px] justify-between */}
                <div className="flex flex-col justify-between w-full lg:w-96 h-auto lg:h-[553px] shrink-0">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.label}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => {
                                setIsPaused(false);
                            }}
                            onClick={() => setActive(index)}
                            className={`text-left border-l-[3px] flex items-center h-12 px-3.5 transition-colors ${index === active
                                    ? "border-[#0061af] text-black"
                                    : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <span className="text-base sm:text-lg font-light">{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="relative flex-1 w-full aspect-[687/581] max-w-[687px] mx-auto lg:mx-0 overflow-hidden">
                    <Image src={architecturePhoto} alt="" fill className="object-cover" />
                    {/* Clear at top, solid black at bottom — matches Figma's from-black/0 to-black */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-6 sm:left-[40px] right-6 sm:right-[40px] bottom-6 sm:bottom-[40px] text-white flex flex-col gap-2"
                        >
                            <p className="text-white text-2xl sm:text-3xl font-medium">{activeTab.title}</p>
                            <p className="text-white text-xl sm:text-2xl font-normal">{activeTab.subtitle}</p>
                            <p className="text-white/95 text-sm sm:text-lg font-light leading-relaxed max-w-[580px]">
                                {activeTab.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}