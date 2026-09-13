"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import card1Bg from "@/assets/WhoWeAre/customer_satisfaction.webp";
import card2Bg from "@/assets/WhoWeAre/project_delivery.webp";
import card3Bg from "@/assets/WhoWeAre/customer_retention.webp";
import card4Bg from "@/assets/WhoWeAre/team_productivity.webp";

const CARDS = [
    {
        bg: card1Bg,
        textColor: "text-white",
        description: "Customer satisfaction rate, reflecting our dedication",
        value: "95%",
    },
    {
        bg: card2Bg,
        textColor: "text-white",
        description: "Projects delivered on time, showcasing our commitment",
        value: "87%",
    },
    {
        bg: card3Bg,
        textColor: "text-white",
        description: "Client retention year over year, proving lasting trust",
        value: "92%",
    },
    {
        bg: card4Bg,
        textColor: "text-white",
        description: "Team productivity growth, driving innovation forward",
        value: "78%",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Splits e.g. "95%" into { prefix: "", number: 95, suffix: "%", decimals: 0 } so the
// count-up below can animate just the numeric part while reproducing the original
// formatting exactly once the animation finishes.
function parseStatValue(raw) {
    const match = raw.match(/^([^\d.]*)([\d.]+)(.*)$/);
    if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };
    const [, prefix, numberStr, suffix] = match;
    const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
    return { prefix, number: parseFloat(numberStr), suffix, decimals };
}

function AnimatedStat({ value, className }) {
    const { prefix, number, suffix, decimals } = parseStatValue(value);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    // Init to the real final number, not 0 — SSR/no-JS/bot/pre-scroll HTML must always
    // show the actual value. The count-up below is a cosmetic replay for JS users who
    // scroll it into view; it is never the only place the real number exists.
    const [display, setDisplay] = useState(number);

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
        <h2 ref={ref} className={className}>
            {prefix}
            {display.toFixed(decimals)}
            {suffix}
        </h2>
    );
}

// The intro copy and the four stat cards used to be two sibling sections
// (AboutUsPanel + StatsCards) separated by a hairline rule. They are one
// section now, with no divider: the intro block and the card grid are a single
// title→content stack, so the 64px gap-16 between them is what separates them.
//
// Vertical padding follows the site's neighbor rule: full 64 on top (the
// section curtains over the pinned hero) and 32 at the bottom, since the next
// section (CleanPrinciples) is white too and pays the matching 32.
export default function StartedAroundGapNotProduct() {
    return (
        <section className="relative w-full bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-8">
            <div className="flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">Started Around a Gap, Not a Product </h2>
                    <p className="mt-2 text-sm sm:text-lg font-light text-[#55595E] leading-relaxed">
                        Most enterprise tech providers focus on one stack layer  SAP implementation, cloud migration, or post live support. We bridge those gaps where transformations stall. Our practice includes SAP transformation, cloud and data engineering, digital experience, and compliance across the GCC. Enterprises need a partner accountable long after the project ends.
                    </p>
                </motion.div>

                {/* No max-width cap on this grid: the 1300px cap used to leave the
                    outer cards short of the section's own 64px inset on wide screens.
                    The row now spans the full content box, so the first card's left
                    edge and the last card's right edge sit exactly 64px from the
                    viewport at every width — the cards absorb the extra width and
                    scale with it, the 43px gutters between them are untouched. */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[43px]"
                >
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative aspect-[258/335] flex flex-col justify-between p-6 ${card.textColor}`}
                        >
                            <Image src={card.bg} alt="" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/50" />

                            <p className="relative text-base sm:text-lg font-light max-w-[196px]">
                                {card.description}
                            </p>

                            <AnimatedStat
                                value={card.value}
                                className="relative font-['Houschka_Pro'] text-3xl sm:text-5xl font-semibold"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
