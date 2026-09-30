"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import iconDecisions from "@/assets/SAP-S4HanaTransformation/icons/decisions-in-real-time-20.svg";
import iconProcesses from "@/assets/SAP-S4HanaTransformation/icons/processes-that-run-themselves-20.svg";
import iconLowerCost from "@/assets/SAP-S4HanaTransformation/icons/lower-cost-to-run-20.svg";
import iconRoomToGrow from "@/assets/SAP-S4HanaTransformation/icons/room-to-grow-17.svg";
import iconButtonArrow from "@/assets/SAP-S4HanaTransformation/icons/arrow-right-16.svg";

const BENEFITS = [
    {
        icon: iconDecisions,
        title: "Decisions in real time",
        description: "See what is happening across the enterprise as it happens, not at month end.",
    },
    {
        icon: iconProcesses,
        title: "Processes that run themselves",
        description: "Automate routine steps and put embedded intelligence where your teams already work.",
    },
    {
        icon: iconLowerCost,
        title: "Lower cost to run",
        description: "Adopt standard processes and stop paying to maintain custom code.",
    },
    {
        icon: iconRoomToGrow,
        title: "Room to grow",
        description: "Add new capabilities through an extensible architecture without disturbing the core.",
    },
];

// Figma (828:960) draws card 2 dark only to show the hover state — every card
// rests light and turns #00223d on hover. The glyphs are the same #415773 on
// both the resting #d5e2f2 tile and the hovered #f8f8f8 one, so only the tile
// colour changes. Each glyph keeps its own exported size (they differ).
function BenefitCard({ benefit }) {
    return (
        <div className="group flex min-h-[197px] flex-col items-start rounded-[16px] border border-[rgba(226,232,240,0.8)] bg-[#f8f8f8] p-[25px] transition-colors duration-300 ease-out hover:bg-[#00223d]">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-[#d5e2f2] transition-colors duration-300 ease-out group-hover:bg-[#f8f8f8]">
                <Image src={benefit.icon} alt="" />
            </div>

            <h3 className="mt-5 text-[18px] font-medium leading-[1.2] text-[#0f172a] transition-colors duration-300 ease-out group-hover:text-white">
                {benefit.title}
            </h3>
            <p className="mt-2 text-[14px] font-normal leading-[1.4] text-[#475569] transition-colors duration-300 ease-out group-hover:text-[#d5e2f2]">
                {benefit.description}
            </p>
        </div>
    );
}

// Section 2 — #f8f8f8 band between the hero and the #f1f3f5 challenges band,
// so the full 64 on both edges.
export default function OneLiveViewOfTheBusiness() {
    return (
        <section className="w-full bg-[#f8f8f8] px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-10 xl:flex-row xl:items-start xl:gap-8"
            >
                <div className="flex flex-col items-start gap-8 xl:w-[495px] xl:shrink-0">
                    <div className="flex flex-col gap-3">
                        <p className="flex h-8 items-center text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                            Why S/4HANA Transformation
                        </p>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-[#0e2b4b]">
                            One Live View of the Business, Built for What Comes Next
                        </h2>
                        <p className="text-sm font-normal capitalize leading-[1.5] text-[#0e2b4b] sm:text-base">
                            S/4HANA replaces years of workarounds with a single modern core. Finance, supply chain,
                            procurement and operations run on the same live data, so your teams spend less time
                            reconciling reports and more time acting on them.
                        </p>
                    </div>

                    <Link
                        href="#implementation-approach"
                        className="group inline-flex h-10 items-center gap-2 rounded-[8px] border border-[#0061af] bg-[#0061af] px-[13px] text-base font-normal capitalize leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192]"
                    >
                        See How We Approach It
                        <Image
                            src={iconButtonArrow}
                            alt=""
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 xl:flex-1">
                    {BENEFITS.map((benefit) => (
                        <BenefitCard key={benefit.title} benefit={benefit} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
