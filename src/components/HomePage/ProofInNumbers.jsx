"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
    { value: "400+", label: "Team of SAP Specialists" },
    { value: "200+", label: "SAP Engagements Delivered" },
    { value: "12+", label: "Industries Served" },
    { value: "5+", label: "Years of Experience" },
];

// Splits e.g. "400+" into { prefix: "", number: 400, suffix: "+", decimals: 0 } so the
// count-up below can animate just the numeric part while reproducing the original
// formatting exactly once the animation finishes. Same mechanics as the AnimatedStat
// in ScalableAIDeployment.jsx (the more complete of the two counter implementations
// already in the codebase).
function parseStatValue(raw) {
    const match = raw.match(/^([^\d.]*)([\d.]+)(.*)$/);
    if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };
    const [, prefix, numberStr, suffix] = match;
    const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
    return { prefix, number: parseFloat(numberStr), suffix, decimals };
}

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
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(number * eased);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [isInView, number]);

    return (
        <p ref={ref} className="font-urbane text-[#1c5f85] text-[28px] font-medium leading-normal">
            {prefix}
            {display.toFixed(decimals)}
            {suffix}
        </p>
    );
}

export default function ProofInNumbers() {
    return (
        <section className="w-full bg-[#F3F6F9] px-6 py-10 sm:p-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-10 sm:gap-16 "
            >


                {/* Single row, never wraps to a second level — matches Figma. A 2x2 grid
                    only on true mobile, where a one-row layout wouldn't fit at all. */}
                <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:flex sm:flex-row sm:flex-nowrap sm:items-stretch sm:justify-between sm:divide-x sm:divide-[#d3dae2]">
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-1 flex-col gap-2 items-center sm:px-10 first:sm:pl-0 last:sm:pr-0"
                        >
                            <AnimatedStat value={stat.value} />
                            <p className="text-[#55595E] text-lg font-light whitespace-nowrap">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
