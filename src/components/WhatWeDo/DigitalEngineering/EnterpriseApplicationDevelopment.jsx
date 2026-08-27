"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ceaImage1 from "@/assets/WhatWeDo/Digital Engineering/Section3_CEA_Image.svg";
import ceaImage2 from "@/assets/WhatWeDo/Digital Engineering/Section3_CEA_Image2.jpg";
import ceaImage3 from "@/assets/WhatWeDo/Digital Engineering/Section3_CEA_Image3.jpg";

const TABS = [
    {
        code: "CEA",
        title: "Custom Enterprise Applications",
        desc: "We develop secure, scalable enterprise applications tailored to your business processes, enabling greater efficiency, collaboration, and long-term growth.",
        image: ceaImage1,
    },
    {
        code: "ERP",
        title: "ERP & CRM Solutions",
        desc: "Implement and customize ERP and CRM platforms that unify operations, sales, and customer data into a single source of truth.",
        image: ceaImage2,
    },
    {
        code: "INT",
        title: "System Integration",
        desc: "Connect disparate applications and data sources through robust integration layers, ensuring seamless information flow across the enterprise.",
        image: ceaImage3,
    },
    {
        code: "CLD",
        title: "Cloud-Native Platforms",
        desc: "Design and build cloud-native applications leveraging containers, orchestration, and managed services for elasticity and resilience.",
        image: ceaImage1,
    },
    {
        code: "MOD",
        title: "Legacy Modernization",
        desc: "Re-architect legacy enterprise systems into modern, maintainable platforms without disrupting day-to-day business operations.",
        image: ceaImage2,
    },
    {
        code: "API",
        title: "API Development",
        desc: "Design and build secure, scalable APIs that connect applications, systems, and services efficiently across the enterprise.",
        image: ceaImage3,
    },
];

export default function EnterpriseApplicationDevelopment() {
    const [active, setActive] = useState(0);

    return (
        <section className="w-full py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[42px] px-6"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Enterprise Application Development</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    We develop secure, scalable enterprise applications tailored to your business processes, enabling
                    greater efficiency, collaboration, and long-term growth.
                </p>
            </motion.div>

            <div className="bg-[#f4f3f9] w-full px-4 sm:px-[50px] py-8 sm:py-[42px]">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-[37px] h-auto sm:h-[560px] max-w-[1180px] mx-auto">
                    {TABS.map((tab, i) => {
                        const isActive = i === active;
                        return (
                            <button
                                key={tab.code}
                                type="button"
                                onClick={() => setActive(i)}
                                aria-expanded={isActive}
                                className={`group relative w-full min-h-[56px] sm:h-full shrink-0 overflow-hidden text-left transition-[width] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] sm:border-r sm:border-[#a4a7a5] ${isActive ? "bg-white sm:w-[573px]" : "bg-[#f4f3f9] sm:w-[78px]"
                                    }`}
                            >
                                {isActive && (
                                    <div className="hidden sm:flex absolute left-0 top-0 bottom-0 w-[63px] items-center justify-center">
                                        <span className="-rotate-90 whitespace-nowrap text-[#2d8ec5] text-2xl sm:text-[32px] font-normal">
                                            {tab.code}
                                        </span>
                                    </div>
                                )}

                                {isActive ? (
                                    <motion.div
                                        key={tab.code}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                                        className="flex h-full flex-col items-start gap-6 overflow-hidden p-6 sm:gap-[34px] sm:p-[40px] sm:pl-[83px] sm:pr-[36px]"
                                    >
                                        <p className="text-black text-xl sm:text-2xl font-light">{tab.title}</p>
                                        <div className="relative w-full h-[180px] sm:h-[243px] bg-black shrink-0">
                                            <Image src={tab.image} alt="" fill className="object-cover" />
                                        </div>
                                        <p className="text-[#6c6c6c] text-base sm:text-lg font-light">{tab.desc}</p>
                                    </motion.div>
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center px-2 transition-colors group-hover:bg-white/50">
                                        <span className="whitespace-nowrap text-[#2d8ec5] text-sm font-normal sm:-rotate-90 sm:text-[32px]">
                                            {tab.title}
                                        </span>
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
