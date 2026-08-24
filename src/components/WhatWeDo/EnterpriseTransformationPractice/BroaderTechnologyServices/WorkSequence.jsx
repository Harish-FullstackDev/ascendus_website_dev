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

export default function WorkSequence() {
    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-8 flex flex-col lg:flex-row gap-10 lg:gap-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:flex-1"
            >
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium">How This Work Gets Sequenced</h2>
                <p className="text-[#4a5568] text-lg font-light leading-[1.4]">
                    Every engagement follows the same order, so nothing that surrounds SAP gets built before the
                    landscape it depends on is understood.
                </p>
            </motion.div>

            <div className="flex flex-col w-full lg:w-[524px] shrink-0">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className={`flex items-start gap-6 py-[18px] ${index > 0 ? "border-t border-[#d3dae2]" : ""}`}
                    >
                        <Image src={step.icon} alt="" className="size-12 shrink-0" />
                        <div className="flex flex-col gap-2">
                            <p className="text-[#10161d] text-2xl font-medium">{step.title}</p>
                            <p className="text-[#4a5568] text-lg font-light leading-normal">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
