"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import laptopPhoto from "@/assets/WhatWeDo/Digital Engineering/webp/Digital_EAP.webp";

const TABS = [
    {
        label: "Enterprise Application Development",
        title: "Enterprise Application Development",
        desc: "We build custom applications engineered to your business processes, not forced to fit a generic template."
    },
    {
        label: "Application Modernization",
        title: "Application Modernization",
        desc: "We modernize legacy applications into scalable, cloud-native systems without disrupting the business processes that depend on them."
    },
    {
        label: "System Integration",
        title: "System Integration",
        desc: "We connect disparate systems and platforms into a unified architecture, so data and processes flow cleanly across your enterprise."
    },
    {
        label: "Platform Engineering",
        title: "Platform Engineering",
        desc: "We build the internal platforms and tooling that let engineering teams ship faster, safer, and with less operational overhead."
    },
];

export default function EnterpriseSoftware() {
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
        <section className="w-full py-10 sm:py-8 px-6 sm:px-0 flex flex-col items-center gap-8 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">Enterprise Software Development & Modernization</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Flagship engineering services for custom software, modernization, and integration.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-[100px] w-full lg:pl-[50px]">
                {/* Tabs column: dimensions match User Research & Design Systems */}
                <div className="flex flex-col justify-between w-full lg:w-96 h-auto lg:h-96 gap-2 lg:gap-0 shrink-0">
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

                {/* Image panel: Figma's own spec for this section is wider/shorter (798:446) than User Research's, and runs flush to the screen's right edge */}
                <div className="relative w-full lg:flex-1 aspect-[798/446] mx-auto lg:mx-0 overflow-hidden">
                    <Image src={laptopPhoto} alt="" fill className="object-cover" />
                    {/* Clear at top, dark at bottom — for white text legibility, matches Figma */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute text-white inset-0"
                        >
                            <p className="text-2xl font-medium">{activeTab.title}</p>
                            <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
                                {activeTab.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}


