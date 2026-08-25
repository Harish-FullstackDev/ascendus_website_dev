"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import hybridPhoto from "@/assets/WhatWeDo/Cloud and Infrastructure/Section5_image.svg";
import arrowIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Section2_RightArrow.svg";
import linkIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Vector.svg";

const ITEMS = [
    {
        title: "Hybrid Cloud Architecture",
        desc: "Design environments that combine private and public cloud resources into one cohesive platform.",
    },
    {
        title: "Workload Optimization",
        desc: "Place every workload where it performs best, balancing cost, compliance, and latency.",
    },
    {
        title: "Cloud Connectivity",
        desc: "Establish secure, high-throughput links between on-premise systems and cloud environments.",
    },
    {
        title: "Data Residency & Compliance",
        desc: "Keep sensitive workloads on-premise while extending flexibility to the cloud where it counts.",
    },
    {
        title: "Unified Management",
        desc: "Monitor, govern, and operate hybrid environments from a single control plane.",
    },
];

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

function LinkArrow({ light }) {
    return (
        <span
            className={`flex items-center justify-center size-7 rounded-full border ${
                light ? "border-white/40" : "border-[#6c6c6c]/60"
            }`}
        >
            <Image src={linkIcon} alt="" width={11} height={11} className={light ? "invert" : ""} />
        </span>
    );
}

export default function HybridCloud() {
    const [[index, direction], setPage] = useState([0, 1]);
    const maxIndex = ITEMS.length - 1;
    const active = ITEMS[index];
    const next = ITEMS[index + 1] ?? ITEMS[0];

    const goTo = (nextIndex, dir) => setPage([Math.max(0, Math.min(maxIndex, nextIndex)), dir]);

    return (
        <section className="w-full bg-[#f2f2f2] py-10 sm:py-16 px-6 sm:px-[40px] flex flex-col items-center gap-10 sm:gap-[62px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] text-center"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Hybrid Cloud</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Blend private, public, and on-premise infrastructure into one unified, seamlessly orchestrated
                    environment.
                </p>
            </motion.div>

            <div className="relative max-w-[1220px] w-full h-[520px] sm:h-[592px] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 bg-[#5c5c5c]">
                    <Image src={hybridPhoto} alt="" fill className="object-cover" />
                </div>

                <div className="absolute inset-x-4 sm:inset-x-auto sm:left-[25%] top-1/2 -translate-y-1/2 flex flex-col sm:flex-row gap-4 sm:gap-[21px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-[21px]"
                        >
                            <div className="bg-[#0a2b3e] w-full sm:w-[380px] h-[280px] sm:h-[377px] p-6 sm:p-[27px] flex flex-col justify-between gap-4 text-white">
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    <p className="text-xl sm:text-2xl font-medium">{active.title}</p>
                                    <p className="text-[#ce9d9d] text-sm sm:text-base font-light leading-relaxed">
                                        {active.desc}
                                    </p>
                                </div>
                                <LinkArrow light />
                            </div>
                            <div className="hidden sm:flex bg-white w-full sm:w-[380px] h-[280px] sm:h-[377px] p-6 sm:p-[27px] flex-col justify-between gap-4 text-black">
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    <p className="text-xl sm:text-2xl font-medium">{next.title}</p>
                                    <p className="text-[#6c6c6c] text-sm sm:text-base font-light leading-relaxed">
                                        {next.desc}
                                    </p>
                                </div>
                                <LinkArrow />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute right-4 sm:right-0 bottom-4 sm:bottom-0 bg-white rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => goTo(index - 1, -1)}
                        disabled={index === 0}
                        className="flex items-center justify-center size-[26px] sm:size-[31px] shrink-0 transition-transform hover:scale-110 disabled:opacity-30"
                    >
                        <Image src={arrowIcon} alt="" width={24} height={24} className="-rotate-180" />
                    </button>
                    <div className="flex items-center gap-[10px]">
                        {ITEMS.map((item, dotIndex) => (
                            <button
                                key={item.title}
                                type="button"
                                aria-label={`Go to slide ${dotIndex + 1}`}
                                onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                                className={`size-[8px] rounded-full border-[0.5px] transition-colors ${
                                    dotIndex === index ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-black"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => goTo(index + 1, 1)}
                        disabled={index === maxIndex}
                        className="flex items-center justify-center size-[26px] sm:size-[31px] shrink-0 transition-transform hover:scale-110 disabled:opacity-30"
                    >
                        <Image src={arrowIcon} alt="" width={24} height={24} className="rotate-0" />
                    </button>
                </div>
            </div>
        </section>
    );
}
