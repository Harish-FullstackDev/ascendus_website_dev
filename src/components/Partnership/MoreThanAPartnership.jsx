"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import summitImage from "@/assets/Partnership/Team_Climbing_Mountain.webp";
import checkIcon from "@/assets/Partnership/icons/check.svg";
import arrowRightBlueIcon from "@/assets/Partnership/icons/arrow-right-blue.svg";

const BENEFITS = [
    "Access to a growing client base and new markets",
    "Joint innovation and co-development opportunities",
    "Strong enablement and support programs",
    "Long-term, mutually beneficial growth",
];

const STATS = [
    { label: "Enterprise Clients", value: "70+" },
    { label: "Presence", value: "Global" },
    { label: "Delivery Track Record", value: "Proven" },
];

// White section between the tinted "Let's Build What's Next" band and the white
// "Trusted by Industry Leaders" block: full 64px on top where the background
// changes, 32px at the bottom where it does not — the other 32px is paid by the
// section below.
export default function MoreThanAPartnership() {
    return (
        <section
            id="why-partner-with-us"
            className="w-full scroll-mt-24 bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-8"
        >
            {/* Figma 232:393 — a 473px text column and a 717px banner sitting at
                either end of the 1327px row, which leaves the gutter as whatever
                is between them. Carried as two capped tracks pushed apart so the
                gutter closes first as the viewport narrows. */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex w-full flex-col items-start gap-3 lg:w-[473px] lg:shrink-0"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                        Why Partner With Us
                    </p>
                    <h2 className="text-2xl sm:text-[32px] font-semibold text-[#0f172a] leading-[1.2]">
                        More Than a Partnership.{" "}
                        {/* Figma sets this heading on two lines, breaking after
                            the first sentence. Forced only from lg up, where the
                            column is wide enough for the natural wrap to land in
                            the wrong place. */}
                        <br className="hidden lg:inline" />
                        A Shared Journey.
                    </h2>
                    <p className="text-base font-normal text-[#475569] leading-[1.5]">
                        We go beyond transactions. Our partnerships are built on trust, transparency and a shared
                        commitment to innovation and customer success.
                    </p>

                    <ul className="flex flex-col gap-[14px] pt-3 pb-5">
                        {BENEFITS.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2.5">
                                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#7fbe3f]">
                                    <Image src={checkIcon} alt="" className="size-2.5" />
                                </span>
                                <span className="text-sm font-normal text-[#334155] leading-[1.4]">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/contact-us/"
                        className="group inline-flex items-center gap-2 rounded-[8px] border border-[#0061af] px-[13px] py-[9px] text-base font-normal text-[#0061af] transition-colors duration-300 hover:bg-[#0061af] hover:text-white"
                    >
                        Learn More
                        <Image
                            src={arrowRightBlueIcon}
                            alt=""
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:brightness-0 group-hover:invert"
                        />
                    </Link>
                </motion.div>

                {/* 717x380 in Figma — carried as a ratio so the panel keeps its
                    proportion instead of a fixed height. min-h stops it collapsing
                    on narrow screens where the stats still need room. */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative aspect-[717/380] min-h-[280px] w-full overflow-hidden rounded-[12px] bg-[#091b34] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] lg:max-w-[717px]"
                >
                    <Image src={summitImage} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />

                    {/* Left-to-right wash so the right-hand stats stay legible
                        over the photo. */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,24,51,0)] via-[rgba(6,24,51,0.4)] to-[rgba(7,25,50,0.95)]" />

                    {/* Figma 232:435 — a 320px column padded 40px all round, with
                        28px between each stat. */}
                    <div className="absolute inset-y-0 right-0 flex max-w-[320px] flex-col items-end justify-center gap-7 p-6 sm:p-10 text-right">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-0.5">
                                <span className="text-2xl sm:text-[32px] font-semibold text-white leading-[1.2]">
                                    {stat.value}
                                </span>
                                <span className="text-sm sm:text-base font-normal text-[#cbd5e1] leading-[1.5]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
