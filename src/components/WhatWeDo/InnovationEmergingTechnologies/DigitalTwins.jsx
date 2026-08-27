"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import twinsPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section4_Digital_Twins.svg";

const ITEMS = [
    {
        title: "Manufacturing Simulation",
        desc: "Model production lines and processes digitally to test changes safely before they touch the shop floor.",
    },
    {
        title: "Process Optimization",
        desc: "Continuously tune digital twins against real operational data to find efficiency gains humans would miss.",
    },
    {
        title: "Performance Monitoring",
        desc: "Track equipment and process health in real time through a live digital mirror of physical operations.",
    },
    {
        title: "Predictive Maintenance Models",
        desc: "Anticipate equipment failures before they happen using twin-driven predictive analytics.",
    },
    {
        title: "Scenario Analysis",
        desc: "Run what-if scenarios on the digital twin to de-risk major operational and capital decisions.",
    },
    {
        title: "Continuous Innovation",
        desc: "Keep the twin in sync with the physical system so it stays a reliable testbed for new ideas.",
    },
];

export default function DigitalTwins() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % ITEMS.length);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px] flex flex-col items-center gap-8 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-black text-2xl font-semibold">Digital Twins</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Create living digital replicas of physical assets and processes to simulate, predict, and
                    optimize before committing real-world resources.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 w-full max-w-[1400px] mx-auto">
                <div className="flex flex-col justify-between w-full lg:w-[469px] shrink-0">
                    {ITEMS.map((item, index) => {
                        const isActive = index === active;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActive(index)}
                                className={`text-left flex flex-col justify-center px-3 transition-all ${isActive ? "border-l-[5px] border-[#2d8ec5] py-4 gap-1" : "border-l-0 py-2"
                                    }`}
                            >
                                <span className={`text-black ${isActive ? "text-xl sm:text-2xl font-semibold" : "text-[#515151] text-lg font-light"}`}>
                                    {item.title}
                                </span>
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-black text-base font-light"
                                    >
                                        {item.desc}
                                    </motion.span>
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="relative w-full lg:flex-1 h-[350px] sm:h-[550px] lg:h-[520px] overflow-hidden">
                    <AnimatedImage active={active} src={twinsPhoto} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                    <div className="absolute inset-x-6 sm:inset-x-10 bottom-6 sm:bottom-10 flex items-end justify-between gap-6">
                        <p className="text-white text-lg sm:text-2xl font-normal max-w-[344px]">
                            Helping organizations realize value faster through proven methodologies.
                        </p>
                        <p className="text-white text-2xl sm:text-[32px] font-semibold shrink-0">
                            {String(active + 1).padStart(2, "0")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AnimatedImage({ active, src }) {
    return (
        <motion.div key={active} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="absolute inset-0">
            <Image src={src} alt="" fill className="object-cover" />
        </motion.div>
    );
}
