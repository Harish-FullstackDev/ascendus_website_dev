"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import pmoPhoto from "@/assets/WhatWeDo/Business Advisory/Section10_PMO_Advisory_Bg.svg";
import sapIcon from "@/assets/WhatWeDo/Business Advisory/icons/Frame 1000003968.svg";
import msIcon from "@/assets/WhatWeDo/Business Advisory/icons/Frame 1000003969.svg";
import analyticsIcon from "@/assets/WhatWeDo/Business Advisory/icons/analytics_svgrepo.com.svg";
import processIcon from "@/assets/WhatWeDo/Business Advisory/icons/process_svgrepo.com.svg";
import aiIcon from "@/assets/WhatWeDo/Business Advisory/icons/ai_svgrepo.com.svg";
import siAiIcon from "@/assets/WhatWeDo/Business Advisory/icons/si_ai-fill.svg";

const ITEMS = [
    {
        icon: sapIcon,
        title: "Process Assessment",
        desc: "Targeted advisory domains including PMO, digital strategy, and IT evaluation.",
    },
    {
        icon: msIcon,
        title: "Lean Transformation",
        desc: "Independent guidance on technology decisions, vendor selection, and IT investment priorities",
    },
    {
        icon: analyticsIcon,
        title: "Automation Opportunities",
        desc: "Redesigned processes that remove inefficiency, not just automate the inefficiency that already exists.",
    },
    {
        icon: processIcon,
        title: "Workflow Standardization",
        desc: "Structured change programs that get your people adopting new ways of working, not resisting them.",
    },
    {
        icon: aiIcon,
        title: "Process Documentation",
        desc: "Our AI-powered bot automatically and accurately answers support questions with zero training required. Instantly generate replies, recap conversations for other agents, and create new help articles.",
    },
    {
        icon: siAiIcon,
        title: "Technology Assessment",
        desc: "An objective evaluation of your current technology landscape against where the business needs to go.",
    },

];

export default function PMOAdvisory() {
    return (
        <section className="w-full py-10 sm:py-[84px] px-6 sm:px-[57px] flex flex-col items-center gap-10 sm:gap-[60px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[814px] text-center"
            >
                <h2 className="text-black text-2xl font-normal">Reengineering & PMO Governance</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Targeted advisory domains including PMO, digital strategy, and IT evaluation
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[84px] items-stretch justify-center w-full max-w-screen">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full lg:w-[550px] lg:h-auto min-h-[700px] overflow-hidden bg-black shrink-0"
                >
                    <Image src={pmoPhoto} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 px-6 sm:px-[47px] py-8 sm:pb-10">
                        <p className="text-white text-2xl sm:text-[32px] font-normal">PMO Advisory</p>
                        <p className="text-white text-lg sm:text-2xl font-light">Deliver Projects with Confidence</p>
                        <p className="text-white text-sm sm:text-base font-light leading-snug max-w-[424px]">
                            Strengthen project governance, portfolio management, and execution through a structured
                            Project Management Office (PMO) framework.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col gap-8 sm:gap-[35px] w-full">
                    {ITEMS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex gap-4 sm:gap-5 items-start"
                        >
                            <div className="shrink-0 size-[65px] rounded-[10px] bg-black/5 flex items-center justify-center">
                                <Image src={item.icon} alt="" width={35} height={35} className="object-contain" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <p className="text-black text-lg sm:text-xl font-normal">{item.title}</p>
                                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
