"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import prospectiveIcon from "@/assets/Contact-us/icons/prospective-customers.svg";
import existingIcon from "@/assets/Contact-us/icons/existing-customers.svg";
import arrowOnDark from "@/assets/Services/icons/arrow-circle-on-dark-13.svg";
import arrowMuted from "@/assets/Contact-us/icons/arrow-circle-muted-13.svg";

const SEGMENTS = [
    {
        description:
            "Explore solutions, discuss your business requirements, or connect with our experts to identify the right approach.",
        icon: prospectiveIcon,
        id: "prospective",
        title: "For Prospective Customers",
    },
    {
        description:
            "Access assistance, raise service requests or escalate critical matters through our dedicated support channels.",
        icon: existingIcon,
        id: "existing",
        title: "For Existing Customers",
    },
];

// Figma's active card (681:2033) uses the same cyan-glow-on-navy as the
// "Prefer to speak with us directly?" card: a radial gradient centred near the
// top-right corner (96.2% / 18.1% of the 624x132 card), radii ~518 x 716px
// (83% / 543% of the box, so it scales with the card). Figma tilts the
// ellipse, which CSS cannot; unrotated it reads the same. Past the last stop
// (54%) the card holds #00223d.
const ACTIVE_GRADIENT =
    "radial-gradient(ellipse 83% 542.7% at 96.2% 18.1%, #006B9A 0%, #00476C 27%, #003454 40.6%, #00223D 54.1%)";

// Same sliding highlight as the Services category cards: one shared layoutId,
// so framer-motion moves the dark card across the panel instead of
// cross-fading it in place. Same tween and same foreground timing too, so the
// copy flips colour as the highlight's edge sweeps over it, not after it lands.
const HIGHLIGHT_LAYOUT_ID = "contact-segment-highlight";
const SLIDE = { type: "tween", duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] };
const FOREGROUND_TIMING = "duration-[250ms] delay-[60ms]";

// The two cards are a segmented control, not navigation: picking one swaps the
// section below (Start a New Conversation / Already an Ascendus Customer),
// which is why they are buttons and why the selected state is owned by the page
// rather than by this component. Selection changes on click (or Enter/Space)
// only, never on hover.
export default function ChooseWhatFitsYourNeed({ onSelect, selected = "prospective" }) {
    return (
        <section className="w-full bg-white px-6 sm:px-[64px] py-10 sm:py-[48px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-[811px]"
            >
                <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                    How can we help?
                </p>
                <h2 className="mt-4 text-[26px] sm:text-[32px] font-medium text-[#0e2b4b] leading-[1.2]">
                    Choose What Fits Your Need
                </h2>
                {/* Figma sets the supporting line in two measured lines
                    (278:5326); the break is kept on desktop and released below
                    sm so the sentence reflows on phones. */}
                <p className="mt-3 pt-[2px] text-base font-normal text-[#415773] leading-[1.5]">
                    Select the option that best describes your enquiry.
                    <br className="hidden sm:block" />{" "}
                    We&apos;ll connect you with the right team to help you move forward.
                </p>
            </motion.div>

            {/* Figma (681:2032) puts both cards in one outlined white panel with a
                12px inset and gutter. Each resting card has its own #f8f8f8 fill;
                the dark highlight slides over it. Two-up at every width; the card
                interior turns into icon-over-text below md so the halved column
                still fits the copy. */}
            <div
                role="tablist"
                aria-label="Choose what fits your need"
                className="mt-8 grid grid-cols-2 gap-2 rounded-[12px] border-[0.5px] border-[rgba(0,34,61,0.24)] bg-white p-2 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.13)] sm:gap-6 sm:p-3"
            >
                {SEGMENTS.map((segment) => {
                    const isSelected = selected === segment.id;

                    return (
                        <button
                            key={segment.id}
                            type="button"
                            role="tab"
                            aria-selected={isSelected}
                            aria-controls={`segment-panel-${segment.id}`}
                            onClick={() => onSelect?.(segment.id)}
                            className="group relative flex h-full min-h-[132px] w-full cursor-pointer flex-col items-start gap-3 p-4 text-left md:flex-row md:items-end md:gap-6 md:p-[25px]"
                        >
                            {/* Explicit layers, because the cards share one stacking
                                context: resting card (0) < sliding highlight (1) < copy (2).
                                Left to DOM order, the second card would paint over the
                                highlight while it slides back into the first card. Figma
                                (702:404) draws the resting card white with the same
                                outline as the selected one. */}
                            <span
                                aria-hidden
                                className="absolute inset-0 z-0 rounded-[12px] border border-[rgba(30,58,138,0.6)] bg-white"
                            />
                            {isSelected ? (
                                <motion.span
                                    aria-hidden
                                    layoutId={HIGHLIGHT_LAYOUT_ID}
                                    transition={SLIDE}
                                    className="absolute inset-0 z-[1] rounded-[12px] border border-[rgba(30,58,138,0.6)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
                                    style={{ backgroundImage: ACTIVE_GRADIENT }}
                                />
                            ) : null}

                            <span
                                className={`relative z-[2] flex size-10 shrink-0 items-center justify-center self-start rounded-[10px] transition-colors md:size-12 ${FOREGROUND_TIMING} ${
                                    isSelected ? "bg-white" : "bg-[#ecf2f9]"
                                }`}
                            >
                                <Image src={segment.icon} alt="" className="h-5 w-5 md:h-6 md:w-6" />
                            </span>

                            <span className="relative z-[2] block min-w-0 md:flex-1 md:self-stretch">
                                <span
                                    className={`block text-base font-medium leading-[1.2] transition-colors md:text-lg ${FOREGROUND_TIMING} ${
                                        isSelected ? "text-[#f8f8f8]" : "text-[#0e2b4b]"
                                    }`}
                                >
                                    {segment.title}
                                </span>
                                <span
                                    className={`mt-2 block max-w-[399px] text-xs font-normal leading-[1.4] transition-colors md:mt-3 md:text-sm ${FOREGROUND_TIMING} ${
                                        isSelected ? "text-[#f8f8f8]" : "text-[#0e2b4b]"
                                    }`}
                                >
                                    {segment.description}
                                </span>
                            </span>

                            {/* The Services category cards' ring (702:361): a 30px disc
                                with a 13px arrow, white on the highlight and #5c7088 at
                                rest. The two arrow exports differ only in stroke colour,
                                so they cross-fade with the copy. */}
                            <span
                                aria-hidden
                                className={`relative z-[2] hidden size-[30px] shrink-0 items-center justify-center rounded-full border-[0.8px] transition-colors md:flex ${FOREGROUND_TIMING} ${
                                    isSelected ? "border-white" : "border-[#5c7088]"
                                }`}
                            >
                                <Image
                                    src={arrowOnDark}
                                    alt=""
                                    className={`absolute size-[13px] transition-opacity ${FOREGROUND_TIMING} ${
                                        isSelected ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                                <Image
                                    src={arrowMuted}
                                    alt=""
                                    className={`absolute size-[13px] transition-opacity ${FOREGROUND_TIMING} ${
                                        isSelected ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
