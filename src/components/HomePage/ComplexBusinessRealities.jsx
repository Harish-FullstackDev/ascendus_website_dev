"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import imgLegacy from "@/assets/HomePage/legacy-sap-environments.webp";
import imgProcesses from "@/assets/HomePage/complex-business-processes.webp";
import imgDisconnected from "@/assets/HomePage/disconnected-systems.webp";
import imgManual from "@/assets/HomePage/manual-operations.webp";
import imgVisibility from "@/assets/HomePage/poor-data-visibility.webp";
import imgJourneys from "@/assets/HomePage/digital-transformation-journeys.webp";
import iconDatabase from "@/assets/HomePage/icons/database-24.svg";
import iconChevron from "@/assets/HomePage/icons/chevron-left-16.svg";
import iconArrow from "@/assets/HomePage/icons/arrow-right-21.svg";

// Figma (633:4850) only draws the open state for the first card, so every card
// uses its icon for now. Swap `icon` per card once the real ones exist.
// `closedLines` is the rotated label on a closed card, broken where Figma
// breaks it. The lines are set explicitly and never wrap, because the site
// font runs wider than Figma's and width-based wrapping pushed "Complex
// business processes" and "Digital transformation journeys" onto three lines.
const CHALLENGES = [
    {
        title: "Legacy SAP environments",
        closedLines: ["Legacy SAP", "environments"],
        image: imgLegacy,
        icon: iconDatabase,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
    },
    {
        title: "Complex business processes",
        closedLines: ["Complex business", "processes"],
        image: imgProcesses,
        icon: iconDatabase,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.74) 100%)",
    },
    {
        title: "Disconnected systems",
        closedLines: ["Disconnected", "systems"],
        image: imgDisconnected,
        icon: iconDatabase,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
    },
    {
        title: "Manual operations",
        closedLines: ["Manual", "operations"],
        image: imgManual,
        icon: iconDatabase,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
    },
    {
        title: "Poor data visibility",
        closedLines: ["Poor data", "visibility"],
        image: imgVisibility,
        icon: iconDatabase,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
    },
    {
        title: "Digital transformation journeys",
        closedLines: ["Digital transformation", "journeys"],
        image: imgJourneys,
        icon: iconDatabase,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
    },
];

// One curve for the card opening. The labels are timed around it: on the card
// that is opening, the rotated label fades out at once and the open content
// fades in once the card is nearly full width; on the card that is closing,
// the open content fades out at once and the rotated label returns after it
// has shrunk.
const OPEN_EASE = "ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";

function ChallengeCard({ challenge, active, onSelect }) {
    return (
        <button
            type="button"
            onClick={onSelect}
            aria-expanded={active}
            aria-label={active ? undefined : challenge.title}
            className={`relative w-full shrink-0 overflow-hidden rounded-[16px] bg-[#614141] text-left transition-[flex-grow,height] duration-700 ${OPEN_EASE} lg:h-full lg:w-auto lg:min-w-0 lg:basis-0 ${active ? "h-[320px] lg:grow-[421]" : "h-[72px] cursor-pointer lg:grow-[162]"
                }`}
        >
            <Image
                src={challenge.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 421px, 100vw"
                className="object-cover"
            />
            <div aria-hidden className="absolute inset-0" style={{ backgroundImage: challenge.scrim }} />

            {/* Figma's primary/700 tab behind the label, flush with the card's
                left edge. Its top edge (32 + 81 = 113 from the bottom) is the
                line the open icon straddles. */}
            <div aria-hidden className="absolute bottom-[32px] left-0 hidden h-[81px] w-[124px] bg-[#004174] lg:block" />

            {/* Closed state: the label reads bottom to top from lg up, and runs
                along the bottom of the slim bar below that. */}
            <p
                aria-hidden
                className={`absolute bottom-[40px] left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap text-2xl font-medium capitalize leading-[1.2] text-white [writing-mode:vertical-rl] lg:block transition-opacity ${active ? "opacity-0 duration-150" : "opacity-100 delay-500 duration-300"
                    }`}
            >
                {challenge.closedLines[0]}
                <br />
                {challenge.closedLines[1]}
            </p>
            <p
                aria-hidden
                className={`absolute inset-x-6 bottom-1/2 translate-y-1/2 truncate text-lg font-medium capitalize leading-[1.2] text-white transition-opacity lg:hidden ${active ? "opacity-0 duration-150" : "opacity-100 delay-500 duration-300"
                    }`}
            >
                {challenge.title}
            </p>

            {/* Open state. Its width is fixed so it does not reflow while the
                card is still growing; the card's own overflow clips it. From lg
                up it sits 56 from the bottom so the 48px icon's centre lands on
                the tab's top edge (56 + 81 - 24 = 113), half on the photo and
                half on the tab, and the title sits inside the tab. */}
            <div
                className={`absolute bottom-[31px] left-6 lg:bottom-[56px] flex h-[81px] w-[calc(100%-48px)] flex-col justify-between transition-[opacity,translate] lg:left-8 lg:w-[357px] ${active
                        ? "translate-y-0 opacity-100 delay-500 duration-500"
                        : "pointer-events-none translate-y-2 opacity-0 duration-150"
                    }`}
            >
                <span className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-[6px]">
                    <Image src={challenge.icon} alt="" className="size-6" />
                </span>
                <span className="text-xl font-medium capitalize leading-[1.2] text-white sm:text-2xl">
                    {challenge.title}
                </span>
            </div>
        </button>
    );
}

// Section 2 — white, full 64 on both edges (the dark "Our Approach" band sits
// below it, and the hero curtain above).
export default function ComplexBusinessRealities() {
    const [activeIndex, setActiveIndex] = useState(0);

    const step = (delta) =>
        setActiveIndex((current) => (current + delta + CHALLENGES.length) % CHALLENGES.length);

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-8"
            >
                <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="flex min-w-0 flex-1 flex-col gap-6">
                        <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                            Our Challenges
                        </p>

                        <div className="flex flex-col gap-3 md:flex-row">
                            <h2 className="flex-1 text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                                Complex Business Realities.
                                <br /> Greater Expectations.
                            </h2>
                            <p className="flex-1 pt-[2px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                                Enterprises today face growing complexity, increasing pressure to modernize and the need
                                to do more with less. We help you turn these challenges into opportunities.
                            </p>
                        </div>
                    </div>

                    <div className="flex lg:w-[372px] lg:shrink-0 lg:justify-end">
                        <Link
                            href="/services/"
                            className="group inline-flex h-12 items-center gap-[10px] rounded-[8px] bg-[#0061af] px-7 text-base font-normal capitalize leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192]"
                        >
                            Explore All Services
                            <Image
                                src={iconArrow}
                                alt=""
                                className="h-4 w-[21px] transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>

                <div className="flex w-full flex-col items-end gap-8">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            aria-label="Previous challenge"
                            onClick={() => step(-1)}
                            className="flex size-8 items-center justify-center rounded-full border border-[#1e1e1e] transition-colors hover:bg-black/5"
                        >
                            <Image src={iconChevron} alt="" className="size-4" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next challenge"
                            onClick={() => step(1)}
                            className="flex size-8 items-center justify-center rounded-full border border-[#1e1e1e] transition-colors hover:bg-black/5"
                        >
                            <Image src={iconChevron} alt="" className="size-4 -scale-x-100" />
                        </button>
                    </div>

                    <div className="flex w-full flex-col gap-4 lg:h-[357px] lg:flex-row">
                        {CHALLENGES.map((challenge, index) => (
                            <ChallengeCard
                                key={challenge.title}
                                challenge={challenge}
                                active={index === activeIndex}
                                onSelect={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
