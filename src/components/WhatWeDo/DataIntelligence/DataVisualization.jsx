"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dashboardsImage from "@/assets/WhatWeDo/Data Inteligent/Section6_Bg1.svg";
import reportsImage from "@/assets/WhatWeDo/Data Inteligent/Section6_Bg2.svg";

const ROWS = [
    {
        eyebrow: "Interactive Dashboards",
        title: "See Every Metric That Matters, in One Place",
        desc: "Build real-time, drillable dashboards that bring KPIs, trends, and operational metrics together for every level of the business.",
        image: dashboardsImage,
    },
    {
        eyebrow: "Executive Reports",
        title: "Boardroom-Ready Insight, On Demand",
        desc: "Generate polished executive reports that summarize performance, highlight risk, and support confident strategic decisions.",
        image: reportsImage,
    },
];

export default function DataVisualization() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] bg-[#e6e6e6] flex flex-col gap-16 sm:gap-[70px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center"
            >
                <h2 className="text-black text-2xl font-normal">Data Visualization</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Turn complex datasets into clear, actionable visuals that make insight accessible to every
                    decision-maker.
                </p>
            </motion.div>

            <div className="flex flex-col gap-16 sm:gap-[70px] max-w-[1225px] mx-auto w-full">
                {ROWS.map((row) => (
                    <motion.div
                        key={row.eyebrow}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative flex flex-col sm:block"
                    >
                        <div className="relative w-full sm:w-[701px] sm:ml-auto h-[220px] sm:h-[468px]">
                            <Image src={row.image} alt={`${row.eyebrow} interface preview`} fill className="object-cover" />
                        </div>
                        <div className="relative sm:absolute sm:left-0 sm:top-[78px] bg-white w-full sm:w-[918px] sm:h-[313px] -mt-4 sm:mt-0 flex flex-col justify-center gap-6 px-6 sm:pl-[34px] sm:pr-[60px] py-8 sm:py-0">
                            <p className="text-black text-xl sm:text-2xl font-normal">{row.eyebrow}</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-black text-xl sm:text-2xl font-normal">{row.title}</p>
                                <p className="text-[#515151] text-base sm:text-lg font-light max-w-[452px]">
                                    {row.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
