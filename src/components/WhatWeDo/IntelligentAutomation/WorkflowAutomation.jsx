"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import workflowPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section4_image.svg";


const SERVICES = [
    "Process Mining Before Automation",
    "SAP-Integrated Automation Delivery",
    "Hyper Automation Capability",
    "Governance and Monitoring Built In",
    "Exception Handling by Design",
    "Proven High-Volume Deployments",
];



const BENEFITS = [
    "Faster document processing",
    "Reduced manual data entry",
    "Improved data accuracy",
    "Better compliance",
];

export default function WorkflowAutomation() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-10 flex justify-center">
            {/* ===== Desktop / tablet: pixel-accurate Figma layout (1281 x 697) ===== */}
            <div className="hidden sm:block relative w-full max-w-[1281px] h-[697px]">
                {/* Gray content panel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute left-[411px] top-0 w-[870px] h-[628px] bg-[#e2e2e2] overflow-hidden"
                >
                    <h2 className="absolute left-9 top-[58px] w-[721px] text-black text-[32px] font-normal">
                        Why Partner With Us

                    </h2>

                    <div className="absolute left-[149px] top-[134px] w-[518px] flex flex-col gap-3">
                        <p className="text-[#6c6c6c] text-lg font-light leading-7">
                            Our proven methods for building automation that remains maintainable at scale.
                        </p>
                    </div>

                    <div className="absolute left-[149px] top-[295px] flex gap-20">
                        <div className="w-70">

                            <ul className="space-y-1">
                                {SERVICES.map((item) => (
                                    <li
                                        key={item}
                                        className="text-[#6c6c6c] text-lg font-light leading-7 list-disc list-inside"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="w-64">
                            <p className="text-black text-xl font-normal mb-3">Benefits</p>
                            <ul className="space-y-1">
                                {BENEFITS.map((item) => (
                                    <li
                                        key={item}
                                        className="text-[#6c6c6c] text-lg font-light leading-7 list-disc list-inside"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </motion.div>

                {/* Image — overlaps the panel on the left and overflows past its bottom edge */}
                <div className="absolute left-0 top-[161px] w-[522px] h-[536px] z-10">
                    <Image src={workflowPhoto} alt="" fill className="object-cover" />
                </div>

                {/* Accent lines */}
                <div className="absolute left-[108px] top-[32px] w-px h-[224px] bg-[#2d8ec5] z-1000" />
                <div className="absolute left-[100px] top-[650px] w-[555px] h-px bg-[#2d8ec5]" />
            </div>

            {/* ===== Mobile: simple stacked layout ===== */}
            <div className="sm:hidden w-full flex flex-col">
                <div className="relative w-full h-[260px]">
                    <Image src={workflowPhoto} alt="" fill className="object-cover" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative bg-[#e2e2e2] px-6 py-10 flex flex-col gap-8"
                >
                    <h2 className="text-black text-2xl font-normal">Why Partner With Us</h2>
                    <div className="flex flex-col gap-2">
                        <p className="text-[#6c6c6c] text-base font-light">
                            Our proven methods for building automation that remains maintainable at scale.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <p className="text-black text-lg font-normal mb-3">Services</p>
                            <ul className="list-disc list-inside space-y-1">
                                {SERVICES.map((item) => (
                                    <li key={item} className="text-[#6c6c6c] text-base font-light">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div>
                            <p className="text-black text-lg font-normal mb-3">Benefits</p>
                            <ul className="list-disc list-inside space-y-1">
                                {BENEFITS.map((item) => (
                                    <li key={item} className="text-[#6c6c6c] text-base font-light">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}