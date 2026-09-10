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
                {/* Below the 1400px design width the card's own box shrinks with the
                    viewport (its height is a % of an aspect-locked wrapper) while the
                    copy did not, so with overflow-hidden the first and last lines were
                    simply cut off — and the 15% right padding plus the 58.5% column cap
                    meant a third of the card sat empty while that happened.

                    The card's position and size are untouched. What adapts is the copy
                    inside it: the column widens into that unused right side, and the
                    type and spacing scale with the viewport on the same curve the card
                    itself does, so the content stays proportional to the box instead of
                    outgrowing it. Every clamp resolves to the original Figma value at
                    1400px and above, so the design width renders exactly as before.

                    Every fluid value is gated behind sm:, so the stacked mobile layout
                    below 640px keeps its own fixed sizes untouched. */}
                <div className="relative w-full lg:absolute lg:top-[13.5%] lg:left-[37.7%] lg:h-[76.3%] lg:w-[62.3%] bg-[#F3F6F9] overflow-hidden flex items-center px-6 sm:pl-[7.5%] sm:max-[1399px]:pr-[8%] min-[1400px]:pr-[15%] py-8 sm:max-[1399px]:py-[clamp(1rem,2vw,2rem)] min-[1400px]:py-10">
                    <div className="flex flex-col gap-8 sm:max-[1399px]:gap-[clamp(1rem,2.6vw,2.5rem)] min-[1400px]:gap-16 w-full sm:max-[1399px]:max-w-[85%] min-[1400px]:max-w-[58.5%]">
                        <h2 className="font-heading text-black text-xl sm:text-[clamp(1.5rem,1.95vw,1.75rem)] font-semibold">Our Security Advantages</h2>
                        <div className="flex flex-col gap-4 sm:gap-[clamp(0.5rem,1.1vw,1rem)]">
                            <h2 className="text-[#2E3033] text-xl sm:text-[clamp(1.125rem,1.67vw,1.5rem)] font-semibold">
                                Regional compliance depth and SAP security expertise.
                            </h2>
                            <ul className="list-disc marker:text-[#6c6c6c] pl-[27px] text-[#6c6c6c] text-lg sm:text-[clamp(0.9375rem,1.25vw,1.125rem)] font-light leading-relaxed space-y-3 sm:space-y-[clamp(0.5rem,0.83vw,0.75rem)]">
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
