"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Digital Engineering/Section13_Legacy_Building.jpg";

const ITEMS = [
    {
        title: "Legacy System Assessment",
        desc: "Evaluate existing systems for technical debt, security gaps, and modernization readiness before committing to a transformation path.",
        tag: "Modernization Services",
    },
    {
        title: "Modernization Roadmap",
        desc: "Modernize aging platforms with a phased approach that protects business continuity while unlocking cloud-native performance.",
        tag: "Modernization Services",
    },
    {
        title: "Application Engineering",
        desc: "Architect legacy applications into modular, maintainable systems built on modern frameworks and cloud-native patterns.",
        tag: "Modernization Services",
    },
    {
        title: "Data Migration & Modernization",
        desc: "Migrate and transform legacy data stores into modern, scalable platforms with zero data loss and minimal downtime.",
        tag: "Modernization Services",
    },
    {
        title: "Cloud Platform Migration",
        desc: "Move legacy workloads to the cloud with a proven migration methodology that minimizes risk and accelerates time to value.",
        tag: "Modernization Services",
    },
];

export default function LegacyModernization() {
    return (
        <section className="relative w-full">
            <div className="relative w-full h-[280px] sm:h-[400px] overflow-hidden">
                <Image src={buildingPhoto} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-center text-white z-20 px-4 sm:px-0">
                    <h2 className="text-2xl sm:text-4xl font-light">
                        Legacy Modernization
                    </h2>

                    <p className="mt-2 sm:mt-3 max-w-3xl text-sm sm:text-lg text-gray-200">
                        Transform aging enterprise applications into scalable,
                        cloud-ready platforms while preserving critical business
                        functionality.
                    </p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 -mt-8 sm:-mt-35 mb-8 sm:mb-16 mx-4 sm:mx-auto sm:max-w-[1390px] bg-white shadow-[0px_4px_28.65px_rgba(0,0,0,0.25)]  py-8 sm:py-20"
            >
                <div className="hidden sm:flex items-center justify-between">
                    {ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className="group relative shrink-0 h-[234px] border-r border-[#969595] last:border-0"
                            style={{ width: `${100 / ITEMS.length}%` }}
                        >
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[234px] group-hover:h-[450px] group-hover:z-10 px-6 flex flex-col justify-center overflow-hidden transition-all duration-500 ease-out group-hover:bg-black group-hover:shadow-[0px_10px_30px_rgba(0,0,0,0.35)]">
                                <p className="text-[#0d0c22] text-xl lg:text-3xl font-light text-left transition-opacity duration-300 group-hover:opacity-0">
                                    {item.title}
                                </p>
                                <div className="absolute inset-x-6 bottom-8 flex flex-col opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                                    <p className="text-[#e6e6e6] text-xl font-light leading-relaxed">{item.desc}</p>
                                    <p className="text-[#e6e6e6] text-xl font-light mt-4">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex sm:hidden flex-col divide-y divide-[#e5e5e5] px-4">
                    {ITEMS.map((item, i) => (
                        <div key={i} className="py-5 first:pt-0 last:pb-0">
                            <p className="text-[#0d0c22] text-lg font-light">{item.title}</p>
                            <p className="text-[#6c6c6c] text-sm font-light leading-relaxed mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

