"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const COLUMNS = [
    {
        title: "Service Design",
        items: ["We design the end-to-end service experience, not just the interface, across every touchpoint."],
    },
    {
        title: "Prototyping",
        items: ["Interactive prototypes that let you test and validate design decisions before development begins."],
    },
    {
        title: "Accessibility",
        items: ["Design that meets accessibility standards, so every user can engage with your platform"],
    },
    {
        title: "Interaction Design",
        items: ["Micro interactions and flows designed to make digital products feel responsive and intuitive."],
    },
];

export default function SpecializedDesignDisciplines() {
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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Specialized Design Disciplines
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Additional services including service design, prototyping, and accessibility.
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
                                <div className="absolute inset-0 bg-[#002C4F]" />
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
