"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import processMiningPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section6_Bg.svg";

const CARDS = [
    { title: "Workflow Automation", desc: "Automated approval and routing workflows that eliminate delays across departments." },
    { title: "Business Rules Automation", desc: "Decision logic automated and centralized, so policy is applied consistently every time." },
    { title: "AI-Powered Automation", desc: "Automation enhanced with AI to handle exceptions and unstructured data, not just fixed rules." },
];

export default function ProcessMining() {
    return (
        <section className="w-full bg-[#e6e6e6]">
            <div className="relative max-w-screen mx-auto">
                {/* Photo */}
                <div className="relative w-full h-[220px] sm:h-96">
                    <Image src={processMiningPhoto} alt="" fill className="object-cover" />
                </div>

                {/* Blue box — sits mostly on the photo but its bottom edge
                    pokes past the photo into the grey area below, matching Figma
                    (top: 267px, height: 240px against a 384px-tall photo) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute left-0 bottom-0 sm:bottom-auto sm:top-[267px] w-[85%] sm:w-[477px] sm:h-60 bg-[#2d8ec5]/90 text-white flex flex-col justify-center gap-2 px-6 sm:px-[76px] py-6 sm:py-0 z-0"
                >
                    <p className="text-2xl sm:text-3xl font-semibold">Advanced Decision Logic & Workflow</p>
                    <p className="text-lg sm:text-2xl font-light">Extended automation capabilities for complex business rules.</p>
                </motion.div>

                {/* Cards — normal flow right after the photo, with only a small
                    top offset (44px) so they clip just the bottom sliver of the
                    blue box instead of covering it. Asymmetric side padding
                    (353px left / 64px right) matches the Figma card positions. */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-[47px] px-6 sm:px-0 sm:pl-[353px] sm:pr-[64px] pt-8 sm:pt-11 pb-35 sm:pb-16 relative z-10">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                            className="bg-white px-8 py-10 flex flex-col gap-8 sm:h-64"
                        >
                            <p className="text-black text-xl font-semibold">{card.title}</p>
                            <p className="text-[#7f7f7f] text-lg font-light">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}