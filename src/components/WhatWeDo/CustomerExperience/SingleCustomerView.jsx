"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import oneViewIcon from "@/assets/WhatWeDo/Customer Experience/Icons/Section4_icon1_OneView.svg";
import journeysIcon from "@/assets/WhatWeDo/Customer Experience/Icons/Section4_icon2_Journeys.svg";
import platformExpertiseIcon from "@/assets/WhatWeDo/Customer Experience/Icons/Section4_icon3_PlatformExpertise.svg";
import insightDrivenIcon from "@/assets/WhatWeDo/Customer Experience/Icons/Section4_icon4_InsightDriven.svg";

const ITEMS = [
    { icon: oneViewIcon, title: " One View of the Customer", desc: "We unify sales, service, and marketing data so every team works from the same customer context." },
    { icon: journeysIcon, title: "Journeys, Not Just Touchpoints", desc: "We design experiences around the full customer journey, not isolated channels or campaigns." },
    { icon: platformExpertiseIcon, title: " Platform Expertise That Delivers", desc: "Certified Salesforce and CRM implementation experience that turns strategy into a working system" },
    { icon: insightDrivenIcon, title: "Insight-Driven Engagement", desc: "Customer analytics inform every journey we design, so engagement decisions are evidence-based" },
];

export default function SingleCustomerView() {
    return (
        <section className="w-full py-10 px-6 flex flex-col lg:flex-row gap-10 lg:gap-[83px] items-center sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 w-full lg:w-[518px] shrink-0"
            >
                <h2 className="text-black text-2xl sm:text-[32px] font-normal">Single Customer View & Evidence-Based Design
                </h2>
                <p className="text-[#6c6c6c] text-lg font-light">
                    Why our approach to customer experience drives long-term adoption.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-[73px] gap-y-10 sm:gap-y-[101px] w-full lg:w-[650px] lg:ml-auto shrink-0">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                        className="flex flex-col gap-6"
                    >
                        <Image src={item.icon} alt="" width={48} height={48} />
                        <p className="text-black text-xl font-light">{item.title}</p>
                        <p className="text-[#4a5568] text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

