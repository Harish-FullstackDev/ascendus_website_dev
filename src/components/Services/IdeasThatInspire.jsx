"use client";

import { motion } from "framer-motion";

import InsightCard from "./InsightCard";
import insightImage from "@/assets/Services/Ideas_That_Inspire.webp";

// Figma repeats one placeholder tile three times — same eyebrow, same headline,
// same photograph (370:3609, 370:4079, 370:4090). Transcribed as drawn rather
// than back-filled from the live Insights data; swap these three entries for
// real posts once the designer picks them.
const INSIGHTS = [
    {
        description: "Building a Smarter Enterprise with SAP S/4HANA",
        href: "/blog",
        image: insightImage,
        title: "SAP ARIBA",
    },
    {
        description: "Building a Smarter Enterprise with SAP S/4HANA",
        href: "/blog",
        image: insightImage,
        title: "SAP ARIBA",
    },
    {
        description: "Building a Smarter Enterprise with SAP S/4HANA",
        href: "/blog",
        image: insightImage,
        title: "SAP ARIBA",
    },
];

// Section 7 — white band between the pale highlights strip and the dark footer,
// so it keeps the full 64px on both edges.
export default function IdeasThatInspire() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full items-center justify-between gap-10 max-lg:flex-col max-lg:items-start"
            >
                <div className="flex w-full flex-col gap-3 lg:w-[448px] lg:shrink-0">
                    <p className="text-sm font-medium uppercase leading-[1.2] tracking-[1.8px] text-[#0061af] sm:text-[18px]">
                        Our Insights
                    </p>

                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0d1b2e]">
                        Ideas That Inspire.
                        <br className="hidden sm:block" /> Insights That Drive Impact.
                    </h2>

                    <p className="max-w-[387px] text-sm font-normal leading-[1.5] text-[#4a5565] sm:text-base">
                        Explore perspectives, trends, and practical ideas shaping the future of business,
                        technology, and digital transformation.
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 lg:w-[850px] lg:shrink-0 lg:gap-[46px]">
                    {INSIGHTS.map((insight, index) => (
                        <InsightCard
                            key={`${insight.title}-${index}`}
                            description={insight.description}
                            href={insight.href}
                            image={insight.image}
                            title={insight.title}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
