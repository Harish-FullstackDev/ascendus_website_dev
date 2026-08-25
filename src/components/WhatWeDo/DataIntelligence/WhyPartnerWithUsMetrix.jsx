"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import mdmBg from "@/assets/WhatWeDo/Data Inteligent/Section9_Bg.svg";

const STATS = [
    { value: "500+", label: "Data Pipelines Built" },
    { value: "99.9%", label: "Data Accuracy" },
    { value: "40%", label: "Faster Business Insights" },
    { value: "30+", label: "AI Models Deployed" },
];

const POINTS = [
    "SAP-certified delivery teams",
    "GCC regulatory awareness",
    "Governance built into every deployment",
    "Proven enterprise integration experience",
    "Outcome-based engagement models",
    "Cross-industry delivery track record"
];


// Animates a stat's numeric part counting up from 0 to its target value once
// it scrolls into view, preserving whatever prefix/suffix and decimal
// precision the original string carried (e.g. "500+", "99.9%").
function AnimatedStat({ value }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const match = value.match(/^([\d.]+)(.*)$/);
    const target = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : "";
    const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const [display, setDisplay] = useState((0).toFixed(decimals));

    useEffect(() => {
        if (!isInView || !match) return;
        const controls = animate(0, target, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate(latest) {
                setDisplay(latest.toFixed(decimals));
            },
        });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return (
        <p ref={ref} className="text-[#2E3033] text-xl sm:text-2xl font-medium">
            {match ? `${display}${suffix}` : value}
        </p>
    );
}

export default function WhyPartnerWithUsMetrix() {
    return (
        <section className="w-full py-10 sm:pt-8 sm:pb-0">
            <div className="w-full px-6 sm:px-[64px] py-10 lg:py-[32px]">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">

                    {/* Left */}
                    <div className="lg:pr-0 pl-0 ">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[28px] font-medium text-[#2E3033]"
                        >
                            Why Partner With Us
                        </motion.h2>
                    </div>

                    {/* Middle Line */}
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-60 bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="justify-self-start max-w-[467px]"
                    >
                        <ul className="list-disc marker:text-[#7f7f7f] pl-16 space-y-3 text-[#55595E] text-base sm:text-lg font-light">
                            {POINTS.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>


            <div className="bg-[#F3F6F9] w-full py-10 sm:p-16 px-6 flex flex-col  items-center ">
                <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-[#2d8ec5] text-2xl font-medium text-center"
                >

                </motion.h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[47px] w-full max-w-[1076px]">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            className="bg-[#FFFFFF] aspect-[233/161] flex flex-col items-center justify-center gap-2"
                        >
                            <AnimatedStat value={stat.value} />
                            <p className="text-[#2E3033] text-sm sm:text-lg font-light text-center px-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
