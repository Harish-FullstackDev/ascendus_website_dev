"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import mainImage from "@/assets/WhatWeDo/Artificial Intelligence/Section4_MachineLearning_Main.jpg";
import sideImage from "@/assets/WhatWeDo/Artificial Intelligence/Section4_MachineLearning_Side.jpg";

const ITEMS = [
    {
        title: "Faster Decision-Making",
        desc: "Access connected data and real-time insights to make informed business decisions.",
    },
    {
        title: "Operational Excellence",
        desc: "Automate repetitive processes and free teams to focus on higher-value work.",
    },
    {
        title: "Business Agility",
        desc: "Adapt quickly to market shifts with models that learn and improve continuously.",
    },
    {
        title: "Sustainable Growth",
        desc: "Scale predictive capabilities across the business without scaling headcount.",
    },
];

const ROTATE_INTERVAL = 4500;

export default function MachineLearning() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % ITEMS.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [active]);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[0px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[780px] mx-auto text-center mb-10 sm:mb-[50px] sm:px-[50px]"
            >
                <h2 className="text-black text-2xl font-medium">Machine Learning</h2>
                <p className="text-black text-base sm:text-lg font-light">Turn Data into Intelligent Decisions</p>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Build machine learning models that analyze historical data, identify patterns, and generate
                    predictive insights to optimize business performance.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row max-w-screen mx-auto lg:h-[466px]">
                <div className="relative w-full h-[220px] lg:h-full lg:w-[35%] shrink-0 overflow-hidden">
                    <Image src={mainImage} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
                    <Image src={sideImage} alt="" fill className="object-cover opacity-60" />
                </div>

                <div className="flex flex-col w-full lg:flex-1">
                    {ITEMS.map((item, index) => {
                        const isActive = index === active;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActive(index)}
                                className="relative text-left flex flex-col justify-center gap-3 px-6 sm:px-8 py-6 sm:py-0 sm:h-1/4 border-b border-[#cac9c9] last:border-b-0 overflow-hidden bg-[#fdfcfc]"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="ml-active-highlight"
                                        className="absolute inset-0 bg-[#ebeeef] border-l-[12px] border-l-[#015788]"
                                        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                                    />
                                )}
                                <div className="relative flex flex-col gap-3">
                                    <p className="text-black text-xl sm:text-2xl font-medium">{item.title}</p>
                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                                className="overflow-hidden text-black text-base sm:text-xl font-normal"
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
