"use client";

import { motion } from "framer-motion";

const BIG_CARDS = [
    {
        title: "Process Assessment",
        desc: "Our AI-powered bot automatically and accurately answers support questions with zero training required. Instantly generate replies, recap conversations for other agents, and create new help articles. Immediately recommend helpful content with machine learning—directly in your product.",
    },
    {
        title: "Lean Transformation",
        desc: "Our AI-powered bot automatically and accurately answers support questions with zero training required. Instantly generate replies, recap conversations for other agents, and create new help articles. ",
    },
];

const SMALL_CARDS = [
    {
        title: "Automation Opportunities",
        desc: "Our AI-powered bot automatically and accurately answers support questions with zero training required. Instantly generate replies, recap conversations for other agents, and create new help articles. ",
    },
    {
        title: "Workflow Standardization",
        desc: "Our AI-powered bot automatically and accurately answers support questions with zero training required. Instantly generate replies, recap conversations for other agents, and create new help articles. ",
    },
    {
        title: "Process Documentation",
        desc: "Our AI-powered bot automatically and accurately answers support questions with zero training required. Instantly generate replies, recap conversations for other agents, and create new help articles. ",
    },
];

function Card({ title, desc, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`border border-[#d3d5d8] bg-gradient-to-b from-[#f3f9ff] to-[#c4e0fd] flex flex-col gap-3 px-6 py-7 sm:px-8 sm:py-8 ${className}`}
        >
            <p className="text-[#041527] text-xl sm:text-2xl font-semibold">{title}</p>
            <p className="text-[#515151] text-base sm:text-lg font-light">{desc}</p>
        </motion.div>
    );
}

export default function ProcessReengineering() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] flex flex-col items-center gap-10 sm:gap-[71px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[694px] text-center"
            >
                <h2 className="text-black text-2xl font-normal">Process Reengineering</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Reimagine existing business processes using modern technologies and best practices to improve
                    agility, scalability, and business performance.
                </p>
            </motion.div>

            <div className="w-full max-w-screen flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {BIG_CARDS.map((card) => (
                        <Card key={card.title} {...card} className="sm:min-h-[422px]" />
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {SMALL_CARDS.map((card) => (
                        <Card key={card.title} {...card} className="sm:min-h-[405px]" />
                    ))}
                </div>
            </div>
        </section>
    );
}
