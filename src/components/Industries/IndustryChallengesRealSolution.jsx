"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import IndustryCard from "./IndustryCard";

import sectionBg from "@/assets/Industries/Solution_Bg.webp";
import arrowIcon from "@/assets/Industries/icons/arrow-right-small.svg";
import strategyImage from "@/assets/Industries/Healthcare_Life_Sciences.webp";
import technologyImage from "@/assets/Industries/Technology_Media_Communications.webp";

// Figma reuses two of the industry photos here — "Strategy Advisory" takes the
// Healthcare & Life Sciences shot and both "Technology Implementation" and
// "Process Transformation" take the Technology, Media & Communications one. The
// assets are referenced rather than duplicated; ask the designer for dedicated
// photos for these three.
const SOLUTIONS = [
    {
        description: "Turn Industry insight into actionable strategies for sustainable growth",
        image: strategyImage,
        title: "Strategy Advisory",
    },
    {
        description: "Design and deploy Scalable Solutions that drive efficiency and innovation",
        image: technologyImage,
        title: "Technology Implementation",
    },
    {
        description: "Enable Smarter, leaner and more resilient operation across the value chain",
        image: technologyImage,
        title: "Process Transformation",
    },
];

// Sits between the dark outcomes band and the CTA photo, and carries its own
// washed-out mountain backdrop — a background change on both edges, so the full
// 64px top and bottom.
export default function IndustryChallengesRealSolution() {
    return (
        <section id="solution" className="relative w-full scroll-mt-24 overflow-hidden">
            {/* The backdrop is almost entirely veiled by an 85% white wash in
                Figma; it reads as texture behind the copy rather than a photo. */}
            <Image src={sectionBg} alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-white/85" />

            <div className="relative px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
                {/* Figma: a 434px copy column beside an 800px card track with a
                    ~64px gutter. */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,434px)_minmax(0,1fr)] gap-10 lg:gap-16 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-start"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.6px] text-[#5189c5] leading-4">
                            Solution
                        </p>

                        <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-[-0.9px] text-[#0d1b2e] leading-[1.08]">
                            Industry Challenges
                            <br />
                            Real Solution
                        </h2>

                        <p className="mt-4 max-w-[448px] text-base text-[#4a5565] leading-[26px]">
                            Let&apos;s explore how we can help you solve your industry&apos;s unique challenges and
                            create new opportunities for growth.
                        </p>

                        <Link
                            href="/solutions/"
                            className="group mt-8 inline-flex h-12 items-center gap-2.5 rounded-[4px] bg-[#0d1b2e] px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0a3a52]"
                        >
                            Explore Solution
                            <Image
                                src={arrowIcon}
                                alt=""
                                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </motion.div>

                    {/* 20px between the three cards (Figma 179:2621 — three
                        253px cards across an 800px track). */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                        {SOLUTIONS.map((solution) => (
                            <IndustryCard
                                key={solution.title}
                                description={solution.description}
                                image={solution.image}
                                title={solution.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
