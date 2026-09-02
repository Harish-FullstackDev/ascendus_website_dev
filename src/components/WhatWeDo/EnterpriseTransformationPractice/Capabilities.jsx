"use client";

import { forwardRef, useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sapImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/sap-transformation.png";
import microsoftImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/microsoft-services.png";
import broaderTechImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/broader-technology.png";

// Per Figma nodes 2620:32, 2776:136, 2776:161. Each card is image + number +
// title + description + "View More" — no per-service link list. `description`
// is an array of paragraphs (cards 02/03 carry more than one); Figma sets them
// with no gap between lines, so they render as separate <p> with no spacing.
const CAPABILITIES = [
    {
        number: "01",
        title: "SAP Transformation",
        description: [
            "We help businesses build, modernize, and manage their SAP landscape across S/4HANA, RISE with SAP, GROW with SAP, BTP, analytics, data, and ongoing support. Our focus is on creating a strong SAP foundation that simplifies operations, improves visibility, and supports business growth. Microsoft, cloud, and adjacent technologies extend that core where they bring additional value — keeping your enterprise connected, flexible, and ready for what's next.",
        ],
        image: sapImg,
        href: "/whatWeDo/enterprise-transformation/sap-transformation",
    },
    {
        number: "02",
        title: "Microsoft Services",
        description: [
            "Microsoft & Cloud Services",
            "Microsoft extends our SAP core — deliberately. We use Microsoft technologies to connect and enhance SAP, helping businesses improve cloud operations, collaboration, automation, customer management, and analytics.",
            "Our capabilities include Microsoft Azure, Microsoft 365, Power Platform, Dynamics 365, and Power BI — working together with SAP to create a connected and scalable technology environment.",
        ],
        image: microsoftImg,
        href: "/whatWeDo/enterprise-transformation/microsoft-services",
    },
    {
        number: "03",
        title: "Broader Technology Services",
        description: [
            "SAP is our core — deliberately. Microsoft and adjacent platforms extend that core. We help businesses modernize infrastructure, manage data, support change, and strengthen security and compliance.",
            "Our services include Cloud & Infrastructure Modernization, Data Migration & Governance, Change Management & Adoption, and Cybersecurity & Compliance — helping create a secure, connected, and efficient technology environment.",
        ],
        image: broaderTechImg,
        href: "/whatWeDo/enterprise-transformation/broader-technology-services",
    },
];

const REVEAL_EASE = [0.22, 1, 0.36, 1];

// Scroll budget (px) for the card1→2→3 scroll-driven switching, shared by the
// ScrollTrigger setup and the recenter() effect below so neither drifts out
// of sync with the other.
const INTERACTIVE_DISTANCE = 2400;

const CapabilityCard = forwardRef(function CapabilityCard(
    { number, title, description, image, href, isActive, isPassed, showDivider, onActivate },
    ref
) {
    return (
        // isPassed cards (scrolled past, above the active one) collapse to zero
        // height. That keeps the active card always at offset 0 in the stack —
        // exactly like card 1, which is what makes its centering shift ~0 and
        // its pin release seamless with no unwind needed.
        <motion.div
            ref={ref}
            initial={false}
            animate={{ height: isPassed ? 0 : "auto", opacity: isPassed ? 0 : 1 }}
            transition={{ duration: 0.8, ease: REVEAL_EASE }}
            className="w-full overflow-hidden"
        >
            {/* Dividers are TOP borders (every card but the first), not bottom —
                same pixel position since the cards are adjacent, but a bottom
                border gets clipped away by the fold animation's overflow:hidden
                (which cuts from the bottom) as soon as the card starts closing. */}
            <div
                className={`flex flex-col lg:flex-row w-full items-start lg:justify-between gap-6 lg:gap-10 py-6 ${showDivider ? "border-t border-[#8794a3]" : ""
                    }`}
            >
                {/* Mobile-only duplicate of the number+title below (hidden below lg) —
                    on mobile the image sits below the number/title rather than above. */}
                <div className="flex flex-col gap-5 lg:hidden">
                    <span className="text-[#8794a3] text-2xl font-medium leading-[1.5]">{number}</span>
                    <p className="text-[#10161d] text-lg font-medium leading-[1.5]">{title}</p>
                </div>

                {/* 272x459 in Figma, kept as an aspect ratio on a responsive width
                    so it scales with the viewport instead of distorting. */}
                <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: REVEAL_EASE }}
                    className="overflow-hidden w-[200px] sm:w-[240px] lg:w-[272px] shrink-0 self-start"
                >
                    <div
                        className={`relative w-full aspect-[272/459] transition-[transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "duration-[800ms] delay-[100ms] scale-100" : "duration-[400ms] scale-[0.97]"
                            }`}
                    >
                        <Image src={image} alt={`${title} capability`} fill className="object-cover" />
                    </div>
                </motion.div>

                <div className="flex flex-col w-full lg:w-auto lg:flex-1 lg:max-w-[773px]">
                    {/* Number and title stay outside the collapsible — a closed card
                        still reads as "02 Microsoft Services"; only the description
                        and button fold away. */}
                    <span className="hidden lg:inline text-[#8794a3] text-2xl sm:text-[28px] font-medium leading-[1.5]">
                        {number}
                    </span>
                    <p className="hidden lg:block mt-5 text-[#10161d] text-lg font-medium leading-[1.5]">{title}</p>

                    <motion.div
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: REVEAL_EASE }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-8 pt-2.5">
                            <div className="text-[#4a5568] text-lg font-light leading-normal">
                                {description.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                            <Link
                                href={href}
                                onClick={(event) => event.stopPropagation()}
                                className="inline-flex h-11 w-[175px] shrink-0 items-center justify-center border border-[#d0d0d0] bg-[#0a3a52] px-6 text-lg font-light text-white text-center transition-colors hover:bg-white hover:text-[#0a3a52]"
                            >
                                View More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
});

