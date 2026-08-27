"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import approachPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section11_image.svg";

const STEPS = [
    { n: "1", title: "Explore", desc: "Map current processes and identify where automation could remove the most friction." },
    { n: "2", title: "Assess", desc: "Evaluate feasibility, ROI, and risk to prioritize the automation opportunities worth pursuing." },
    { n: "3", title: "Design", desc: "Architect the automation solution, from bot logic to integration points." },
    { n: "4", title: "Develop", desc: "Build and test the automation in a controlled environment before go-live." },
    { n: "5", title: "Deploy & Monitor", desc: "Roll out at scale and keep watch with monitoring that catches issues before they impact the business." },
];

export default function OurAutomationApproach() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] flex flex-col items-center gap-10 sm:gap-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[736px] text-center"
            >
                <h2 className="text-black text-2xl font-semibold">Our Automation Approach</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    A structured path from opportunity discovery to a live, running automation.
                </p>
            </motion.div>

            <div className="max-w-[1280px] w-full flex flex-col lg:flex-row">
                <div className="relative w-full h-[260px] lg:h-[653px] lg:w-[567px] shrink-0">
                    <Image src={approachPhoto} alt="" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-6 sm:gap-0 flex-1 justify-center px-0 lg:pl-[77px]">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                            className="flex gap-6 sm:gap-[70px] items-center py-3 sm:py-[18px]"
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
