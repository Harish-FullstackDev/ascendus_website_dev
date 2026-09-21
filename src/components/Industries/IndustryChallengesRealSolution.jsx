"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import IndustryCard from "./IndustryCard";

import arrowIcon from "@/assets/Industries/icons/arrow-right-16.svg";
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

// Sits between the dark outcomes band and the CTA photo. The washed-out
// mountain backdrop this section used to carry is gone from the design — it is a
// plain white band now. The background still changes on both edges, so it keeps
// the full 64px top and bottom.
export default function IndustryChallengesRealSolution() {
    return (
        <section id="solution" className="w-full scroll-mt-24 bg-white">
            <div className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
                {/* Figma 258:1392 — a 448px copy column and an 800px card track
                    pushed to either end of the row. */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex w-full flex-col items-start gap-6 lg:w-[448px] lg:shrink-0"
                    >
                        <div className="flex flex-col items-start gap-3">
                            {/* Not the 14px eyebrow the other sections use —
                                Figma sets this one at 18px regular with 1.8px of
                                tracking (Hero_Eyebrow). */}
                            <p className="flex h-8 items-center text-lg font-normal uppercase tracking-[1.8px] text-[#0061af] leading-[1.2]">
                                Solution
                            </p>

                            <h2 className="text-2xl sm:text-[32px] font-semibold text-[#0d1b2e] leading-[1.2]">
                                Industry Challenges
                                <br />
                                Real Solution
                            </h2>

                            <p className="text-base font-normal text-[#4a5565] leading-[1.5]">
                                Let&apos;s explore how we can help you solve your industry&apos;s unique challenges and
                                create new opportunities for growth.
                            </p>
                        </div>

                        <Link
                            href="/solutions/"
                            className="group inline-flex h-12 items-center gap-2.5 rounded-[8px] bg-[#0061af] px-7 text-base font-normal text-white transition-colors duration-300 hover:bg-[#004c8a]"
                        >
                            Explore Solution
                            <Image
                                src={arrowIcon}
                                alt=""
                                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </motion.div>

                    {/* 20px between the three cards (Figma 258:1407 — three
                        253px cards across an 800px track). */}
                    <div className="grid w-full grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 lg:max-w-[800px]">
                        {SOLUTIONS.map((solution) => (
                            <IndustryCard
                                key={solution.title}
                                description={solution.description}
                                image={solution.image}
                                title={solution.title}
                                variant="solution"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
