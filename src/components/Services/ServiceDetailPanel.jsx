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

                    {/* Figma pins the outcomes row and the CTA to the bottom of the
                        620px panel with space-between. `mt-auto` reproduces that at
                        desktop and simply follows the copy once the panel stacks. */}
                    <div className="mt-auto flex flex-col gap-10 pt-8">
                        <ul className="flex max-w-[323px] items-start justify-between gap-4">
                            {service.outcomes.map((outcome) => (
                                <li
                                    key={outcome.label}
                                    className="flex max-w-[96px] flex-col items-center gap-5 text-center"
                                >
                                    <Image src={outcome.icon} alt="" className="size-8" />
                                    <span className="text-[14px] font-normal leading-[1.4] text-[#1e293b]">
                                        {outcome.label}
                                    </span>
                                </li>
                            ))}
                        </ul>

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
