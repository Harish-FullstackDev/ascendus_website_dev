"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import technologyAssessmentIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/TechnologyAssessment.svg";
import useCaseEvaluationIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/UseCaseEvaluation.svg";
import technicalFeasibilityIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/TechnicalFeasibility.svg";
import businessValueAssessmentIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/BusinessValueAssessment.svg";

const ITEMS = [
    {
        icon: technologyAssessmentIcon,
        title: "Technology Assessment",
        desc: "We evaluate emerging technologies against business requirements and operational challenges.",
    },
    {
        icon: useCaseEvaluationIcon,
        title: "Use Case Evaluation",
        desc: "We identify relevant opportunities across IoT, Industry 4.0, digital twins, AR/VR, blockchain, and other emerging technologies.",
    },
    {
        icon: technicalFeasibilityIcon,
        title: "Technical Feasibility",
        desc: "We assess integration requirements, technology maturity, data needs, and operational considerations.",
    },
    {
        icon: businessValueAssessmentIcon,
        title: "Business Value Assessment",
        desc: "We focus on measurable business outcomes when evaluating new technology opportunities.",
    },
];

export default function EmergingTechnologyAssessment() {
    return (
        <section className="w-full px-6 sm:px-[64px] pt-10 sm:pt-16 pb-10 sm:pb-8">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#16171A] text-2xl sm:text-2xl font-medium">Emerging Technology Assessment</h2>
                    <p className="text-[#55595E] text-lg font-light">
                        Practical assessment services that help enterprises understand where emerging technologies
                        can create business value.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 w-full lg:flex-1 lg:min-w-0"
                >
                    {ITEMS.map((item) => (
                        <div key={item.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={item.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <p className="text-[#16171A] text-xl sm:text-2xl font-medium">{item.title}</p>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#D4D6D8]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

