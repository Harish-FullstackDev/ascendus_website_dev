"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aiUseCaseIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section_AIUseCase_Card1_Icon.svg";
import aiReadinessIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section_AIUseCase_Card2_Icon.svg";
import businessValueIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section_AIUseCase_Card3_Icon.svg";
import enterpriseEnablementIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/Section_AIUseCase_Card4_Icon.svg";

const CARDS = [
    {
        title: "AI Use Case Identification",
        desc: "We identify practical AI opportunities across operations, customer service, finance, and enterprise functions.",
        icon: aiUseCaseIcon,
    },
    {
        title: "AI Readiness Assessment",
        desc: "We assess data, systems, processes, and governance requirements before AI deployment.",
        icon: aiReadinessIcon,
    },
    {
        title: "Business Value Analysis",
        desc: "We evaluate AI initiatives against productivity, efficiency, accuracy, and decision-making outcomes.",
        icon: businessValueIcon,
    },
    {
        title: "Enterprise AI Enablement",
        desc: "We integrate AI capabilities into existing business applications and workflows.",
        icon: enterpriseEnablementIcon,
    },
];

export default function AIUseCaseValueEnablement() {
    return (
        <section className="w-full py-10 px-6 sm:px-[50px] bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-5 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">AI Use Case &amp; Value Enablement</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    Targeted AI capabilities that connect enterprise data, processes, and intelligence to
                    Measurable business value.
                </p>
            </motion.div>

            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-20">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col min-h-[300px] sm:min-h-[339px] mt-10 border border-[#7f7f7f]/40 bg-white text-center transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120px] h-[94px] bg-[#002C4F] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Image src={card.icon} alt="" width={48} height={48} className="size-[48px]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-4 px-8 pt-16 sm:pt-20 pb-10">
                            <p className="text-black text-xl sm:text-2xl font-normal">{card.title}</p>
                            <p className="text-[#6c6c6c] text-base sm:text-lg font-light">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


