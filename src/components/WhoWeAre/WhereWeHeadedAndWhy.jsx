"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hanken_Grotesk } from "next/font/google";
import missionBg from "@/assets/WhoWeAre/mission_vision.webp";

// AktivGrotesk (used in the Figma design) isn't a freely licensed font, so this
// substitutes Hanken Grotesk, a similar neo-grotesque with matching thin/light weights.
const cardFont = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["200", "300"],
});

const SEGMENT_MS = 300;
// How long each card holds the active state when the row is cycling on its own,
// and how long a manual hover suppresses that cycle after the pointer leaves.
// 4500ms matches the autoplay beat of the Industries and Services carousels.
const AUTOPLAY_MS = 4500;
const RESUME_MS = 4500;

// each edge's transition-delay depends on hover direction: the edge that draws/retracts
// first in a given direction gets 0ms, the one that continues from its meeting point waits
// for the first to finish (SEGMENT_MS).
function edgeStyle(firstOnEnter) {
    return (isHovered) => ({
        transitionDuration: `${SEGMENT_MS}ms`,
        transitionDelay: `${isHovered === firstOnEnter ? 0 : SEGMENT_MS}ms`,
        transitionTimingFunction: "ease-in-out",
        transitionProperty: "transform",
    });
}

const topStyle = edgeStyle(true);
const rightStyle = edgeStyle(false);
const leftStyle = edgeStyle(true);
const bottomStyle = edgeStyle(false);

const CARDS = [
    {
        title: "Mission",
        description:
            "To give enterprises across the GCC a single, accountable partner for the technology their operations depend on, from the first SAP assessment through years of live production support. We measure our work by whether systems keep running the way they were designed to, long after the project team has moved on.",
    },
    {
        title: "Vision",
        description:
            "To be the enterprise technology practice GCC organizations turn to first, not because we cover every capability on a page, but because our SAP foundation, cloud engineering, and compliance fluency operate as one coordinated practice instead of five separate vendor relationships.",
    },
    {
        title: "Culture & Values",
        description:
            "We foster a culture of collaboration, integrity, continuous learning, and innovation. By empowering our people and embracing diverse perspectives, we create an environment where great ideas thrive and exceptional results follow.",
    },
    {
        title: "CSR",
        description:
            "We believe business success goes hand in hand with social responsibility. Through ethical practices, environmental awareness, community engagement, and sustainable initiatives, we strive to create a positive impact for society and future generations.",
    },
];

