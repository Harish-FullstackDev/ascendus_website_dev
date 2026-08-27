"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import greenfieldImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/migration-greenfield.jpg";
import brownfieldImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/migration-brownfield.jpg";
import bluefieldImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/migration-bluefield.jpg";

// Figma now has real photography per path plus a dedicated hover-state frame
// (desc + title) for each — content and the card's own proportions (282:368)
// are transcribed from those frames. The hover *interaction* itself follows
// EnterpriseDataFoundations.jsx (Data & Intelligence) rather than Figma's own
// literal hover frame (which swaps the whole card to a flat #1C5F85 panel) —
// per direct instruction to reuse that section's reveal effect.
const PATHS = [
    {
        title: "Greenfield",
        desc: "A clean S/4HANA build on SAP's standard processes. Fits organizations ready to leave heavy customization behind.",
        image: greenfieldImage,
    },
    {
        title: "Brownfield",
        desc: "Upgrade your existing ECC system in place, carrying configuration and data forward. Fits organizations where the current setup still works.",
        image: brownfieldImage,
    },
    {
        title: "Bluefield",
        desc: "Move select data, processes, and organizational units while redesigning the rest. Fits organizations that want a partial reset, not a full rebuild.",
        image: bluefieldImage,
    },
];

function IntroText() {
    return (
        <>
            <h2 className="text-[#10161d] text-2xl sm:text-[27px] font-medium">Choosing Your Migration Path</h2>
            <p className="text-[#4a5568] text-lg font-light leading-[1.4]">
                End-to-end migration from ECC to S/4HANA, planned around your compliance deadlines and cutover
                windows, not a generic timeline.
            </p>
        </>
    );
}

export default function ChoosingYourMigrationPath() {
    // Auto open/close: cycles the "active" (hover-revealed) card every few
    // seconds, pausing whenever the row is actually hovered/focused so manual
    // interaction always takes over — same behavior as EnterpriseDataFoundations.
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % PATHS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-16 sm:pt-[64px] sm:pb-[64px]">
            {/* Mobile: intro stacked above, then simple stacked cards with
                description always visible — no hover on touch. Ported from
                EnterpriseDataFoundations' mobile treatment. */}
            <div className="flex sm:hidden flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2"
                >
                    <IntroText />
                </motion.div>
                <div className="flex flex-col gap-4">
                    {PATHS.map((path, index) => (
                        <motion.div
                            key={path.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="relative w-full h-[220px] overflow-hidden"
                        >
                            <Image src={path.image} alt="" fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/60" />
                            <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                                <p className="text-white text-2xl font-medium">{path.title}</p>
                                <p className="text-white/85 text-base font-light leading-[1.4]">{path.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Desktop: intro sits inline as the first column of the same row
                as the cards (Figma: 234px column beside three 282px columns —
                not stacked above, not an even quarter-split). Cards are a
                hover-reveal grid: image stays put, overlay deepens, and the
                description slides in under the title on hover/auto-cycle. */}
            <div
                className="hidden sm:flex items-start gap-6"
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 flex-[234_0_0]"
                >
                    <IntroText />
                </motion.div>

                {PATHS.map((path, index) => {
                    const isActive = active === index;
                    return (
                        <motion.div
                            key={path.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            onMouseEnter={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            onFocus={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            className="relative flex-[282_0_0] aspect-[282/368] overflow-hidden"
                        >
                            <Image
                                src={path.image}
                                alt=""
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/70" : "bg-black/20"
                                    }`}
                            />
                            <div className="absolute inset-0 flex flex-col justify-start p-6">
                                <p
                                    className={`text-2xl sm:text-[28px] font-medium leading-[1.4] transition-colors duration-500 ${isActive ? "text-white" : "text-black"
                                        }`}
                                >
                                    {path.title}
                                </p>
                            </div>
                            <div
                                className={`absolute inset-x-0 bottom-0 px-6 pb-6 grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-white/85 text-lg font-light leading-[1.4] pt-2">{path.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
