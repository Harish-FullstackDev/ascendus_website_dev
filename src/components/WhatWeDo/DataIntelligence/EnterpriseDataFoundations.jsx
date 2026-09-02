"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DataEngineering from "@/assets/WhatWeDo/Data Inteligent/webp/Data_Data_Engg.webp";
import DataWarehousing from "@/assets/WhatWeDo/Data Inteligent/webp/Data_Data_Warehouse.webp";
import AdvancedAnalytics from "@/assets/WhatWeDo/Data Inteligent/webp/Data_Advanced_Analytics.webp";
import BusinessIntelligence from "@/assets/WhatWeDo/Data Inteligent/webp/Data_Business_Intelligence.webp";

const CARDS = [
    {
        title: "Data Engineering",
        desc: "We build the pipelines that move and transform data reliably from source systems into a form your business can use.",
        image: DataEngineering,
    },
    {
        title: "Data Warehousing",
        desc: "We design centralized data platforms that consolidate SAP and non-SAP sources into a single source of truth.",
        image: DataWarehousing,
    },
    {
        title: "Advanced Analytic",
        desc: "We build predictive and prescriptive models that move reporting from hindsight to foresight.",
        image: AdvancedAnalytics,
    },
    {
        title: "Business Intelligence",
        desc: "We deliver reporting and dashboards that give decision-makers clarity, not just charts.",
        image: BusinessIntelligence,
    },
];

export default function EnterpriseDataFoundations() {
    // Auto open/close: cycles the "active" (hover-revealed) card every few
    // seconds, pausing whenever the grid is actually hovered/focused so
    // manual interaction always takes over.
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % CARDS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full py-10 px-6 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-[28px] font-semibold">Enterprise Data Foundations</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Core engineering capabilities for data platforms and business intelligence
                </p>
            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible.
                Layout/design ported from OurAIServices' mobile treatment. */}
            <div className="flex sm:hidden flex-col gap-4 max-w-[1280px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={card.image} alt={`${card.title} capability illustration`} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <p className="text-white text-xl font-normal">{card.title}</p>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-reveal grid — auto-cycles the active card every few
                seconds, and still responds to real hover/focus (which also
                pauses the auto-cycle). Same visuals as the old group-hover
                version, just driven by state instead of CSS :hover. */}
            <div
                className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-[43px] w-full"
                onMouseLeave={() => setIsPaused(false)}
            >
                {CARDS.map((card, index) => {
                    const isActive = active === index;
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            onFocus={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            className="relative aspect-[258/335] overflow-hidden"
                        >
                            <Image
                                src={card.image}
                                alt={`${card.title} capability illustration`}
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/70" : "bg-black/20"
                                    }`}
                            />
                            <div className="absolute inset-0 flex items-top justify-right px-6 py-10 text-left">
                                <h2 className="text-white text-xl sm:text-2xl font-semibold">{card.title}</h2>
                            </div>
                            <div
                                className={`absolute inset-x-0 bottom-0 px-6 pb-6 grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-white/85 text-xl font-light leading-relaxed pt-2">{card.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
