"use client";

import { motion } from "framer-motion";

import InsightCard from "@/components/Services/InsightCard";
import insightImage from "@/assets/Services/Ideas_That_Inspire.webp";

// Figma (370:3707) gives the three tiles their own titles, copy and CTA labels
// but reuses one photograph — the same control-room export the Services page
// ships, so it is shared rather than duplicated. There are no per-topic
// insight pages yet, so every tile points at /blog like the Services tiles.
const INSIGHTS = [
    {
        ctaLabel: "Discover More",
        description: "Transform Your Business with Cloud Solutions",
        href: "/blog",
        title: "Oracle Cloud",
    },
    {
        ctaLabel: "Explore Now",
        description: "Building a Smarter Enterprise with SAP S/4HANA",
        href: "/blog",
        title: "SAP ARIBA",
    },
    {
        ctaLabel: "Learn More",
        description: "Empower Your Team with Integrated Business Applications",
        href: "/blog",
        title: "Microsoft Dynamics 365",
    },
];

// Section 4 — white band between the dark "More Than Implementation" band and
// the dark CTA photo band, so it keeps the full 64px on both edges.
//
// Figma centres a 281px intro column against the 377px cards, but the copy
// only fills its top 204px — so the intro sits ~38px above true centre rather
// than centred on the cards. The fixed column height reproduces that.
export default function SolutionInsights() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-10 xl:flex-row xl:items-center xl:justify-between"
            >
                <div className="flex w-full flex-col gap-3 xl:h-[281px] xl:w-[32%] xl:max-w-[418px] xl:shrink-0">
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

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 xl:w-[850px] xl:max-w-[65%] xl:gap-[46px]">
                    {INSIGHTS.map((insight) => (
                        <InsightCard
                            key={insight.title}
                            ctaLabel={insight.ctaLabel}
                            description={insight.description}
                            href={insight.href}
                            image={insightImage}
                            title={insight.title}
                            variant="tall"
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
