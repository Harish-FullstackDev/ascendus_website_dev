"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Reuse CoreCapabilities.jsx as the reference for content and card count —
// same 12 items as that section, instead of maintaining a second,
// out-of-sync copy here.
import { CAPABILITIES } from "./CoreCapabilities";
import arrowIcon from "@/assets/HomePage/Industries/icon-arrow.svg";

const CARD_WIDTH_CLASSES = "w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]";

// Mobile carousel timings — same values as the Industries carousel so both
// auto-rotating strips on the homepage move at one rhythm.
const AUTOPLAY_MS = 4500;
const RESUME_MS = 8000;
const TRANSITION_MS = 600;

function SectionHeading() {
    return (
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
    );
}

function ServiceCard({ item }) {
    const content = (
        <div className="group relative w-full overflow-hidden aspect-[7/8]">
            <Image
                src={item.image}
                alt=""
                fill
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

const COUNT = CAPABILITIES.length; // 12
// Slide track for the mobile carousel: the real 12 cards with the last card
// cloned in front and the first card cloned behind. Those two clones are the
// buffer the seamless wrap slides into — stepping past either end animates
// onto a clone, then snaps (transition off for one frame) to the identical
// real card, so the loop never visibly rewinds. Only the 12 real slides are
// exposed to the accessibility tree / crawlers; the clones are aria-hidden
// and unfocusable, the same isCanonical treatment Industries.jsx uses.
const SLIDES = [CAPABILITIES[COUNT - 1], ...CAPABILITIES, CAPABILITIES[0]];
const FIRST_REAL = 1;
const LAST_REAL = COUNT;
const SLIDE_PCT = 100 / SLIDES.length;

// Mobile-only presentation (< md). The scroll-locked reel below reads as a
// drag on a phone — one thumb-flick of page scroll buys only a sliver of
// horizontal pan — so on mobile the same 12 cards become a one-card-at-a-time
// carousel that auto-advances, with the prev/next arrow pair reused from the
// Industry-Specific Solutions section for manual control.
function ServicesCarousel() {
    const [index, setIndex] = useState(FIRST_REAL);
    const [instant, setInstant] = useState(false); // true only for the one-frame seamless-loop snap
    const [isPaused, setIsPaused] = useState(false);
    const resumeTimer = useRef(null);

    // Any arrow tap pauses autoplay for RESUME_MS so the carousel does not
    // slide out from under someone who is steering it by hand.
    const pauseForInteraction = useCallback(() => {
        setIsPaused(true);
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setIsPaused(false), RESUME_MS);
    }, []);

    useEffect(() => {
        if (isPaused) return undefined;
        const id = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [isPaused]);

    // Landed on a clone — let its slide finish, then jump to the matching real
    // slide with the transition switched off for a single frame.
    useEffect(() => {
        if (index >= FIRST_REAL && index <= LAST_REAL) return undefined;

        const timeout = setTimeout(() => {
            setInstant(true);
            setIndex((i) => (i < FIRST_REAL ? LAST_REAL : FIRST_REAL));
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setInstant(false));
            });
        }, TRANSITION_MS);

        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        return () => {
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        };
    }, []);

    const stepBy = useCallback(
        (delta) => {
            setIndex((i) => i + delta);
            pauseForInteraction();
        },
        [pauseForInteraction]
    );

    return (
        <div className="flex flex-col gap-8 py-10 px-6">
            <SectionHeading />

            {/* Arrows sit above the cards, right-aligned — same white-pill arrow
                pair and hover behavior as the Industry-Specific Solutions
                section (Industries.jsx), pointing at the same shared icon. */}
            <div className="flex items-center justify-end gap-3">
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

            <div className="w-full overflow-hidden">
                <div
                    className="flex flex-row"
                    style={{
                        width: `${SLIDES.length * 100}%`,
                        transform: `translateX(-${index * SLIDE_PCT}%)`,
                        transition: instant ? "none" : `transform ${TRANSITION_MS}ms ease-in-out`,
                    }}
                >
                    {SLIDES.map((item, position) => {
                        const isCanonical = position >= FIRST_REAL && position <= LAST_REAL;
                        return (
                            <div
                                key={`${item.title}-${position}`}
                                style={{ width: `${SLIDE_PCT}%` }}
                                className="shrink-0"
                                aria-hidden={isCanonical ? undefined : true}
                                {...(isCanonical ? {} : { inert: "" })}
                            >
                                <ServiceCard item={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// Scroll-locked horizontal reel: the section pins to the viewport for the
// height of `scrollDistance` extra vertical scroll, during which that scroll
// input is remapped to horizontal movement of the 12-card track. Once the
// track has fully panned, the section unpins and the page continues
// scrolling normally — the same sticky-wrapper idiom already used for the
// Hero section in app/page.jsx, but driven by scroll progress instead of a
// fixed offset.
//
// md and up only — see ServicesCarousel for what a phone gets instead. The
// two are swapped by CSS (`md:hidden` / `hidden md:block`) rather than by a
// JS media query so the correct one is in the server-rendered HTML, with no
// post-hydration flash.
function ServicesScrollReel() {
    const containerRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(0);

    useLayoutEffect(() => {
        const measure = () => {
            const viewport = viewportRef.current;
            const track = trackRef.current;
            if (!viewport || !track) return;
            setScrollDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
        };

        measure();
        window.addEventListener("resize", measure);

        const observer = new ResizeObserver(measure);
        if (trackRef.current) observer.observe(trackRef.current);
        if (viewportRef.current) observer.observe(viewportRef.current);

        return () => {
            window.removeEventListener("resize", measure);
            observer.disconnect();
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    return (
        <div ref={containerRef} className="relative" style={{ height: `calc(100vh + ${scrollDistance}px)` }}>
            <div className="sticky top-0 h-screen flex flex-col justify-center gap-16 py-8 sm:py-16 px-6 sm:px-16 overflow-hidden">
                <SectionHeading />

                <div ref={viewportRef} className="w-full overflow-hidden">
                    <motion.div ref={trackRef} style={{ x }} className="flex gap-4">
                        {CAPABILITIES.map((item) => (
                            <div key={item.title} className={`shrink-0 ${CARD_WIDTH_CLASSES}`}>
                                <ServiceCard item={item} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <section id="ascendus-services" className="w-full bg-white">
            <div className="md:hidden">
                <ServicesCarousel />
            </div>
            <div className="hidden md:block">
                <ServicesScrollReel />
            </div>
        </section>
    );
}
