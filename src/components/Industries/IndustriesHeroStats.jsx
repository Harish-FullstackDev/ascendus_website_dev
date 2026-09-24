"use client";

import { motion } from "framer-motion";

const STATS = [
    { label: "Industries", value: "10+" },
    { label: "Enterprise Clients", value: "500+" },
    { label: "Delivery Capability", value: "Global" },
];

// The figures sit near the foot of the hero frame (Figma y=671 of 801) as three
// columns separated by hairline rules. Anchored to the bottom rather than a
// percentage offset so they stay clear of the copy above at every hero height.
export default function IndustriesHeroStats() {
    return (
        <div className="absolute inset-x-0 bottom-[8%] sm:bottom-[10%] px-6 sm:px-[64px]">
            {/* A fixed three-column grid, not a flex row: the figures have to stay
                on one line at every width, and the 60px Figma gutters would wrap
                them onto a second row on a phone and collide with the copy above.
                The gutters scale down instead. */}
            <motion.dl
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid w-full max-w-[740px] grid-cols-3 items-start lg:flex lg:w-auto lg:max-w-none"
            >
                {STATS.map((stat, index) => (
                    <div
                        key={stat.label}
                        className={`flex flex-col ${index === 0 ? "pr-3 sm:pr-6 lg:pr-[60px]" : "px-3 sm:px-6 lg:px-[60px]"
                            } ${index < STATS.length - 1 ? "border-r border-[#5c7088]" : ""}`}
                    >
                        {/* Figures are white here, not the #0061AF the stat
                            counters elsewhere use — that token is for counters on
                            light backgrounds; these sit on a dark photo. */}
                        <dd className="order-1 text-xl sm:text-2xl lg:text-[32px] font-medium text-[#f8f8f8] leading-tight">
                            {stat.value}
                        </dd>
                        <dt className="order-2 mt-1 text-sm sm:text-base lg:text-[22px] text-[#c9d0d8] leading-snug">
                            {stat.label}
                        </dt>
                    </div>
                ))}
            </motion.dl>
        </div>
    );
}
