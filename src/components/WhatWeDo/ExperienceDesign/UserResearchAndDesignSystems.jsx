"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import UIUXDesign from "@/assets/WhatWeDo/Experience Design/webp/Experience_UI_UX.webp";
import ProductDesign from "@/assets/WhatWeDo/Experience Design/webp/Experience_Product_Design.webp";
import UserResearch from "@/assets/WhatWeDo/Experience Design/webp/Experience_User_Research.webp";
import DesignSystems from "@/assets/WhatWeDo/Experience Design/webp/Experience_Design_System.webp";

const TABS = [
    {
        label: " UI/UX Design",
        title: " UI/UX Design",
        subtitle: "Make Smarter Technology Decisions",
        desc: "We design interfaces that make even complex enterprise workflows intuitive to navigate.",
        image: UIUXDesign,
    },
    {
        label: "Product Design",
        title: "Product Design",
        subtitle: "Optimize Your Software Portfolio",
        desc: "Rationalize and modernize your application landscape to reduce complexity, lower operational costs, and support business agility.",
        image: ProductDesign,
    },
    {
        label: " User Research",
        title: " User Research",
        subtitle: "Build a Resilient Infrastructure",
        desc: "Establish modern infrastructure, hardware, and network blueprints that support high performance, scalability, and security.",
        image: UserResearch,
    },
    {
        label: " Design Systems",
        title: " Design Systems",
        subtitle: "Bridge Strategy and Operations",
        desc: "Align your business strategies with operational structures, capabilities, and key processes.",
        image: DesignSystems,
    },
];

export default function UserResearchAndDesignSystems() {
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
        <section className="w-full px-6 sm:px-0 flex flex-col items-center gap-8 sm:gap-16 pt-10 sm:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1011px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">User Research & Design Systems
                </h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Flagship UX/UI, product, and design system capabilities
                </p>
            </motion.div>

            {/* Matches Figma "Frame 2147240196": justify-between, pl-14 (55px), gap 100px — row height now follows the image's own aspect ratio instead of a fixed px cap */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-[100px] w-full lg:pl-[64px]">
                {/* Tabs column: Figma "size-96" — w-96 h-96, items packed tight with justify-between */}
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
                            <span className="text-base sm:text-2xl font-light">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Image panel: ~55% of the viewport at desktop (Figma's 687px was 55% of its own ~1249px reference frame, not a literal cap) */}
                <div className="relative w-full lg:w-[50vw] lg:max-w-[950px] aspect-[687/581] mx-auto lg:mx-0 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={activeTab.image}
                                alt={activeTab.title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`text-${active}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-[8%] sm:left-[13%] right-[8%] sm:right-auto top-[38%] sm:top-[60%] sm:w-[61%] text-[#e4e4e4]"
                        >
                            <p className="text-lg sm:text-2xl font-light leading-[1.4] sm:leading-[41px]">
                                {activeTab.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

