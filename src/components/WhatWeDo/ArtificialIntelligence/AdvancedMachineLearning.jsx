"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import mainImage from "@/assets/WhatWeDo/Artificial Intelligence/Section4_MachineLearning_Main.jpg";
import sideImage1 from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Machine_Learning.webp";
import sideImage2 from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Intelligent_Assistants.webp";
import sideImage3 from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Predictive_Intelligence.webp";
import sideImage4 from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_AI_Governance.webp";

const ITEMS = [
    {
        title: "Machine Learning",
        desc: "Custom models trained on your operational data to forecast, classify, and detect patterns at scale.",
        image: sideImage1,
    },
    {
        title: "Intelligent Assistants",
        desc: "Conversational interfaces that give employees and customers instant, accurate answers inside existing workflows.",
        image: sideImage2,
    },
    {
        title: "Predictive Intelligence",
        desc: "Forward-looking models that flag risk, demand shifts, and operational anomalies before they affect the business.",
        image: sideImage3,
    },
    {
        title: "AI Governance",
        desc: "Frameworks and controls that keep AI usage compliant, explainable, and aligned with enterprise risk policy.",
        image: sideImage4,
    },
];


const ROTATE_INTERVAL = 4500;

export default function AdvancedMachineLearning() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % ITEMS.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [active]);

    return (
        <section className="w-full py-10 sm:pb-0 sm:pt-16 px-6 sm:px-[0px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[780px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-2xl font-semibold">Advanced Machine Learning &amp; Governance</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">Targeted AI and machine learning execution services</p>
            </motion.div>

            <div className="flex flex-col lg:flex-row max-w-screen mx-auto lg:h-[500px] pt-16 md:pt-16">
                <div className="relative w-full h-[220px] lg:h-full lg:w-[35%] shrink-0 overflow-hidden">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={ITEMS[active].title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={ITEMS[active].image}
                                alt={ITEMS[active].title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                </div>

                <div className="flex flex-col w-full lg:flex-1">
                    {ITEMS.map((item, index) => {
                        const isActive = index === active;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActive(index)}
                                className={`relative text-left flex flex-col justify-center gap-3 px-6 sm:px-8 sm:h-1/4 border-b border-[#cac9c9] last:border-b-0 overflow-hidden bg-[#F8FAFC] ${isActive ? "py-6 sm:py-6" : "py-6 sm:py-0"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="ml-active-highlight"
                                        className="absolute inset-0 bg-[#E8EBEF] border-l-[12px] border-l-[#1C5F85]"
                                        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                                    />
                                )}
                                <div className="relative flex flex-col gap-3 ">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                                className="overflow-hidden text-[#55595E] text-base w-[80%] font-normal"
                                            >
                                                {item.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
