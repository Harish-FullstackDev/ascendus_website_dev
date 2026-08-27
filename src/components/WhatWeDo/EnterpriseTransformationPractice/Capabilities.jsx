"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import sapImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/sap-transformation.png";
import microsoftImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/microsoft-services.png";
import broaderTechImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/broader-technology.png";

// Redesigned per the new Figma card layout (3 capability groups, each with its
// own sub-service list) replacing the previous 6-item accordion. The Figma
// source repeated the same "SAP is our core..." description on all three
// cards (a skeleton-design artifact, same pattern noted elsewhere on this
// page) — each card gets its own description here instead. The three
// per-capability photos are the real Figma assets (node 2620:20).
const CAPABILITIES = [
    {
        number: "01",
        title: "SAP Transformation",
        description:
            "SAP is our core — deliberately built around S/4HANA, RISE, and GROW so the enterprise runs on one reliable foundation.",
        image: sapImg,
        href: "/whatWeDo/enterprise-transformation-practice/sap-transformation",
        services: [
            "SAP S/4HANA Migration & Implementation",
            "RISE with SAP",
            "GROW with SAP",
            "SAP Business Technology Platform",
            "SAP Analytics Cloud",
            "SAP BW/4HANA",
            "Application Managed Services (AMS)",
        ],
    },
    {
        number: "02",
        title: "Microsoft Services",
        description:
            "Microsoft and adjacent platforms extend that core, connecting productivity, data, and low-code tools into the same enterprise system.",
        image: microsoftImg,
        href: "/whatWeDo/enterprise-transformation-practice/microsoft-services",
        services: ["Microsoft Azure", "Microsoft 365", "Power Platform", "Dynamics 365", "Power BI"],
    },
    {
        number: "03",
        title: "Broader Technology Services",
        description:
            "The infrastructure, integration, and governance layer that keeps the whole technology estate secure, connected, and change-ready.",
        image: broaderTechImg,
        href: "/whatWeDo/enterprise-transformation-practice/broader-technology-services",
        services: [
            "Cloud & Infrastructure Modernization",
            "Systems Integration & API Management",
            "Data Migration & Governance",
            "Change Management & Adoption",
            "Cybersecurity & Compliance",
        ],
    },
];

// Premium, smooth easing (an "ease-out-expo" curve) used for every reveal
// below — no linear/default easing, which is what made the earlier version
// feel mechanical rather than polished.
const REVEAL_EASE = [0.22, 1, 0.36, 1];

