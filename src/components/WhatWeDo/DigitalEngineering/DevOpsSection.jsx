"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import idpPhoto from "@/assets/WhatWeDo/Digital Engineering/Section11_IDP_Photo.jpg";
import platformGovernance from "@/assets/WhatWeDo/Digital Engineering/Section8_PlatformGovernance_Photo.jpg";
import infraAutomation from "@/assets/WhatWeDo/Digital Engineering/Section8_InfraAutomation_Photo.jpg";
import platformStandardization from "@/assets/WhatWeDo/Digital Engineering/Section8_PlatformStandardization_Photo.jpg";
import devExperience from "@/assets/WhatWeDo/Digital Engineering/Section8_DevExperience_Photo.jpg";
import monitoring from "@/assets/WhatWeDo/Digital Engineering/Section8_Monitoring_Photo.jpg";

const GRID_CARDS = [
    {
        title: "Infrastructure as Code (IaC)",
        image: infraAutomation,
        desc: "Provision and manage infrastructure through version-controlled code, enabling consistent, repeatable, and auditable environments.",
    },
    {
        title: "Configuration Management",
        image: platformStandardization,
        desc: "Manage configuration, secrets, and environment settings through automated, auditable processes that keep systems consistent across every environment.",
    },
    {
        title: "Automated Testing",
        image: devExperience,
        desc: "Embed automated testing, security scanning, and quality gates directly into the pipeline to catch issues before they reach production.",
    },
    {
        title: "Monitoring & Observability",
        image: monitoring,
        desc: "Implement real-time monitoring, logging, and alerting pipelines that give teams full visibility into system health and performance.",
    },
];

export default function DevOpsSection() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px] flex flex-col gap-5">
            {/* Title tile: gradient photo backdrop, centered heading — no hover behavior */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-[1300px] mx-auto h-[300px] sm:h-[260px] overflow-hidden bg-black flex items-center justify-center px-6 sm:px-10"
            >
                <Image src={platformGovernance} alt="" fill className="object-cover" />
                <div className="relative flex flex-col items-center gap-4 max-w-[767px] text-center text-white">
                    <h2 className="text-2xl font-medium">DevOps</h2>
                    <div className="text-base sm:text-lg font-light">
                        <p>Automate, Deploy, and Scale with Confidence</p>
                        <p className="text-white/80">
                            Implement DevOps practices that streamline software delivery through automation,
                            continuous integration, continuous deployment, and infrastructure as code.
                        </p>
                    </div>
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-5 max-w-[1300px] mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative w-full lg:w-[355px] h-[280px] lg:h-[692px] shrink-0 overflow-hidden"
                >
                    <Image
                        src={idpPhoto}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-[#2d8ec5]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 sm:gap-5 px-6 sm:px-10 pb-6 sm:pb-10 text-white">
                        <h2 className="text-2xl sm:text-[32px] font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                            CI/CD Pipeline Development
                        </h2>
                        <p className="text-base sm:text-lg font-light max-h-0 opacity-0 -translate-y-2 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0">
                            Create standardized development platforms that empower engineering teams with reusable
                            infrastructure, automation, and self-service capabilities.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-[repeat(2,minmax(0,1fr))] gap-4 sm:gap-[27px] w-full lg:h-[692px]">
                    {GRID_CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            className="group relative h-[260px] sm:h-[316px] lg:h-full overflow-hidden"
                        >
                            <Image
                                src={card.image}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-0 bg-[#2d8ec5]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                            <div className="absolute inset-x-6 sm:inset-x-8 bottom-6 sm:bottom-8 flex flex-col gap-3">
                                <p className="text-white text-xl sm:text-[28px] font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                                    {card.title}
                                </p>
                                <p className="text-white text-sm sm:text-base font-light max-h-0 opacity-0 -translate-y-2 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100 group-hover:translate-y-0">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

