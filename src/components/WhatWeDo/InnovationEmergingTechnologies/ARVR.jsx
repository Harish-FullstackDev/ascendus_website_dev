"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import blockchainPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/webp/Innovation_AR_VR.webp";

const ITEMS = [
    { title: "Extended Reality (AR/VR)", desc: "Define where blockchain genuinely adds value across your business, from settlement to provenance tracking." },
    { title: "Smart Enterprise Solutions", desc: "Integrated combinations of emerging technology matched to specific operational challenges." },
    { title: "Supply Chain Traceability", desc: "Track goods and materials end-to-end on an immutable ledger that every partner can trust." },
    { title: "Blockchain", desc: "Issue, custody, and manage tokenized assets with enterprise-grade controls." },
    { title: "Quantum Readiness", desc: "Give users and partners a portable, verifiable digital identity that reduces fraud and friction." },
];

export default function ARVR() {
    // Manual hover/focus still drives `hovered` directly (kept nullable so
    // mouse-out/blur can turn the highlight off, same fix as before). Autoplay
    // layers on top: while nothing is being hovered/focused and the row itself
    // isn't hovered, it cycles the active card on its own; entering the row
    // pauses it, and it resumes cycling from wherever it left off on leave.
    const [hovered, setHovered] = useState(null);
    const [autoIndex, setAutoIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setAutoIndex((prev) => (prev + 1) % ITEMS.length);
        }, 3500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    const activeIndex = hovered !== null ? hovered : (isPaused ? null : autoIndex);

    return (
        <section className="w-full pt-10 sm:pt-8 pb-10 sm:pb-0 flex flex-col items-center gap-8 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-6"
            >
                <h2 className="text-[#2E3033] text-2xl font-semibold">AR/VR, Blockchain & Quantum Readiness</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Forward-looking technology applications for specialized use cases.
                </p>
            </motion.div>

            {/* Mobile: stacked list — the 5-column image banner has no room to breathe
                this narrow, so swap it for the same card-list pattern used by
                Cloud Migration on Cloud & Infrastructure. */}
            <div className="flex sm:hidden w-full flex-col gap-8 px-6">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-4 rounded-[10px] bg-[#f3f3f3] px-5 py-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00447A] text-sm font-semibold text-white">
                            {index + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#2E3033] text-base font-semibold">{item.title}</h2>
                            <p className="text-[#55595E] text-sm font-light leading-snug">{item.desc}</p>
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
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => {
                        setHovered(null);
                        setIsPaused(false);
                    }}
                >
                    {ITEMS.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div key={item.title} className="relative h-full flex-1">


                                <button
                                    type="button"
                                    onMouseEnter={() => setHovered(index)}
                                    onFocus={() => {
                                        setHovered(index);
                                        setIsPaused(true);
                                    }}
                                    onBlur={() => {
                                        setHovered(null);
                                        setIsPaused(false);
                                    }}
                                    className={`relative h-full w-full flex flex-col items-center justify-center text-center gap-3 px-4 lg:px-8 overflow-hidden transition-colors duration-300 ${isActive ? "bg-[#00447A]/80" : "bg-white"
                                        }`}
                                >
                                    <h2
                                        className={`relative z-10 text-lg lg:text-xl font-semibold leading-tight ${isActive ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {item.title}
                                    </h2>
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
