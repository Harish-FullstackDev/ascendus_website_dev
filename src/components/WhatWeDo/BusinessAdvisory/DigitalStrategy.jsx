"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Business Advisory/webp/Business_Business_Strategy.webp";
import card2 from "@/assets/WhatWeDo/Business Advisory/webp/Business_Enterprise_architecture.webp";
import card3 from "@/assets/WhatWeDo/Business Advisory/webp/Business_Transformation_Roadmap.webp";
import card4 from "@/assets/WhatWeDo/Business Advisory/webp/Business_Business_process.webp";

const CARDS = [
    {
        image: card1,
        title: "Business Strategy",
        desc: "Benchmark your current digital capabilities against industry standards to identify gaps and prioritize investment.",
    },
    {
        image: card2,
        title: "Enterprise Architecture",
        desc: "We design the architecture that keeps your systems, processes, and data aligned to strategy as you scale.",
    },
    {
        image: card3,
        title: "Transformation Roadmap",
        desc: "Design digital touchpoints that meet customers where they are and deepen engagement across every channel.",
    },
    {
        image: card4,
        title: "Business Process Consulting",
        desc: "Sequence technology investments against business priorities so every initiative compounds toward long-term goals.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DigitalStrategy() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:gap-[82px] px-6 sm:px-[70px] py-10 sm:py-[40px] pb-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-center"
            >
                <h2 className="font-heading text-[#16171a] text-2xl font-medium">Digital Strategy</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Accelerate Your Digital Transformation
                    <br />
                    <br />
                    Create comprehensive digital strategies that leverage modern technologies to improve customer
                    experiences, operational efficiency, and business agility.
                </p>
            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible.
                Layout/design ported from OurAIServices' mobile treatment. */}
            <div className="flex sm:hidden flex-col gap-4 w-full max-w-[1280px] mx-auto">
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
                            <p className="text-white text-xl font-normal">{card.title}</p>
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
                className="hidden sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-[18px] w-full"
            >
                {CARDS.map((card) => (
                    <motion.div
                        key={card.title}
                        variants={itemVariants}
                        className="group relative w-full aspect-[278/290] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        {/* Bottom-anchored text block: default state shows only the title sitting
                            low in the card (~12% inset); hover reveals the description below it.
                            Anchoring to `bottom` instead of `top` means the block grows upward as the
                            description expands, matching the Identity Management card behavior. */}
                        <div className="absolute left-[12%] right-[12%] bottom-[12%] flex flex-col text-white">
                            <p className="text-2xl font-light">{card.title}</p>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                                <div className="overflow-hidden">
                                    <p className="text-base font-light pt-2">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
