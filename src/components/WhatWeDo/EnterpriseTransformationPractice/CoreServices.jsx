"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import s4hanaLogo from "@/assets/WhatWeDo/Enterprise Transformation Practice/icon/s4hana.svg";
import riseWithSapLogo from "@/assets/WhatWeDo/Enterprise Transformation Practice/icon/rise_with_sap.svg";
import growWithSapLogo from "@/assets/WhatWeDo/Enterprise Transformation Practice/icon/grow_with_sap.svg";
import amsLogo from "@/assets/WhatWeDo/Enterprise Transformation Practice/icon/ams.svg";
import microsoftLogo from "@/assets/WhatWeDo/Enterprise Transformation Practice/icon/microsoft.svg";
import integrationSuiteLogo from "@/assets/WhatWeDo/Enterprise Transformation Practice/icon/integration_suite.svg";

const SERVICES = [
    {
        logo: s4hanaLogo,
        title: "SAP S/4HANA Migration",
        desc: "End-to-end migration from ECC to S/4HANA, planned around your compliance deadlines and cutover windows, not a generic timeline.",
    },
    {
        logo: riseWithSapLogo,
        title: "RISE with SAP",
        desc: "Full RISE with SAP delivery, infrastructure, migration, and managed operations bundled under a single SAP-backed contract.",
    },
    {
        logo: growWithSapLogo,
        title: "GROW with SAP",
        desc: "Cloud native S/4HANA on SAP's best practice reference architecture, built for organizations without legacy customization to carry over.",
    },
    {
        logo: amsLogo,
        title: "Application Managed Services",
        desc: "We manage and support your applications to keep them running smoothly, reliably, and efficiently.",
    },
    {
        logo: microsoftLogo,
        title: "Microsoft & Cloud Services",
        desc: "We provide simple, secure, and scalable Microsoft and cloud solutions to support your business.",
    },
    {
        logo: integrationSuiteLogo,
        title: "Systems Integration",
        desc: "We provide ongoing support and maintenance to keep your applications secure, stable, and performing well.",
    },
];

// sm and up shows 3 cards at a time, but arrows step one card per click
// (a sliding window) rather than jumping a whole page of 3.
const VISIBLE_COUNT = 3;
const MAX_INDEX = SERVICES.length - VISIBLE_COUNT;

// Mobile pages one card at a time instead of 3 — its own page count/size so it
// doesn't share state with the sm+ sliding carousel below.
const MOBILE_PAGE_COUNT = SERVICES.length;

// Measures the pixel offset between two adjacent cards (width + gap) so the
// carousel can step by exactly one card regardless of breakpoint, instead of
// relying on percentage math that would drift once gaps are involved.
function useCardStep(trackRef) {
    const [step, setStep] = useState(0);

    useLayoutEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            if (!track || track.children.length < 2) return;
            const first = track.children[0];
            const second = track.children[1];
            setStep(second.offsetLeft - first.offsetLeft);
        };

        measure();
        window.addEventListener("resize", measure);

        const observer = new ResizeObserver(measure);
        if (trackRef.current) observer.observe(trackRef.current);

        return () => {
            window.removeEventListener("resize", measure);
            observer.disconnect();
        };
    }, [trackRef]);

    return step;
}

