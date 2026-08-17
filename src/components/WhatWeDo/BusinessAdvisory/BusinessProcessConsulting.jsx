"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import consultingPhoto from "@/assets/WhatWeDo/Business Advisory/Section7_Business_Process_Consulting.svg";
import pmoPhoto from "@/assets/WhatWeDo/Business Advisory/Section10_PMO_Advisory_Bg.svg";
import techPhoto from "@/assets/WhatWeDo/Business Advisory/Section11_Technology_Assessment_Bg.svg";

const SLIDES = [
    {
        title: "Process Assessment",
        subtitle: "Optimize Business Operations",
        desc: "Analyze and evaluate your current state processes to identify bottlenecks, redundancies, and inefficiencies. We use data-driven insights and stakeholder feedback to pinpoint area where process optimization can deliver the greatest value and return on investment.",
        image: consultingPhoto
    },
    {
        title: "Process Redesign",
        subtitle: "Build Processes That Scale",
        desc: "Reimagine core workflows end-to-end so they support growth instead of holding it back. We design future-state processes that align with modern technologies and maximize team performance.",
        image: pmoPhoto
    },
    {
        title: "Performance Monitoring",
        subtitle: "Track What Matters",
        desc: "Establish KPIs and dashboards that give leadership real-time visibility into process performance. We set up robust governance cycles to ensure continuous improvement and long-term efficiency.",
        image: techPhoto
    },
];

export default function BusinessProcessConsulting() {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        if (active < SLIDES.length - 1) {
            setActive((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (active > 0) {
            setActive((prev) => prev - 1);
        }
    };

    const slide = SLIDES[active];

    return (
        <section className="w-full py-10 sm:py-[60px] px-6 sm:px-[40px] flex flex-col items-center gap-10 sm:gap-[69px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1011px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">Business Process Consulting</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Streamline Operations, Elevate Performance
                    <br />
                    <br />
                    Analyze how work actually gets done across your organization to remove friction, cut waste, and
                    build processes that scale with the business.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-between w-full max-w-screen">
                <div className="w-full lg:w-[498px] lg:h-[457px] overflow-hidden flex items-center">
                    <motion.div
                        key={`text-${active}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white flex flex-col justify-center gap-6 w-full px-2 lg:px-[29px]"
                    >
                        <p className="text-black text-2xl font-medium">{slide.title}</p>
                        <p className="text-black text-2xl font-medium">{slide.subtitle}</p>
                        <p className="text-[#515151] text-lg font-light leading-relaxed">{slide.desc}</p>
                    </motion.div>
                </div>

                <div className="border border-black relative w-full lg:w-[636px] h-[300px] sm:h-[457px] overflow-hidden bg-black/5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image src={slide.image} alt="" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/68 to-transparent" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex items-center justify-between w-full max-w-[1163px] gap-4">
                <div className="relative flex-1 h-[8px] rounded-full bg-[#ebebeb] overflow-hidden">
                    <div
                        className="absolute inset-y-0 left-0 rounded-full bg-[#0061af] transition-all duration-300"
                        style={{ width: `${((active + 1) / SLIDES.length) * 100}%` }}
                    />
                </div>
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={handlePrev}
                        disabled={active === 0}
                        className={`text-2xl transition-colors ${
                            active === 0 ? "text-black/30 cursor-not-allowed" : "text-black hover:text-[#0061af]"
                        }`}
                    >
                        ←
                    </button>
                    <p className="text-black text-2xl sm:text-[32px] font-normal whitespace-nowrap">
                        {active + 1}/<span className="text-[#a4a7a5]">{SLIDES.length}</span>
                    </p>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={handleNext}
                        disabled={active === SLIDES.length - 1}
                        className={`text-2xl transition-colors ${
                            active === SLIDES.length - 1 ? "text-black/30 cursor-not-allowed" : "text-black hover:text-[#0061af]"
                        }`}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
