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

// Matches BroaderTechnologyServices/WorkSequence.jsx's layout: a sticky,
// percentage-width intro column next to a flexible icon+text list with its
// own trailing divider per row — rather than this section's previous
// fixed-width list column and border-t-between-items treatment.
export default function WhyPartnerWithUs() {
    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-semibold">Why Partner With Us For This</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {REASONS.map((reason) => (
                        <div key={reason.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={reason.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{reason.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#d3dae2]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
