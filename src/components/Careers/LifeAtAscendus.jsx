"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import imgLife from "@/assets/Careers/life-at-ascendus.webp";
import imgTeams from "@/assets/Careers/collaborative-teams.webp";
import imgLearning from "@/assets/Careers/learning-development.webp";
import imgGlobal from "@/assets/Careers/global-opportunities.webp";
import iconArrow from "@/assets/Careers/icons/arrow-right-21.svg";

// Each tile carries its own bottom scrim in Figma (602:2144–2151), so the
// gradient is per tile, not shared.
const ROWS = [
    {
        // Figma: 224 + 600 with a 16px gap.
        className: "sm:grid-cols-[224fr_600fr] sm:gap-4",
        tiles: [
            { image: imgLife, label: "Life at Ascendus", scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.69) 87.46%)", padding: "px-5" },
            { image: imgTeams, label: "Collaborative Teams", labelWidth: "max-w-[232px]", scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.63) 99.38%)", padding: "px-6" },
        ],
    },
    {
        // Figma: 592 + 224 with a 24px gap — the designer used a wider gap on
        // this row than the one above it, kept as drawn.
        className: "sm:grid-cols-[592fr_224fr] sm:gap-6",
        tiles: [
            { image: imgLearning, label: "Learning & Development", scrim: "linear-gradient(to bottom, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.66) 100%)", padding: "px-5" },
            { image: imgGlobal, label: "Global Opportunities", scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)", padding: "px-5" },
        ],
    },
];

// Section 2 — white band under the hero (full 64 top) with the white Open
// Positions section below it (32 bottom).
export default function LifeAtAscendus() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:pb-8 sm:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-10 xl:flex-row xl:items-center xl:justify-between xl:gap-[26px]"
            >
                <div className="flex w-full flex-col gap-10 lg:max-w-[446px] xl:w-[446px] xl:shrink-0 xl:gap-[34px]">
                    <div className="flex flex-col gap-6">
                        <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                            Life at Ascendus
                        </p>

                        <div className="flex flex-col gap-3">
                            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                                A Place to Grow, Belong
                                <br className="hidden sm:block" /> and Do Meaningful Work.
                            </h2>

                            <p className="pt-[2px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                                We foster a collaborative, inclusive and high-performance culture where people are
                                empowered to learn, innovate and make a difference.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/contact-us/"
                        className="group inline-flex h-12 w-fit items-center gap-[10px] rounded-[8px] bg-[#0061af] px-7 text-base font-normal capitalize leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192]"
                    >
                        Talk to Our SAP Experts
                        <Image
                            src={iconArrow}
                            alt=""
                            className="h-4 w-[21px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="flex w-full flex-col gap-4 xl:max-w-[840px]">
                    {ROWS.map((row) => (
                        <div key={row.tiles[0].label} className={`grid grid-cols-1 gap-4 ${row.className}`}>
                            {row.tiles.map((tile) => (
                                <div
                                    key={tile.label}
                                    className={`relative flex h-[200px] items-end overflow-hidden rounded-[12px] bg-[#625353] py-8 sm:h-[240px] ${tile.padding}`}
                                >
                                    <Image
                                        src={tile.image}
                                        alt=""
                                        fill
                                        sizes="(min-width: 1024px) 600px, 100vw"
                                        className="object-cover"
                                    />
                                    <div aria-hidden className="absolute inset-0" style={{ backgroundImage: tile.scrim }} />
                                    <p className={`relative text-2xl font-medium capitalize leading-[1.2] text-white ${tile.labelWidth ?? "max-w-[184px]"}`}>
                                        {tile.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
