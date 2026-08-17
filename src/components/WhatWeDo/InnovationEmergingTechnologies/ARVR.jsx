"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import blockchainPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/new/ARVR.jpg";

const ITEMS = [
    { title: "Extended Reality (AR/VR)", desc: "Define where blockchain genuinely adds value across your business, from settlement to provenance tracking." },
    { title: "Smart Enterprise Solutions", desc: "Integrated combinations of emerging technology matched to specific operational challenges." },
    { title: "Supply Chain Traceability", desc: "Track goods and materials end-to-end on an immutable ledger that every partner can trust." },
    { title: "Blockchain", desc: "Issue, custody, and manage tokenized assets with enterprise-grade controls." },
    { title: "Quantum Readiness", desc: "Give users and partners a portable, verifiable digital identity that reduces fraud and friction." },
];

export default function ARVR() {
    // null = nothing hovered/focused. This is the key fix: the old code
    // defaulted to `1` and never had a path back to "no card active",
    // so the highlighted state could never turn off on mouse-out.
    const [hovered, setHovered] = useState(null);

    return (
        <section className="w-full pb-10 sm:pb-0 flex flex-col items-center gap-8 sm:gap-[62px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-6"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">AR/VR, Blockchain & Quantum Readiness</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Forward-looking technology applications for specialized use cases.
                </p>
            </motion.div>

            {/* Mobile: stacked list — the 5-column image banner has no room to breathe
                this narrow, so swap it for the same card-list pattern used by
                Cloud Migration on Cloud & Infrastructure. */}
            <div className="flex sm:hidden w-full flex-col gap-3 px-6">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-4 rounded-[10px] bg-[#f3f3f3] px-5 py-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0061af] text-sm font-medium text-white">
                            {index + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-black text-base font-medium">{item.title}</p>
                            <p className="text-[#3d3d4e] text-sm font-light leading-snug">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop / tablet: cards float over the bottom band of the hero image, full-bleed
                edge to edge. Aspect-locked to the source art (1280x682) so the hero keeps the
                same proportions at every viewport width, instead of the previous mismatched
                fixed heights (650px outer / 720px inner) that clipped the image inconsistently. */}
            <div className="relative hidden sm:block w-full aspect-[1280/682] min-h-[460px] overflow-hidden">
                <Image src={blockchainPhoto} alt="" fill className="object-cover" priority />

                {/* Card row sits at the same top/bottom offsets as the Cloud Migration frame
                    (244px / 138px of a 682px-tall frame => 35.8% / 20.2%), full-bleed
                    edge to edge with no side gutters. */}
                <div
                    className="absolute inset-x-0 top-[35.8%] bottom-[20.2%] flex"
                    onMouseLeave={() => setHovered(null)}
                >
                    {ITEMS.map((item, index) => {
                        const isActive = hovered === index;
                        return (
                            <div key={item.title} className="relative h-full flex-1">


                                <button
                                    type="button"
                                    onMouseEnter={() => setHovered(index)}
                                    onFocus={() => setHovered(index)}
                                    onBlur={() => setHovered(null)}
                                    className={`relative h-full w-full flex flex-col items-center justify-center text-center gap-3 px-4 lg:px-8 overflow-hidden transition-colors duration-300 ${isActive ? "bg-[#0061AF]/80" : "bg-white"
                                        }`}
                                >
                                    <p
                                        className={`relative z-10 text-lg lg:text-xl font-medium leading-tight ${isActive ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {item.title}
                                    </p>
                                    {isActive && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="relative z-10 text-white text-sm font-light leading-snug"
                                        >
                                            {item.desc}
                                        </motion.p>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
