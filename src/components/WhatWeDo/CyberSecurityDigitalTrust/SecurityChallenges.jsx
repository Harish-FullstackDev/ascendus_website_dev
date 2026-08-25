"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import challengeImage from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/new/our_Security.jpg";

const CHALLENGES = [
    "SAP segregation of duties expertise",
    "Continuous security operations",
    "GCC regulatory compliance depth",
    "Real-world penetration testing",
    "Zero trust architecture experience",
    "Governance tied to business risk",
];

export default function SecurityChallenges() {
    return (
        // No horizontal padding on the section: Figma's blue panel is flush to the true left
        // edge with zero gap, so any container padding here would reproduce the exact gap the
        // design doesn't have. Vertical rhythm only (py-10/16); the previous py-[-55px] was an
        // invalid negative value that would've been dropped by the browser anyway.
        <section className="w-full ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full flex flex-col gap-6 sm:gap-8 lg:block lg:aspect-[1240/569]"
            >
                {/* Panel: Figma is landscape (701x566 — wider than tall, the opposite of the
                    previous portrait crop) and left-flush with zero gap. w-[56.5%] + inset-y-0
                    left-0 reproduce that against the aspect-locked wrapper below at any width. */}
                <div className="relative w-full aspect-[701/566] lg:aspect-auto lg:absolute lg:inset-y-0 lg:left-0 lg:w-[56.5%]">
                    <Image src={challengeImage} alt="" fill className="object-cover" />
                </div>

                {/* Card: right-flush against the wrapper (left 37.7% + width 62.3% = 100%),
                    76.3% of the wrapper's height vs. the panel's ~100% — visibly shorter than
                    the panel, matching Figma, instead of the two being near-equal height. Title +
                    description + list now live inside the card itself (Figma has no separate
                    page-level heading above this row), and the blue accent bar Figma doesn't
                    have has been removed. */}
                <div className="relative w-full lg:absolute lg:top-[13.5%] lg:left-[37.7%] lg:h-[76.3%] lg:w-[62.3%] bg-[#F3F6F9] overflow-hidden flex items-center px-6 sm:pl-[7.5%] sm:pr-[15%] py-8 sm:py-10">
                    <div className="flex flex-col gap-8 sm:gap-16 w-full sm:max-w-[58.5%]">
                        <p className="font-heading text-black text-xl sm:text-2xl font-medium">Our Security Advantages</p>
                        <div className="flex flex-col gap-4">
                            <p className="text-[#2E3033] text-xl sm:text-2xl font-medium">
                                Regional compliance depth and SAP security expertise.
                            </p>
                            <ul className="list-disc marker:text-[#6c6c6c] pl-[27px] text-[#6c6c6c] text-lg font-light leading-relaxed">
                                {CHALLENGES.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
