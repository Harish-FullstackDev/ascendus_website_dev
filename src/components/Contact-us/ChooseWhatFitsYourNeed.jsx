"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import prospectiveIcon from "@/assets/Contact-us/icons/prospective-customers.svg";
import existingIcon from "@/assets/Contact-us/icons/existing-customers.svg";
import arrowRightIcon from "@/assets/Contact-us/icons/arrow-right.svg";

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
        // Figma labels both cards "Explore Customer Engagement" (nodes 62:409 and
        // 62:422). Kept verbatim; flag to the design team if the second card was
        // meant to read "Access Customer Support" as it did in the first revision.
        linkLabel: "Explore Customer Engagement",
        title: "For Existing Customers",
    },
];

// The two cards are a segmented control, not navigation: picking one swaps the
// section below (Start a New Conversation / Already an Ascendus Customer),
// which is why they are buttons and why the selected state is owned by the page
// rather than by this component.
export default function ChooseWhatFitsYourNeed({ onSelect, selected = "prospective" }) {
    return (
        <section className="w-full bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-xs font-bold uppercase tracking-[0.6px] text-[#2d8ec5]">How can we help?</p>
                <h2 className="mt-1 text-2xl sm:text-[32px] font-medium text-[#0a3a52] leading-[36px]">
                    Choose What Fits Your Need
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#64748b] leading-5">
                    Select the option that best describes your enquiry. We&apos;ll connect you with the right team to
                    help you move forward.
                </p>
            </motion.div>

            <div
                role="tablist"
                aria-label="Choose what fits your need"
                className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
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
                                className={
                                    "group flex h-full w-full items-start gap-6 rounded-[16px] border p-[25px] text-left transition-colors duration-300 " +
                                    (isSelected
                                        ? "border-[#c3e0f0] bg-[#0a3a52]"
                                        : "border-[#d3dae2] bg-white hover:border-[#c3e0f0]")
                                }
                            >
                                <span
                                    className={
                                        "flex size-12 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 " +
                                        (isSelected ? "bg-white" : "bg-[#e8f3ff]")
                                    }
                                >
                                    <Image src={segment.icon} alt="" className="w-6 h-6" />
                                </span>

                                <span className="block">
                                    <span
                                        className={
                                            "block text-base font-medium leading-6 " +
                                            (isSelected ? "text-white" : "text-[#0a3a52]")
                                        }
                                    >
                                        {segment.title}
                                    </span>
                                    <span
                                        className={
                                            "mt-1 block max-w-[384px] text-xs leading-4 " +
                                            (isSelected ? "font-light text-white" : "text-[#64748b]")
                                        }
                                    >
                                        {segment.description}
                                    </span>

                                    {/* Figma draws the arrow on the selected card only
                                        (62:409 vs 62:422); treated as a design miss —
                                        both states carry it, and only the accent colour
                                        changes with selection. */}
                                    <span
                                        className={
                                            "mt-3 inline-flex items-center gap-1 text-sm font-semibold " +
                                            (isSelected ? "text-[#0061af]" : "text-[#2d8ec5]")
                                        }
                                    >
                                        {segment.linkLabel}
                                        <Image
                                            src={arrowRightIcon}
                                            alt=""
                                            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
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
