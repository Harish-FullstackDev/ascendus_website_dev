"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import zeroTrustBg from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/Zero-Trust-Architecture.jpg";
import zeroTrustBg1 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/Zero-Trust-Architecture2.jpg";
import zeroTrustBg2 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/Zero-Trust-Architecture3.jpg";

const SLIDES = [
    {
        title: "Continuous Identity Verification",
        desc: [
            "Traditional perimeter-based security models no longer provide adequate protection in distributed enterprise environments.",
            "Zero Trust Architecture follows the principle of Never Trust, Always Verify, requiring continuous authentication, authorization, and validation of every user, device, application, and workload regardless of location.",
        ],
        image: zeroTrustBg,
    },
    {
        title: "Least Privilege Access",
        desc: [
            "Access is granted strictly on a need-to-know, need-to-use basis, minimizing the potential impact of any single compromised credential.",
            "Privileges are continuously reassessed as roles, projects, and risk levels change across the organization.",
        ],
        image: zeroTrustBg1,
    },
    {
        title: "Micro-Segmentation",
        desc: [
            "Networks are divided into small, isolated zones so that a breach in one segment cannot freely spread to the rest of the environment.",
            "Granular policies control east-west traffic between workloads, applications, and services.",
        ],
        image: zeroTrustBg2,
    },
    {
        title: "Device Trust & Posture",
        desc: [
            "Every device is continuously evaluated for compliance, patch level, and security posture before being granted access.",
            "Non-compliant or unmanaged devices are automatically restricted or remediated before reaching sensitive resources.",
        ],
        image: zeroTrustBg1,
    },
    {
        title: "Continuous Monitoring & Analytics",
        desc: [
            "Behavioral analytics and telemetry are analyzed in real time to detect anomalies that signal a potential compromise.",
            "Risk signals dynamically adjust access decisions, tightening controls the moment suspicious activity is observed.",
        ],
        image: zeroTrustBg2,
    },
    {
        title: "Software-Defined Perimeter",
        desc: [
            "Resources are cloaked from the public network and only become visible to authenticated, authorized identities.",
            "This dramatically reduces the enterprise's attack surface compared to traditional VPN and firewall perimeters.",
        ],
        image: zeroTrustBg1,
    },
];

const ROTATE_INTERVAL = 5500;

export default function ZeroTrustArchitecture() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % SLIDES.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [index]);


    const goTo = (next) => setIndex((next + SLIDES.length) % SLIDES.length);

    return (
        <section
            className=" relative overflow-hidden w-full bg-cover bg-center bg-no-repeat py-10 sm:py-16 lg:py-[71px] px-6 sm:px-10 lg:px-[50px] flex flex-col items-start"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={SLIDES[index].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        key={SLIDES[index].image.src}
                        src={SLIDES[index].image}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="relative z-10 w-full lg:max-w-[664px] flex flex-col gap-3 sm:gap-[14px]">
                <h2 className="font-heading text-white text-xl sm:text-2xl lg:text-[32px] font-normal">Zero Trust Architecture</h2>

                <div className="bg-[#f4f3f9] border border-[#d9d9d9] shadow-lg w-full px-6 sm:px-8 lg:px-[53px] py-8 sm:py-10 min-h-[260px] sm:min-h-[300px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col gap-4 sm:gap-[34px] w-full"
                        >
                            <p className="text-black text-xl sm:text-2xl lg:text-[32px] font-normal">{SLIDES[index].title}</p>
                            <div className="text-[#3d3d4e] text-sm sm:text-lg font-light space-y-3">
                                {SLIDES[index].desc.map((p) => (
                                    <p key={p}>{p}</p>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex items-center md:mt-[-50px] md:ml-[400px]">
                    <div className="bg-[#DFDFDF] border border-[#DFDFDF] rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => goTo(index - 1)}
                            className="flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border border-black text-black hover:bg-white hover:text-black hover:border-black transition-colors shrink-0"
                        >
                            ←
                        </button>
                        <div className="flex items-center gap-[10px]">
                            {SLIDES.map((_, dotIndex) => (
                                <button
                                    key={dotIndex}
                                    type="button"
                                    aria-label={`Go to slide ${dotIndex + 1}`}
                                    onClick={() => goTo(dotIndex)}
                                    className={`size-[8px] rounded-full border-[0.5px] transition-colors ${dotIndex === index ? "bg-[#0061af] border-[#0061af]" : "border-black"
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => goTo(index + 1)}
                            className="flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border border-black text-black hover:bg-white hover:text-black hover:border-black transition-colors shrink-0"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
