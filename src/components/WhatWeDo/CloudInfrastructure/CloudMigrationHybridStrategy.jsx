"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cloudMigrationIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/CloudMigration.svg";
import modernizationIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/modernization.svg";
import hybridCloudIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/HybridCloud.svg";
import multiCloudStrategyIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/MultiCloudStrategy.svg";

const ITEMS = [
    {
        icon: cloudMigrationIcon,
        title: "Cloud Migration",
        desc: "We move workloads to the cloud with a sequenced plan that protects uptime and data integrity throughout the transition.",
    },
    {
        icon: modernizationIcon,
        title: "Modernization",
        desc: "We re-architect legacy environments to take full advantage of cloud native performance, cost, and scalability.",
    },
    {
        icon: hybridCloudIcon,
        title: "Hybrid Cloud",
        desc: "We design environments that balance on-premise control with cloud flexibility, matched to your compliance requirements.",
    },
    {
        icon: multiCloudStrategyIcon,
        title: "Multi-Cloud Strategy",
        desc: "We build architectures that avoid vendor lock-in and route workloads to the platform best suited for each.",
    },
];

export default function CloudMigrationHybridStrategy() {
    return (
        <section className="w-full py-8 px-6 sm:p-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-medium">Cloud Migration &amp; Hybrid Strategy</h2>
                    <p className="text-[#55595E] text-lg font-light">
                        Modernization, hybrid models, and multi-cloud environments.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {ITEMS.map((item) => (
                        <div key={item.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={item.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <p className="text-[#2E3033] text-xl sm:text-2xl font-medium">{item.title}</p>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#E2E5EA]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

