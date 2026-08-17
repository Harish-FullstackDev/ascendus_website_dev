"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DataEngineering from "@/assets/WhatWeDo/Data Inteligent/new/card_1.jpg";
import DataWarehousing from "@/assets/WhatWeDo/Data Inteligent/new/card_2.jpg";
import AdvancedAnalytics from "@/assets/WhatWeDo/Data Inteligent/new/card_3.jpg";
import BusinessIntelligence from "@/assets/WhatWeDo/Data Inteligent/new/card_4.jpg";

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
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">Enterprise Data Foundations</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
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
                        <Image src={card.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <p className="text-white text-xl font-normal">{card.title}</p>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: unchanged hover-reveal grid */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-[43px] w-full">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="group relative aspect-[258/335] overflow-hidden"
                    >
                        <Image
                            src={card.image}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/70" />
                        <div className="absolute inset-0 flex items-top justify-right px-6 py-10 text-left">
                            <p className="text-white text-xl sm:text-3xl font-normal">{card.title}</p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                                <p className="text-white/85 text-xl font-light pt-2">{card.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
