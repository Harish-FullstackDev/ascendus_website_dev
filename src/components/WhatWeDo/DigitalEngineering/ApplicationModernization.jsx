"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import cicdPhoto from "@/assets/WhatWeDo/Digital Engineering/Section9_CICD_Photo.jpg";

function ArrowIcon({ className }) {
    return (
        <svg viewBox="0 0 74 74" fill="none" className={className}>
            <path
                d="M37 61.4V12.3M18.4 30.7L37 12.3l18.6 18.4"
                stroke="currentColor"
                strokeWidth="4.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const ITEMS = [
    {
        title: "CI/CD Pipeline Development",
        desc: "Implement DevOps practices that streamline software delivery through automation, continuous integration, continuous deployment, and infrastructure as code.",
        tag: "",
    },
    {
        title: "Infrastructure as Code (IaC)",
        desc: "Provision and manage infrastructure through version-controlled code, enabling consistent, repeatable, and auditable environments.",
        tag: "",
    },
    {
        title: "Continuous Monitoring & Observability",
        desc: "Implement real-time monitoring, logging, and alerting pipelines that give teams full visibility into system health and performance.",
        tag: "",
    },
    {
        title: "Automated Testing & Quality Gates",
        desc: "Embed automated testing, security scanning, and quality gates directly into the pipeline to catch issues before they reach production.",
        tag: "",
    },
];

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

export default function ApplicationModernization() {
    const [[index, direction], setPage] = useState([0, 1]);
    const maxIndex = ITEMS.length - 2;
    const left = ITEMS[index];
    const right = ITEMS[index + 1];

    const goTo = (next, dir) => setPage([Math.max(0, Math.min(maxIndex, next)), dir]);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[0px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[93px] sm:px-[50px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Application Modernization</h2>
                <div className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    <p className="text-black">Automate, Deploy, and Scale with Confidence</p>
                    <p>
                        Implement DevOps practices that streamline software delivery through automation, continuous
                        integration, continuous deployment, and infrastructure as code.
                    </p>
                </div>
            </motion.div>

            <div className="max-w-screen mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    {/* Left slot: photo with floating navy content card */}
                    <div className="relative w-full lg:w-[59.3%] h-[420px] sm:h-[520px] lg:h-auto lg:aspect-[759/771] shrink-0 overflow-hidden bg-[#141414]">
                        <Image src={cicdPhoto} alt="" fill className="object-cover" />
                        <div className="absolute left-[6%] right-[6%] top-[16%] bottom-[8%] sm:left-[36%] sm:right-[9%] sm:top-[26%] sm:bottom-[17%] bg-[#041f2f] px-6 sm:px-[44px] py-6 sm:py-[32px] flex items-center overflow-hidden">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={index}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="flex flex-col gap-3 sm:gap-[29px] text-white"
                                >
                                    <p className="text-lg sm:text-2xl font-normal">{left.title}</p>
                                    <p className="text-sm sm:text-lg font-light">{left.desc}</p>
                                    <p className="text-white/60 text-sm sm:text-lg font-light">{left.tag}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right slot: flat panel — intentionally shorter than the photo, vertically centered against it */}
                    <div className="relative bg-[#ecebeb] w-full lg:w-[37.8%] h-auto sm:h-[420px] lg:h-[600px] lg:aspect-[484/575] px-6 sm:px-[58px] py-10 sm:py-12 flex items-center overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="flex flex-col gap-4 sm:gap-[29px]"
                            >
                                <p className="text-black text-2xl sm:text-[32px] font-normal">{right.title}</p>
                                <p className="text-[#3e3e3e] text-base sm:text-2xl font-light">{right.desc}</p>
                                <p className="text-[#3e3e3e]/60 text-base sm:text-2xl font-light">{right.tag}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-6 sm:gap-8 mt-6 lg:-translate-x-[50px] lg:-translate-y-[120px]">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => goTo(index - 1, -1)}
                        disabled={index === 0}
                        className={`size-[32px] sm:size-[50px] shrink-0 transition-colors ${index === 0
                            ? "text-[#a4a7a5] cursor-not-allowed"
                            : "text-black hover:text-[#2d8ec5]"
                            }`}
                    >
                        <ArrowIcon className="size-full -rotate-90" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => goTo(index + 1, 1)}
                        disabled={index === maxIndex}
                        className={`size-[32px] sm:size-[50px] shrink-0 transition-colors ${index === maxIndex
                            ? "text-[#a4a7a5] cursor-not-allowed"
                            : "text-black hover:text-[#2d8ec5]"
                            }`}
                    >
                        <ArrowIcon className="size-full rotate-90" />
                    </button>
                </div>
            </div>
        </section>
    );
}

