"use client";

import { motion } from "framer-motion";

const BIG_CARDS = [
    {
        title: "Business Strategy",
        desc: "We work with leadership teams to understand business goals, operational challenges, and growth priorities. We translate these priorities into clear technology and transformation strategies that support long-term business objectives.",
    },
    {
        title: "Technology Advisory",
        desc: "We provide independent guidance on technology platforms, solutions, vendors, and investment decisions. Our approach helps organizations evaluate available options, understand trade-offs, and select technologies that align with their business and operational needs.",
    },
];

const SMALL_CARDS = [
    {
        title: "Transformation Assessment",
        desc: "We assess the current business processes, technology landscape, operating models, and capabilities to identify gaps and improvement opportunities. We compare the current state with future business requirements to define practical transformation priorities.",
    },
    {
        title: "Operating Model Transformation",
        desc: "We help organizations improve how people, processes, technology, and governance work together. Our approach focuses on creating efficient operating models that support scalability, collaboration, agility, and better business performance.",
    },
    {
        title: "Business Case Advisory",
        desc: "We help organizations evaluate transformation initiatives by defining expected business value, investment requirements, potential risks, and measurable outcomes. This provides leadership with a clear basis for prioritizing and approving transformation investments.",
    },
];

// NOTE: the Figma frame (node 2270:1008) reserves full-width image space at the
// bottom of each card (Neutral/200-filled skeleton blocks with no real asset yet).
// Card min-heights below preserve that reserved space so the grid doesn't reflow
// once real imagery is dropped in; swap in an <Image> per card when assets land.
function Card({ title, desc, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`border border-[#d3d5d8] bg-[#E4E6E7] flex flex-col gap-3 px-6 py-7 sm:px-8 sm:py-8 ${className}`}
        >
            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{title}</h2>
            <p className="text-[#55595E] text-base sm:text-lg font-light">{desc}</p>
        </motion.div>
    );
}

export default function BusinessTransformationAdvisory() {
    return (
        <section className="w-full pt-10 sm:pt-8 pb-10 sm:pb-8 px-6 sm:px-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[694px] text-center"
            >
                <h2 className="text-[#2E3033] text-2xl font-semibold">Business Transformation Advisory</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Advisory services that connect business priorities, technology decisions, and transformation
                    outcomes.
                </p>
            </motion.div>

            <div className="w-full max-w-screen flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {BIG_CARDS.map((card) => (
                        <Card key={card.title} {...card} className="sm:min-h-[280px]" />
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {SMALL_CARDS.map((card) => (
                        <Card key={card.title} {...card} className="sm:min-h-[320px]" />
                    ))}
                </div>
            </div>
        </section>
    );
}

