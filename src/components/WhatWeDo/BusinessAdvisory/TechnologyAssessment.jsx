"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import assessmentBg from "@/assets/WhatWeDo/Business Advisory/Section11_Technology_Assessment_Bg.svg";
import arrowIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Section2_RightArrow.svg";

const CARDS = [
    {
        eyebrow: "Machine Learning",
        title: "Responsible AI Frameworks",
        lines: [
            "Build AI systems that are transparent and trustworthy.",
            "Implement governance, fairness, and compliance practices.",
            "Reduce operational and regulatory risks.",
            "Deploy AI responsibly across the enterprise.",
        ],
    },
    {
        eyebrow: "Machine Learning",
        title: "Enterprise AI Solutions",
        lines: [
            "Develop scalable AI-powered business applications.",
            "Automate workflows with intelligent decision-making.",
            "Integrate AI seamlessly into existing systems.",
            "Drive measurable business outcomes.",
        ],
    },
    {
        eyebrow: "Machine Learning",
        title: "Predictive Analytics",
        lines: [
            "Forecast demand and customer behaviour.",
            "Identify opportunities through advanced analytics.",
            "Optimise operations with data-driven insights.",
            "Enable proactive business planning.",
        ],
    },
    {
        eyebrow: "Machine Learning",
        title: "Intelligent Automation",
        lines: [
            "Automate repetitive and time-consuming processes.",
            "Improve efficiency with AI-powered workflows.",
            "Enhance accuracy while reducing manual effort.",
            "Free teams to focus on strategic initiatives.",
        ],
    },
    {
        eyebrow: "Machine Learning",
        title: "Computer Vision",
        lines: [
            "Extract actionable insights from images and video.",
            "Automate visual inspection and quality assurance.",
            "Enable real-time object detection and recognition.",
            "Power intelligent applications with visual AI.",
        ],
    },
];
export default function TechnologyAssessment() {
    const [active, setActive] = useState(0);
    const other = (active + 1) % CARDS.length;
    const step = (dir) => setActive((prev) => (prev + dir + CARDS.length) % CARDS.length);

    return (
        <section className="w-full bg-[#f2f2f2] py-10 sm:py-[100px] px-6 sm:px-[40px] flex flex-col items-center gap-10 sm:gap-[100px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] text-center"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">Technology Assessment</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Turn Data into Intelligent Decisions
                    <br />
                    <br />
                    Assess your current technology landscape to identify opportunities for modernization,
                    optimization, and innovation.
                </p>
            </motion.div>

            <div className="relative w-full max-w-[1220px] sm:h-[592px]">
                <div className="relative w-full aspect-[607/592] sm:absolute sm:left-0 sm:top-0 sm:w-[607px] sm:h-[592px] bg-[#5c5c5c] overflow-hidden">
                    <Image src={assessmentBg} alt="" fill className="object-cover" />
                </div>

                <div className="relative sm:absolute sm:left-[302px] sm:top-[108px] mt-6 sm:mt-0 flex flex-col sm:flex-row gap-5 items-stretch">
                    <motion.div
                        key={`active-${active}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#16171a] w-full sm:w-[439px] sm:h-[377px] flex flex-col justify-between px-7 py-6 sm:py-[48px] gap-6"
                    >
                        <div className="flex flex-col gap-3">
                            <p className="text-white text-lg font-light">{CARDS[active].eyebrow}</p>
                            <p className="text-white text-2xl font-medium">{CARDS[active].title}</p>
                        </div>
                        <div className="text-[#ce9d9d] text-base font-light leading-relaxed">
                            {CARDS[active].subtitle && <p className="mb-3">{CARDS[active].subtitle}</p>}
                            {CARDS[active].desc && <p>{CARDS[active].desc}</p>}
                            {CARDS[active].lines?.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </motion.div>

                    <button
                        type="button"
                        onClick={() => setActive(other)}
                        className="bg-white w-full sm:w-[439px] sm:h-[377px] flex flex-col justify-between px-7 py-6 sm:py-[48px] gap-6 text-left"
                    >
                        <div className="flex flex-col gap-3">
                            <p className="text-black text-lg font-light">{CARDS[other].eyebrow}</p>
                            <p className="text-black text-2xl font-medium">{CARDS[other].title}</p>
                        </div>
                        <div className="text-[#6c6c6c] text-base font-light leading-relaxed">
                            {CARDS[other].subtitle && <p className="mb-3">{CARDS[other].subtitle}</p>}
                            {CARDS[other].desc && <p>{CARDS[other].desc}</p>}
                            {CARDS[other].lines?.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </button>
                </div>

                <div className="mt-8 sm:mt-0 sm:absolute sm:left-[970px] sm:top-[531px] bg-white rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2 mx-auto sm:mx-0">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => step(-1)}
                        className="flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border border-black text-black shrink-0 transition-transform hover:scale-110"
                    >
                        ←
                    </button>

                    <div className="flex items-center gap-[10px]">
                        {CARDS.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                onClick={() => setActive(index)}
                                className={`size-[8px] rounded-full border-[0.5px] transition-colors ${index === active
                                    ? "bg-[#0061af] border-[#0061af]"
                                    : "border-black"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => step(1)}
                        className="flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border border-black text-black shrink-0 transition-transform hover:scale-110"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
