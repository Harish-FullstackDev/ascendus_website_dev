"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/webp/Cybersecurity_IAM.webp";
import card2 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/webp/Cybersecurity_Security_Operations.webp";
import card3 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/webp/Cybersecurity_Governance.webp";
import card4 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/webp/Cybersecurity_ZTA.webp";

const CARDS = [
    { image: card1, title: "Identity & Access Management", desc: "Helping businesses transform with innovative SAP solutions." },
    { image: card2, title: "Security Operations", desc: "We monitor, detect, and respond to threats continuously, not just during scheduled reviews." },
    { image: card3, title: "Governance, Risk & Compliance", desc: "Helping businesses transform with innovative SAP solutions." },
    { image: card4, title: " Zero Trust Architecture", desc: "Helping businesses transform with innovative SAP solutions." },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function IdentityManagementContinuousOperations() {
    // Autoplay: cycles which desktop card is "active" (hover-revealed state)
    // automatically, the same behavior added to OurAIServices. Pauses the
    // instant the mouse enters the grid so manual hover still drives the
    // active card, and resumes cycling from wherever it left off on mouse
    // leave — it does not reset back to the first card.
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % CARDS.length);
        }, 3500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:gap-16 px-6 sm:px-[64px] pt-10 sm:pt-8 pb-10 sm:pb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center"
            >
                <h2 className="text-[#2E3033] text-[28px] font-semibold">Identity Management & Continuous Operations</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Core protective pillars including IAM, GRC, SOC, and Zero Trust.
                </p>
            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible.
                Layout/design ported from OurAIServices' mobile treatment. */}
            <div className="flex sm:hidden flex-col gap-8 w-full max-w-[1280px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/10 transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/45 group-hover:to-black/25 pointer-events-none" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <h2 className="text-white text-xl font-semibold">{card.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: bottom-anchored active-reveal grid — active card now driven by
                state (hover OR autoplay) instead of pure CSS :hover, so autoplay can
                drive the same reveal when the user isn't hovering. */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="hidden sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-8 w-full"
            >
                {CARDS.map((card, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <motion.div
                            key={card.title}
                            variants={itemVariants}
                            onMouseEnter={() => setActiveIndex(index)}
                            className="relative w-full aspect-[278/290] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                        >
                            <Image src={card.image} alt="" fill className="object-cover" />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/70" : "bg-black/20"
                                    }`}
                            />
                            {/* Bottom-anchored text block: default state shows only the title
                                sitting low in the card (~12% inset); the active state reveals the
                                description below it. Anchoring to `bottom` instead of `top` means
                                the block grows upward as the description expands, reproducing that
                                shift without hand-tuned positions per state. text-2xl/text-lg +
                                font-light match Figma's actual type spec (24px/18px, Manrope Light). */}
                            <div className="absolute left-[12%] right-[12%] bottom-[12%] flex flex-col text-white">
                                <h2 className="text-2xl font-semibold">{card.title}</h2>
                                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-lg font-light pt-2">{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
