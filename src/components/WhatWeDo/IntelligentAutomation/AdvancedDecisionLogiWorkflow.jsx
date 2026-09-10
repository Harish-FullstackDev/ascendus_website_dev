"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import processMiningPhoto from "@/assets/WhatWeDo/Intelligent Automation/new/Advanced_Decision.jpg";

const CARDS = [
    { title: "Workflow Automation", desc: "Automated approval and routing workflows that eliminate delays across departments." },
    { title: "Business Rules Automation", desc: "Decision logic automated and centralized, so policy is applied consistently every time." },
    { title: "AI Powered Automation", desc: "Automation enhanced with AI to handle exceptions and unstructured data, not just fixed rules." },
];

export default function AdvancedDecisionLogiWorkflow() {
    return (
        <section className="w-full bg-[#e6e6e6]">
            <div className="relative max-w-screen mx-auto">
                {/* Photo + blue box share their own relative wrapper, sized
                    to the photo alone. Without this, the blue box's
                    absolute "bottom-0" (mobile) resolved against the whole
                    section — photo + the stacked cards below it — so it
                    snapped to the bottom of the last card instead of the
                    bottom of the photo, overlapping the 3rd card. Scoping it
                    to just the photo fixes that; the cards grid is now a
                    separate sibling below. */}
                <div className="relative">
                    <div className="relative w-full h-[220px] sm:h-96">
                        <Image src={processMiningPhoto} alt="" fill className="object-cover" />
                    </div>

                    {/* Blue box — on desktop it sits mostly on the photo but
                        its bottom edge pokes past the photo into the grey
                        area below, matching Figma (top: 267px, height: 240px
                        against a 384px-tall photo). On mobile it's flush
                        with the photo's bottom edge instead. */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute left-0 bottom-0 sm:bottom-auto sm:top-[267px] w-[85%] sm:w-[477px] sm:h-60 bg-[#1c5f85]/80 text-white flex flex-col justify-center gap-2 px-6 sm:px-[76px] py-6 sm:py-0 z-0"
                    >
                        <h2 className="text-2xl sm:text-[28px] font-semibold">Advanced Decision Logic & Workflow</h2>
                        <p className="text-lg sm:text-lg font-light">Extended automation capabilities for complex business rules.</p>
                    </motion.div>
                </div>

                {/* Cards — normal flow right after the photo, with only a small
                    top offset (44px) so they clip just the bottom sliver of the
                    blue box instead of covering it.

                    All three cards stay on ONE row from sm up; only below sm do
                    they stack one per row. An earlier attempt at this dropped
                    to two columns between sm and 1300px, which is what produced
                    the 2-then-1 split.

                    Three columns fit at every width because the offset that
                    used to prevent it is now fluid rather than fixed. The
                    asymmetric 353px-left / 64px-right padding is a Figma
                    coordinate off the ~1440px frame; held at a literal 353px it
                    left, at 768px, only 768 - 353 - 64 - gaps ≈ 287px to share
                    between three cards, and at 640px nothing at all. The clamp
                    interpolates that offset linearly from 64px at the sm
                    breakpoint to the full 353px at 1300px and above
                    (43.79vw - 216.2px is the line through those two points), so
                    the cards keep the Figma inset exactly where the design
                    frame is wide enough to carry it and reclaim the space
                    below that.

                    The card gap and the cards' own padding scale on the same
                    principle, and sm:min-h-64 replaces the fixed sm:h-64 so
                    taller copy grows the card instead of being clipped — at
                    1300px+ the content fits inside 256px anyway, so the
                    rendered result there is unchanged. */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-[clamp(1rem,2.2vw,2rem)] px-6 sm:pl-[clamp(4rem,calc(43.79vw_-_216.2px),22.0625rem)] sm:pr-16 pt-8 sm:pt-11 pb-35 sm:pb-16 relative z-10">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                            className="bg-white px-8 py-10 sm:px-[clamp(1rem,2.25vw,2rem)] sm:py-[clamp(1.5rem,2.8vw,2.5rem)] flex flex-col gap-8 sm:gap-[clamp(1rem,2.2vw,2rem)] sm:min-h-64"
                        >
                            <h2 className="text-[#2E3033] text-xl font-semibold">{card.title}</h2>
                            <p className="text-[#55595E] text-lg font-light">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
