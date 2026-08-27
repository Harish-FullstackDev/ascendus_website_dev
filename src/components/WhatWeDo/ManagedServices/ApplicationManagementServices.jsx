"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import applicationMaintenancePhoto from "@/assets/WhatWeDo/Managed Services/Section2_Card1.svg";
import performanceOptimizationPhoto from "@/assets/WhatWeDo/Managed Services/section2_Card2.svg";
import functionalSupportPhoto from "@/assets/WhatWeDo/Managed Services/Section2_Card3.svg";
import bugFixesPhoto from "@/assets/WhatWeDo/Managed Services/Section2_Card4.svg";
import healthChecksPhoto from "@/assets/WhatWeDo/Managed Services/Section2_Card5.svg";
import releasePatchPhoto from "@/assets/WhatWeDo/Managed Services/Section2_Card6.svg";

const CARDS = [
    {
        title: "Application Maintenance",
        desc: "Ongoing upkeep of business-critical applications to keep them stable, secure, and running at peak performance.",
        image: applicationMaintenancePhoto,
    },
    {
        title: "Performance Optimization",
        desc: "Continuously tune application performance to reduce latency, improve responsiveness, and maximize throughput.",
        image: performanceOptimizationPhoto,
    },
    {
        title: "Functional Support",
        desc: "Hands-on support for day-to-day functional issues, configuration changes, and user queries.",
        image: functionalSupportPhoto,
    },
    {
        title: "Bug Fixes & Enhancements",
        desc: "Rapid resolution of defects paired with incremental enhancements that keep pace with evolving business needs.",
        image: bugFixesPhoto,
    },
    {
        title: "Application Health Checks",
        desc: "Regular diagnostics that catch performance bottlenecks and vulnerabilities before they impact the business.",
        image: healthChecksPhoto,
    },
    {
        title: "Release & Patch Management",
        desc: "Structured release cycles and patch management that minimize disruption while keeping systems current.",
        image: releasePatchPhoto,
    },
];

export default function ApplicationManagementServices() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[750px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="font-heading text-black text-2xl font-semibold">Application Management Services (AMS)</h2>
                <p className="text-black text-base sm:text-lg font-light">Maximize Application Performance & Reliability</p>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Ensure your enterprise applications remain secure, optimized, and aligned with evolving business
                    requirements through proactive application management.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[17px] max-w-[1180px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="bg-white shadow-[0px_2px_7.5px_rgba(0,0,0,0.19)] flex flex-col items-center pb-3"
                    >
                        <div className="relative w-full aspect-[470/263]">
                            <Image src={card.image} alt="" fill className="object-cover" />
                        </div>
                        <div className="w-full text-center px-4 pt-3">
                            <p className="text-black text-base font-semibold">{card.title}</p>
                            <p className="text-[#6c6c6c] text-sm font-light mt-1">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
