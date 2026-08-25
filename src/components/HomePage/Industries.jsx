"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import industryBgImg from "@/assets/Ascendus/images/data-center-corridor.png";

const INDUSTRIES = [
    { title: "Manufacturing" },
    {
        title: "Retail & Distribution",
        desc: "Connecting inventory, logistics, and customer experience across every channel.",
        tall: true,
    },
    { title: "Government & Public Sector" },
    { title: "Financial Services" },
];

export default function Industries() {
    return (
        // Top half of the 32/32 split from Hiring above; bottom is full 64 because
        // the next section (How We Work) is a full-bleed image band that contributes 0.
        <section className="w-full bg-white pt-8 pb-10 sm:pt-8 sm:pb-16 px-6 sm:px-[64px]">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-medium">
                            Industry-Specific Solutions
                        </h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.4]">
                            Built for Your Industry, Not Just Enterprise in General
                        </p>
                    </div>
                    <Link
                        href="/who-we-are"
                        className="shrink-0 rounded-[54px] border border-[#2d8ec5] px-8 py-3 text-lg font-light text-[#2E3033] text-center transition-colors hover:bg-[#2d8ec5] hover:text-white whitespace-nowrap"
                    >
                        Find Your Industry Solution
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
                >
                    {INDUSTRIES.map((ind) => (
                        <div
                            key={ind.title}
                            className={`group relative overflow-hidden flex flex-col justify-end p-6 sm:p-8 ${ind.tall ? "aspect-[280/407]" : "aspect-[280/289]"
                                }`}
                        >
                            <Image
                                src={industryBgImg}
                                alt=""
                                fill
                                className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                            <div className="relative z-10">
                                <h3 className="text-white text-2xl font-medium leading-[1.4]">{ind.title}</h3>
                                {ind.desc && (
                                    <p className="text-white text-base font-light mt-2 leading-[1.4]">{ind.desc}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
