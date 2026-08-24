"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import teamIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/icons/team.svg";
import modelingIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/icons/modeling.svg";
import layersIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/icons/layers.svg";
import listIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/icons/list.svg";

const REASONS = [
    {
        icon: teamIcon,
        title: "One Team Designs Both Sides",
        desc: "The boundary between SAP and Microsoft is planned as one architecture, not negotiated between two separate vendors after the fact.",
    },
    {
        icon: modelingIcon,
        title: "Governed Power Platform, Not Shadow IT",
        desc: "Low-code apps are built and governed by IT from the start, not discovered as unmanaged tools six months in.",
    },
    {
        icon: layersIcon,
        title: "Standing Microsoft Capability",
        desc: "Azure, Microsoft 365, Power Platform, Dynamics 365, and Power BI are all active delivery practices here, not a one-off project we took on.",
    },
    {
        icon: listIcon,
        title: "Pattern-Tested Integration Points",
        desc: "60+ deployments, most running alongside an existing SAP core, means the common connection points are already familiar territory.",
    },
];

export default function WhyPartnerWithUs() {
    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-8 flex flex-col lg:flex-row gap-10 lg:gap-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:flex-1"
            >
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium">Why Partner With Us For This</h2>
            </motion.div>

            <div className="flex flex-col w-full lg:w-[524px] shrink-0">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className={`flex items-start gap-6 py-[18px] ${index > 0 ? "border-t border-[#d3dae2]" : ""}`}
                    >
                        <Image src={reason.icon} alt="" className="size-12 shrink-0" />
                        <div className="flex flex-col gap-2">
                            <p className="text-[#10161d] text-2xl font-medium">{reason.title}</p>
                            <p className="text-[#4a5568] text-lg font-light leading-normal">{reason.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
