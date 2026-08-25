"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import consultingImg from "@/assets/WhatWeDo/Business Advisory/new/Section.jpg";

const SERVICES = [
    "Independent, outcome-focused advisory",
    "SAP-informed technology assessment",
    "Proven transformation roadmaps",
    "Change management expertise",
    "PMO governance discipline",
    "Regional business context",
];

export default function SalesforceConsulting() {
    return (
        <section className="relative z-10 w-full pt-10 sm:pt-16 pb-10 sm:pb-0">
            <div className="w-full mx-auto flex flex-col lg:flex-row">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full lg:max-w-[800px] self-center min-h-[400px] lg:h-[480px] bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-6 sm:px-12 py-12"
                >

                    <ul className="list-disc marker:text-[#7f7f7f] pl-6 space-y-3 text-[#3D3D4E] text-base sm:text-lg font-light">
                        {SERVICES.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative w-full lg:w-[578px] h-[360px] sm:h-[460px] lg:h-[588px] overflow-hidden shrink-0"
                >
                    <Image
                        src={consultingImg}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/40" />

                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 sm:bottom-8 lg:inset-x-auto lg:bottom-[24%] lg:left-[20.8%] lg:right-[14.5%]">
                        <h2 className="text-white text-2xl sm:text-3xl font-medium">
                            Salesforce Consulting
                        </h2>

                        <p className="text-white/90 text-base sm:text-lg font-light leading-[140%]">
                            Design, implement, customize, and optimize Salesforce solutions
                            that empower your sales, service, and marketing teams.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
