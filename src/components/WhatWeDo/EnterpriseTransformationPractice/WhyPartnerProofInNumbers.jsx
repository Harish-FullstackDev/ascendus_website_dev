"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Figma node 2662:172 — a second, distinct "Proof in Numbers" instance that
// sits right after Why Partner With Us (not the same stats as the one near
// the hero at the top of this page). Styled after
// BroaderTechnologyServices/ProofInNumbers.jsx: stats sit directly inset in
// the section rather than in a floating overlapping card.
const STATS = [
    { value: "400+", label: "SAP engagements" },
    { value: "200+", label: "Microsoft deployments" },
    { value: "24/7", label: "AMS coverage" },
];

// Splits e.g. "400+" into { prefix: "", number: 400, suffix: "+", decimals: 0 } so the
// count-up below can animate just the numeric part while reproducing the original
// formatting exactly once the animation finishes.
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
        <p ref={ref} className="font-urbane text-[#1c5f85] text-2xl sm:text-[24px] font-medium leading-normal">
            {prefix}
            {display.toFixed(decimals)}
            {suffix}
        </p>
    );
}

export default function WhyPartnerProofInNumbers() {
    return (
        // Figma specifies a real drop-shadow around the whole panel here (not
        // just a top-edge separator like the Broader Tech version's own node
        // had) — kept as-is since it's what this specific node's data shows.
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-full bg-white px-6 py-8 sm:px-[64px] sm:py-[32px] shadow-[0px_4px_11px_rgba(0,0,0,0.25)]"
        >
            <div className="flex flex-col gap-8 sm:flex-row sm:flex-nowrap sm:items-stretch sm:justify-center sm:gap-10 sm:divide-x sm:divide-[#d3dae2] w-full">
                {STATS.map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col gap-2 items-start sm:justify-center sm:px-10 first:sm:pl-0 last:sm:pr-0"
                    >
                        <AnimatedStat value={stat.value} />
                        <p className="text-[#4a5568] text-lg font-light whitespace-nowrap">{stat.label}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
