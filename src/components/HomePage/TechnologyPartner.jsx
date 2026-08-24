"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Each word carries its own highlight flag so the two accent phrases
// ("deep SAP expertise" / "cloud, data, AI, and digital solutions") land on
// the blue/medium end state instead of the default gray/light one, while
// still animating in via the same scroll-scrubbed opacity+color sweep as
// every other word.
const WORDS = [
    { text: "We", highlight: false },
    { text: "close", highlight: false },
    { text: "the", highlight: false },
    { text: "gap", highlight: false },
    { text: "between", highlight: false },
    { text: "enterprise", highlight: false },
    { text: "technology", highlight: false },
    { text: "and", highlight: false },
    { text: "execution,", highlight: false },
    { text: "combining", highlight: false },
    { text: "deep", highlight: true },
    { text: "SAP", highlight: true },
    { text: "expertise", highlight: true },
    { text: "with", highlight: false },
    { text: "GCC", highlight: false },
    { text: "compliance", highlight: false },
    { text: "knowledge", highlight: false },
    { text: "across", highlight: false },
    { text: "cloud,", highlight: true },
    { text: "data,", highlight: true },
    { text: "AI,", highlight: true },
    { text: "and", highlight: true },
    { text: "digital", highlight: true },
    { text: "solutions", highlight: true },
    { text: "to", highlight: false },
    { text: "build", highlight: false },
    { text: "connected,", highlight: false },
    { text: "scalable,", highlight: false },
    { text: "competitive", highlight: false },
    { text: "businesses.", highlight: false },
];

const FULL_TEXT = WORDS.map((w) => w.text).join(" ");

// Small buffer at both ends of the tracked scroll window so the first/last
// words settle in/out instead of snapping right at the boundary.
const REVEAL_START = 0.05;
const REVEAL_END = 0.95;
const DIM_COLOR = [199, 204, 209]; // #c7ccd1
const FINAL_COLOR = [74, 85, 104]; // #4a5568
const HIGHLIGHT_COLOR = [45, 142, 197]; // #2d8ec5

function mixColor(a, b, t) {
    const clamped = Math.min(1, Math.max(0, t));
    const r = Math.round(a[0] + (b[0] - a[0]) * clamped);
    const g = Math.round(a[1] + (b[1] - a[1]) * clamped);
    const bl = Math.round(a[2] + (b[2] - a[2]) * clamped);
    return `rgb(${r}, ${g}, ${bl})`;
}

// Every word derives its opacity/color from ONE shared, clamped MotionValue
// (`wordsRevealed`, a float 0..WORDS.length) instead of computing its own
// independent scroll range. Word `i` is a pure, monotonic function of
// `wordsRevealed - i` clamped to [0,1] — it can only move towards 1 while
// wordsRevealed is rising (scrolling down) and only move back towards 0
// while wordsRevealed is falling (scrolling up), regardless of what any
// other word is doing.
function Word({ word, index, wordsRevealed }) {
    const opacity = useTransform(wordsRevealed, (v) => {
        const t = Math.min(1, Math.max(0, v - index));
        return 0.18 + t * 0.82;
    });
    const color = useTransform(wordsRevealed, (v) => {
        const t = Math.min(1, Math.max(0, v - index));
        return mixColor(DIM_COLOR, word.highlight ? HIGHLIGHT_COLOR : FINAL_COLOR, t);
    });

    return (
        <motion.span
            style={{ opacity, color }}
            className={word.highlight ? "font-medium" : "font-light"}
        >
            {word.text}
        </motion.span>
    );
}

export default function TechnologyPartner() {
    const pinRef = useRef(null);

    // True scroll-lock: while pinRef's span is crossing the viewport, the
    // panel below stays pinned (position: sticky) and scrollYProgress sweeps
    // 0 → 1, driving the reveal. The panel is sized to its own content (not
    // forced to viewport height) — that's what keeps the section from
    // reading as "full screen." The trade-off, chosen deliberately over the
    // full-viewport-panel alternative: because the content is shorter than
    // the viewport, the next section can peek in for the last stretch of
    // scroll before this one fully releases, rather than staying completely
    // hidden until the exact release instant. Keeping the extra pin runway
    // modest (not a full extra viewport) keeps that peek window short.
    const { scrollYProgress } = useScroll({
        target: pinRef,
        offset: ["start start", "end end"],
    });

    const wordsRevealed = useTransform(scrollYProgress, [REVEAL_START, REVEAL_END], [0, WORDS.length], {
        clamp: true,
    });

    return (
        <section className="w-full bg-white">
            <div ref={pinRef} className="relative h-[135vh] sm:h-[140vh] lg:h-[145vh]">
                <div className="sticky top-0 flex flex-col gap-10 sm:gap-16 px-6 pt-10 pb-6 sm:px-[64px] sm:pt-[64px] sm:pb-0">
                    <div className="flex flex-col gap-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[#10161D] text-[28px] font-medium leading-[1.4]"
                        >
                            A Technology Partner Built for Enterprise Complexity
                        </motion.h2>

                        <p
                            aria-label={FULL_TEXT}
                            className="max-w-[1300px] text-xl sm:text-[28px] leading-[1.6] tracking-[0.28px]"
                        >
                            <span aria-hidden="true">
                                {WORDS.map((word, index) => (
                                    <span key={`${word.text}-${index}`}>
                                        <Word word={word} index={index} wordsRevealed={wordsRevealed} />
                                        {index < WORDS.length - 1 ? " " : ""}
                                    </span>
                                ))}
                            </span>
                            <span className="sr-only">{FULL_TEXT}</span>
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-10 max-w-[1280px]"
                    >
                        <h3 className="text-[#10161d] text-[28px] font-medium leading-[1.4] shrink-0">
                            Built for Enterprise Execution
                        </h3>

                        <div className="flex flex-col gap-6 w-full sm:max-w-[403px]">
                            <p className="text-[#4a5568] text-lg font-light leading-[1.6] tracking-[0.18px]">
                                We bring SAP, cloud, data, AI, and digital solutions together to help businesses
                                simplify operations, stay compliant, and scale with confidence.
                            </p>
                            <Link
                                href="/who-we-are"
                                className="self-start rounded-[54px] border border-[#0a3a52] px-8 py-3 text-lg font-light text-[#0a3a52] text-center transition-colors hover:bg-[#0a3a52] hover:text-white"
                            >
                                See Who We Are
                            </Link>
                        </div>
                    </motion.div>

                    {/* Fixed 64px (gap-10/16, same rhythm as above) below "Built for
                        Enterprise Execution" — never anything but that distance. */}
                    <div className="h-px w-full shrink-0 bg-[#8794a3]" />
                </div>
            </div>
        </section>
    );
}