// `isActive` is owned by the section, not the card: the row cycles the active
// card on a timer, and a hover simply overrides which index is active. The card
// itself only reports pointer enter/leave and renders whichever state it is told.
function AnimatedBorderCard({ title, description, isActive, onActivate, onDeactivate }) {
    const isHovered = isActive;

    return (
        <div
            className="relative flex-1 h-[320px] sm:h-[600px] px-[30px] py-10 flex flex-col justify-start overflow-hidden"
            onMouseEnter={onActivate}
            onMouseLeave={onDeactivate}
        >
            {/* Tint: the card darkens its own slice of the parallax photo so the active
                card reads as active against its neighbours (Figma node 2270:1884 shows
                the card over a near-black ground). Its own layer rather than a background
                colour on the card, so it cross-fades independently of the border draw —
                500ms ease-out, slower than the 300ms border segments so the darkening
                reads as a settle, not a flash. First in the DOM, with the border spans
                and the `relative` text painting over it.

                Below sm the section holds every card active at once (see allActive
                there): a phone shows one ~420px card at a time, so a highlight that walks
                the row would never be seen beside an unlit neighbour — it would just read
                as a card that randomly dims. */}
            <span
                aria-hidden
                className="absolute inset-0 bg-black pointer-events-none transition-opacity ease-out"
                style={{ opacity: isHovered ? 0.55 : 0, transitionDuration: "500ms" }}
            />

            {/* border draws from the top-left corner: top+right and left+bottom each animate in sequence, meeting at bottom-right.
                On leave, each line un-draws along the same path it drew in on, so the edge that finished last (right/bottom)
                retracts first, and the edge that started first (top/left) only starts retracting once its partner returns.
                The scale lives in an inline transform, not a Tailwind scale-* class: in v4 those write the CSS
                `scale` property, which transition-property: transform does not animate — the border would snap. */}
            <span
                className="absolute left-0 top-0 h-px w-full origin-left bg-[#d0d0d0]"
                style={{ ...topStyle(isHovered), transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
            />
            <span
                className="absolute right-0 top-0 h-full w-px origin-top bg-[#d0d0d0]"
                style={{ ...rightStyle(isHovered), transform: isHovered ? "scaleY(1)" : "scaleY(0)" }}
            />
            <span
                className="absolute left-0 top-0 h-full w-px origin-top bg-[#d0d0d0]"
                style={{ ...leftStyle(isHovered), transform: isHovered ? "scaleY(1)" : "scaleY(0)" }}
            />
            <span
                className="absolute left-0 bottom-0 h-px w-full origin-left bg-[#d0d0d0]"
                style={{ ...bottomStyle(isHovered), transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
            />

            <h2 className={`${cardFont.className} relative text-2xl font-semibold text-white`}>{title}</h2>
            <p
                className={`${cardFont.className} relative text-lg font-light mt-10 leading-relaxed origin-left transition-all ease-in-out ${isHovered ? "text-white scale-105" : "text-white/50"
                    }`}
                style={{ transitionDuration: `${SEGMENT_MS}ms` }}
            >
                {description}
            </p>
        </div>
    );
}

export default function WhereWeHeadedAndWhy() {
    // The row highlights one card at a time and walks through them on its own, so
    // the panel reads as alive on touch screens too, where hover never fires.
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    // Below sm the cards stack and only one ~420px card is on screen at a time, so a
    // highlight walking the row is never seen against an unlit neighbour. There, every
    // card holds the active look instead and the timer is switched off entirely.
    const [allActive, setAllActive] = useState(false);
    const resumeTimer = useRef(null);

    useEffect(() => {
        const query = window.matchMedia("(max-width: 639px)");
        const apply = () => setAllActive(query.matches);
        apply();
        query.addEventListener("change", apply);
        return () => query.removeEventListener("change", apply);
    }, []);

    useEffect(() => {
        if (allActive || hoveredIndex !== null) return undefined;
        const id = setInterval(() => setActiveIndex((i) => (i + 1) % CARDS.length), AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [allActive, hoveredIndex]);

    useEffect(() => {
        return () => {
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        };
    }, []);

    // Hovering takes over the active state; releasing leaves that card lit for
    // RESUME_MS before the cycle picks up again from there, so the highlight never
    // jumps away the instant the pointer moves off.
    const activate = useCallback((index) => {
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        setHoveredIndex(index);
        setActiveIndex(index);
    }, []);

    const deactivate = useCallback(() => {
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setHoveredIndex(null), RESUME_MS);
    }, []);

    return (
        <section className="w-full pt-10 pb-10 sm:pt-8 sm:pb-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16 px-6 sm:px-[64px]"
            >
                <h2 className="text-[28px] font-semibold text-[#2E3033]">Where We&apos;re Headed, and Why</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                    Everything we build ties back to two commitments what we exist to do for clients today, and
                    where we intend to take the practice next.
                </p>
            </motion.div>

            <div className="relative w-full">
                {/* Fixed Background */}
                <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${missionBg.src})`,
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative flex flex-col gap-4 py-10 sm:py-16 sm:flex-row sm:items-center px-6 sm:px-[64px]">
                    {CARDS.map((card, index) => (
                        <AnimatedBorderCard
                            key={card.title}
                            {...card}
                            isActive={allActive || (hoveredIndex === null ? index === activeIndex : index === hoveredIndex)}
                            onActivate={() => activate(index)}
                            onDeactivate={deactivate}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
