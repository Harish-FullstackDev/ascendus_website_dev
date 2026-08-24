"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

// Open/close accordion per Figma: card 1 is open on load; hovering (or
// tapping, for touch) any card makes it the active/open one and closes
// whichever was open before. There's no mouse-leave handler on purpose —
// the brief is "the last hovered stays open," not "reverts when the pointer
// leaves," so activeIndex only ever changes on the next hover/tap, never on
// hover-out.
function CapabilityCard({ number, title, description, image, href, services, isActive, onActivate }) {
    return (
        <div
            onMouseEnter={onActivate}
            onFocus={onActivate}
            onClick={onActivate}
            className={`flex flex-col md:flex-row w-full gap-6 md:gap-10 items-start cursor-pointer py-6 ${isActive ? "" : "border-b border-black"
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
 
                Open and close now share the exact same duration/easing (they used
                to be 900ms open / 300ms close). That asymmetry was what pulled the
                section below up and down: at any moment exactly one card is
                growing and one is shrinking by the same amount, so with matched
                timing the two changes cancel out and the section's total height
                barely moves — with mismatched timing there was a ~600ms window
                where the closing card had already shrunk but the opening one
                hadn't finished growing, so the whole section visibly dipped in
                height and everything below it jumped. Slower (800ms) than the
                original 500ms per "make it look premium," just no longer skewed
                between the two directions. */}
            <div
                className={`grid w-full md:w-[272px] shrink-0 self-start transition-[grid-template-rows] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <div
                        className={`relative w-full aspect-[272/459] transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                            ? "duration-[850ms] delay-[150ms] opacity-100 scale-100"
                            : "duration-[400ms] opacity-0 scale-[0.97]"
                            }`}
                    >
                        <Image src={image} alt="" fill className="object-cover" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-8 sm:gap-10 md:gap-16">
                {/* number + title always show, collapsed or open; description + button
                    reveal in place below them while open — same grid-rows technique
                    and same matched-duration timing (for the same layout-shift
                    reason above), staggered a beat after the image so the reveal
                    feels sequenced rather than everything popping in at once. */}
                <div className="flex flex-col sm:w-[410px] gap-3 shrink-0">
                    <span className="text-[#8794a3] text-2xl sm:text-[28px] font-medium leading-[1.5]">
                        {number}
                    </span>
                    <p className="text-[#10161d] text-lg font-medium leading-[1.5]">{title}</p>

                    <div
                        className={`grid transition-[grid-template-rows] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div
                                className={`flex flex-col gap-8 pt-5 transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                                    ? "duration-[750ms] delay-[250ms] opacity-100 translate-y-0"
                                    : "duration-[400ms] opacity-0 translate-y-2"
                                    }`}
                            >
                                <p className="text-[#4a5568] text-lg font-light leading-normal">{description}</p>
                                <Link
                                    href={href}
                                    onClick={(event) => event.stopPropagation()}
                                    className="inline-flex h-11 w-[175px] items-center justify-center border border-[#d0d0d0] bg-[#0a3a52] px-6 text-lg font-light text-white text-center transition-colors hover:bg-white hover:text-[#0a3a52]"
                                >
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <AnimatePresence initial={false}>
                    {isActive && (
                        <motion.div
                            key="services"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.6, ease: REVEAL_EASE, delay: 0.35 } }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            className="flex flex-col gap-3 sm:gap-4 sm:flex-1"
                        >
                            {services.map((service) => (
                                <p
                                    key={service}
                                    className="text-[#4a5568] text-base font-light leading-[1.5] whitespace-nowrap"
                                >
                                    {service}
                                </p>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
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
    // anything below this section. In practice, moving the mouse across
    // cards quickly fires hover on the next card before the previous
    // transition finishes, which interrupts it mid-flight and breaks that
    // cancellation for a moment (a partially-open row reversing direction
    // doesn't shrink by the same amount the newly active row is growing).
    // Measuring the list's natural height once and locking it as a
    // min-height makes that a non-issue regardless of timing — the section
    // below is anchored to a fixed floor no interrupted animation can move.
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

            <motion.div
                ref={listRef}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                style={listHeight ? { minHeight: `${listHeight}px` } : undefined}
                className="w-full flex flex-col"
            >
                {CAPABILITIES.map((cap, index) => (
                    <CapabilityCard
                        key={cap.title}
                        {...cap}
                        isActive={index === activeIndex}
                        onActivate={() => setActiveIndex(index)}
                    />
                ))}
            </motion.div>
        </section>
    );
}

