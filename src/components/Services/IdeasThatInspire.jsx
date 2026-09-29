"use client";

import { motion } from "framer-motion";

import InsightCard from "./InsightCard";
import insightImage from "@/assets/Services/Ideas_That_Inspire.webp";

// Figma repeats one placeholder tile three times — same eyebrow, same headline,
// same photograph (370:3609, 370:4079, 370:4090). Transcribed as drawn rather
// than back-filled from the live Insights data; swap these three entries for
// real posts once the designer picks them.
const SERVICES_INSIGHTS = [
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

// The "Our Insights" section, shared by Services, Solutions and About Us so the
// three stay identical; each page passes its own `insights` (a tile may carry
// its own `ctaLabel`). Figma (695:435): a 418px intro column and an 850px card
// column, spread apart. The intro sits at the top of a 281px box centred on the
// 312px cards, so the copy rides a little above centre. The cards are 248px
// with 46px between them, 836 of the 850: the row starts on the card column's
// left edge and stops 14px short of the page margin, as drawn. Side by side
// from xl only; below that the intro stacks above the cards, which then flex.
//
// White band with a coloured neighbour on both sides on every page that uses
// it, so it keeps the full 64px on both edges.
export default function IdeasThatInspire({ insights = SERVICES_INSIGHTS, ctaLabel }) {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-start justify-between gap-10 xl:flex-row xl:items-center"
            >
                <div className="flex w-full flex-col gap-3 xl:h-[281px] xl:w-[418px] xl:shrink-0">
                    <p className="flex items-center text-sm font-medium uppercase leading-[1.2] tracking-[1.8px] text-[#0061af] sm:h-8 sm:text-[18px]">
                        Our Insights
                    </p>

                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0d1b2e] xl:whitespace-nowrap">
                        Ideas That Inspire.
                        <br className="hidden sm:block" /> Insights That Drive Impact.
                    </h2>

                    <p className="max-w-[387px] text-sm font-normal capitalize leading-[1.5] text-[#4a5565] sm:text-base">
                        Explore perspectives, trends, and practical ideas shaping the future of business,
                        technology, and digital transformation.
                    </p>
                </div>

                <div className="w-full xl:min-w-0 xl:max-w-[850px] xl:flex-1">
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 xl:max-w-[836px] xl:gap-[46px]">
                        {insights.map((insight, index) => (
                            <InsightCard
                                key={`${insight.title}-${index}`}
                                ctaLabel={insight.ctaLabel ?? ctaLabel}
                                description={insight.description}
                                href={insight.href}
                                image={insight.image}
                                title={insight.title}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
