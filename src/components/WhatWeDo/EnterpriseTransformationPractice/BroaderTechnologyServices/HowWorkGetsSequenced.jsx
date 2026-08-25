"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/icons/assess.svg";
import prioritizeIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/icons/prioritize.svg";
import executeIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/icons/execute.svg";
import governIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/icons/govern.svg";

const STEPS = [
    {
        icon: assessIcon,
        title: "Assess",
        desc: "Map the current stack, dependencies, and where SAP connects to everything else.",
    },
    {
        icon: prioritizeIcon,
        title: "Prioritize",
        desc: "Sequence the work by risk and business impact, not by which vendor is available first.",
    },
    {
        icon: executeIcon,
        title: "Execute",
        desc: "Deliver in an order that doesn't destabilize what's already running in production.",
    },
    {
        icon: governIcon,
        title: "Govern",
        desc: "Hand over monitoring, access controls, and documentation your team can actually maintain.",
    },
];

// Matches CloudInfrastructure/CloudMigrationHybridStrategy.jsx's layout: a
// sticky, percentage-width intro column next to a flexible icon+text list
// with its own trailing divider per row — rather than this section's
// previous fixed-width list column and border-t-between-items treatment.
export default function HowWorkGetsSequenced() {
    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-8">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-medium">How This Work Gets Sequenced</h2>
                    <p className="text-[#55595E] text-lg font-light">
                        Every engagement follows the same order, so nothing that surrounds SAP gets built before the
                        landscape it depends on is understood.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {STEPS.map((step) => (
                        <div key={step.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={step.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <p className="text-[#2E3033] text-xl sm:text-2xl font-medium">{step.title}</p>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
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