// Copied from HomePage/CoreCapabilities.jsx's ArrowButton — same chevron, same
// enabled/disabled visual treatment, kept as its own copy since the two carousels
// are otherwise unrelated components.
function ArrowButton({ direction, disabled, onClick }) {
    return (
        <button
            type="button"
            aria-label={direction === -1 ? "Previous" : "Next"}
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center size-10 transition-all duration-300 ${disabled ? "opacity-30 cursor-not-allowed" : "hover:scale-110"
                }`}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`size-6 text-[#10161d] ${direction === -1 ? "-scale-x-100" : ""}`}
            >
                <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

function ServiceCard({ service }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full bg-white flex flex-col items-start justify-between gap-6 p-8 shadow-[2px_4px_8.4px_0px_rgba(0,0,0,0.1)] min-h-[280px] sm:min-h-[304px]"
        >
            <div className="relative h-8 w-[140px]">
                <Image src={service.logo} alt="" fill className="object-contain object-left" />
            </div>
            <p className="text-[#10161d] text-2xl font-medium">{service.title}</p>
            <p className="text-[#10161d] text-base font-extralight leading-[1.59]">
                {service.desc}
            </p>
        </motion.div>
    );
}

export default function CoreServices() {
    const [index, setIndex] = useState(0);
    const [mobilePage, setMobilePage] = useState(0);
    const trackRef = useRef(null);
    const step = useCardStep(trackRef);

    return (
        // sm:gap-16 is the 64px between the subtitle's end and the card row. It
        // was 4px, which only looked right when the arrows had their own row
        // (plus its own gap-4) sitting in this space; once the arrows moved up
        // into the header the cards were left almost touching the subtitle.
        // The arrows' -mb-[13px] pulls them below the header's own box without
        // adding to its height, so it eats into this gap rather than widening
        // it — the 64px stays measured from the subtitle, as intended.
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-8 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
            >
                <div className="w-full sm:flex-1 sm:min-w-0 flex flex-col items-start gap-4">
                    <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold shrink-0">Core Services</h2>
                    <p className="text-[#55595E] text-lg sm:text-2xl font-light sm:tracking-[0.24px] w-full sm:max-w-[618px]">
                        SAP is our core  deliberately. Microsoft and adjacent platforms extend that core so the enterprise
                        moves as a system, not a set of silos.
                    </p>
                </div>

                {/* Desktop arrows sit in the header rather than in their own row
                    above the cards, which is what left them looking unanchored.
                    items-end lines the button BOX up with the subtitle's box, but
                    the arrow's visible ink sits well inside that box, so the box
                    alignment alone still reads as floating. The offset below is
                    derived, not eyeballed:
                        8px  button padding (size-10 button around a size-6 svg)
                      + 6px  path inset inside the svg (the glyph spans y 6-18 of
                             its 0 0 24 24 viewBox, so it never touches the edge)
                      - 1px  line-height leading under the subtitle's last line
                      = 13px
                    which puts the arrow's lower edge level with the bottom of the
                    subtitle's last line of text. Verified at 768-1920px. */}
                <div className="hidden sm:flex items-center gap-2 shrink-0 -mb-[13px]">
                    <ArrowButton direction={-1} disabled={index === 0} onClick={() => setIndex((i) => Math.max(0, i - 1))} />
                    <ArrowButton
                        direction={1}
                        disabled={index === MAX_INDEX}
                        onClick={() => setIndex((i) => Math.min(MAX_INDEX, i + 1))}
                    />
                </div>
            </motion.div>

            {/* Mobile: one card in view at a time (its own page/state, 6 pages),
                arrow-paged instead of stacking all 6 or showing 3 at once. */}
            <div className="flex flex-col gap-4 sm:hidden">
                <div className="flex items-center justify-end gap-2">
                    <ArrowButton
                        direction={-1}
                        disabled={mobilePage === 0}
                        onClick={() => setMobilePage((p) => Math.max(0, p - 1))}
                    />
                    <ArrowButton
                        direction={1}
                        disabled={mobilePage === MOBILE_PAGE_COUNT - 1}
                        onClick={() => setMobilePage((p) => Math.min(MOBILE_PAGE_COUNT - 1, p + 1))}
                    />
                </div>

                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            width: `${MOBILE_PAGE_COUNT * 100}%`,
                            transform: `translateX(-${mobilePage * (100 / MOBILE_PAGE_COUNT)}%)`,
                        }}
                    >
                        {SERVICES.map((service) => (
                            <div key={service.title} className="shrink-0" style={{ width: `${100 / MOBILE_PAGE_COUNT}%` }}>
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* sm and up: 3 cards visible at a time, sliding one card per arrow
                click (measured via useCardStep) instead of jumping a whole page. */}
            <div className="hidden sm:flex flex-col gap-4">
                <div className="w-full overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex gap-6 sm:gap-[29px] items-stretch transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${index * step}px)` }}
                    >
                        {SERVICES.map((service) => (
                            <div
                                key={service.title}
                                className="shrink-0 w-[calc((100%-48px)/3)] sm:w-[calc((100%-58px)/3)]"
                            >
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
