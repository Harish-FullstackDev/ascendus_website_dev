"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import rpaStrategyPhoto from "@/assets/WhatWeDo/Intelligent Automation/webp/Intelligent_RPA.webp";
import processAutomationPhoto from "@/assets/WhatWeDo/Intelligent Automation/webp/Intelligent_Process_Minning.webp";
import botDevelopmentPhoto from "@/assets/WhatWeDo/Intelligent Automation/webp/Intelligent_Hyperautomation.webp";
import legacySystemPhoto from "@/assets/WhatWeDo/Intelligent Automation/webp/Intelligent_Intelligent_Document_Processing.webp";

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
        <section className="w-full px-6 sm:px-[64px] pt-10 sm:pt-16 pb-10 sm:pb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1055px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-black text-2xl font-medium">Process Mining, RPA & Hyperautomation</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-6 sm:gap-8 max-w-full">
                {CARDS.map((card, index) => {

                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                            className="bg-[#e8ebef] flex flex-col gap-8 sm:gap-12 p-6 h-[340px] sm:h-[400px]">
                            <div className="relative w-full flex-1 min-h-0">
                                <Image src={card.image} alt="" fill className="object-cover" />
                            </div>
                            <div className="border border-[#d4d3d3] flex flex-col gap-6 flex shrink-0">
                                <p className="text-black text-xl sm:text-2xl font-normal max-w-[268px]">{card.title}</p>
                                <p className="text-[#7f7f7f] text-sm sm:text-base font-light">{card.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
