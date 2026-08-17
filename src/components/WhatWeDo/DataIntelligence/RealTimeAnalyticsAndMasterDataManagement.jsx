"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dataCenterPhoto from "@/assets/WhatWeDo/Data Inteligent/new/real.jpg";

const ITEMS = [
    {
        title: "Data Visualization",
        desc: "Real-time, drillable dashboards that bring KPIs and trends together for every level of the business.",
    },
    {
        title: "Master Data Management",
        desc: "Interfaces that make complex data intuitive for the people who need to act on it.",
    },
    {
        title: "Data Governance",
        desc: "Automated profiling, cataloging, and privacy controls that keep your data trustworthy and compliant.",
    },
    {
        title: "Real-Time Analytics",
        desc: "Live event streams turned into dashboards and alerts, so teams can act the moment something changes.",
    },
];

export default function RealTimeAnalyticsAndMasterDataManagement() {
    return (
        <section className="relative w-full">
            <div className="relative w-full h-[280px] sm:h-[500px] overflow-hidden">
                <Image src={dataCenterPhoto} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-center text-white z-20 px-4 sm:px-0">
                    <h2 className="text-xl sm:text-2xl font-medium">
                        Real-Time Analytics &amp; Master Data Management
                    </h2>

                    <p className="mt-2 sm:mt-3 max-w-3xl text-sm sm:text-lg text-gray-200">
                        Advanced capabilities to unify, visualize, and govern data.
                    </p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 -mt-8 sm:-mt-30 mb-8 sm:mb-16 mx-4 sm:mx-auto sm:max-w-[1390px] bg-white shadow-[0px_4px_28.65px_rgba(0,0,0,0.25)] py-6 sm:py-0"
            >
                <div className="hidden sm:flex items-center justify-between">
                    {ITEMS.map((item, i) => (
                        <div
                            key={item.title}
                            className="group relative shrink-0 h-[250px]"
                            style={{ width: `${100 / ITEMS.length}%` }}
                        >
                            <div
                                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[270px] group-hover:w-[265px] h-[234px] group-hover:h-[332px] group-hover:z-10 px-6 flex flex-col items-center justify-start pt-10 overflow-hidden transition-[width,height,background-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#0A3A52] group-hover:shadow-[0px_20px_45px_rgba(10,58,82,0.3)]"
                            >
                                <p className="text-[#16171a] text-xl font-medium text-left max-w-[180px] transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-2">
                                    {item.title}
                                </p>

                                <div className="absolute inset-x-6 top-1/2 -translate-y-[calc(50%+8px)] flex flex-col items-start opacity-0 transition-all duration-500 delay-150 ease-out group-hover:opacity-100 group-hover:-translate-y-1/2">
                                    <p className="text-[#e6e6e6] text-base sm:text-lg font-light leading-relaxed text-left">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex sm:hidden flex-col divide-y divide-[#e5e5e5] px-4">
                    {ITEMS.map((item) => (
                        <div key={item.title} className="py-5 first:pt-0 last:pb-0">
                            <p className="text-[#16171a] text-lg font-light">{item.title}</p>
                            <p className="text-[#6c6c6c] text-sm font-light leading-relaxed mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

