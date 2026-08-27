"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import rpaStrategyPhoto from "@/assets/WhatWeDo/Intelligent Automation/new/card_1.jpg";
import processAutomationPhoto from "@/assets/WhatWeDo/Intelligent Automation/new/card_2.jpg";
import botDevelopmentPhoto from "@/assets/WhatWeDo/Intelligent Automation/new/card_3.jpg";
import legacySystemPhoto from "@/assets/WhatWeDo/Intelligent Automation/new/card_4.jpg";

const CARDS = [
    {
        title: "Robotic Process Automation (RPA)",
        desc: "We analyze how processes actually run today, uncovering the inefficiencies worth automating first.",
        image: rpaStrategyPhoto,
    },
    {
        title: "Process Mining",
        desc: "We automate rule-based, repetitive tasks across your systems, freeing your teams for higher-value work.",
        image: processAutomationPhoto,
    },
    {
        title: "Hyperautomation",
        desc: "We combine RPA, AI, and workflow automation to automate processes end to end, not in isolated steps.",
        image: botDevelopmentPhoto,
    },
    {
        title: "Intelligent Document Processing",
        desc: "We extract and process data from documents automatically, cutting manual data entry to a minimum.",
        image: legacySystemPhoto,
    },

];

export default function ProcessMiningRPAHyperautomation() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-10 sm:pb-8 px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1055px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-[28px] font-semibold">Process Mining, RPA & Hyperautomation</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Primary technologies for modernizing enterprise processes.
                </p>
            </motion.div>

            {/* Card proportions (padding, gaps, image height, text width cap)
                match the Figma component exactly. Its 1055px frame was just
                Figma's isolated component-preview width, not this page's
                actual content width — the other sections on this page (e.g.
                OurAutomationApproach) settle around 1280px, so the grid is
                capped there instead of at 1055. That lets the cards scale up
                and fill the row like the rest of the page, keeping the same
                tight x-axis padding relationship Figma shows rather than
                leaving a big unused margin on typical desktop widths. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-full mx-auto">
                {CARDS.map((card, index) => {

                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                            className="bg-[#F5F6F6] flex flex-col gap-8 sm:gap-12 p-6 h-[340px] sm:h-[400px]">
                            <div className="relative w-full flex-1 min-h-0 border-[0.5px] border-[#1c5f85]">
                                <Image
                                    src={card.image}
                                    alt=""
                                    fill
                                    className={`object-cover ${index === 0 ? "object-bottom" : ""}`}
                                />
                            </div>
                            <div className="flex flex-col gap-6 shrink-0">
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{card.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{card.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

