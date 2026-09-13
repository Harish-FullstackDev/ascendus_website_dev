"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Reuse CoreCapabilities.jsx as the reference for content and card count —
// same 12 items as that section, instead of maintaining a second,
// out-of-sync copy here.
import { CAPABILITIES } from "./CoreCapabilities";
import arrowIcon from "@/assets/HomePage/Industries/icon-arrow.svg";

// Timings match the Industries carousel so both auto-rotating strips on the
// homepage move at one rhythm.
const AUTOPLAY_MS = 4500;
const RESUME_MS = 8000;
const TRANSITION_MS = 600;

const COUNT = CAPABILITIES.length; // 12
// The track renders 3 copies of the array back to back so it always has a
// buffer to slide into on either side, at any visible-card count. Only the
// MIDDLE copy is real, crawlable content — the other two are aria-hidden and
// inert so each capability is encountered exactly once by a crawler or screen
// reader. Same mechanism as Industries.jsx, which needs persistent DOM nodes
// for the CSS-transition-driven slide.
const TRIPLE = 3;
const TOTAL = COUNT * TRIPLE;
const STEP_PCT = 100 / TOTAL;

function ServiceCard({ item }) {
    const content = (
        <div className="group relative w-full overflow-hidden aspect-[7/8]">
            <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/30 transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/45 group-hover:to-black/25 pointer-events-none" />

            {/* Title top, description bottom */}
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-between p-6 sm:p-8">
                <h2 className="text-white text-2xl font-semibold leading-[1.4]">{item.title}</h2>

                <p className="text-white/90 text-lg font-light leading-[1.5] pt-2">{item.desc}</p>
            </div>
        </div>
    );

    return item.href ? (
        <Link href={item.href} className="block w-full">
            {content}
        </Link>
    ) : (
        content
    );
}

// Auto-advancing carousel, one card-step at a time, with the prev/next arrow
// pair reused from the Industry-Specific Solutions section. Replaces the
// scroll-locked reel this section used to be: pinning the viewport and
// remapping vertical scroll to horizontal pan read as a drag — worst on a
// phone, where one thumb-flick bought only a sliver of pan.
export default function Services() {
    // trackIndex is the absolute position (0..TOTAL-1) of the track's leftmost
    // visible card. It starts in the middle copy of the tripled array so the
    // carousel can slide either direction from the very first render.
    const [trackIndex, setTrackIndex] = useState(COUNT);
    const [visibleCount, setVisibleCount] = useState(4);
    const [isPaused, setIsPaused] = useState(false);
    const [instant, setInstant] = useState(false); // true only for the one-frame seamless-loop snap
    const resumeTimer = useRef(null);

    // 4 cards in view on desktop — the same count the old reel showed at lg
    // (w-[calc(25%-12px)]) — dropping to 2 and then 1 as the card would
    // otherwise get too narrow to read.
    useEffect(() => {
        const computeVisible = () => {
            const w = window.innerWidth;
            if (w < 640) setVisibleCount(1);
            else if (w < 1024) setVisibleCount(2);
            else setVisibleCount(4);
        };
        computeVisible();
        window.addEventListener("resize", computeVisible);
        return () => window.removeEventListener("resize", computeVisible);
    }, []);

    // Pauses autoplay for RESUME_MS after an arrow tap, so the carousel does
    // not slide out from under someone steering it by hand.
    const pauseForInteraction = useCallback(() => {
        setIsPaused(true);
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setIsPaused(false), RESUME_MS);
    }, []);

    useEffect(() => {
        if (isPaused) return undefined;
        const id = setInterval(() => setTrackIndex((i) => i + 1), AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [isPaused]);

    // Once the track has slid half an array-length away from the middle copy,
    // snap it back by one array-length with the transition switched off for a
    // single frame — invisible, since every copy of the array is identical,
    // and what makes the loop feel infinite instead of hitting a wall.
    useEffect(() => {
        const lower = COUNT * 0.5;
        const upper = COUNT * 1.5;
        if (trackIndex >= lower && trackIndex < upper) return undefined;

        const timeout = setTimeout(() => {
            setInstant(true);
            setTrackIndex((i) => {
                let normalized = i % COUNT;
                if (normalized < 0) normalized += COUNT;
                return normalized + COUNT;
            });
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setInstant(false));
            });
        }, TRANSITION_MS);

        return () => clearTimeout(timeout);
    }, [trackIndex]);

    useEffect(() => {
        return () => {
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        };
    }, []);

    const stepBy = useCallback(
        (delta) => {
            setTrackIndex((i) => i + delta);
            pauseForInteraction();
        },
        [pauseForInteraction]
    );

    // Widths are a share of the track's own width, the track being
    // TOTAL/visibleCount times the viewport — so one step of trackIndex
    // translates by exactly one card.
    const trackWidthPct = (TOTAL / visibleCount) * 100;
    const translateXPct = trackIndex * STEP_PCT;

    return (
        <section id="ascendus-services" className="w-full bg-white py-10 sm:py-16 px-6 sm:px-16">
            <div className="flex flex-col gap-8 sm:gap-16">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2 max-w-[808px]"
                    >
                        <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold leading-[1.4] tracking-[0.28px]">
                            Everything an Enterprise Needs to Run on Modern Technology
                        </h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.5] max-w-[600px]">
                            A complete technology foundation that connects strategy, systems, security, data, and
                            operations to help enterprises scale with confidence.
                        </p>
                    </motion.div>

                    {/* Arrows sit above the cards, right-aligned — same icon, size and
                        hover behavior as the Industry-Specific Solutions section. They
                        share the heading's row from md up and drop below it, still
                        right-aligned, when that row is too narrow. */}
                    <div className="shrink-0 self-end flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Previous capability"
                            onClick={() => stepBy(-1)}
                            className="flex items-center justify-center size-12 transition-transform duration-300 hover:scale-110"
                        >
                            <Image src={arrowIcon} alt="" className="size-12 -rotate-90" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next capability"
                            onClick={() => stepBy(1)}
                            className="flex items-center justify-center size-12 transition-transform duration-300 hover:scale-110"
                        >
                            <Image src={arrowIcon} alt="" className="size-12 rotate-90" />
                        </button>
                    </div>
                </div>

                {/* -mx-2 cancels the px-2 gutter each slide carries, so the outer
                    card edges still line up with the section's own padding while the
                    inner gutters read as the original gap-4 (16px) between cards.
                    Autoplay also holds while the pointer is over the strip, so a card
                    can't slide away mid-read or mid-click. */}
                <div
                    className="w-full overflow-hidden -mx-2"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex flex-row"
                        style={{
                            width: `${trackWidthPct}%`,
                            transform: `translateX(-${translateXPct}%)`,
                            transition: instant ? "none" : `transform ${TRANSITION_MS}ms ease-in-out`,
                        }}
                    >
                        {Array.from({ length: TOTAL }, (_, position) => {
                            const item = CAPABILITIES[position % COUNT];
                            // Only the middle copy of the 3 is real, indexable content.
                            const isCanonical = Math.floor(position / COUNT) === 1;
                            return (
                                <div
                                    key={`${item.title}-${position}`}
                                    style={{ width: `${STEP_PCT}%` }}
                                    className="shrink-0 px-2"
                                    aria-hidden={isCanonical ? undefined : true}
                                    inert={isCanonical ? undefined : true}
                                >
                                    <ServiceCard item={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
