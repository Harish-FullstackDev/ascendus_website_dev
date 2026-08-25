"use client";

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
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:gap-16 px-6 sm:px-[64px] pt-10 sm:pt-8 pb-10 sm:pb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center"
            >
                <h2 className="text-[#2E3033] text-[28px] font-medium">Identity Management & Continuous Operations</h2>
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
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <h2 className="text-white text-xl font-medium">{card.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: unchanged bottom-anchored hover-reveal grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="hidden sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-8 w-full"
            >
                {CARDS.map((card) => (
                    <motion.div
                        key={card.title}
                        variants={itemVariants}
                        className="group relative w-full aspect-[278/290] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />

                        {/* Bottom-anchored text block: Figma's default state shows only the title
                            sitting low in the card (~12% inset); the hover state (shown on one card
                            in the design as the "active" example) reveals the description below it.
                            Anchoring to `bottom` instead of `top` means the block grows upward as the
                            description expands, reproducing that shift without hand-tuned positions
                            per state. text-2xl/text-lg + font-light match Figma's actual type spec
                            (24px/18px, Manrope Light). */}
                        <div className="absolute left-[12%] right-[12%] bottom-[12%] flex flex-col text-white">
                            <p className="text-2xl font-light">{card.title}</p>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                                <div className="overflow-hidden">
                                    <p className="text-lg font-light pt-2">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
