"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import enterpriseIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/material-symbols_enterprise-outline-sharp.svg";
import aiRpaIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/si_ai-scan-duotone.svg";
import endToEndIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/octicon_move-to-end-24.svg";
import orchestrationIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/carbon_workflow-automation.svg";
import lowCodeIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/ph_code.svg";

const ITEMS = [
    { icon: enterpriseIcon, title: "Enterprise Strategy", desc: "Align automation investments with enterprise priorities so every initiative ladders up to business outcomes." },
    { icon: aiRpaIcon, title: "AI + RPA Integration", desc: "Pair AI's judgment with RPA's execution to automate work that used to require a human in the loop." },
    { icon: endToEndIcon, title: "End-to-End Automation", desc: "Automate a process from trigger to completion instead of stitching together isolated point solutions." },
    { icon: orchestrationIcon, title: "Automation Orchestration", desc: "Coordinate bots, APIs, and people across a single automated process so nothing falls through the cracks." },
    { icon: lowCodeIcon, title: "Low-Code Automation", desc: "Let business teams build and adjust automations themselves without waiting on a development queue." },
];

export default function HyperAutomation() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] flex flex-col items-center gap-10 sm:gap-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[630px] text-center"
            >
                <h2 className="text-black text-2xl font-normal">Hyper automation</h2>
                <p className="text-black text-lg font-light">Connect People, Processes &amp; Technology</p>
                <p className="text-[#7f7f7f] text-base sm:text-lg font-light">
                    Scale enterprise automation by combining RPA, AI, analytics, APIs, low-code platforms, and
                    workflow automation into a unified automation ecosystem.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 w-full max-w-screen">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className={`flex flex-col gap-5 px-2 lg:px-6 ${
                            index !== 0 ? "lg:border-l lg:border-[#d9d9d9]" : ""
                        }`}
                    >
                        <div className="size-[52px] bg-[#f4f4f4] flex items-center justify-center">
                            <Image src={item.icon} alt="" width={32} height={32} />
                        </div>
                        <p className="text-black text-xl sm:text-2xl font-normal">{item.title}</p>
                        <p className="text-[#515151] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
