"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import imgCollaboration from "@/assets/Careers/life-collaboration-teamwork.webp";
import imgLearning from "@/assets/Careers/life-learning-growth.webp";
import imgCulture from "@/assets/Careers/life-culture-celebration.webp";

// Body widths are Figma's own text boxes, so the copy wraps where it does
// in the design.
const CARDS = [
    {
        image: imgCollaboration,
        title: "Collaboration & Teamwork",
        body: "Celebrate milestones, embrace new ideas, and create meaningful memories with a team that grows together.",
    },
    {
        image: imgLearning,
        title: "Learning & Growth",
        body: "Discover new opportunities, build valuable skills, and take the next step in your professional journey.",
        bodyWidth: "max-w-[297px]",
    },
    {
        image: imgCulture,
        title: "Culture & Celebration",
        body: "Work together, share ideas, and learn from one another in a supportive environment where every contribution matters.",
        bodyWidth: "max-w-[296px]",
    },
];

// Figma 1619:11027 — heading block over three 399×353 cards spread edge to
// edge. Each card is half photo, half neutral text panel.
// Sits between the dark Build Skills band and the neutral benefits band, so
// it keeps the full 64 on both edges. Three columns from lg, one below.
// Figma's heading now reads just "Ascendus"; kept as drawn and flagged.
export default function LifeAtAscendusHighlights() {
    return (
        <section className="w-full border-t border-[#8695a7] bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-8"
            >
                <div className="flex max-w-[873px] flex-col gap-2">
                    <h2 className="text-2xl font-medium capitalize leading-[1.2] text-[#0e2b4b]">Ascendus</h2>
                    <p className="text-sm leading-[1.4] text-[#415773]">
                        At Ascendus, we believe great work happens when people feel valued, inspired, and empowered. We
                        foster a collaborative environment where ideas are welcomed, creativity is encouraged, and every
                        individual has the opportunity to make a meaningful impact.
                    </p>
                </div>

                {/* Figma: three 399×353 cards 62.5 apart on a 1322 row. The gap is kept as
                    that share of the row (4.73%) and the cards keep their 399:353
                    shape, so they scale with the viewport instead of the gaps
                    growing on wide screens. Content taller than the ratio still
                    grows the card. */}
                <ul className="grid gap-8 lg:grid-cols-3 lg:gap-x-[4.73%]">
                    {CARDS.map((card) => (
                        <li key={card.title} className="flex flex-col overflow-hidden rounded-[8px] lg:aspect-[399/353]">
                            <div className="relative aspect-[399/176.5] w-full overflow-hidden bg-[#f1f3f5]">
                                <Image
                                    src={card.image}
                                    alt=""
                                    fill
                                    sizes="(min-width: 1024px) 399px, 100vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-5 bg-[#f1f3f5] px-6 py-8">
                                <h3 className="text-2xl font-medium capitalize leading-[1.2] text-[#0e2b4b]">
                                    {card.title}
                                </h3>
                                <p className={`text-sm leading-[1.4] text-[#415773] ${card.bodyWidth ?? "max-w-[301px]"}`}>
                                    {card.body}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
