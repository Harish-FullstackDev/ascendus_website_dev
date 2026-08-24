"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import valuePointIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/WhyEnterprisePartner/icons/value-point.svg";

// Figma repeated the exact same "A Deep SAP Foundation" title/copy/icon across all
// four cards (a skeleton-design artifact — see project notes). Item 1 keeps that
// real copy; items 2–4 are drawn straight from this page's own subhead ("150+ SAP
// engagements, 60+ Microsoft deployments, and 24/7 AMS coverage — one accountable
// team") instead of inventing unrelated claims. The icon is the one real asset the
// file provides, reused across all four for visual consistency.
const REASONS = [
    {
        title: "A Deep SAP Foundation",
        desc: "We built our practice on SAP, and it shows in how we approach every engagement: minimal customization to the core, upgrade-safe extensions, and Microsoft-adjacent integration.",
    },
    {
        title: "Microsoft & Adjacent Platform Reach",
        desc: "60+ Microsoft deployments extend that SAP core, so the enterprise moves as one connected system instead of a set of silos.",
    },
    {
        title: "One Accountable Team, End to End",
        desc: "The same team carries a transformation from migration through steady-state operations — no vendor handoffs, no dropped context.",
    },
    {
        title: "24/7 AMS Coverage",
        desc: "Round-the-clock managed services back every engagement after go-live, so what we build keeps running.",
    },
];

export default function WhyEnterprisePartnerWithUs() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-10 sm:gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[501px] w-full"
            >
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium capitalize">
                    Why Enterprise Partner With Us
                </h2>
                <p className="text-[#4a5568] text-lg sm:text-2xl font-light sm:tracking-[0.24px]">
                    150+ SAP engagements, 60+ Microsoft deployments, and 24/7 AMS coverage — one accountable team
                    across the whole landscape.
                </p>
            </motion.div>

            <div className="w-full max-w-[923px] grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 sm:divide-x sm:divide-[#d3dae2]">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: (index % 2) * 0.1 }}
                        className={`flex flex-col gap-4 py-2 ${index % 2 === 1 ? "sm:pl-16" : "sm:pr-16"} ${index >= 2 ? "border-t border-[#d3dae2] pt-8 sm:pt-10" : ""
                            }`}
                    >
                        <Image src={valuePointIcon} alt="" className="size-9" />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[#10161d] text-2xl font-medium">{reason.title}</h3>
                            <p className="text-[#4a5568] text-base font-light leading-normal">{reason.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
