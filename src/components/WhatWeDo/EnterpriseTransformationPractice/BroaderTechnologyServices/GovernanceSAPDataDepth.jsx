"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import panelImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/governance-panel.png";

// Same component pattern as DataIntelligence/GovernanceSAPDataDepth.jsx — this
// section (Figma node 2749:1893) shares that exact name, header copy, and
// two-card arrow-nav carousel behavior, just with this page's own 5
// capability cards and photo instead of that page's 4. Cards 3–5 (Data
// Migration & Governance, Change Management & Adoption, Cybersecurity &
// Compliance — nodes 2749:1938/1949/1964) are the ones that scroll into view
// as you click through.
const ITEMS = [
    {
        title: "Cloud & Infrastructure Modernization",
        desc: "Migrate and rearchitect infrastructure around the workloads that actually need to scale, not a lift-and-shift of everything at once.",
    },
    {
        title: "Systems Integration & API Management",
        desc: "Connect SAP to CRM, e-commerce, and third-party platforms through governed APIs, not one-off integrations that break on the next upgrade.",
    },
    {
        title: "Data Migration & Governance",
        desc: "Move, cleanse, and validate data across systems, with governance controls in place before go-live, not added after an audit flags them.",
    },
    {
        title: "Change Management & Adoption",
        desc: "Structured training and adoption planning so a new system gets used the way it was designed, not worked around.",
    },
    {
        title: "Cybersecurity & Compliance",
        desc: "Security built around your regulatory obligations, from access controls to data residency, not a generic checklist.",
    },
];

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

export default function GovernanceSAPDataDepth() {
    const searchParams = useSearchParams();
    const sectionRef = useRef(null);
    const [[index, direction], setPage] = useState([0, 1]);
    const maxIndex = ITEMS.length - 1;
    const active = ITEMS[index];
    const next = ITEMS[index + 1] ?? ITEMS[0];

    const goTo = (nextIndex, dir) => setPage([Math.max(0, Math.min(maxIndex, nextIndex)), dir]);

    // Deep-link from the Enterprise page's Capabilities service list — see the
    // matching effect in SapTransformation/SAPS4HANAMigrationImplementation.jsx.
    useEffect(() => {
        const service = searchParams.get("service");
        if (!service) return;
        const matchedIndex = ITEMS.findIndex((item) => item.title === service);
        if (matchedIndex === -1) return;
        setPage([matchedIndex, 1]);
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [searchParams]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#F3F6F9] py-10 sm:py-16 px-6 sm:px-[64px] flex flex-col items-center gap-10 sm:gap-16 scroll-mt-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] text-center"
            >
                <h2 className="text-[#0d0c22] text-2xl sm:text-[28px] font-medium">Governance &amp; SAP Data Depth</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    The principles that shape our data architecture approach.
                </p>
            </motion.div>

            <div className="relative w-full h-[520px] sm:h-[592px] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 bg-[#5c5c5c]">
                    <Image src={panelImage} alt="" fill className="object-cover" />
                </div>

                <div className="absolute inset-x-4 sm:inset-x-auto sm:right-0 top-1/2 -translate-y-1/2 flex flex-col sm:flex-row gap-4 sm:gap-[21px]">
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
                            <div className="bg-[#0A2B3E] w-full sm:w-[439px] h-[280px] sm:h-[377px] p-6 sm:p-[27px] flex flex-col justify-between gap-4 text-white">
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    <p className="text-xl sm:text-2xl font-medium">{active.title}</p>
                                    <p className="text-white sm:mt-25 text-sm sm:text-base font-light leading-relaxed">
                                        {active.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:flex bg-white w-full sm:w-[439px] h-[280px] sm:h-[377px] p-6 sm:p-[27px] flex-col justify-between gap-4 text-black">
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    <p className="text-xl sm:text-2xl font-medium">{next.title}</p>
                                    <p className="text-[#3D3D4E] sm:mt-25 text-sm sm:text-base font-light leading-relaxed">
                                        {next.desc}
                                    </p>
                                </div>
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
                        className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border shrink-0 transition-transform hover:scale-110 ${index === 0 ? "border-[#a4a7a5] text-[#a4a7a5]" : "border-black text-black"
                            }`}
                    >
                        ←
                    </button>
                    <div className="flex items-center gap-[10px]">
                        {ITEMS.map((item, dotIndex) => (
                            <button
                                key={item.title}
                                type="button"
                                aria-label={`Go to slide ${dotIndex + 1}`}
                                onClick={() => goTo(Math.min(dotIndex, maxIndex), dotIndex > index ? 1 : -1)}
                                className={`size-[8px] rounded-full border-[0.5px] transition-colors ${dotIndex === index ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-black"
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => goTo(index + 1, 1)}
                        disabled={index === maxIndex}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border shrink-0 transition-transform hover:scale-110 ${index === maxIndex ? "border-[#a4a7a5] text-[#a4a7a5]" : "border-black text-black"
                            }`}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
