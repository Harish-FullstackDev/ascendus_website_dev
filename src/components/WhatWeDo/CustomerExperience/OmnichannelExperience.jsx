"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgImg from "@/assets/WhatWeDo/Customer Experience/Section8_Bottom_Image.svg";

const CARDS = [
    {
        title: "Omnichannel Strategy Cross-Channel Integration",
        desc: "Create connected customer journeys across web, mobile, social media, email, contact centers, and physical locations.",
    },
    {
        title: "Unified Customer Profiles",
        desc: "Consolidate customer data from every channel into a single, real-time profile that travels with them everywhere.",
    },
    {
        title: "Channel Performance Optimization",
        desc: "Measure and continuously improve performance across every channel to maximize engagement and ROI.",
    },
    {
        title: "Personalized Engagement Digital Experience Platforms",
        desc: "Deliver tailored content and offers in real time through modern digital experience platforms.",
    },
];

// Desktop-only positions matching Figma's staggered two-row layout — row 2 sits
// further left than row 1, it isn't a plain aligned grid.
const CARD_POSITIONS = [
    "lg:left-[532px] lg:top-0",
    "lg:left-[886px] lg:top-0",
    "lg:left-[196px] lg:top-[331px]",
    "lg:left-[550px] lg:top-[331px]",
];

function Card({ card, fixed }) {
    return (
        <div
            className={`flex flex-col gap-5 bg-white border border-[#404040]/30 px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${fixed ? "h-[309px] w-[330px] justify-center overflow-hidden" : ""
                }`}
        >
            <p className="text-black text-xl sm:text-2xl font-light">{card.title}</p>
            <div className="h-px w-full bg-black/15" />
            <p className="text-[#7f7f7f] text-base sm:text-lg font-light">{card.desc}</p>
        </div>
    );
}

export default function OmnichannelExperience() {
    return (
        <section className="relative w-full py-14 sm:py-20 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 sm:px-[50px]">
                {/* Mobile / tablet: simple stacked layout */}
                <div className="flex flex-col gap-12 lg:hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-4 max-w-[400px]"
                    >
                        <h2 className="text-black text-2xl font-semibold">Omnichannel Experience</h2>
                        <p className="text-black text-base sm:text-lg font-light">
                            Create connected customer journeys across web, mobile, social media, email, contact
                            centers, and physical locations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {CARDS.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <Card card={card} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Desktop: pixel-precise staggered layout matching Figma — photo bleeds
                    out only from behind the lower portion of row 2, not the full section. */}
                <div className="hidden lg:block relative h-[807px]">
                    <div className="absolute left-1/2 top-[418px] h-[389px] w-screen -translate-x-1/2 overflow-hidden">
                        <Image src={bgImg} alt="" fill className="object-cover" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute left-0 top-0 z-10 flex flex-col gap-4 w-[400px]"
                    >
                        <h2 className="text-black text-2xl font-semibold">Omnichannel Experience</h2>
                        <p className="text-black text-lg font-light">
                            Create connected customer journeys across web, mobile, social media, email, contact
                            centers, and physical locations.
                        </p>
                    </motion.div>

                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className={`absolute z-10 ${CARD_POSITIONS[index]}`}
                        >
                            <Card card={card} fixed />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

