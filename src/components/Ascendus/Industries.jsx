"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import manufacturingImg from "@/assets/Ascendus/images/Industries/manufacturing.png";
import retailImg from "@/assets/Ascendus/images/Industries/retail-distribution.png";
import governmentImg from "@/assets/Ascendus/images/Industries/government-public-sector.png";
import financialImg from "@/assets/Ascendus/images/Industries/financial-services.png";

// The 4 real industries from Figma (node 2700:1394), plus 4 dummy placeholders
// per request — reusing the same 4 photos on a loop and clearly-labeled
// placeholder copy until the designer confirms the real 5th–8th industries.
// Swap `title`/`desc`/`image` on the `dummy: true` entries once that content
// is final; the carousel below works off `INDUSTRIES.length`, so adding or
// removing cards needs no other code changes.
const INDUSTRIES = [
    {
        title: "Manufacturing",
        desc: "Real-time visibility across plant floors, supply chains, and asset performance — engineered for uptime, not just dashboards.",
        image: manufacturingImg,
    },
    {
        title: "Retail & Distribution",
        desc: "Connecting inventory, logistics, and customer experience across every channel.",
        image: retailImg,
    },
    {
        title: "Government & Public Sector",
        desc: "Secure, compliant systems built for public accountability — from citizen services to interagency data sharing.",
        image: governmentImg,
    },
    {
        title: "Financial Services",
        desc: "Resilient, audit-ready infrastructure for institutions where security and uptime aren't optional.",
        image: financialImg,
    },
    {
        title: "Industry Name 5",
        desc: "Placeholder description for this industry — replace once the designer confirms the real content.",
        image: manufacturingImg,
        dummy: true,
    },
    {
        title: "Industry Name 6",
        desc: "Placeholder description for this industry — replace once the designer confirms the real content.",
        image: retailImg,
        dummy: true,
    },
    {
        title: "Industry Name 7",
        desc: "Placeholder description for this industry — replace once the designer confirms the real content.",
        image: governmentImg,
        dummy: true,
    },
    {
        title: "Industry Name 8",
        desc: "Placeholder description for this industry — replace once the designer confirms the real content.",
        image: financialImg,
        dummy: true,
    },
];

const COUNT = INDUSTRIES.length; // 8
const TRIPLE = 3; // render the array 3x so the track always has a buffer to slide into on either side
const TOTAL = COUNT * TRIPLE; // 24 DOM cards on the track
const STEP_PCT = 100 / TOTAL; // track-relative width of exactly one card, and exactly one translateX step
const AUTOPLAY_MS = 4500;
const RESUME_MS = 8000;
const TRANSITION_MS = 600;

