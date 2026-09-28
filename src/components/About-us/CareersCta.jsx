"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import bandBg from "@/assets/About-us/careers-cta-bg.jpg";
import iconCheck from "@/assets/About-us/icons/checkmark.svg";
import iconArrow from "@/assets/About-us/icons/arrow-right-careers.svg";

const PERKS = ["Meaningful Work", "Learning & Growth", "Collaborative Culture", "Real Impact"];

// Section 8 — careers teaser. Figma mirrors the meeting-room photo so the
// people sit on the right, then washes the left half to white for the copy.
export default function CareersCta() {
    return (
        <section className="relative w-full overflow-hidden border-t border-[#8695a7] bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <Image src={bandBg} alt="" fill className="-scale-x-100 object-cover" />
            <div
                aria-hidden
                className="absolute inset-0 max-lg:bg-white/90"
                style={{ backgroundImage: "linear-gradient(90deg, #fff 46.6%, rgba(255,255,255,0) 65.5%)" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex w-full flex-col gap-8 lg:w-[966px] lg:flex-row lg:gap-[31px]"
            >
                <div className="flex flex-col gap-3 lg:w-[250px] lg:shrink-0">
                    <p className="text-[18px] font-semibold uppercase leading-[1.2] tracking-[1.8px] text-[#0061af]">
                        Careers
                    </p>

                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium capitalize leading-[1.2] text-[#0f172a]">
                        Build Your Future With Us.
                    </h2>
                </div>

                <div aria-hidden className="hidden w-px self-stretch bg-[#0e2b4b]/60 lg:block" />

                <div className="flex flex-1 flex-col gap-3">
                    <p className="max-w-[403px] pt-1 text-sm font-normal leading-[1.5] text-[#415773] sm:text-base">
                        Be part of a team that values curiosity, collaboration and continuous growth.
                    </p>

                    <ul className="flex flex-col gap-[14px] pb-5 pt-3">
                        {PERKS.map((perk) => (
                            <li key={perk} className="flex items-start gap-[10px]">
                                <span className="mt-[2px] flex size-4 shrink-0 items-center justify-center rounded-full bg-[#7fbe3f]">
                                    <Image src={iconCheck} alt="" className="size-[10px]" />
                                </span>
                                <span className="text-[14px] leading-[1.4] text-[#415773]">{perk}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/careers/"
                        className="group inline-flex h-10 w-fit items-center gap-2 rounded-[8px] border border-[#0061af] bg-[#0061af] px-[13px] text-sm font-normal uppercase leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192] sm:text-base"
                    >
                        View Open Positions
                        <Image
                            src={iconArrow}
                            alt=""
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
