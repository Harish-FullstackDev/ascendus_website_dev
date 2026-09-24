"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import arrowRight from "@/assets/Services/icons/arrow-right-long-16.svg";

// The right-hand half of the service explorer: copy column plus photograph.
// Figma draws it as one 850x620 bordered card split 475/374; below `lg` the two
// halves stack so the photo keeps a usable aspect ratio instead of becoming a
// sliver.
export default function ServiceDetailPanel({ service }) {
    return (
        <div className="flex w-full overflow-hidden rounded-[24px] border border-[#c9d0d8] max-lg:flex-col lg:h-[620px]">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col gap-[17px] bg-white p-6 lg:w-[475px] lg:shrink-0"
                >
                    <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                        {service.eyebrow}
                    </p>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                            {service.heading.map((line, index) => (
                                <span key={line} className="block">
                                    {line}
                                    {index < service.heading.length - 1 ? " " : null}
                                </span>
                            ))}
                        </h3>

                        <div className="flex flex-col gap-3">
                            <p className="max-w-[283px] text-sm font-normal leading-[1.5] text-[#0061af] sm:text-base">
                                {service.tagline}
                            </p>

                            <p className="max-w-[412px] pt-[2px] text-sm font-normal leading-[1.5] text-[#415773] sm:text-base">
                                {service.body}
                            </p>
                        </div>
                    </div>

                    {/* Figma (416:144) does NOT pin this block to the panel's
                        bottom: it follows the copy on the same 17px rhythm as
                        everything above, leaving ~37px of slack underneath. The
                        first pass used `mt-auto`, which drove the button to the
                        very bottom edge and opened a hole above the icons. */}
                    <div className="flex flex-col gap-[47px]">
                        {/* 0.5px #00223d hairlines between the three outcomes, per
                            Figma's Line 6/7 — drawn with divide-* so they vanish
                            cleanly if the row ever wraps. */}
                        <ul className="flex w-full max-w-[372px] items-stretch justify-between divide-x-[0.5px] divide-[#00223d]">
                            {service.outcomes.map((outcome) => (
                                <li
                                    key={outcome.label}
                                    className="flex flex-1 flex-col items-center gap-[25px] px-2 text-center first:pl-0 last:pr-0"
                                >
                                    <Image src={outcome.icon} alt="" className="size-12" />
                                    {/* Non-breaking hyphens: the browser happily
                                        breaks a line straight after a "-", turning
                                        "Enable Real-Time Insights" into "Enable
                                        Real-" / "Time Insights". Labels vary per
                                        category, so no fixed column width fixes
                                        this — stopping the break does. */}
                                    <span className="text-[14px] font-normal leading-[1.4] text-[#1e293b]">
                                        {outcome.label.replace(/-/g, "‑")}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-3">
                            {service.ctaEyebrow && (
                                <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                                    {service.ctaEyebrow}
                                </p>
                            )}

                            <Link
                                href={service.ctaHref}
                                className="group inline-flex h-12 w-fit items-center gap-2.5 rounded-[8px] bg-[#0061af] px-7 text-sm font-normal leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192] sm:text-base"
                            >
                                {service.ctaLabel}
                                <Image
                                    src={arrowRight}
                                    alt=""
                                    className="h-4 w-[21px] transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="relative min-h-[240px] flex-1 lg:min-h-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 374px, 100vw"
                    className="object-cover"
                />
            </div>
        </div>
    );
}
