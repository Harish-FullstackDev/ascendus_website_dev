"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import manufacturingImg from "@/assets/HomePage/images/Industries/manufacturing.png";
import retailImg from "@/assets/HomePage/images/Industries/retail-distribution.png";
import governmentImg from "@/assets/HomePage/images/Industries/government-public-sector.png";
import financialImg from "@/assets/HomePage/images/Industries/financial-services.png";
import arrowIcon from "@/assets/HomePage/Industries/icon-arrow.svg";

// The 4 real industries from Figma (node 2700:1394), plus the 6 more named in
// the Navbar's "What We Do" industries dropdown (Navbar.jsx) that had no
// destination card here yet. The 6 new ones reuse the same 4 photos on a
// loop and carry clearly placeholder copy (`dummy: true`) until real
// photography/copy is supplied — swap those two fields once it lands; the
// carousel below works off `INDUSTRIES.length`, so adding or removing cards
// needs no other code changes.
const INDUSTRIES = [
    {
        title: "Manufacturing",
        desc: "Streamlining supply chain, production planning, and plant-floor integration with SAP and IoT-driven systems.",
        image: manufacturingImg,
    },
    {
        title: "Retail & Distribution",
        desc: "Connecting inventory, logistics, and customer experience across every channel.",
        image: retailImg,
    },
    {
        title: "Government & Public Sector",
        desc: "Delivering GCC-compliant, secure systems built for accountability and scale.",
        image: governmentImg,
    },
    {
        title: "Financial Services",
        desc: "Modernizing core systems without compromising on security or regulatory reporting.",
        image: financialImg,
    },
    {
        title: "Construction & EPC",
        desc: "Placeholder copy pending sign-off — coordinating design, procurement, and field execution across large-scale builds.",
        image: manufacturingImg,
        dummy: true,
    },
    {
        title: "Oil & Gas",
        desc: "Placeholder copy pending sign-off — supporting safety-critical operations across upstream, midstream, and downstream systems.",
        image: retailImg,
        dummy: true,
    },
    {
        title: "Healthcare",
        desc: "Placeholder copy pending sign-off — connecting clinical, operational, and compliance systems around patient outcomes.",
        image: governmentImg,
        dummy: true,
    },
    {
        title: "Logistics",
        desc: "Placeholder copy pending sign-off — synchronizing fleet, warehouse, and last-mile systems in real time.",
        image: financialImg,
        dummy: true,
    },
    {
        title: "Utilities",
        desc: "Placeholder copy pending sign-off — modernizing grid, metering, and asset-management systems at scale.",
        image: manufacturingImg,
        dummy: true,
    },
    {
        title: "Real Estate",
        desc: "Placeholder copy pending sign-off — unifying leasing, facilities, and portfolio systems on one platform.",
        image: retailImg,
        dummy: true,
    },
];

const COUNT = INDUSTRIES.length; // 10
// The track renders 3 copies of the array back to back so it always has a
// buffer to slide into on either side. Only the MIDDLE copy is real,
// crawlable content — see the isCanonical check below for why the other two
// are aria-hidden (C-016 fix without sacrificing the CSS-transition-driven
// slide, which needs stable, persistent DOM nodes to animate smoothly).
const TRIPLE = 3;
const TOTAL = COUNT * TRIPLE;
// The active (expanded) card is wider than an inactive one, not just taller —
// confirmed directly from Figma (node 2700:1394): the active card
// (node 2700:1406) is a 407px square, the inactive cards (2700:1404 etc.) are
// 316x289. 407/316 is the width ratio carried through responsively below
// instead of copying either pixel value literally.
const ACTIVE_WIDTH_RATIO = 407 / 316;
// How much bigger than "exactly visibleCount cards fill the viewport" the
// visible set renders — the excess splits evenly as an edge peek on both
// sides, so the 1st and 4th (of 4) visible cards are each partially cut by
// the screen edge instead of sitting flush. This is a deliberate deviation
// from the Figma source, applied on direct instruction: Figma's own
// right-edge crop is very likely just its fixed 1280px art-board running out
// of room for the row's natural width, not a designed peek affordance — but
// the effect is wanted here regardless, as an intentional carousel cue.
// 1.12 (first attempt) cut well into the card's own text ("Manufacturing"
// lost its "M"). The card's left padding is 32px (p-8 at lg); at a common
// ~1440px desktop viewport a 32px cut is ~2.2% of the viewport, so the peek
// on each side needs to be ~2.2%, i.e. PEEK_SCALE ~= 1 + 2*0.022 = 1.045 —
// landing the crop line at the padding/text boundary instead of inside the
// text. Nudge this one constant if it still needs adjusting at your actual
// viewport width.
const PEEK_SCALE = 1.045;
const AUTOPLAY_MS = 4500;
const RESUME_MS = 8000;
const TRANSITION_MS = 600;

