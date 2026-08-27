"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import processAssessmentBg from "@/assets/WhatWeDo/Data Inteligent/Section11_Bg.svg";

const SLIDES = [
    {
        title: "Live Dashboards",
        subtitle: "Make Decisions as Business Happens",
        desc: "Monitor every operational metric in real time and turn raw event streams into dashboards that update the moment something changes, so teams can act instead of waiting on end-of-day reports.",
        image: processAssessmentBg,
    },
    {
        title: "Process Assessment",
        subtitle: "Detect Events the Moment They Happen",
        desc: "Continuously analyze live business processes to catch bottlenecks and anomalies as they occur, improving productivity, reducing costs, and enhancing customer experiences in the moment.",
        image: processAssessmentBg,
    },
    {
        title: "Event-Driven Alerts",
        subtitle: "Respond Before Small Issues Become Big Ones",
        desc: "Set intelligent thresholds and automated alerts that flag unusual patterns instantly, giving teams the lead time to intervene before disruptions reach the customer.",
        image: processAssessmentBg,
    },
];

export default function RealTimeAnalytics() {
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
        <section className="w-full py-10 sm:py-[60px] px-6 sm:px-[40px] bg-[#e6e6e6] flex flex-col items-center gap-10 sm:gap-[69px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1011px] text-center"
            >
                <h2 className="text-black text-2xl font-semibold">Real-Time Analytics</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Streaming Insight for Fast-Moving Enterprises
                    <br />
                    <br />
                    Enable organizations to monitor live operations, detect events instantly, and respond to
                    business changes in real time.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-between w-full max-w-screen">
                <div className="w-full lg:w-[498px] lg:h-[457px] overflow-hidden flex items-center">
                    <motion.div
                        key={`text-${active}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#e6e6e6] flex flex-col justify-center gap-6 w-full px-2 lg:px-[29px]"
                    >
                        <p className="text-black text-2xl font-semibold">{slide.title}</p>
                        <p className="text-black text-2xl font-semibold">{slide.subtitle}</p>
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
                        className="absolute inset-y-0 left-0 rounded-full bg-[#2d8ec5] transition-all duration-300"
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
                            active === 0 ? "text-black/30 cursor-not-allowed" : "text-black hover:text-[#2d8ec5]"
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
                            active === SLIDES.length - 1 ? "text-black/30 cursor-not-allowed" : "text-black hover:text-[#2d8ec5]"
                        }`}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
