"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ceaImage1 from "@/assets/WhatWeDo/Customer Experience/webp/Customer_Sales_Automation.webp";
import ceaImage2 from "@/assets/WhatWeDo/Customer Experience/webp/Customer_Customer_Service_Solutions.webp";
import ceaImage3 from "@/assets/WhatWeDo/Customer Experience/webp/Customer_Marketing_Automation.webp";
import ceaImage4 from "@/assets/WhatWeDo/Customer Experience/webp/Customer_Analytics.webp";
import ceaImage5 from "@/assets/WhatWeDo/Customer Experience/webp/Customer_Loyalty.webp";

const TABS = [
    {
        code: "Sales Automation",
        title: "Sales Automation",
        desc: "Workflows that remove manual steps from the sales process, so your team spends time selling, not entering data.",
        image: ceaImage1,
    },
    {
        code: "Customer Service Solutions",
        title: "Customer Service Solutions",
        desc: "Implement and customize ERP and CRM platforms that unify operations, sales, and customer data into a single source of truth.",
        image: ceaImage2,
    },
    {
        code: "Marketing Automation",
        title: "Marketing Automation",
        desc: "Connect disparate applications and data sources through robust integration layers, ensuring seamless information flow across the enterprise.",
        image: ceaImage3,
    },
    {
        code: "Analytics",
        title: "Analytics",
        desc: "Design and build cloud-native applications leveraging containers, orchestration, and managed services for elasticity and resilience.",
        image: ceaImage4,
    },
    {
        code: "Loyalty Solutions",
        title: "Loyalty Solutions",
        desc: "Re-architect legacy enterprise systems into modern, maintainable platforms without disrupting day-to-day business operations.",
        image: ceaImage5,
    },
];

export default function SpecializedCXAutomationAnalytics() {
    const [active, setActive] = useState(0);

    return (
        <section className=" bg-[#F3F6F9] w-full py-10 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[42px] px-6"
            >
                <h2 className="text-[##2E3033] text-[28px] font-semibold">Specialized CX Automation & Analytics</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Automation, analytics, and loyalty tools for customer retention.
                </p>
            </motion.div>

            <div className="bg-[#f4f3f9] w-full px-4 sm:px-[50px] py-8 sm:py-[32px]">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-[37px] h-auto sm:h-[560px] max-w-[1180px] mx-auto">
                    {TABS.map((tab, i) => {
                        const isActive = i === active;
                        return (
                            <button
                                key={tab.code}
                                type="button"
                                onClick={() => setActive(i)}
                                aria-expanded={isActive}
                                className={`group relative w-full min-h-[56px] sm:h-full shrink-0 overflow-hidden text-left transition-[width] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? "bg-white sm:w-[573px]" : "bg-[#f4f3f9] sm:w-[78px] sm:border-r sm:border-[#a4a7a5]"
                                    }`}
                            >
                                {isActive ? (
                                    <motion.div
                                        key={tab.code}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                                        className="flex h-full flex-col items-start gap-6 overflow-hidden p-6 sm:gap-[34px] sm:p-[40px]"
                                    >
                                        <div className="relative w-full h-[180px] sm:h-[243px] bg-black shrink-0">
                                            <Image src={tab.image} alt="" fill className="object-cover" />
                                        </div>
                                        <p className="text-[#55595E] text-base sm:text-lg font-light">{tab.desc}</p>
                                        <h2 className="text-[#2D8EC5] text-xl sm:text-2xl font-semibold">{tab.title}</h2>
                                    </motion.div>
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center px-2 transition-colors group-hover:bg-white/50">
                                        <span className="whitespace-nowrap font-['Houschka_Pro'] text-[#2d8ec5] text-sm font-semibold sm:-rotate-90 sm:text-[32px]">
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

