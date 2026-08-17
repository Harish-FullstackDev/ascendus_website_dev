"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import appModernizationPhoto from "@/assets/WhatWeDo/Cloud and Infrastructure/Section4_image1.svg";
import containerizationPhoto from "@/assets/WhatWeDo/Cloud and Infrastructure/Section4_image2.svg";

const PANELS = [
    {
        title: "Application Modernization",
        subtitle: "Refactor for Cloud-Native Performance",
        desc: "Re-architect monolithic applications into modular, cloud-native services built for scale and speed.",
        image: appModernizationPhoto,
        services: [
            "Application Refactoring",
            "Microservices Migration",
            "API Modernization",
            "Cloud-Native Redesign",
            "Legacy Decommissioning",
            "Performance Tuning",
        ],
    },
    {
        title: "Containerization",
        subtitle: "Package Once, Deploy Anywhere",
        desc: "Containerize workloads with Docker and Kubernetes for consistent deployment across any environment.",
        image: containerizationPhoto,
        services: [
            "Docker Implementation",
            "Kubernetes Orchestration",
            "Container Security",
            "CI/CD Pipelines",
            "Service Mesh",
            "Auto-Scaling",
        ],
    },
];

export default function CloudModernization() {
    return (
        <section className="relative w-full py-10 sm:py-30 px-4 sm:px-20 flex justify-center">
            {/* Grey bar's positioning context is the SECTION (which owns the padding),
                so inset-y-0 here spans the full section height, padding included. */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
                <div className="relative mx-auto h-full max-w-[1280px]">
                    <div className="absolute inset-y-0 left-[900px] w-[168px] bg-[#f2f2f2]" />
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1500px] flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[102px]">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-12 sm:gap-16 lg:gap-[178px] w-full lg:w-[421px] shrink-0"
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[#16171a] text-2xl font-medium">Cloud Modernization</h2>
                        <p className="text-[#3d3d4e] text-lg font-normal">Modernize Legacy Systems for the Cloud Era</p>
                        <p className="text-[#3d3d4e] text-lg font-light">
                            Transform legacy applications into cloud-native solutions that improve performance,
                            flexibility, and operational efficiency.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 lg:gap-[78px]">
                        {PANELS.map((panel) => (
                            <div key={panel.title} className="border-l-[3px] border-[#0061af] pl-9 flex flex-col gap-4">
                                <p className="text-[#16171a] text-2xl font-medium">{panel.title}</p>
                                <div className="text-[#3d3d4e] text-lg font-light flex flex-col gap-3">
                                    <p>{panel.subtitle}</p>
                                    <p>{panel.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="flex flex-col gap-6 sm:gap-10 lg:gap-[69px] w-full lg:w-[632px] translate-x-0 lg:translate-x-[200px]">
                    {PANELS.map((panel, index) => (
                        <motion.div
                            key={panel.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            className="relative w-full h-[240px] sm:h-[300px] lg:h-[348px] overflow-hidden"
                        >
                            <Image src={panel.image} alt="" fill className="object-cover" />
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(146.5385081097494deg, rgba(0,0,0,0) 6.2579%, rgba(0,0,0,0.59) 52.978%)",
                                }}
                            />
                            <div className="absolute inset-0 flex flex-col items-start justify-start gap-3 sm:gap-4 px-6 sm:px-[60px] pt-10 sm:pt-14 lg:pt-[102px]">
                                <p className="text-white text-xl sm:text-[32px] font-normal">Services</p>
                                <ul className="text-white text-sm sm:text-lg font-light leading-snug">
                                    {panel.services.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}