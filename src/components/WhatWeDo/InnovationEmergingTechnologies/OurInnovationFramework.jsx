"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import frameworkPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section11_image.svg";

const STEPS = [
    { n: "1", title: "Explore", desc: "Scan the emerging technology landscape for capabilities relevant to your industry and business model." },
    { n: "2", title: "Assess", desc: "Evaluate feasibility, cost, and risk to separate genuine opportunities from hype." },
    { n: "3", title: "Design", desc: "Architect a solution and pilot plan that fits your existing technology landscape." },
    { n: "4", title: "Develop", desc: "Build and test the solution in a controlled environment before wider rollout." },
    { n: "5", title: "Deploy", desc: "Roll out at scale with the governance and support needed to sustain adoption." },
];

export default function OurInnovationFramework() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] flex flex-col items-center gap-10 sm:gap-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[736px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">Our Innovation Framework</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Evaluate your current technology landscape, identify emerging-tech opportunities, and create a
                    roadmap aligned with your business objectives.
                </p>
            </motion.div>

            <div className="max-w-[1280px] w-full flex flex-col lg:flex-row">
                <div className="relative w-full h-[260px] lg:h-[653px] lg:w-[567px] shrink-0">
                    <Image src={frameworkPhoto} alt="" fill className="object-cover" />
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
                                <span className="text-white text-2xl font-medium">{step.n}</span>
                            </div>
                            <div>
                                <p className="text-black text-xl sm:text-2xl font-medium">{step.title}</p>
                                <p className="text-[#515151] text-sm sm:text-base font-light mt-2 leading-snug">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