export default function Capabilities() {
    const [activeIndex, setActiveIndex] = useState(0);
    // windowRef is the pinned stage — always naturally sized, never clipped.
    // trackRef (the card stack) is what gets shifted to keep the active card
    // centered.
    const windowRef = useRef(null);
    const trackRef = useRef(null);
    const cardRefs = useRef([]);
    const activeIndexRef = useRef(activeIndex);
    // True only while ScrollTrigger is actively pinned.
    const pinnedRef = useRef(false);
    // Index recenter() last targeted — detects the exact moment activeIndex
    // switches, as opposed to a merely large per-frame scroll delta.
    const lastRecenteredIndexRef = useRef(activeIndex);
    // performance.now() timestamp until which recenter() should tween toward
    // its target instead of snapping instantly — set on each activeIndex
    // switch, held for roughly the card's own open/close duration.
    const transitionUntilRef = useRef(0);
    // True once the pin has been scrolled all the way through and released at
    // its end (as opposed to not yet reached) — the spacer correction in
    // syncSpacerHeight is only valid in that state.
    const pastPinRef = useRef(false);
    const syncSpacerRef = useRef(() => { });
    // Last scrolled-pixels value from onUpdate, reused by ResizeObserver-driven
    // recenter() calls so a mid-scroll accordion animation stays consistent.
    const lastScrolledRef = useRef(0);
    const recenterRef = useRef(() => { });
    // Unwind value frozen at the instant an index transition starts, so it
    // doesn't oscillate against the centering tween as cards resize mid-animation.
    const frozenUnwindRef = useRef(0);

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // card1→2→3 switching keeps the same 2400px budget, and the pin
            // ends right there — no trailing unwind distance. Cards above the
            // active one collapse to nothing (isPassed), so the active card
            // always sits at offset 0 and needs ~0 shift to center, exactly
            // like card 1 — nothing left to unwind at release.
            const TOTAL_DISTANCE = INTERACTIVE_DISTANCE;

            // Trigger is card 1 itself (not the whole stage), so "center
            // center" engages exactly when card 1's own middle crosses the
            // viewport's middle — not the combined stack's much lower midpoint.
            ScrollTrigger.create({
                trigger: cardRefs.current[0],
                pin: windowRef.current,
                start: "center center",
                end: "+=" + TOTAL_DISTANCE,
                pinSpacing: true,
                scrub: true,
                onToggle: (self) => {
                    pinnedRef.current = self.isActive;
                    if (!self.isActive) {
                        pastPinRef.current = self.progress > 0.5;
                        // Run after GSAP restores the released element's own
                        // styles, so we don't measure it mid-handoff.
                        requestAnimationFrame(() => syncSpacerRef.current());
                        // Safety cleanup — by the time GSAP releases, the
                        // unwind has already eased the shift to 0.
                        gsap.killTweensOf(trackRef.current);
                        gsap.set(trackRef.current, { clearProps: "transform" });
                    }
                },
                onUpdate: (self) => {
                    const scrolled = self.progress * TOTAL_DISTANCE;
                    lastScrolledRef.current = scrolled;
                    // Even thirds — card 3's threshold (1600px) isn't rescaled
                    // by TOTAL_DISTANCE, so it lands at the same scroll amount.
                    let newIndex = 0;
                    if (scrolled < INTERACTIVE_DISTANCE / 3) {
                        newIndex = 0;
                    } else if (scrolled < (2 * INTERACTIVE_DISTANCE) / 3) {
                        newIndex = 1;
                    } else {
                        newIndex = 2;
                    }
                    setActiveIndex((prev) => (prev === newIndex ? prev : newIndex));
                    // Called directly, not gated by pinnedRef — onUpdate only
                    // ever fires while GSAP itself considers this in-range.
                    recenterRef.current(scrolled);
                }
            });
        });

        return () => ctx.revert();
    }, []);

    // Keeps the active card's vertical center pinned to the viewport's
    // vertical center by translating the whole track. Re-measures continuously
    // (ResizeObserver on every card) because Framer Motion's height animation
    // reflows the stack frame-by-frame for the whole ~800ms open/close.
    useEffect(() => {
        if (typeof window === "undefined") return;

        const recenter = (scrolled = lastScrolledRef.current) => {
            const win = windowRef.current;
            const track = trackRef.current;
            const activeCard = cardRefs.current[activeIndexRef.current];
            if (!win || !track || !activeCard) return;

            // offsetTop/offsetHeight are transform-immune, unlike
            // getBoundingClientRect, which would reflect track's own
            // in-flight transform.
            const winTop = win.getBoundingClientRect().top;
            const cardOffsetTop = activeCard.offsetTop;
            const cardHeight = activeCard.offsetHeight;
            const centeredY = window.innerHeight / 2 - winTop - cardOffsetTop - cardHeight / 2;

            // Linear, additive unwind: past INTERACTIVE_DISTANCE, the shift
            // moves toward 0 at exactly 1px per 1px of extra scroll, matching
            // natural scroll's own rate by construction.
            const extra = Math.max(0, scrolled - INTERACTIVE_DISTANCE);
            const unwind = Math.min(extra, Math.abs(centeredY));

            const now = performance.now();
            if (lastRecenteredIndexRef.current !== activeIndexRef.current) {
                lastRecenteredIndexRef.current = activeIndexRef.current;
                transitionUntilRef.current = now + 900;
                // Freeze the unwind value so it doesn't fight the centering
                // tween while the card is animating open/closed.
                frozenUnwindRef.current = unwind;
            }

            const inTransition = now < transitionUntilRef.current;
            const effectiveUnwind = inTransition ? frozenUnwindRef.current : unwind;
            const shift = centeredY - Math.sign(centeredY) * effectiveUnwind;

            gsap.killTweensOf(track);
            if (inTransition) {
                gsap.to(track, { y: shift, duration: 0.4, ease: "power2.out" });
            } else {
                gsap.set(track, { y: shift });
            }
        };

        // GSAP freezes the pinned element's own height at pin time, so once
        // cards above the active one collapse (isPassed), the track shrinks
        // but the window doesn't — leaving dead space below the active card.
        // Clearing the inline height lets the window re-hug the track, and the
        // pin-spacer has to be resized to match or the same dead space just
        // reappears one level up.
        const syncSpacerHeight = () => {
            const win = windowRef.current;
            const track = trackRef.current;
            if (!win || !track) return;
            win.style.height = "";
            const spacer = win.parentElement;
            if (!spacer || !spacer.classList.contains("pin-spacer")) return;
            if (pinnedRef.current) {
                // While pinned the window is position:fixed, so its rect says
                // nothing about where it sits in the spacer's flow — use the
                // nominal size. Any small error is invisible here since the
                // content below the spacer is off-screen during the pin.
                spacer.style.height = `${win.offsetHeight + INTERACTIVE_DISTANCE}px`;
            } else if (pastPinRef.current) {
                // Released, past the pin: size the spacer to end exactly at
                // the window's real position, so only the section's own
                // bottom padding is left below card 3.
                const offsetInSpacer =
                    win.getBoundingClientRect().top - spacer.getBoundingClientRect().top;
                spacer.style.height = `${Math.round(offsetInSpacer + win.offsetHeight)}px`;
            }
            // Before the pin is ever reached, the spacer's extra height is
            // GSAP's reserved scroll room — leave it alone.
        };

        recenterRef.current = recenter;
        syncSpacerRef.current = syncSpacerHeight;
        if (pinnedRef.current) recenter();

        // Wrapped in a no-arg call: ResizeObserver/`resize` invoke their
        // callback with a truthy first argument, which would otherwise be
        // read as the scroll position.
        const handleChange = () => {
            syncSpacerHeight();
            if (!pinnedRef.current) return;
            recenter();
        };
        const ro = new ResizeObserver(handleChange);
        cardRefs.current.forEach((el) => el && ro.observe(el));
        window.addEventListener("resize", handleChange);
        syncSpacerHeight();

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", handleChange);
        };
    }, [activeIndex]);

    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-8 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-[86px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-3 sm:gap-[24px] max-w-[855px] text-center"
            >
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium">Capabilities</h2>
                <p className="text-[#4a5568] text-lg font-light">
                    SAP is our core — deliberately. Microsoft and adjacent platforms extend that core so the
                    enterprise moves as a system, not a set of silos.
                </p>
            </motion.div>

            <motion.div
                ref={windowRef}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1280px] mx-auto"
            >
                <div ref={trackRef} className="flex flex-col w-full">
                    {CAPABILITIES.map((cap, index) => (
                        <CapabilityCard
                            key={cap.title}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            {...cap}
                            isActive={index === activeIndex}
                            isPassed={index < activeIndex}
                            showDivider={index > 0}
                            onActivate={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

