"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import industryBg from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section9_image.svg";

const ITEMS = [
    {
        title: "Smart Manufacturing",
        desc: "Modernize manufacturing with connected technologies, automation, AI, IoT, and advanced analytics to create smart factories and intelligent production systems.",
    },
    {
        title: "Industrial Automation",
        desc: "Automate repetitive and high-precision tasks on the factory floor to boost throughput and consistency.",
    },
    {
        title: "Predictive Quality Control",
        desc: "Catch defects before they leave the line using sensor data and machine learning models.",
    },
    {
        title: "Connected Supply Chain",
        desc: "Link production data with suppliers and logistics partners for end-to-end visibility.",
    },
    {
        title: "Workforce Augmentation",
        desc: "Equip frontline workers with connected tools and real-time guidance to work faster and safer.",
    },
];

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

export default function Industry4() {
    const [[index, direction], setPage] = useState([0, 1]);
    const maxIndex = ITEMS.length - 2;
    const active = ITEMS[index];
    const next = ITEMS[index + 1];

    const goTo = (nextIndex, dir) => setPage([Math.max(0, Math.min(maxIndex, nextIndex)), dir]);

    return (
        <section className="w-full bg-[#f2f2f2] py-10 sm:py-[100px] px-6 sm:px-[40px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[880px] mx-auto text-center mb-10 sm:mb-[100px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Industry 4.0</h2>
                <p className="text-black text-lg font-light">Build Intelligent Manufacturing Operations</p>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Modernize manufacturing with connected technologies, automation, AI, IoT, and advanced analytics
                    to create smart factories and intelligent production systems.
                </p>
            </motion.div>

            <div className="relative max-w-[1220px] mx-auto sm:h-[592px] sm:overflow-hidden">
                <div className="relative h-[720px] overflow-hidden sm:h-full sm:overflow-visible">
                    <div className="absolute inset-0 bg-[#5c5c5c] sm:w-[49.75%]">
                        <Image src={industryBg} alt="" fill className="object-cover" />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:justify-start sm:gap-[21px] sm:px-0 sm:pl-[24.8%]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-[21px]"
                            >
                                <div className="bg-[#0a2b3e] w-full sm:w-[439px] h-[300px] sm:h-[377px] p-6 sm:p-[27px] flex flex-col justify-center gap-4 sm:gap-6 text-white">
                                    <p className="text-xl sm:text-2xl font-semibold">{active.title}</p>
                                    <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
                                        {active.desc}
                                    </p>
                                </div>
                                <div className="bg-white w-full sm:w-[439px] h-[300px] sm:h-[377px] p-6 sm:p-[27px] flex flex-col justify-center gap-4 sm:gap-6 text-black">
                                    <p className="text-xl sm:text-2xl font-semibold">{next.title}</p>
                                    <p className="text-[#6c6c6c] text-sm sm:text-base font-light leading-relaxed">
                                        {next.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="relative mt-4 ml-auto mr-4 bg-white rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2 sm:absolute sm:mt-0 sm:mr-0 sm:right-0 sm:bottom-0">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => goTo(index - 1, -1)}
                        disabled={index === 0}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border shrink-0 transition-transform hover:scale-110 ${index === 0 ? "border-[#a4a7a5] text-[#a4a7a5]" : "border-black text-black"
                            }`}
                    >
                        ←
                    </button>
                    <div className="flex items-center gap-[10px]">
                        {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
                            <button
                                key={dotIndex}
                                type="button"
                                aria-label={`Go to slide ${dotIndex + 1}`}
                                onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                                className={`size-[8px] rounded-full border-[0.5px] transition-colors ${dotIndex === index ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-black"
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => goTo(index + 1, 1)}
                        disabled={index === maxIndex}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border shrink-0 transition-transform hover:scale-110 ${index === maxIndex ? "border-[#a4a7a5] text-[#a4a7a5]" : "border-black text-black"
                            }`}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}

