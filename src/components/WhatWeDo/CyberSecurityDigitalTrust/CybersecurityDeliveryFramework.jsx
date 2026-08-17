"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import cardimg from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/Container.jpg";

const CARDS = [
    {
        image: cardimg,
        title: "Assess",
        desc: "Effective cybersecurity is achieved through a structured lifecycle that integrates governance, technology, operations, and continuous improvement.",
    },
    {
        image: cardimg,
        title: "Design",
        desc: "Develop security architecture, governance models, policies, and implementation roadmaps aligned with business priorities.",
    },
    {
        image: cardimg,
        title: "Protect",
        desc: "Implement layered technical and administrative controls that safeguard identities, data, applications, and infrastructure.",
    },
    {
        image: cardimg,
        title: "Detect",
        desc: "Deploy continuous monitoring and analytics that surface anomalies and emerging threats before they escalate into incidents.",
    },
    {
        image: cardimg,
        title: "Respond",
        desc: "Execute rehearsed incident response playbooks to contain, eradicate, and recover from security events with minimal business impact.",
    },
    {
        image: cardimg,
        title: "Improve",
        desc: "Feed lessons learned back into governance and controls, continuously raising the maturity of the security program over time.",
    },
];

const CARD_HEIGHT = 260;
const CARD_GAP = 34;
const VISIBLE_COUNT = 3;
const ROTATE_INTERVAL = 4000;

export default function CybersecurityDeliveryFramework() {
    const [index, setIndex] = useState(0);
    const maxIndex = CARDS.length - VISIBLE_COUNT;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [maxIndex]);

    const goTo = (next) => setIndex(Math.max(0, Math.min(maxIndex, next)));

    const progress = maxIndex > 0 ? index / maxIndex : 0;

    return (
        <section className="bg-white w-full py-12 sm:py-16 lg:py-0 px-6 sm:px-[65px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[91px] items-center lg:items-center w-full lg:py-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6 w-full lg:w-[424px] shrink-0"
                >
                    <h2 className="font-heading text-black text-2xl sm:text-[32px] font-medium">Cybersecurity Delivery Framework</h2>
                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                        Effective cybersecurity is achieved through a structured lifecycle that integrates governance, technology,
                        operations, and continuous improvement.
                    </p>
                </motion.div>

                <div className="hidden lg:flex items-center gap-[40px] shrink-0">
                    <div className="relative w-[3px] h-[346px] rounded-full bg-[#bebebe]">
                        <button
                            type="button"
                            aria-label="Scroll up"
                            onClick={() => goTo(index - 1)}
                            className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#6c6c6c] hover:text-black text-lg transition-colors"
                        >
                            ↑
                        </button>
                        <motion.div
                            animate={{ top: `${progress * (346 - 42)}px` }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute w-[3px] h-[42px] rounded-full bg-[#0061af]"
                        />
                        <button
                            type="button"
                            aria-label="Scroll down"
                            onClick={() => goTo(index + 1)}
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[#6c6c6c] hover:text-black text-lg transition-colors"
                        >
                            ↓
                        </button>
                    </div>
                </div>

                <div
                    className="relative  w-full lg:w-[715px] shrink-0 overflow-hidden"
                    style={{ height: VISIBLE_COUNT * CARD_HEIGHT + (VISIBLE_COUNT - 1) * CARD_GAP }}
                >
                    <motion.div
                        animate={{ y: -index * (CARD_HEIGHT + CARD_GAP) }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-x-0 top-0 flex flex-col gap-[34px]"
                    >
                        {CARDS.map((card, i) => (
                            <div key={`${card.title}-${i}`} className="relative  w-full shrink-0 overflow-hidden" style={{ height: CARD_HEIGHT }}>
                                <Image src={card.image} alt="" fill className="object-cover " />
                                {/* <div className="absolute inset-0 border border-black " /> */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-5 px-8">
                                    <p className="text-black text-2xl sm:text-[28px] font-normal">{card.title}</p>
                                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light max-w-[389px]">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
