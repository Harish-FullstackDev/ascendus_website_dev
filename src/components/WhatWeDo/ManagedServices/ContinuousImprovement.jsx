"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Managed Services/Section9_Image.svg";

const STEPS = [
    {
        n: "1",
        title: "Cloud Migration",
        desc: "Move your SAP workloads to a secure and scalable cloud environment with minimal business disruption.",
    },
    {
        n: "2",
        title: "Performance Tuning",
        desc: "Continuously profile and tune system performance to eliminate bottlenecks before they affect users.",
    },
    {
        n: "3",
        title: "Security Hardening",
        desc: "Apply the latest security patches and hardening standards to keep enterprise systems resilient.",
    },
    {
        n: "4",
        title: "Process Automation",
        desc: "Automate repetitive operational tasks to reduce manual effort and human error.",
    },
    {
        n: "5",
        title: "Landscape Modernization",
        desc: "Retire legacy components and modernize the technology landscape in step with business priorities.",
    },
    {
        n: "6",
        title: "Innovation Roadmapping",
        desc: "Translate emerging technology trends into a prioritized roadmap aligned with business goals.",
    },
];

export default function ContinuousImprovement() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1148px] mx-auto text-center mb-12 sm:mb-[60px]"
            >
                <h2 className="font-heading text-black text-2xl sm:text-[32px] font-semibold">Continuous Improvement</h2>
                <p className="text-[#515151] text-base sm:text-2xl font-light max-w-[912px]">
                    Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap
                    aligned with your business objectives.
                </p>
            </motion.div>

            <div className="max-w-[1280px] mx-auto bg-white border border-[#b1b1b1] flex flex-col lg:flex-row">
                <div className="relative w-full h-[260px] lg:h-auto lg:w-[567px] shrink-0">
                    <Image src={buildingPhoto} alt="" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-8 sm:gap-9 px-6 py-8 sm:px-12 sm:py-16 flex-1 justify-center">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                            className="flex gap-6 sm:gap-[70px] items-center"
                        >
                            <div className="w-[42px] h-[42px] shrink-0 bg-black rounded-[6px] flex items-center justify-center">
                                <span className="text-white text-2xl font-semibold">{step.n}</span>
                            </div>
                            <div>
                                <p className="text-black text-xl sm:text-2xl font-semibold">{step.title}</p>
                                <p className="text-black text-sm sm:text-base font-light mt-2 leading-snug">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
