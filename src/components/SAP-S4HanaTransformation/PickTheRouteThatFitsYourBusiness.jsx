"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import iconGreenfield from "@/assets/SAP-S4HanaTransformation/icons/greenfield-48.svg";
import iconBrownfield from "@/assets/SAP-S4HanaTransformation/icons/brownfield-32.svg";
import iconHybrid from "@/assets/SAP-S4HanaTransformation/icons/hybrid-32.svg";
import routesPattern from "@/assets/SAP-S4HanaTransformation/migration-routes-pattern.webp";

// Figma (828:1170) only writes out Greenfield. The three tiles on the right are
// the route picker — the raised one is the selected route — so Brownfield and
// Hybrid need copy of their own. Theirs is drafted to match the Greenfield
// entry's shape and is PENDING SIGN-OFF; replace it here once supplied.
const ROUTES = [
    {
        id: "greenfield",
        label: "Greenfield",
        icon: iconGreenfield,
        tile: "from-[#00794c] to-[#063d06]",
        points: ["Start fresh", "Simplify processes", "Adopt best practices"],
        description:
            "A new system built around how you want to operate, not how you operated ten years ago. Greenfield suits organisations ready to redesign processes, retire old customisation and set a clean foundation for growth.",
    },
    {
        id: "brownfield",
        label: "Brownfield",
        icon: iconBrownfield,
        tile: "from-[#9a6909] to-[#342303]",
        points: ["Keep your history", "Convert in place", "Protect business continuity"],
        description:
            "A system conversion that moves your existing ECC to S/4HANA with its data, configuration and history intact. Brownfield suits organisations that want a modern core quickly without redesigning every process at once.",
    },
    {
        id: "hybrid",
        label: "Hybrid",
        icon: iconHybrid,
        tile: "from-[#00587f] to-[#02364c]",
        points: ["Choose what moves", "Combine old and new", "Reduce migration risk"],
        description:
            "A selective transition that carries over the data and processes worth keeping and redesigns the rest. Hybrid suits organisations that want a clean start in some areas while preserving proven structures in others.",
    },
];

// Section 7 — dark band, full 64 on both edges. Figma (828:1170) lays the
// Ascendus mark across the band at 20% opacity: full width at its own 1440:303
// proportion, starting ~22% down.
export default function PickTheRouteThatFitsYourBusiness() {
    const [activeId, setActiveId] = useState(ROUTES[0].id);
    const active = ROUTES.find((route) => route.id === activeId);

    return (
        <section
            id="migration-routes"
            className="relative w-full scroll-mt-24 overflow-hidden bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-16"
        >
            <Image
                src={routesPattern}
                alt=""
                aria-hidden
                sizes="100vw"
                className="pointer-events-none absolute left-0 top-[22%] h-auto w-full opacity-20"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-16"
            >
                {/* Figma parks the description 392px after the 497px heading
                    column rather than against the right edge; below 1400px
                    that no longer fits, so it falls back to the right edge.
                    The two margins cover disjoint ranges on purpose — Tailwind
                    emits arbitrary min-[…] variants before lg:, so an lg:
                    utility would always win over a min-[1400px]: one. */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                    <div className="flex flex-col gap-3 lg:w-[497px] lg:shrink-0">
                        <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                            Migration &amp; Conversion
                        </p>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-white">
                            Pick the Route That Fits Your Business, Not Ours
                        </h2>
                    </div>
                    <p className="text-sm font-normal capitalize leading-[1.5] text-white sm:text-base lg:w-[368px] lg:shrink-0 lg:max-[1399px]:ml-auto min-[1400px]:ml-[360px]">
                        We assess your landscape first, then recommend the path that balances speed, risk and
                        long-term value.
                    </p>
                </div>

                <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                    <div className="min-h-[219px] lg:w-[669px]" aria-live="polite">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={active.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="flex flex-col"
                            >
                                <h3 className="text-[24px] font-medium capitalize leading-[1.2] text-white">
                                    {active.label}
                                </h3>
                                <ul className="flex flex-col gap-2 pt-6">
                                    {active.points.map((point) => (
                                        <li key={point} className="flex items-center gap-2">
                                            <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-white" />
                                            <span className="text-[18px] font-medium leading-[1.2] text-white">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="max-w-[476px] pl-2 pt-6 text-[14px] font-normal leading-[1.4] text-white">
                                    {active.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Route picker. The selected tile rises 21px above the white
                        bar and gains Figma's drop shadow; the others sit in it. */}
                    <div className="flex h-[200px] w-full max-w-[300px] shrink-0 items-center justify-center rounded-[24px] bg-[#d5e2f2] xl:mr-[126px]">
                        <div
                            role="tablist"
                            aria-label="Migration routes"
                            className="flex h-[85px] w-[243px] items-start gap-1.5 rounded-[12px] bg-white px-[7px] pt-[7px]"
                        >
                            {ROUTES.map((route) => {
                                const isActive = route.id === activeId;
                                return (
                                    <button
                                        key={route.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-label={route.label}
                                        onClick={() => setActiveId(route.id)}
                                        className={`flex size-[72px] shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-gradient-to-b ${route.tile} transition-[translate,filter] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                                            isActive
                                                ? "-translate-y-[21px] drop-shadow-[3px_7px_5.65px_rgba(0,0,0,0.25)]"
                                                : "hover:-translate-y-1"
                                        }`}
                                    >
                                        <Image src={route.icon} alt="" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
