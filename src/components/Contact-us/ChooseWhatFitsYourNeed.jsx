"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import prospectiveIcon from "@/assets/Contact-us/icons/prospective-customers.svg";
import existingIcon from "@/assets/Contact-us/icons/existing-customers.svg";
import arrowRightIcon from "@/assets/Contact-us/icons/arrow-right.svg";
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

// The two cards are a segmented control, not navigation: picking one swaps the
// section below (Start a New Conversation / Already an Ascendus Customer),
// which is why they are buttons and why the selected state is owned by the page
// rather than by this component.
//
// Selection follows the pointer: hovering a card selects it and the selection
// stays on the last card hovered after the pointer leaves. Click and keyboard
// focus select too, so touch and keyboard users reach both panels.
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

            {/* Two-up at every width: side by side the pair reads as a choice
                between two options, which a stacked pair on phones did not. The
                card interior turns into icon-over-text below md so the halved
                column still fits the label and the description. Figma now sets
                each card at 644 of a 1312 box (278:5807), a 24px gutter — the
                same one the four- and three-card panels below use. */}
            <div
                role="tablist"
                aria-label="Choose what fits your need"
                className="mt-8 grid grid-cols-2 gap-3 sm:gap-6"
            >
                {SEGMENTS.map((segment) => {
                    const isSelected = selected === segment.id;

                    return (
                        <motion.div
                            key={segment.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="h-full"
                        >
                            <button
                                type="button"
                                role="tab"
                                aria-selected={isSelected}
                                aria-controls={`segment-panel-${segment.id}`}
                                onClick={() => onSelect?.(segment.id)}
                                onMouseEnter={() => onSelect?.(segment.id)}
                                onFocus={() => onSelect?.(segment.id)}
                                className={
                                    "group flex h-full w-full flex-col items-start gap-3 border p-4 text-left transition-colors duration-300 md:flex-row md:gap-6 md:p-[25px] " +
                                    (isSelected
                                        ? "rounded-[12px] border-[#c3e0f0] bg-[#00223d]"
                                        : "rounded-[16px] border-[#8695a7] bg-[#f8f8f8] hover:border-[#c3e0f0]")
                                }
                            >
                                <span
                                    className={
                                        "flex size-10 shrink-0 items-center justify-center transition-colors duration-300 md:size-12 " +
                                        (isSelected
                                            ? "rounded-[10px] bg-white"
                                            : "rounded-[8px] bg-[#d5e2f2]")
                                    }
                                >
                                    <Image src={segment.icon} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                                </span>

                                <span className="block min-w-0">
                                    <span
                                        className={
                                            "block text-base leading-[1.2] font-medium md:text-lg " +
                                            (isSelected ? "text-[#f8f8f8]" : "text-[#0e2b4b]")
                                        }
                                    >
                                        {segment.title}
                                    </span>
                                    <span
                                        className={
                                            "mt-2 block max-w-[384px] text-xs leading-[1.4] font-normal md:text-sm " +
                                            (isSelected ? "text-[#f8f8f8]" : "text-[#415773]")
                                        }
                                    >
                                        {segment.description}
                                    </span>

                                    {/* Figma draws the arrow on the selected card only
                                        (278:5341 vs 278:5356); treated as a design miss —
                                        both states carry it, and only the accent colour
                                        changes with selection. */}
                                    <span
                                        className={
                                            "mt-3 inline-flex items-start gap-1 text-sm font-normal md:items-center md:text-base " +
                                            (isSelected ? "text-[#68c2f2]" : "text-[#0061af]")
                                        }
                                    >
                                        {segment.linkLabel}
                                        <Image
                                            src={isSelected ? arrowRightOnDarkIcon : arrowRightIcon}
                                            alt=""
                                            className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 md:w-6 md:h-6"
                                        />
                                    </span>
                                </span>
                            </button>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
