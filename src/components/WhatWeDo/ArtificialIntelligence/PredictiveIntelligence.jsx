"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import codePhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section9_Card_Code.jpg";
import circuitPhoto1 from "@/assets/WhatWeDo/Artificial Intelligence/Section9_Card_Circuit1.jpg";
import circuitPhoto2 from "@/assets/WhatWeDo/Artificial Intelligence/Section9_Card_Circuit2.jpg";

const IMAGES = [codePhoto, circuitPhoto1, circuitPhoto2];

const CARDS = [
    {
        title: "Sales Forecasting",
        desc: "Predict future revenue with models that learn from historical sales, seasonality, and market signals.",
    },
    {
        title: "Demand Prediction",
        desc: "Anticipate inventory and resource needs before demand shifts, reducing stockouts and overproduction.",
    },
    {
        title: "Customer Behavior Analysis",
        desc: "Understand what customers will do next by modeling patterns across every touchpoint.",
    },
    {
        title: "Risk Assessment",
        desc: "Score risk in real time across transactions, credit, and operations to catch issues before they escalate.",
    },
    {
        title: "Predictive Maintenance",
        desc: "Flag equipment failures before they happen by monitoring performance signals continuously.",
    },
    {
        title: "Financial Forecasting",
        desc: "Model revenue, cash flow, and spend scenarios so finance teams can plan budgets with confidence.",
    },
];

export default function PredictiveIntelligence() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[831px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-black text-2xl sm:text-[32px] font-medium">Predictive Intelligence</h2>
                <p className="text-black text-lg sm:text-2xl font-normal">Anticipate Business Outcomes Before They Happen</p>
                <p className="text-[#a4a7a5] text-lg sm:text-2xl font-light">
                    Use predictive analytics and AI models to forecast trends, reduce risks, optimize operations, and
                    support proactive decision-making.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[33px] max-w-[1300px] mx-auto">
                {CARDS.map((card, index) => {
                    const imageOnBottom = index % 3 === 1;
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                            className={`bg-[#f5f5f5] flex flex-col gap-4 p-4 ${
                                imageOnBottom ? "flex-col-reverse" : ""
                            }`}
                        >
                            <div className="relative w-full h-[138px] border border-[#d4d3d3] shrink-0">
                                <Image src={IMAGES[index % IMAGES.length]} alt="" fill className="object-cover" />
                            </div>
                            <div className="border border-[#d4d3d3] p-4 flex flex-col gap-4">
                                <p className="text-black text-xl sm:text-2xl font-normal">{card.title}</p>
                                <p className="text-[#7f7f7f] text-sm sm:text-base font-light">{card.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
