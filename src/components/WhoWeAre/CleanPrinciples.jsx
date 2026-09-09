"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AUTOPLAY_MS = 2500;

const PRINCIPLES = [
    {
        title: "Ownership",
        description:
            "Minimize custom code in the SAP core to ensure seamless upgrades and innovations.",
    },
    {
        title: "Precision",
        description:
            "Build extensions on SAP Business Technology Platform to stay upgrade safe.",
    },
    {
        title: "Transparency",
        description:
            "Use standard APIs and integration suites instead of direct system modifications.",
    },
    {
        title: "Regional Fluency",
        description:
            "Adopt cloud native practices for scalability, agility, and continuous innovation.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CleanPrinciples() {
    const [activeIndex, setActiveIndex] = useState(0);
    const isPaused = useRef(false);

    useEffect(() => {
        const id = setInterval(() => {
            if (isPaused.current) return;
            setActiveIndex((i) => (i + 1) % PRINCIPLES.length);
        }, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            {/* <div className="w-full h-px bg-[#c7cbcd] max-w-[1300px] mx-auto mb-16 sm:mb-20" /> */}

            <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-[28px] font-semibold text-[#2E3033]">What Shapes How We Deliver </h2>
                    <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                        Four principles carried into every engagement, not values printed on a wall and left there.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[18px]"
                >
                    {PRINCIPLES.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                onMouseEnter={() => {
                                    isPaused.current = true;
                                    setActiveIndex(index);
                                }}
                                onMouseLeave={() => {
                                    isPaused.current = false;
                                }}
                                className="bg-[#EDEDED] flex flex-col justify-start p-6 h-[220px] sm:h-[237px]"
                            >
                                <h2 className="text-2xl text-[#2E3033] font-semibold">
                                    {item.title}
                                </h2>
                                <p
                                    className={`font-light mt-4 leading-relaxed transition-all duration-300 ease-out ${isActive ? "text-lg text-[#55595E]" : "text-xs sm:text-sm text-[#B4B7BA]"
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
