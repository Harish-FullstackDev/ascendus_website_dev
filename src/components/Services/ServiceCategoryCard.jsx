"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import arrowOnDark from "@/assets/Services/icons/arrow-circle-on-dark-13.svg";
import arrowOnLight from "@/assets/Services/icons/arrow-circle-on-light-13.svg";

// Figma's active card (416:60) paints a radial gradient anchored on the card's
// top-right corner: 514x414px radii on a 474x160 card. Those radii are
// expressed as percentages of the card's own box so the gradient keeps the same
// shape once the card becomes fluid below 1440.
const ACTIVE_GRADIENT =
    "radial-gradient(ellipse 108% 259% at 100% 0%, #0d3866 0%, #0a284b 37.5%, #061830 75%)";

// One shared layoutId means framer-motion treats the highlight on the old card
// and the highlight on the new one as the same element, so it slides across the
// panel instead of cross-fading in place.
export const HIGHLIGHT_LAYOUT_ID = "service-category-highlight";

// A tween, not a spring: a spring loose enough to feel lively covered ~63% of
// the travel in the first 180ms and then crept through the last 37% for another
// 470ms, which reads as "slides, then creeps". Ease-out-quad spreads the
// distance evenly as it decelerates — the same curve the /solutions/ card
// animation settled on for the same reason.
const SLIDE = { type: "tween", duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] };

// The label, the description and the arrow ring have to flip as the gradient's
// edge sweeps over them — which is early, not at the end of the slide. The
// highlight is exactly one card wide, so measured at 1440 its leading edge
// crosses the incoming title at ~105ms and its trailing edge clears the
// outgoing one at ~110ms, even though the slide itself does not settle until
// ~594ms. Timing the colour to that settle (260ms + 300ms) left the incoming
// copy dark on an already-dark card for a third of a second, and the outgoing
// copy white on white for a sixth. 60ms + 250ms straddles the sweep in both
// directions instead.
const FOREGROUND_TIMING = "duration-[250ms] delay-[60ms]";

// One of the three category tabs. All three now sit inside a single outlined
// panel (416:59); the cards themselves carry no chrome of their own and only
// the sliding gradient marks which one is selected.
export default function ServiceCategoryCard({ category, isActive, onSelect }) {
    const { available, description, icon, iconIsLogo, title, titleLines } = category;
    const lines = titleLines ?? [title];

    // A plain button, deliberately not a `motion.button` with `layout`: Figma
    // (432:1668) draws all three cards at exactly 400px whatever is selected, so
    // nothing in the foreground may move. A layout animation on the card made it
    // visibly expand and settle on every click.
    return (
        <button
            type="button"
            aria-pressed={isActive}
            disabled={!available}
            onClick={available ? onSelect : undefined}
            title={available ? undefined : `${title} — page content coming soon`}
            className={`relative flex min-h-[160px] min-w-0 flex-1 flex-col items-start gap-[22px] rounded-[12px] border border-transparent p-6 text-left ${available ? "cursor-pointer" : "cursor-default"
                }`}
        >
            {isActive ? (
                <motion.span
                    aria-hidden
                    layoutId={HIGHLIGHT_LAYOUT_ID}
                    transition={SLIDE}
                    className="absolute inset-0 rounded-[12px] border border-[rgba(30,58,138,0.6)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
                    style={{ backgroundImage: ACTIVE_GRADIENT }}
                />
            ) : null}

            {/* Everything above the highlight, which is painted into the card's
                own background layer. */}
            <span className="relative flex w-full items-start justify-between">
                {/* min-w-0 on both the row and the label: a flex child defaults to
                    min-width:auto, which refuses to shrink below its text and
                    pushes the title out past the card's right edge once the cards
                    narrow. */}
                <span className="flex min-w-0 items-center gap-[14px]">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-[rgba(96,165,250,0.3)] bg-[rgba(59,130,246,0.2)]">
                        {/* The SAP wordmark fills its tile edge to edge; the two line
                            glyphs sit at Figma's 24px inside the same 40px tile. */}
                        <Image
                            src={icon}
                            alt=""
                            className={iconIsLogo ? "h-[15px] w-[30px]" : "size-6"}
                        />
                    </span>

                    <span
                        className={`min-w-0 text-[18px] font-medium leading-[1.2] transition-colors ${FOREGROUND_TIMING} ${isActive ? "text-white" : "text-[#0e2b4b]"
                            }`}
                    >
                        {lines.map((line, index) => (
                            <span key={line} className="block">
                                {line}
                                {index < lines.length - 1 ? " " : null}
                            </span>
                        ))}
                    </span>
                </span>

                {/* Figma puts a 28px white/10 disc with a white chevron up here on
                    the two resting cards. On a white panel both are invisible —
                    the design's own render shows nothing there — so nothing is
                    drawn. Raise it with the designer rather than inventing a
                    visible affordance. */}
            </span>

            <span className="relative flex w-full items-end justify-between gap-[22px]">
                <span
                    className={`text-[14px] font-normal leading-[1.4] transition-colors ${FOREGROUND_TIMING} ${isActive ? "text-white" : "text-[#0e2b4b]"
                        }`}
                >
                    {description}
                </span>

                {/* Figma's 30.343px disc with a 12.643px arrow — rounded to whole
                    pixels so the ring renders without a half-pixel seam. The two
                    arrow exports differ in stroke colour, so they cross-fade
                    rather than one being recoloured with a filter. */}
                <span
                    className={`relative flex size-[30px] shrink-0 items-center justify-center rounded-full border-[0.8px] transition-colors ${FOREGROUND_TIMING} ${isActive ? "border-white" : "border-[#00223d]"
                        }`}
                >
                    <Image
                        src={arrowOnDark}
                        alt=""
                        className={`absolute size-[13px] transition-opacity ${FOREGROUND_TIMING} ${isActive ? "opacity-100" : "opacity-0"
                            }`}
                    />
                    <Image
                        src={arrowOnLight}
                        alt=""
                        className={`absolute size-[13px] transition-opacity ${FOREGROUND_TIMING} ${isActive ? "opacity-0" : "opacity-100"
                            }`}
                    />
                </span>
            </span>
        </button>
    );
}