export default function Industries() {
    // trackIndex is the absolute position (0..23) of the track's leftmost
    // visible card. It starts in the middle copy of the tripled array so the
    // carousel can slide either direction from the very first render.
    const [trackIndex, setTrackIndex] = useState(COUNT);
    const [visibleCount, setVisibleCount] = useState(4);
    const [isPaused, setIsPaused] = useState(false);
    const [instant, setInstant] = useState(false); // true only for the one-frame seamless-loop snap
    const resumeTimer = useRef(null);

    // 4 cards in view on desktop (matches Figma), fewer on smaller screens so
    // each card stays readable — same sliding-track mechanism throughout, just
    // a different window size.
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

    // The active (expanded) card is always the 2nd visible one on desktop —
    // slot index 1 — or the sole visible card when only 1 fits on screen.
    const activeOffset = Math.min(1, visibleCount - 1);

    // Auto-advance the track by exactly one card, paused while the user is
    // interacting with it.
    useEffect(() => {
        if (isPaused) return undefined;
        const id = setInterval(() => {
            setTrackIndex((i) => i + 1);
        }, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [isPaused]);

    // Once the track has slid two full array-lengths away from the middle
    // copy, snap it back by one array-length with the transition switched off
    // for a single frame — invisible to the viewer since every copy of the
    // array is identical, and what makes the loop feel infinite instead of
    // hitting a wall.
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

    // Clicking any visible card slides the track so that exact card lands in
    // the active slot, and pauses auto-play until the user's been idle again.
    const handleSelect = useCallback(
        (position) => {
            setTrackIndex(position - activeOffset);
            setIsPaused(true);
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
            resumeTimer.current = setTimeout(() => setIsPaused(false), RESUME_MS);
        },
        [activeOffset]
    );

    useEffect(() => {
        return () => {
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        };
    }, []);

    const trackWidthPct = (TOTAL / visibleCount) * 100;

    return (
        // Full 64 top and bottom per Figma's own py-[64px] on this section (node
        // 2700:1394) — confirmed directly, not the usual 32/32-white-neighbor
        // heuristic used elsewhere on the site.
        <section className="w-full bg-white pt-10 pb-10 sm:pt-16 sm:pb-16">
            <div className="w-full px-6 sm:px-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#0d0c22] text-2xl sm:text-[28px] font-medium">
                            Industry-Specific Solutions
                        </h2>
                        <p className="text-[#3d3d4e] text-lg font-light leading-[1.4]">
                            Built for Your Industry, Not Just Enterprise in General
                        </p>
                    </div>
                    <Link
                        href="/who-we-are"
                        className="shrink-0 border border-[#2d8ec5] px-8 py-3 text-lg font-light text-[#2E3033] text-center transition-colors hover:bg-[#2d8ec5] hover:text-white whitespace-nowrap"
                    >
                        Find Your Industry Solution
                    </Link>
                </motion.div>
            </div>

            {/* Sliding carousel: deliberately breaks out of the padded/max-width
                container above — Figma runs this row genuinely edge-to-edge (screen
                left to screen right), not inset to the page's usual 64px content
                column. `w-screen` + `left-1/2 -translate-x-1/2` re-centers it on the
                viewport regardless of this section's own position in the page,
                the same scoped full-bleed technique used elsewhere on the site —
                `overflow-x-hidden` stays local to this one wrapper, never the page
                root. The track holds 3 copies of the 8 industries back to back (24
                cards); exactly `visibleCount` show at once, the track physically
                translates by one card width per step (auto or click), and the 2nd
                visible card is always the expanded one — modeled on the Glide.com
                "Made for people who know their business" panel strip cited as the
                behavior reference.
 
                Gap above is mt-[81px] (not 64) — Figma's own redline on this exact
                boundary (node 2700:1394) shows 81px, confirmed by the "81" label in
                the dev-mode screenshot, so that's what's used here even though the
                rest of this section's spacing is 64.
 
                Fixed height (matching the active-card height) rather than auto: with
                auto height, the outgoing active card shrinking and the incoming one
                growing at the same time made the row's own height visibly dip
                mid-transition (their heights don't sum to a constant), which shoved
                How We Work below up and down on every rotation. Locking the wrapper's
                height stops that — individual cards can still resize freely inside
                it without the page around them moving. */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-screen left-1/2 -translate-x-1/2 mt-10 sm:mt-[81px] h-[320px] sm:h-[360px] lg:h-[407px] overflow-hidden"
            >
                <div
                    className={`flex flex-row items-start ${instant ? "" : "transition-transform ease-in-out"}`}
                    style={{
                        width: `${trackWidthPct}%`,
                        transform: `translateX(-${trackIndex * STEP_PCT}%)`,
                        transitionDuration: instant ? "0ms" : `${TRANSITION_MS}ms`,
                    }}
                >
                    {Array.from({ length: TOTAL }, (_, position) => {
                        const industry = INDUSTRIES[position % COUNT];
                        const isActive = position === trackIndex + activeOffset;
                        return (
                            // Each slot's width is an exact %-of-track (STEP_PCT), matching the
                            // translateX step size exactly — the gap between cards lives inside
                            // this wrapper's padding rather than a flex `gap`, so it doesn't throw
                            // off that percentage math (a fixed-px gap alongside %-based widths
                            // would drift out of alignment with translateX after enough steps,
                            // and badly so across the seamless-loop reset).
                            <div
                                key={`${industry.title}-${position}`}
                                style={{ width: `${STEP_PCT}%` }}
                                className="shrink-0 px-2"
                            >
                                <button
                                    type="button"
                                    onClick={() => handleSelect(position)}
                                    aria-pressed={isActive}
                                    aria-label={`Show ${industry.title}`}
                                    className={`group relative overflow-hidden text-left flex flex-col justify-end w-full p-4 sm:p-6 lg:p-8 transition-[height] duration-500 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8ec5] focus-visible:ring-offset-2 ${isActive ? "h-[320px] sm:h-[360px] lg:h-[407px]" : "h-[220px] sm:h-[260px] lg:h-[289px]"
                                        }`}
                                >
                                    <Image
                                        src={industry.image}
                                        alt=""
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div
                                        className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${isActive ? "bg-black/45" : "bg-black/25"
                                            }`}
                                    />
                                    <div className="relative z-10 flex flex-col gap-2">
                                        <h3 className="text-white text-xl sm:text-2xl font-medium leading-[1.4]">
                                            {industry.title}
                                        </h3>
                                        {/* grid-rows 0fr/1fr is what makes the description block animate
                                                smoothly between 0 and its natural height, without hardcoding
                                                a pixel height that would clip longer/shorter descriptions. */}
                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden flex flex-col gap-3 pt-2">
                                                <p className="text-white text-sm sm:text-base font-light leading-[1.4]">
                                                    {industry.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}

