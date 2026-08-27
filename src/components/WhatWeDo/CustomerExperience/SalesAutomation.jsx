"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import leadManagementIcon from "@/assets/WhatWeDo/Customer Experience/Icons/Section3_Card1_Icon.svg";
import opportunityManagementIcon from "@/assets/WhatWeDo/Customer Experience/Icons/Section3_Card2_Icon.svg";
import salesWorkflowIcon from "@/assets/WhatWeDo/Customer Experience/Icons/Section4_Card3_Icon.svg";

const CARDS = [
    {
        title: "Lead Management",
        desc: "Capture, score, and route leads automatically so sales reps always work the highest-value opportunities first.",
        icon: leadManagementIcon,
    },
    {
        title: "Opportunity Management",
        desc: "Track deals through every stage with automated updates, forecasting, and clear ownership across the pipeline.",
        icon: opportunityManagementIcon,
    },
    {
        title: "Sales Workflow Automation",
        desc: "Eliminate manual handoffs and approvals with automated workflows that keep deals moving without friction.",
        icon: salesWorkflowIcon,
    },
];

export default function SalesAutomation() {
    return (
        <section className="w-full py-14 sm:py-20 px-6 sm:px-[50px] bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Sales Automation</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    Automate repetitive sales activities, manage leads efficiently, and improve pipeline
                    visibility to help sales teams focus on closing more deals.
                </p>
            </motion.div>

            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-16">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative pt-12 border border-[#7f7f7f]/40 bg-white text-center transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120px] h-[94px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Image src={card.icon} alt="" fill className="object-contain" />
                        </div>
                        <div className="flex flex-col gap-4 px-8 pb-12 pt-6">
                            <p className="text-black text-xl sm:text-2xl font-normal">{card.title}</p>
                            <p className="text-[#6c6c6c] text-base sm:text-lg font-light">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

