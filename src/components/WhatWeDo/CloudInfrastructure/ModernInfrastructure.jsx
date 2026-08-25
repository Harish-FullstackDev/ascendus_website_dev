"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import migrationBg from "@/assets/WhatWeDo/Cloud and Infrastructure/webp/Cloud_Modern_Infrastructure.webp";

const STEPS = [
    {
        title: "Cloud Consulting",
        desc: "Independent guidance on platform selection, architecture, and cost, grounded in your business priorities.",
    },
    {
        title: "Infrastructure Services",
        desc: "End-to-end management of the compute, network, and storage layers your enterprise systems depend on.",
    },
    {
        title: "DevSecOps",
        desc: "Security embedded into every stage of your development and deployment pipeline, not applied after the fact.",
    },
    {
        title: "Backup & Disaster Recovery",
        desc: "Recovery architectures tested against real failure scenarios, so downtime never becomes data loss",
    },
    {
        title: "Infrastructure Automation",
        desc: "Automated provisioning and configuration that cuts manual effort and reduces environment drift.",
    },
];

export default function ModernInfrastructure() {
    // First card is open by default; hovering another card takes over,
    // and the last-hovered card stays open (no reset back to null on
    // mouse-out) so a card is always in the active state. When the user
    // isn't interacting, it auto-advances to the next card every few
    // seconds, pausing while the row is hovered/focused.
    const [hovered, setHovered] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setHovered((prev) => (prev + 1) % STEPS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full pb-10 sm:pb-0 flex flex-col items-center gap-8 sm:gap-[62px]">

            {/* Mobile: stacked list — the 5-column image banner has no room to breathe
                this narrow, so swap it for the same card-list pattern used by
                Change Management on Business Advisory. */}
            <div className="flex sm:hidden w-full flex-col gap-3 px-6">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-4 rounded-[10px] bg-[#f3f3f3] px-5 py-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A3A52] text-sm font-medium text-white">
                            {index + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#2E3033] text-base font-medium">{step.title}</p>
                            <p className="text-[#55595E] text-sm font-light ">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop / tablet: pixel-accurate Figma composition — cards float over the
                bottom band of the hero image, full-bleed edge to edge. Aspect-locked to
                the source art (1280x682) so the hero keeps the same proportions as Figma
                at every viewport width, instead of a fixed px height that crops it differently
                per breakpoint. */}
            <div className="relative hidden sm:block w-full aspect-[1280/682] min-h-[460px] overflow-hidden">
                <Image src={migrationBg} alt="" fill className="object-cover" priority />
                <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-center text-white z-20 px-4 sm:px-0">
                    <h2 className="text-xl sm:text-[28px] font-medium">
                        Modern Infrastructure & Security Operations
                    </h2>

                    <p className="mt-2 sm:mt-2 max-w-3xl text-sm sm:text-lg ">
                        Extended technical services including DevSecOps, automation, and recovery
                    </p>
                </div>

                {/* Card row sits at the same top/bottom offsets as the Figma frame
                    (244px / 138px of a 682px-tall frame => 35.8% / 20.2%), full-bleed
                    edge to edge with no side gutters. */}
                <div
                    className="absolute inset-x-0 top-[35.8%] bottom-[20.2%] flex"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {STEPS.map((step, index) => {
                        const isActive = hovered === index;
                        return (
                            <div key={step.title} className="relative h-full flex-1">
                                {/* Number badge: floats above the card, straddling the hero/card boundary */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.7 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute -top-[30px] left-1/2 z-20 flex size-[60px] -translate-x-1/2 items-center justify-center bg-white"
                                        >
                                            <span className="text-black text-[32px] font-light leading-none">
                                                {index + 1}
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <motion.button
                                    layout
                                    transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                                    type="button"
                                    onMouseEnter={() => setHovered(index)}
                                    onFocus={() => {
                                        setIsPaused(true);
                                        setHovered(index);
                                    }}
                                    onBlur={() => setIsPaused(false)}
                                    className={`relative h-full w-full flex flex-col items-center justify-center text-center gap-3 px-4 lg:px-8 overflow-hidden transition-colors duration-500 ease-in-out ${isActive ? "bg-[#0A3A52]" : "bg-white"
                                        }`}
                                >
                                    <motion.p
                                        layout
                                        transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                                        className={`relative z-10 text-lg lg:text-xl font-medium leading-tight transition-colors duration-500 ease-in-out ${isActive ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {step.title}
                                    </motion.p>
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.p
                                                layout
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="relative z-10 text-white text-sm font-light leading-snug"
                                            >
                                                {step.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

