"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import integrationImage1 from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Scalable_AI_1.webp";
import integrationImage2 from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Scalable_AI_2.webp";

const STATS = [
    { value: "50+", label: "AI Solutions Delivered" },
    { value: "40%", label: "Faster Decision Cycles" },
    { value: "60%", label: "Processes Automated" },
    { value: "99.9%", label: "AI Operations Availability" },
];

// Splits e.g. "99.9%" into { prefix: "", number: 99.9, suffix: "%", decimals: 1 } so the
// count-up below can animate just the numeric part while reproducing the original
// formatting (suffix and decimal precision) exactly once the animation finishes.
function parseStatValue(raw) {
    const match = raw.match(/^([^\d.]*)([\d.]+)(.*)$/);
    if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };
    const [, prefix, numberStr, suffix] = match;
    const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
    return { prefix, number: parseFloat(numberStr), suffix, decimals };
}

// Counts up from 0 to the stat's value once it scrolls into view (`once: true`, matching
// the whileInView pattern used elsewhere in this file), via requestAnimationFrame rather
// than an interval so the rate stays tied to the browser's paint cadence.
function AnimatedStat({ value }) {
    const { prefix, number, suffix, decimals } = parseStatValue(value);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 1400;
        let start;
        let frame;

        const tick = (timestamp) => {
            if (start === undefined) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setDisplay(number * eased);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [isInView, number]);

    return (
        <p ref={ref} className="text-black text-2xl sm:text-4xl font-normal leading-tight">
            {prefix}
            {display.toFixed(decimals)}
            {suffix}
        </p>
    );
}

export default function ScalableAIDeployment() {
    return (
        <section className="w-full py-10 px-6 sm:p-16 border-t-2 border-[#cac9c9]/70">
            {/* Outer container — this creates the Figma-style x-axis spacing */}
            <div className="w-full max-w-[1400px]">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 w-full mx-auto text-center mb-16"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">
                        Scalable AI Deployment & Operational Workflows
                    </h2>

                    <p className="text-[#55595E] text-sm sm:text-lg font-light">
                        Detailed look at moving AI from proof-of-concept to production and agent-led automation.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-8 sm:gap-11">

                    {/* Row 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]"
                    >
                        <div className="flex flex-col gap-5 w-full">
                            <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">
                                From Pilot to Production
                            </h2>

                            <p className="text-[#55595E] text-base sm:text-lg font-light">
                                Most AI initiatives stall between proof of concept and enterprise rollout. We close that gap with implementation discipline: data readiness, integration architecture, and change management planned from the start, so pilots become platforms, not shelf ware.
                            </p>


                        </div>

                        <div className="relative w-full lg:w-[560px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                            <Image
                                src={integrationImage1}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]"
                    >
                        <div className="relative w-full lg:w-[560px] h-[220px] lg:h-[297px] shrink-0 bg-[#565656]">
                            <Image
                                src={integrationImage2}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-5 w-full">
                            <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">
                                AI Agents That Work Inside Your Processes
                            </h2>

                            <p className="text-[#55595E] text-base sm:text-lg font-light">
                                We design agents around real business workflows: approvals, exceptions, reconciliations, service requests, with clear boundaries for what they execute autonomously and what they escalate to your teams.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 w-full pt-0 md:pt-6">
                        {STATS.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`
                                    flex flex-col items-center justify-center text-center
                                    px-4 py-2 min-h-[85px] text-[#2E3033]
                                    ${index % 2 !== 0 ? "border-l border-black" : ""}
                                    ${index > 1 ? "border-t border-black lg:border-t-0" : ""}
                                    ${index > 0 ? "lg:border-l lg:border-black" : ""}
                                `}
                            >
                                <AnimatedStat value={stat.value} />

                                <p className="text-[#55595E] text-sm sm:text-lg font-light leading-tight mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}