// Open/close accordion per Figma: card 1 is open on load, and every closed card
// shows its own "View Details" button (Figma node 2620:20) — that button's
// onClick is the only way to activate a card, on touch and desktop alike. Click
// only, deliberately — this section is meant to be browsed on scroll, and
// hover-to-open read as accidental activation while scrolling past it. The open
// card doesn't need that button — its own "View More" (below) already replaces
// it once expanded.
function CapabilityCard({ number, title, description, image, href, services, isActive, isLast, onActivate }) {
    return (
        <div
            // The divider is tied to position (every card but the last), not to
            // active state — it used to only show on collapsed cards, which meant
            // an open card had no line separating it from the closed card right
            // below it (only that next card's own bottom edge did, one row too
            // late). A line between an open card and whatever's below it is exactly
            // what was missing.
            // gap-6/lg:gap-[184px] between the image and the title+services
            // block is a real, fixed gap now — not a floor. It used to also
            // carry `lg:justify-between`, which absorbed ALL of the row's
            // leftover width into this one gap, making it much wider than
            // the title↔services gap below it. lg:gap-[184px] isn't an
            // arbitrary rounder value (like the design system's usual
            // 64px/gap-16 step) — it's deliberately set to exactly what the
            // inner row's own justify-between (see below) computes for the
            // title↔services gap at this component's reference width: image
            // 272px + title 320px + services 320px = 912px fixed content
            // inside the max-w-[1280px] row, leaving 368px of leftover width
            // total; split evenly between the two gaps, that's 184px each.
            // Matching it here by number, rather than re-deriving it from
            // the same flex distribution (e.g. by flattening both gaps into
            // one 3-item justify-between), is deliberate: title and services
            // need to stay in their own isolated flex context so their
            // height-stretch pairing (see the inner row's own comment below)
            // isn't pulled taller by the image's much taller aspect-ratio
            // box — folding all three into one row would make that stretch
            // computation include the image's height too. This only holds
            // exactly at the row's full 1280px width (viewports ≳1408px
            // once the 64px side padding is added) — below that, both gaps
            // drift apart somewhat before the services column's own
            // allowed-to-shrink/wrap safety net (see the inner row comment)
            // takes over, same tolerance this layout already accepted before
            // gap1 existed as its own concept.
            className={`flex flex-col lg:flex-row w-full gap-6 lg:gap-[184px] items-start py-6 ${isLast ? "" : "border-b border-black"
                }`}
        >
            {/* grid-template-rows 0fr→1fr (plain CSS transition, no JS-measured
                height: "auto") is what actually fixed the earlier glitch — Framer's
                height:"auto" animation measures the target height once via JS and
                animates to that fixed px value; if the image hadn't finished
                affecting layout yet when it measured, it would animate to a
                too-small height and then visibly jump again once the real size
                was known. A pure CSS fr-unit transition never needs to measure
                anything, so there's nothing to get wrong. Number and title sit in
                this same fixed-width column, so their horizontal position never
                changes between open and closed — only the row's own height does.

                Open and close share the exact same duration/easing on purpose
                (asymmetric timing here pulls the section below up and down — see
                the min-height note below for the full explanation). Slowed further
                to 1100ms (was 800ms, originally 500ms) since 800ms still read as
                too quick for a premium feel. */}

            {/* Mobile-only duplicate of the number+title below (which is hidden below lg
                for exactly this reason) — on mobile the image should sit below the
                number/title instead of above them, but desktop needs them grouped with
                the description in a single column (see that block's own comment), so
                splitting them into their own top-level flex item is the only way to
                reorder just this one piece without disturbing the desktop layout or the
                description's collapse-height animation. */}
            <div className="flex flex-col gap-3 lg:hidden">
                <span className="text-[#8794a3] text-2xl font-medium leading-[1.5]">{number}</span>
                <p className="text-[#10161d] text-lg font-medium leading-[1.5]">{title}</p>
            </div>

            <motion.div
                initial={false}
                animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0
                }}
                transition={{
                    duration: 0.8,
                    ease: REVEAL_EASE
                }}
                className="overflow-hidden w-[200px] sm:w-[240px] lg:w-[272px] shrink-0 self-start"
            >
                <div
                    className={`relative w-full aspect-[272/459] transition-[transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? "duration-[800ms] delay-[100ms] scale-100" : "duration-[400ms] scale-[0.97]"
                    }`}
                >
                    <Image src={image} alt="" fill className="object-cover" />
                </div>
            </motion.div>

            {/* justify-between on THIS gap (title vs. services) used to be
                reverted in favor of a fixed gap, with the flexible space
                living one level up between the image and this whole block.
                That's now inverted: the image↔title gap needed to become a
                small, fixed value (see the outer row above), so this inner
                gap is what absorbs the row's leftover width instead — title
                stays pinned to this block's left edge, services stays pinned
                to its right edge, exactly where it already was, while only
                the image↔title spacing tightens up.
                lg:flex-1 (replacing the old lg:w-auto lg:shrink-0) is what
                makes that possible — this block now grows to claim the
                entire remaining row width after the image, instead of only
                being as wide as its own fixed-width children (320 + gap +
                320). Without that, justify-between here would have nothing
                beyond that fixed content width to distribute, and the
                services column would land well short of the row's right
                edge instead of flush against it. Below lg the row is still
                stacked (image on top), so w-full there is unchanged and
                correct. */}
            <div className="flex flex-col sm:flex-row w-full lg:flex-1 gap-8 sm:gap-10 md:gap-16 lg:justify-between">
                {/* number + title always show, collapsed or open; description + button
                    reveal in place below them while open — using Framer Motion for a
                    perfectly synchronized smooth collapse/expand transition. */}
                <div className="flex flex-col sm:w-[320px] gap-3 shrink-0">
                    <span className="hidden lg:inline text-[#8794a3] text-2xl sm:text-[28px] font-medium leading-[1.5]">
                        {number}
                    </span>
                    <p className="hidden lg:block text-[#10161d] text-lg font-medium leading-[1.5]">{title}</p>

                    <motion.div
                        initial={false}
                        animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0
                        }}
                        transition={{
                            duration: 0.8,
                            ease: REVEAL_EASE
                        }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-8 pt-5">
                            <p className="text-[#4a5568] text-lg font-light leading-normal">{description}</p>
                            <Link
                                href={href}
                                onClick={(event) => event.stopPropagation()}
                                className="inline-flex h-11 w-[175px] items-center justify-center border border-[#d0d0d0] bg-[#0a3a52] px-6 text-lg font-light text-white text-center transition-colors hover:bg-white hover:text-[#0a3a52]"
                            >
                                View More
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Third column is either the "View Details" trigger (closed) or the
                    services list (open) — never both, so no extra height/motion
                    logic is needed to keep them from colliding. The row above
                    (title column + this one) still has no items-* class, so the
                    browser default of align-items: stretch applies — this column's
                    box is already exactly as tall as the number/title column next
                    to it, which is what lets justify-center below vertically
                    center the button against that stack instead of pinning it to
                    the top. */}
                {/* justify-center only applies while collapsed (centers the "View
                    Details" button against the number+title stack, per the note
                    above). Once open, the services list already carries its own
                    pt-12/pt-[54px] offset tuned to line its first row up with the
                    title text — that only holds if this column is pinned to the
                    top, so centering has to switch off here. Left as justify-center
                    for every card, a card whose services list (fewer items, e.g.
                    Microsoft Services' 5) is shorter than its own title+description
                    block got extra space split top/bottom by the centering, pushing
                    the list down and out of alignment with cards whose services
                    column happens to fill the row (SAP's 7 items, Broader Tech's
                    wrapped title) — that's what made card 2 sit differently from 1
                    and 3.

                    sm:w-[320px] fixes a second, independent bug: the services list
                    below is always mounted — only its height/opacity animate
                    closed, Framer Motion never touches width — so even while
                    collapsed its natural (max-content) text width was still sizing
                    this column. That width differs per card (SAP's/Broader Tech's
                    longest line is much wider than the 175px "View Details" button;
                    Microsoft Services' longest line is narrower than the button, so
                    its column collapsed to just the button's width). Since the
                    inner row pins this column's right edge via justify-between, a
                    narrower column reads as "pushed right" — exactly the
                    card-2-only drift. Giving the column one fixed width regardless
                    of card/state removes the dependency on content length
                    entirely. No shrink-0 here on purpose — deliberately left able
                    to shrink (default flex-shrink: 1) so the ~1024px safety net
                    described below (services list wrapping instead of overflowing)
                    still works; a hard shrink-0 floor would just reintroduce that
                    overflow at tight viewports. */}
                <div className={`flex flex-col sm:w-[320px] ${isActive ? "justify-start" : "justify-center"}`}>
                    {!isActive && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                onActivate();
                            }}
                            className="inline-flex h-11 w-[175px] items-center justify-center self-start border border-[#d0d0d0] bg-white px-6 text-lg font-light text-[#0a3a52] text-center transition-colors hover:bg-[#0a3a52] hover:text-white"
                        >
                            View Details
                        </button>
                    )}

                    <motion.div
                        initial={false}
                        animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0
                        }}
                        transition={{
                            duration: 0.8,
                            ease: REVEAL_EASE
                        }}
                        // Sized to its own content rather than stretched (the old
                        // flex-1 bug), but still allowed to shrink/wrap (no
                        // shrink-0, no min-w-0 override) rather than forced
                        // nowrap — the fixed-width image + gap + title column
                        // budget doesn't leave enough room for every nowrap
                        // phrase around ~1024px, so this is the safety net that
                        // wraps gracefully there instead of overflowing the
                        // viewport. At Figma's own ~1280px+ reference width there
                        // is enough room and every line still renders on one row.
                        // No padding lives directly on THIS element on purpose —
                        // see the inner wrapper below for why. */}
                        className="overflow-hidden flex flex-col"
                    >
                        {/* pt-12/sm:pt-[54px] offsets the list down to align with
                            the title row below the number+gap-3 above it (28px
                            number line at 1.5 leading + 12px gap ≈ 54px at
                            desktop, 24px number line + 12px gap ≈ 48px on
                            mobile), per Figma — not the number. It has to live on
                            this inner div rather than the motion.div above:
                            box-sizing is border-box, and a padding-top larger
                            than an explicit `height` can't be shrunk away — the
                            browser renders at least the padding's own size
                            regardless. Framer was setting the motion.div's height
                            to a literal 0px while closed, but with the padding on
                            that same element the box still rendered at 54px (its
                            padding-top), which is what was silently eating all of
                            the closed "View Details" button's centering space —
                            measured directly in the browser: the third column
                            stretched to a 98px content height it should never
                            have had (44px button + that phantom 54px), leaving
                            justify-center nothing left to center. Padding on this
                            separate, un-animated child instead means it's the
                            motion.div's real height driving the collapse, and
                            overflow-hidden on the motion.div clips this whole
                            child — padding included — away to nothing while
                            closed. */}
                        <div className="flex flex-col gap-3 sm:gap-4 pt-12 sm:pt-[54px]">
                            {/* Each service links to its own sub-page with a ?service=
                                query param, so that page's own accordion/carousel can
                                open on the matching item and scroll itself into view —
                                see the useSearchParams effect on each destination
                                component (SAPS4HANAMigrationImplementation.jsx,
                                CapabilitiesAccordion.jsx, GovernanceSAPDataDepth.jsx). */}
                            {services.map((service) => (
                                <Link
                                    key={service}
                                    href={`${href}?service=${encodeURIComponent(service)}`}
                                    className="w-fit text-[#4a5568] text-base font-light leading-[1.5] transition-colors hover:text-[#2d8ec5]"
                                >
                                    {service}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default function Capabilities() {
    const [activeIndex, setActiveIndex] = useState(0);
    const listRef = useRef(null);
    const [listHeight, setListHeight] = useState(null);

    // The card list's total height is the same regardless of which card is
    // open — always exactly one open row + two collapsed rows — so the
    // open/close transitions are supposed to cancel out and never move
    // anything below this section. In practice, clicking a different card's
    // "View Details" before the previous transition finishes interrupts it
    // mid-flight and breaks that cancellation for a moment (a partially-open
    // row reversing direction doesn't shrink by the same amount the newly
    // active row is growing). Measuring the list's natural height once and
    // locking it as a min-height makes that a non-issue regardless of
    // timing — the section below is anchored to a fixed floor no
    // interrupted animation can move.
    useLayoutEffect(() => {
        const measure = () => {
            const node = listRef.current;
            if (!node) return;
            const previousMinHeight = node.style.minHeight;
            node.style.minHeight = "0px";
            const height = node.scrollHeight;
            node.style.minHeight = previousMinHeight;
            setListHeight(height);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-8 sm:px-[64px] sm:py-[32px] flex flex-col items-center gap-10 sm:gap-[86px]">
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

            {/* max-w-[1280px] mx-auto matches the container width already used
                across the rest of the WhatWeDo section components (see e.g.
                InnovationEmergingTechnologies/OurInnovationFramework.jsx,
                IntelligentAutomation/WhyIntelligentAutomationMatters.jsx).
                Without it, this row's own width is unbounded on a wide
                desktop — the fixed-width image/title/services chunks don't
                come close to filling it, and the outer row's justify-between
                (above, in CapabilityCard) has nowhere to stop growing the
                image↔text gap into. Capping the row here is what turns that
                growth into "comfortable breathing room" instead of "a
                half-empty section." */}
            <motion.div
                ref={listRef}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                style={listHeight ? { minHeight: `${listHeight}px` } : undefined}
                className="w-full max-w-[1280px] mx-auto flex flex-col"
            >
                {CAPABILITIES.map((cap, index) => (
                    <CapabilityCard
                        key={cap.title}
                        {...cap}
                        isActive={index === activeIndex}
                        isLast={index === CAPABILITIES.length - 1}
                        onActivate={() => setActiveIndex(index)}
                    />
                ))}
            </motion.div>
        </section>
    );
}
