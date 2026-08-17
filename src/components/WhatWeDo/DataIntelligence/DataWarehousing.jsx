"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import warehousingImage from "@/assets/WhatWeDo/Data Inteligent/Section4_Bg.svg";

const ITEMS = [
    "Enterprise Data Warehouse Design",
    "Cloud Data Warehouse Implementation",
    "Data Modeling",
    "Data Migration",
    "Historical Data Management",
    "Warehouse Optimization",
    "Improved data consistency",
    "Faster analytics",
    "Better business decisions",
];

export default function DataWarehousing() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[60px]"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">Data Warehousing</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Consolidate data from across the business into a single, high-performance warehouse
                    engineered for fast, reliable reporting and analytics at scale.
                </p>
            </motion.div>

            <div className="flex flex-col lg:relative lg:w-full max-w-[1181px] mx-auto lg:aspect-[1181/592]">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-[240px] sm:h-[340px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[51.4%] bg-[#5c5c5c]"
                >
                    <Image src={warehousingImage} alt="" fill className="object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full lg:absolute lg:top-[6.4%] lg:left-[35.1%] lg:h-[85.5%] lg:w-[63.4%] bg-[#f4f3f9] flex items-center px-6 sm:px-10 lg:px-[40px] py-10 sm:py-12"
                >
                    <div className="flex gap-6 sm:gap-[69px] items-stretch w-full">
                        <div className="w-[3px] shrink-0 rounded-full bg-[#0061af]" />
                        <ul className="list-disc marker:text-[#7f7f7f] pl-5 space-y-3 sm:space-y-4 text-[#7f7f7f] text-base sm:text-xl font-light">
                            {ITEMS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
