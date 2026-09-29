"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

import ServiceCategoryCard from "./ServiceCategoryCard";
import { SERVICE_CATEGORIES } from "./servicesData";

// Section 2 — the three service categories, which double as the tabs for the
// explorer in the next section. White band sitting directly under the hero, so
// it takes the full 64px at the top (coloured/white boundary) and 32px at the
// bottom, where the next band is white too.
export default function ThreeWaysWeCreateValue({ activeCategoryId, onSelectCategory }) {
    return (
        <section className="w-full bg-white px-6 pb-8 pt-10 sm:px-[64px] sm:pb-[32px] sm:pt-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full max-w-[811px] flex-col gap-3"
            >
                <p className="text-[14px] font-semibold uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                    Our Services
                </p>

                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                    Three Ways We Create Value
                </h2>

                <p className="pt-[2px] text-sm font-normal leading-[1.5] text-[#415773] sm:text-base">
                    Integrated services across SAP, business and digital transformation. designed to solve real
                    business challenges and drive measurable outcomes.
                </p>
            </motion.div>

            {/* Figma wraps all three cards in one outlined panel: the cards carry
                no chrome of their own and only the sliding gradient marks the
                selection. Geometry from 432:1668 — a 1311px panel with 12.5px
                side padding, 17px top/bottom and three equal 400px cards 43px
                apart. The cards are equal width in every state, so `flex-1` on
                each reproduces it at any container width. The 43px belongs to the
                divider slot (the rule sits in its middle), not to a flex gap: a gap
                would land on both sides of each rule and squeeze the cards to
                ~371px. Figma (681:1403) drops the rule on either side of the
                selected card, so it fades out as the highlight arrives.

                Side by side from lg only: three across a 768px tablet leaves
                ~206px of content per card, which crushes the two-line titles. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="mt-8 flex flex-col items-stretch gap-3 rounded-[12px] border-[0.5px] border-[rgba(0,34,61,0.24)] bg-white px-[12.5px] py-[17px] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.13)] lg:flex-row lg:items-stretch lg:gap-0"
            >
                {SERVICE_CATEGORIES.map((category, index) => (
                    <Fragment key={category.id}>
                        {index > 0 ? (
                            // Figma's rule (419:453, "Line 12") is 0.5px #8695a7 and
                            // 158px long, centred on the 160px card. A 1px rule scaled
                            // to half width reproduces it as a half-tone hairline. A
                            // plain w-[0.5px] does not: Chrome rounds it up to a
                            // full-strength 1px rule, which reads too dark and thick.
                            <div aria-hidden className="hidden w-[43px] shrink-0 items-center justify-center lg:flex">
                                <div
                                    className={`h-[158px] w-px origin-center scale-x-50 bg-[#8695a7] transition-opacity duration-[250ms] delay-[60ms] ${
                                        category.id === activeCategoryId ||
                                        SERVICE_CATEGORIES[index - 1].id === activeCategoryId
                                            ? "opacity-0"
                                            : "opacity-100"
                                    }`}
                                />
                            </div>
                        ) : null}
                        <ServiceCategoryCard
                            category={category}
                            isActive={category.id === activeCategoryId}
                            onSelect={() => onSelectCategory(category.id)}
                        />
                    </Fragment>
                ))}
            </motion.div>
        </section>
    );
}
