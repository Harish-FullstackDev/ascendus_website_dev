"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import governanceImage from "@/assets/WhatWeDo/Data Inteligent/Section10_Bg.svg";

const TABS = [
    {
        label: "Data Quality Management",
        title: "Data Quality Management",
        subtitle: "Ensure Accuracy You Can Trust",
        desc: "Implement automated profiling and validation rules that catch inconsistencies, duplicates, and formatting errors before they reach your reports. We help you build a single source of truth for confident decision-making."
    },
    {
        label: "Metadata Management",
        title: "Metadata Management",
        subtitle: "Understand Your Data's Context",
        desc: "Capture business definitions, technical schemas, and usage context in a centralized repository. Our metadata frameworks make it easy for teams to find, understand, and trust the data they work with."
    },
    {
        label: "Privacy & Compliance",
        title: "Privacy & Compliance",
        subtitle: "Protect Sensitive Information",
        desc: "Design privacy controls and consent management processes that align with global regulations. We help you classify sensitive data and apply the right safeguards without slowing down your teams."
    },
    {
        label: "Data Cataloging & Lineage",
        title: "Data Cataloging & Lineage",
        subtitle: "Trace Data From Source to Insight",
        desc: "Build searchable catalogs and visual lineage maps that show exactly where data originates, how it transforms, and where it's consumed. Gain full transparency across your data pipelines."
    },
    {
        label: "Access Control & Security",
        title: "Access Control & Security",
        subtitle: "Grant the Right Access, Every Time",
        desc: "Establish role-based permissions and dynamic masking policies that ensure users only see the data relevant to their job. We balance strong security with seamless self-service access."
    },
    {
        label: "Regulatory Compliance",
        title: "Regulatory Compliance",
        subtitle: "Stay Ahead of Evolving Standards",
        desc: "Align your data practices with GDPR, CCPA, HIPAA, and other regulatory frameworks. We build monitoring and reporting processes that keep you audit-ready at all times."
    },
    {
        label: "Data Stewardship",
        title: "Data Stewardship",
        subtitle: "Assign Clear Ownership",
        desc: "Define stewardship roles and accountability structures so every dataset has a clear owner responsible for its quality, security, and lifecycle. We turn governance policy into daily practice."
    },
    {
        label: "Retention & Lifecycle Management",
        title: "Retention & Lifecycle Management",
        subtitle: "Manage Data From Creation to Archive",
        desc: "Set automated retention schedules and archival policies that reduce storage costs and legal risk. We help you retire outdated data safely while preserving what matters most."
    }
];

export default function DataGovernance() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TABS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const activeTab = TABS[active];

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px] flex flex-col items-center gap-8 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1074px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">Data Governance</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Establish clear ownership, quality standards, and controls so every dataset across the
                    enterprise can be trusted, discovered, and used with confidence.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center gap-8 lg:gap-3.5 w-full lg:py-[60px] lg:px-[57px]">
                <div className="flex flex-col justify-between w-full lg:w-96 h-auto lg:h-[553px] shrink-0">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.label}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => {
                                setIsPaused(false);
                            }}
                            onClick={() => setActive(index)}
                            className={`text-left border-l-[3px] flex items-center h-12 px-3.5 transition-colors ${index === active
                                ? "border-[#0061af] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <span className="text-base sm:text-lg font-light">{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="relative flex-1 w-full aspect-[687/581] max-w-[687px] mx-auto lg:mx-0 overflow-hidden">
                    <Image src={governanceImage} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-6 sm:left-[40px] right-6 sm:right-[40px] bottom-6 sm:bottom-[40px] text-white flex flex-col gap-2"
                        >
                            <p className="text-white text-2xl sm:text-3xl font-medium">{activeTab.title}</p>
                            <p className="text-white text-xl sm:text-2xl font-normal">{activeTab.subtitle}</p>
                            <p className="text-white/95 text-sm sm:text-lg font-light leading-relaxed max-w-[580px]">
                                {activeTab.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

