"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import officePhoto from "@/assets/About-us/office.jpg";

const STATS = [
    { value: "5+", label: ["Years of", "Industry Experience"] },
    { value: "200+", label: ["Consultants", "Specialists"] },
    { value: "100%", label: ["Client", "Satisfaction"] },
];

// Section 2 — "Who We Are". Figma (495:49) centres a 399px copy column
// against the 391px photo and runs the column justify-between, so the stats
// sit on its bottom edge with open space above them rather than hugging the
// description. Top pad is the full 64 under the hero; bottom is 32 because
// "Our Purpose" below is also white.
export default function AboutUsIntro() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:pb-8 sm:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
            >
                <div className="flex w-full flex-col gap-10 lg:min-h-[399px] lg:max-w-[567px] lg:justify-between">
                    <div className="flex flex-col gap-6">
                        <p className="text-[14px] font-medium uppercase tracking-[0.7px] text-[#0061af] leading-4">
                            Who We Are
                        </p>

                        <div className="flex flex-col gap-3">
                            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                                Built on Expertise.
                                <br />
                                Driven by People.
                            </h2>

                            <p className="pt-[2px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                                Ascendus is an enterprise technology and business transformation company, established in
                                Riyadh, helping organizations simplify complexity and create lasting business value
                                through the right blend of people, processes and technology.
                            </p>
                        </div>
                    </div>

                    {/* Figma spreads the three stats across a 493px row with
                        justify-between. Each value is left-aligned to its
                        column while the two-line label is centred under it. */}
                    <div className="flex w-full max-w-[493px] items-start justify-between">
                        {/* Dividers are plain 1px rules, not the rotated 70x1 SVG export:
                    rotating that image lands it on a half pixel and Chrome paints
                    nothing. */}
                {STATS.map((stat, index) => (
                            <Fragment key={stat.value}>
                                {index > 0 ? (
                                    <div aria-hidden className="h-[70px] w-px shrink-0 bg-black" />
                                ) : null}
                                <div className="flex flex-col items-center gap-[10px]">
                                    <p className="self-stretch text-left text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                                        {stat.value}
                                    </p>
                                    <p className="whitespace-nowrap text-left text-[11px] leading-[15.13px] text-[#64748b]">
                                        {stat.label[0]}
                                        <br />
                                        {stat.label[1]}
                                    </p>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>

                <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] sm:h-[391px] lg:max-w-[612px]">
                    <Image src={officePhoto} alt="" fill className="object-cover" />
                </div>
            </motion.div>
        </section>
    );
}
