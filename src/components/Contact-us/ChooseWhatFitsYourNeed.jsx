"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import prospectiveIcon from "@/assets/Contact-us/icons/prospective-customers.svg";
import existingIcon from "@/assets/Contact-us/icons/existing-customers.svg";
import arrowRightIcon from "@/assets/Contact-us/icons/arrow-right-primary.svg";
import arrowRightOnDarkIcon from "@/assets/Contact-us/icons/arrow-right-on-dark.svg";

const SEGMENTS = [
    {
        description:
            "Explore solutions, discuss your business requirements, or connect with our experts to identify the right approach.",
        icon: prospectiveIcon,
        id: "prospective",
        linkLabel: "Explore Customer Engagement",
        title: "For Prospective Customers",
    },
    {
        description:
            "Access assistance, raise service requests or escalate critical matters through our dedicated support channels.",
        icon: existingIcon,
        id: "existing",
        // Figma labels both cards "Explore Customer Engagement" (nodes 278:5340
        // and 278:5355). Kept verbatim; flag to the design team if the second
        // card was meant to read "Access Customer Support".
        linkLabel: "Explore Customer Engagement",
        title: "For Existing Customers",
    },
];

// Figma's active card (681:2033) paints a radial gradient anchored on its
// top-right corner: 698x414px radii on a 644x160 card. The radii are given as
// percentages of the card's own box so the shape holds once the card is fluid.
const ACTIVE_GRADIENT =
    "radial-gradient(ellipse 108% 259% at 100% 0%, #0D3866 0%, #0A284B 37.5%, #061830 75%)";

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
                className="mt-8 grid grid-cols-2 gap-2 rounded-[12px] border-[0.5px] border-[rgba(0,34,61,0.24)] bg-white p-2 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.13)] sm:gap-3 sm:p-3"
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
                            className="group relative flex h-full min-h-[160px] w-full cursor-pointer flex-col items-start gap-3 p-4 text-left md:flex-row md:gap-6 md:p-[25px]"
                        >
                            {/* Explicit layers, because the cards share one stacking
                                context: grey fill (0) < sliding highlight (1) < copy (2).
                                Left to DOM order, the second card's fill would paint over
                                the highlight while it slides back into the first card. */}
                            <span aria-hidden className="absolute inset-0 z-0 rounded-[16px] bg-[#f8f8f8]" />
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
                                className={`relative z-[2] flex size-10 shrink-0 items-center justify-center transition-colors md:size-12 ${FOREGROUND_TIMING} ${
                                    isSelected ? "rounded-[10px] bg-white" : "rounded-[8px] bg-[#d5e2f2]"
                                }`}
                            >
                                <Image src={segment.icon} alt="" className="h-5 w-5 md:h-6 md:w-6" />
                            </span>

                            <span className="relative z-[2] block min-w-0">
                                <span
                                    className={`block text-base font-medium leading-[1.2] transition-colors md:text-lg ${FOREGROUND_TIMING} ${
                                        isSelected ? "text-[#f8f8f8]" : "text-[#0e2b4b]"
                                    }`}
                                >
                                    {segment.title}
                                </span>
                                <span
                                    className={`mt-2 block max-w-[440px] text-xs font-normal leading-[1.4] transition-colors md:mt-3 md:text-sm ${FOREGROUND_TIMING} ${
                                        isSelected ? "text-[#f8f8f8]" : "text-[#415773]"
                                    }`}
                                >
                                    {segment.description}
                                </span>

                                <span
                                    className={`mt-3 inline-flex items-start gap-1 text-sm font-normal leading-[1.5] transition-colors md:items-center md:text-base ${FOREGROUND_TIMING} ${
                                        isSelected ? "text-[#68c2f2]" : "text-[#0061af]"
                                    }`}
                                >
                                    {segment.linkLabel}
                                    {/* The two arrow exports differ only in stroke colour,
                                        so they cross-fade with the text. */}
                                    <span className="relative size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 md:size-6">
                                        <Image
                                            src={arrowRightOnDarkIcon}
                                            alt=""
                                            className={`absolute inset-0 size-full transition-opacity ${FOREGROUND_TIMING} ${
                                                isSelected ? "opacity-100" : "opacity-0"
                                            }`}
                                        />
                                        <Image
                                            src={arrowRightIcon}
                                            alt=""
                                            className={`absolute inset-0 size-full transition-opacity ${FOREGROUND_TIMING} ${
                                                isSelected ? "opacity-0" : "opacity-100"
                                            }`}
                                        />
                                    </span>
                                </span>
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
