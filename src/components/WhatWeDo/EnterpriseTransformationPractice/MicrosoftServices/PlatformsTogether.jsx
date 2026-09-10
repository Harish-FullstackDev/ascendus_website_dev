"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/platform-1.png";
import card2 from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/platform-2.png";
import card3 from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/platform-3.png";
import card4 from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/platform-4.png";

const STEPS = [
    {
        image: card1,
        title: "Map the Boundary",
        desc: "Identify what belongs in SAP, what belongs in Microsoft, and where the two need to talk to each other.",
    },
    {
        image: card2,
        title: "Design the Connection",
        desc: "The integration pattern between SAP and Microsoft is defined up front, so data flows one way, not through duplicate manual entry.",
    },
    {
        image: card3,
        title: "Deploy With Governance",
        desc: "Access controls, environment management, and monitoring are configured before go-live, not retrofitted once the platform is already in use.",
    },
    {
        image: card4,
        title: "Support Both as One",
        desc: "A single team carries support across both platforms, so an issue that touches both doesn't get bounced between two vendors.",
    },
];

export default function PlatformsTogether() {
    // Deliberately built to mirror OurAIServices on the AI page — same hover
    // row, same autoplay, same aspect-ratio-driven sizing — so the two
    // "capability row" sections read as one component across the site.
    //
    // First card is open by default so users see the cards are expandable.
    // Hovering another card opens it and closes the rest; unlike a typical
    // hover-reveal, moving the mouse off the row does NOT snap back to the
    // first card — whichever card was hovered last stays open/active.
    const [activeIndex, setActiveIndex] = useState(0);

    // Autoplay: cycles the active card automatically so the effect is visible
    // even if the user never hovers the row. It pauses the instant the mouse
    // enters the row (so manual hover-control still works exactly as above)
    // and resumes cycling from wherever the user left off once the mouse
    // leaves — it does not reset back to the first card.
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % STEPS.length);
        }, 2500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full bg-white py-10 sm:p-16 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-2xl font-semibold">
                    How the Two Platforms Work Together
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Designed as one landscape, not negotiated between two vendors
                </p>
            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible */}
            <div className="flex sm:hidden flex-col gap-4 max-w-[1280px] mx-auto">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={step.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <h2 className="text-white text-xl font-semibold">{step.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-to-grow row — first card open by default.
                Sizing, spacing and timing are copied from OurAIServices rather
                than re-derived, so the two sections stay identical:

                - The gap is a % of the row itself (3.7% — the Figma 42.67px gap
                  at the 1152px reference content width), capped at that literal
                  px value so it never grows past the design on large monitors
                  and starves the fluid cards of width.
                - Height comes from aspect-ratio, not a fixed px, locked to
                  Figma's 256:320 (open) and 256:240 (closed) ratios — 4:5 and
                  16:15. This replaced fixed h-[458px]/h-[320px] here: with a
                  fluid (flex-1) width, a pinned height made the card box wider
                  than Figma's own ratio at most viewports, so object-cover
                  cropped more off the photo top/bottom than the design shows.
                  min-h-[280px] is a floor so the open card's title +
                  description never run out of vertical room on narrow desktops.

                The one intentional difference from OurAIServices is the overlay
                strength: these platform photos are considerably brighter than
                the AI ones (near-white walls exactly where the title sits), so
                the inactive scrim cannot go to transparent the way it does
                there without the white title becoming unreadable. It still
                lightens on inactive and darkens on hover, so the interaction
                reads the same. */}
            <div
                className="hidden sm:flex sm:items-end gap-[clamp(12px,3.7%,42.67px)] w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {STEPS.map((step, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div key={step.title} className="relative flex-1 aspect-[4/5] min-h-[280px]">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onFocus={() => setActiveIndex(index)}
                                className={`absolute bottom-0 inset-x-0 overflow-hidden transition-[aspect-ratio] duration-500 ease-out ${isActive ? "aspect-[4/5] z-20" : "aspect-[16/15] z-10"
                                    }`}
                            >
                                <Image src={step.image} alt="" fill className="object-cover" />

                                <div
                                    className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/65" : "bg-black/35"
                                        }`}
                                />

                                <div
                                    className={`absolute inset-0 flex flex-col justify-between gap-3 transition-[padding] duration-500 ${isActive ? "p-6" : "p-4"
                                        }`}
                                >
                                    <h2 className="text-white text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                    <p
                                        className={`text-white/85 text-lg font-light overflow-hidden transition-all duration-700 ease-out ${isActive ? "max-h-64 opacity-100 delay-250" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