export default function Industries() {
    // trackIndex is the absolute position (0..TOTAL-1) of the track's leftmost
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

    // Pauses autoplay for RESUME_MS after any manual interaction (arrow click
    // or card click).
    const pauseForInteraction = useCallback(() => {
        setIsPaused(true);
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setIsPaused(false), RESUME_MS);
    }, []);

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
    // the active slot.
    const handleSelect = useCallback(
        (position) => {
            setTrackIndex(position - activeOffset);
            pauseForInteraction();
        },
        [activeOffset, pauseForInteraction]
    );

    // Left/right arrows: move exactly one card at a time, same slide the
    // autoplay/click paths use.
    const stepBy = useCallback(
        (delta) => {
            setTrackIndex((i) => i + delta);
            pauseForInteraction();
        },
        [pauseForInteraction]
    );

    useEffect(() => {
        return () => {
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        };
    }, []);

    // All widths below are expressed as a share of the track's own width, the
    // same %-of-track basis the original uniform-width version used — just
    // weighted so the currently-active position claims ACTIVE_WIDTH_RATIO
    // shares instead of 1. Exactly one of the TOTAL positions is ever active,
    // and it's always at or after `trackIndex` (never before it, since
    // activeOffset >= 0), so the offset to slide past only ever passes
    // inactive-weight cards — that's what keeps the translateX math a plain
    // multiplication instead of a running sum.
    const totalWeight = (TOTAL - 1) + ACTIVE_WIDTH_RATIO;
    const inactiveStepPct = 100 / totalWeight;
    const activeStepPct = inactiveStepPct * ACTIVE_WIDTH_RATIO;
    const visibleWeight = (visibleCount - 1) + ACTIVE_WIDTH_RATIO;
    // Inflated by PEEK_SCALE so the visible set is wider than the viewport —
    // the excess (peekViewportPct on each side) is what makes the edge cards
    // peek/cut instead of sitting flush.
    const trackWidthPct = (totalWeight / visibleWeight) * 100 * PEEK_SCALE;
    const peekViewportPct = ((PEEK_SCALE - 1) * 100) / 2;
    const peekTrackPct = (peekViewportPct / trackWidthPct) * 100;
    const translateXPct = trackIndex * inactiveStepPct + peekTrackPct;

    return (
        // Full 64 top and bottom per Figma's own py-[64px] on this section (node
        // 2700:1394) — confirmed directly, not the usual 32/32-white-neighbor
        // heuristic used elsewhere on the site.
        <section className="w-full bg-white pt-10 pb-10 sm:pt-16 sm:pb-16 overflow-x-hidden">
            <div className="w-full px-6 sm:px-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold">
                            Industry-Specific Solutions
                        </h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.4]">
                            Built for Your Industry, Not Just Enterprise in General
                        </p>
                    </div>
                </motion.div>

                {/* Prev/next controls — the Figma frame for this section links to a
                    "Find Your Solution" button that always resolves to /who-we-are (no
                    solutions page exists to point it at), so it's removed rather than
                    shipping a link that lies about its destination. Figma has no arrow
                    control on this section, but does use this exact white-pill,
                    two-arrow pattern elsewhere on the homepage (node 2700:1310) — reused
                    here per direct instruction. Sized up from that reference's 40px (and
                    given its own row directly above the card track, right-aligned over
                    the last visible card) per explicit feedback that the reference size
                    and the header-row placement both read too small/cramped. */}
                <div className="flex justify-end mt-6">
                    <div className="shrink-0 flex items-center gap-3 bg-white rounded-full p-3">
                        <button
                            type="button"
                            aria-label="Previous industry"
                            onClick={() => stepBy(-1)}
                            className="flex items-center justify-center size-12 transition-transform duration-300 hover:scale-110"
                        >
                            <Image src={arrowIcon} alt="" className="size-12 -rotate-90" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next industry"
                            onClick={() => stepBy(1)}
                            className="flex items-center justify-center size-12 transition-transform duration-300 hover:scale-110"
                        >
                            <Image src={arrowIcon} alt="" className="size-12 rotate-90" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sliding carousel: deliberately breaks out of the padded/max-width
                container above — full viewport edge-to-edge. `w-screen` +
                `left-1/2 -translate-x-1/2` re-centers it on the viewport regardless
                of this section's own position in the page, the same scoped
                full-bleed technique used elsewhere on the site — `overflow-hidden`
                stays local to this one wrapper, never the page root. The track
                holds 3 copies of the 10 industries back to back (30 cards), but
                only the middle copy is real content — see the TRIPLE comment above
                for why the other two exist and why they're hidden. Exactly
                `visibleCount` show at once (inflated by PEEK_SCALE so the 1st/4th
                peek off each edge), the track physically translates by one card
                width per step (auto, arrow, or click), and the 2nd visible card is
                always the expanded one, both taller AND wider than its neighbors
                (ACTIVE_WIDTH_RATIO) — modeled on the Glide.com "Made for people who
                know their business" panel strip cited as the behavior reference.

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
                className="relative w-screen left-1/2 -translate-x-1/2 mt-6 h-[320px] sm:h-[360px] lg:h-[407px] overflow-hidden"
            >
                    <div
                        className={`flex flex-row items-start ${instant ? "" : "transition-transform ease-in-out"}`}
                        style={{
                            width: `${trackWidthPct}%`,
                            transform: `translateX(-${translateXPct}%)`,
                            transitionDuration: instant ? "0ms" : `${TRANSITION_MS}ms`,
                        }}
                    >
                        {Array.from({ length: TOTAL }, (_, position) => {
                            const industry = INDUSTRIES[position % COUNT];
                            const isActive = position === trackIndex + activeOffset;
                            // Only the middle copy of the 3 is real, indexable content —
                            // the other two exist solely so the slide has a buffer to move
                            // into. Hidden from the accessibility tree and unfocusable so a
                            // crawler or screen reader only ever encounters each industry once.
                            const isCanonical = Math.floor(position / COUNT) === 1;
                            return (
                                <div
                                    key={`${industry.title}-${position}`}
                                    style={{ width: `${isActive ? activeStepPct : inactiveStepPct}%` }}
                                    className="shrink-0 px-2"
                                    aria-hidden={isCanonical ? undefined : true}
                                >
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(position)}
                                        tabIndex={isCanonical ? 0 : -1}
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
                                            <h2 className="text-white text-xl sm:text-2xl font-semibold leading-[1.4]">
                                                {industry.title}
                                            </h2>
                                            {/* grid-rows 0fr/1fr is what makes the description block animate
                                                    smoothly between 0 and its natural height, without hardcoding
                                                    a pixel height that would clip longer/shorter descriptions. */}
                                            <div
                                                className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                    }`}
                                            >
                                                <div className="overflow-hidden flex flex-col gap-3 pt-2">
                                                    <p className="text-white text-sm sm:text-lg font-light leading-[1.4]">
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
