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
            {/* Figma splits the row 5/7 across a 12-column grid with a 48px
                gutter. */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-5 flex flex-col items-start"
                >
                    <p className="text-sm font-semibold uppercase tracking-[1.1px] text-[#0061af] leading-[16.5px]">
                        Why Partner With Us
                    </p>
                    <h2 className="mt-3 text-2xl sm:text-[32px] font-semibold  text-[#0f172a] leading-[42.5px]">
                        More Than a Partnership.{" "}
                        {/* Figma sets this heading on two lines, breaking after
                            the first sentence. Forced only from lg up, where the
                            column is wide enough for the natural wrap to land in
                            the wrong place. */}
                        <br className="hidden lg:inline" />
                        A Shared Journey.
                    </h2>
                    <p className="mt-3 text-base font-normal text-[#475569] leading-5">
                        We go beyond transactions. Our partnerships are built on trust, transparency and a shared
                        commitment to innovation and customer success.
                    </p>

                    <ul className="mt-6 flex flex-col gap-[14px]">
                        {BENEFITS.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2.5">
                                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#0061af]">
                                    <Image src={checkIcon} alt="" className="size-2.5" />
                                </span>
                                <span className="text-base font-medium text-[#334155] leading-5">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/contact-us/"
                        className="group mt-8 inline-flex items-center gap-2 rounded-[8px] border border-[#0061af] px-6 py-2.5 text-sm font-semibold text-[#0061af] transition-colors duration-300 hover:bg-[#0061af] hover:text-white"
                    >
                        Learn More
                        <Image
                            src={arrowRightBlueIcon}
                            alt=""
                            className="size-[14px] transition-transform duration-300 group-hover:translate-x-1 group-hover:brightness-0 group-hover:invert"
                        />
                    </Link>
                </motion.div>

                {/* 738x380 in Figma — carried as a ratio so the panel keeps its
                    proportion instead of a fixed height. min-h stops it collapsing
                    on narrow screens where the stats still need room. */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-7 relative aspect-[738/380] min-h-[280px] w-full overflow-hidden rounded-[12px] bg-[#091b34] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                >
                    <Image src={summitImage} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />

                    {/* Left-to-right wash so the right-hand stats stay legible
                        over the photo. */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,24,51,0)] via-[rgba(6,24,51,0.4)] to-[rgba(7,25,50,0.95)]" />

                    <div className="absolute inset-y-0 right-0 flex flex-col items-end justify-center gap-7 p-6 sm:p-10 text-right">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-0.5">
                                <span className="text-2xl sm:text-[32px] font-extrabold tracking-[-0.9px] text-white leading-tight sm:leading-10">
                                    {stat.value}
                                </span>
                                <span className="text-sm sm:text-base font-medium tracking-[0.3px] text-[#cbd5e1] leading-4">
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
