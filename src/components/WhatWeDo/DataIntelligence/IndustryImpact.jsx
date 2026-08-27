"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import banking from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section11_IndustryImpact_Banking.svg";
import manufacturing from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section11_IndustryImpact_Manufacturing.svg";
import publicSector from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section11_IndustryImpact_PublicSector.svg";
import oilGasEnergy from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section11_IndustryImpact_OilGasEnergy.svg";
import retailFmcg from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section11_IndustryImpact_RetailFMCG.svg";

const INDUSTRIES = [
    { name: "Banking & Financial Services", icon: banking },
    { name: "Manufacturing", icon: manufacturing },
    { name: "Public Sector", icon: publicSector },
    { name: "Oil, Gas & Energy", icon: oilGasEnergy },
    { name: "Retail & FMCG", icon: retailFmcg },
];

export default function IndustryImpact() {
    return (
        <section className="w-full bg-[#F3F6F9] py-10 sm:p-16 px-6 ">
            <div className="w-full mx-auto flex flex-col items-center gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[780px] mx-auto text-center"
                >
                    <h2 className="text-[#2E3033] text-[28px] font-semibold">Industry Impact</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Sectors where we deploy enterprise-grade AI solutions
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-25 gap-y-6"
                >
                    {INDUSTRIES.map((industry) => (
                        <div key={industry.name} className="flex items-center gap-2">
                            <div className="relative shrink-0 size-10 sm:size-12">
                                <Image src={industry.icon} alt="" fill className="object-contain" />
                            </div>
                            <p className="text-[#2E3033] text-sm sm:text-[16px] font-light whitespace-nowrap">
                                {industry.name}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

