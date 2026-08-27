"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import blockchainPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section5_Bg.svg";

const ITEMS = [
    { title: "Extended Reality (AR/VR)", desc: "Define where blockchain genuinely adds value across your business, from settlement to provenance tracking." },
    { title: "Smart Enterprise Solutions", desc: "Integrated combinations of emerging technology matched to specific operational challenges." },
    { title: "Supply Chain Traceability", desc: "Track goods and materials end-to-end on an immutable ledger that every partner can trust." },
    { title: "Blockchain:", desc: "Issue, custody, and manage tokenized assets with enterprise-grade controls." },
    { title: "Quantum Readiness:", desc: "Give users and partners a portable, verifiable digital identity that reduces fraud and friction." },
];

export default function ScenarioAnalysis() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="w-full py-10 sm:pt-16 sm:pb-0 flex flex-col items-center gap-8 sm:gap-[62px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-6"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Scenario Analysis</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Implement blockchain solutions that improve transparency, security, traceability, and trust
                    across business transactions and digital processes.
                </p>
            </motion.div>

            {/* Mobile */}
            <div className="flex sm:hidden w-full flex-col gap-3 px-6">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-4 rounded-[10px] bg-[#EEF6FB] px-5 py-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2D8EC5] text-sm font-semibold text-white">
                            {index + 1}
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-black text-base font-semibold">
                                {item.title}
                            </p>

                            <p className="text-[#515151] text-sm font-light leading-snug">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop */}
            <div className="relative hidden sm:block w-full h-[650px] overflow-hidden">
                <div className="relative hidden sm:block w-full h-[720px] overflow-hidden">
                    <Image src={blockchainPhoto} alt="" fill className="object-cover" />


                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.70) 100%)",
                        }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        {ITEMS.map((item, index) => {
                            const isHovered = hovered === index;

                            return (
                                <div
                                    key={item.title}
                                    onMouseEnter={() => setHovered(index)}
                                    onMouseLeave={() => setHovered(null)}
                                    className={`flex-1 h-[200px] transition-all duration-300 px-6 py-6 cursor-pointer ${isHovered
                                        ? "bg-[#2D8EC5]/80"
                                        : "bg-white"
                                        }`}
                                >
                                    <h3
                                        className={`font-semibold flex items-center justify-center text-center text-xl leading-tight ${isHovered ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>

                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: .25 }}
                                                className="mt-4 text-sm leading-6 text-white"
                                            >
                                                {item.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
