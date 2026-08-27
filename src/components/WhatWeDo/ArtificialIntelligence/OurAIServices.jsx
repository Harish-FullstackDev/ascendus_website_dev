"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import contentGenPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Strategy.webp";
import documentIntelPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/Generative_AI.webp";
import knowledgeMgmtPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Agents.webp";
import codeGenPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Integration.webp";
// import workflowAutoPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/Workflow_Automation.webp";

const CARDS = [
    {
        title: "AI Strategy",
        desc: "We define where AI creates the most value in your operations and build a roadmap that ties investment to measurable business outcomes.",
        image: contentGenPhoto,
    },
    {
        title: "Generative AI",
        desc: "We build generative AI solutions for content, code, and knowledge work that fit your data governance and security requirements.",
        image: documentIntelPhoto,
    },
    {
        title: "AI Agents",
        desc: "We design autonomous and semi-autonomous agents that execute multi-step business processes with human oversight built in.",
        image: knowledgeMgmtPhoto,
    },
    {
        title: "AI Integration",
        desc: "We embed AI models into your existing SAP and enterprise systems so intelligence works inside the tools your teams already use.",
        image: codeGenPhoto,
    },
];

export default function OurAIServices() {
    // First card (AI Strategy) is open by default so users see the cards are
    // expandable. Hovering another card opens it and closes the rest; unlike a
    // typical hover-reveal, moving the mouse off the row does NOT snap back to
    // the first card — whichever card was hovered last stays open/active.
    const [activeIndex, setActiveIndex] = useState(0);

    // Autoplay: cycles the active card automatically so the effect is visible
    // even if the user never hovers the row. It pauses the instant the mouse
    // enters the row (so manual hover-control from above still works exactly
    // as before) and resumes cycling from wherever the user left off once the
    // mouse leaves — it does not reset back to the first card.
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % CARDS.length);
        }, 2500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full py-10 sm:p-16 px-6 ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-2xl font-semibold">Our Artificial Intelligence Services</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">Core areas where we deploy AI to transform enterprise workflow</p>

            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible */}
            <div className="flex sm:hidden flex-col gap-4 max-w-[1280px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <h2 className="text-white text-xl font-semibold">{card.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-to-grow row — first card open by default.
                At the Figma reference frame (1280px viewport → 1152px content) each card is
                256px and the gap between them is 42.67px — exactly 3.7% of the row's own content
                width. Cards stay fluid (flex-1) so they grow together with the viewport instead of
                staying pinned at 256px while empty gap soaks up the rest of the width; the gap is
                a % of the row itself (not vw, which over-counts the section's own 64px padding)
                and is capped at that literal 42.67px Figma value so it never grows past what the
                design actually shows and starves the cards of width on larger monitors.
 
                Height is driven by aspect-ratio, not a fixed px, and locked to Figma's own
                256:320 (open) / 256:240 (closed) ratios — 4:5 and 16:15. Pinning height in px
                while width was fluid (flex-1) let the card's box get proportionally wider than
                Figma's own ratio at most viewport sizes, so object-cover had to crop more off the
                top/bottom of the photo than Figma shows. Locking the ratio means the box's shape
                — and therefore how much of the photo is visible — stays identical to Figma at
                any card width. min-h-[280px] is a floor under that ratio so the open card's title
                + description never run out of vertical room on narrower desktop widths, where a
                pure aspect-ratio height would otherwise get too short for the copy to fit. */}
            <div
                className="hidden sm:flex sm:items-end gap-[clamp(12px,3.7%,42.67px)] w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {CARDS.map((card, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div key={card.title} className="relative flex-1 aspect-[4/5] min-h-[280px]">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`absolute bottom-0 inset-x-0 overflow-hidden transition-[aspect-ratio] duration-500 ease-out ${isActive ? "aspect-[4/5] z-20" : "aspect-[16/15] z-10"
                                    }`}
                            >
                                <Image
                                    src={card.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />

                                <div
                                    className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/30" : "bg-black/0"
                                        }`}
                                />

                                <div className="absolute inset-0 flex flex-col justify-start gap-3 p-6">
                                    <h2 className="text-white text-xl sm:text-2xl font-semibold ">{card.title}</h2>
                                    <p
                                        className={`text-white/85 text-lg font-light  overflow-hidden transition-all duration-300 ease-out ${isActive ? "max-h-64 opacity-100 delay-500" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {card.desc}
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


