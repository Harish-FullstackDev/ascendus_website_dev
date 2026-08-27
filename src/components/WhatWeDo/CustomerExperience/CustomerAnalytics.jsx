"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import photoStrip from "@/assets/WhatWeDo/Customer Experience/Section9_Middle_Image.svg";
import predictiveCardImg from "@/assets/WhatWeDo/Customer Experience/Section12_Card_Image.svg";

const CARDS = [
    {
        title: "Customer Persona Development",
        desc: "Segment customers into meaningful personas based on behavior, preferences, and value to the business.",
        image: predictiveCardImg,
    },
    {
        title: "Behavioral Analytics",
        desc: "Track how customers interact with your products and services to uncover patterns that drive better decisions.",
        image: predictiveCardImg,
    },
    {
        title: "Predictive Customer Insights",
        desc: "Apply predictive models to anticipate customer needs and personalize engagement before they ask.",
        image: predictiveCardImg,
    },
    {
        title: "Customer Lifetime Value Analysis",
        desc: "Quantify the long-term value of each customer relationship to prioritize retention and growth investments.",
        image: predictiveCardImg,
    },
    {
        title: "Churn Prediction",
        desc: "Identify at-risk customers early with predictive signals so your team can act before they leave.",
        image: predictiveCardImg,
    },
    {
        title: "Customer Satisfaction Analysis",
        desc: "Measure satisfaction across every touchpoint to understand what's driving loyalty and what isn't.",
        image: predictiveCardImg,
    },
];

function PlainCard({ title, desc, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col gap-8 bg-[#dfdfdf] px-8 py-10 sm:py-12 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <p className="text-black text-2xl font-semibold">{title}</p>
            <p className="text-[#3d3d4e] text-base sm:text-lg font-light">{desc}</p>
        </motion.div>
    );
}

function HoverCard({ title, desc, image, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative h-[320px] overflow-hidden bg-[#dfdfdf] cursor-pointer"
        >
            {/* Background Image */}
            <Image
                src={image}
                alt=""
                fill
                className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-transparent transition-all duration-500 group-hover:bg-black/60" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl font-semibold transition-colors duration-500 group-hover:text-white">
                    {title}
                </h3>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-white opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}
export default function CustomerAnalytics() {
    return (
        <section className="w-full py-14 sm:py-20 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center px-6 mb-12 sm:mb-16"
            >
                <h2 className="text-black text-2xl font-semibold">Customer Analytics</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    Analyze customer behavior, preferences, and interactions to make informed business
                    decisions and improve customer engagement.
                </p>
            </motion.div>

            {/* <div className="relative w-full h-[160px] sm:h-[197px] mb-0">
                <Image src={photoStrip} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
            </div> */}

            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-[4px] bg-white">
                {CARDS.map((card, index) => (
                    <HoverCard
                        key={card.title}
                        {...card}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
