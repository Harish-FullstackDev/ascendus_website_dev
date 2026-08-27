"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import sectionImage from "@/assets/WhatWeDo/Experience Design/Section2_Image.jpg";

const TABS = [
    {
        title: "User Interface Design",
        desc: "We design visually engaging interfaces that are intuitive, consistent, and aligned with your brand identity to create memorable digital experiences.",
    },
    {
        title: "User Experience Design",
        desc: "Our UX process focuses on understanding user behaviour, simplifying interactions, and creating seamless journeys that improve engagement and satisfaction.",
    },
    {
        title: "Responsive Design",
        desc: "Every interface is optimized to perform beautifully across desktops, tablets, and mobile devices, ensuring a consistent user experience everywhere.",
    },
    {
        title: "Mobile & Web UI",
        desc: "We craft modern interfaces for web and mobile applications that balance aesthetics, usability, accessibility, and business objectives.",
    },
    {
        title: "Dashboard Design",
        desc: "Our dashboards present complex information through intuitive layouts, helping users quickly understand insights and make informed decisions.",
    },
    {
        title: "Design Optimization",
        desc: "We continuously refine digital experiences through usability improvements, accessibility enhancements, and interface optimizations that increase adoption.",
    },
];

const ROTATE_INTERVAL = 4500;

export default function UIUXDesign() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TABS.length);
        }, ROTATE_INTERVAL);

        return () => clearInterval(timer);
    }, [activeIndex]);

    return (
        <section className="w-full py-10 sm:pt-16 sm:pb-3 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[49px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">
                    UIUX Design
                </h2>

                <div className="text-black text-base sm:text-lg font-light">
                    <p>Transform Ideas into Digital Products</p>
                    <p>
                        From concept to launch, we design scalable digital
                        products that align user expectations with business
                        goals.
                    </p>
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-0 sm:gap-12 items-start">
                {/* Left */}
                <div className="w-full lg:w-[420px] shrink-0">
                    <div className="space-y-5">
                        <h3 className="text-[34px] leading-tight font-semibold text-black">
                            Design Interfaces That Feel Natural
                        </h3>

                        <p className="text-[18px] leading-8 text-[#555] font-light">
                            We create intuitive, visually engaging, and user-friendly interfaces
                            that provide seamless experiences across web, mobile, and enterprise
                            platforms.
                        </p>
                    </div>

                    <div className="flex flex-col w-full lg:w-[405px] min-h-[520px] gap-6">
                        {TABS.map((tab, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <button
                                    key={tab.title}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`flex items-center h-[52px] pl-4 text-left border-l-[3px]
          ${isActive
                                            ? "border-[#2D8EC5]"
                                            : "border-[#BDBDBD]"
                                        }`}
                                >
                                    <span
                                        className={`text-lg font-light ${isActive ? "text-black" : "text-[#6C6C6C]"
                                            }`}
                                    >
                                        {tab.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>


                {/* Right */}
                <div className="relative w-full lg:flex-1 h-[550px] lg:h-[620px] overflow-hidden">
                    <Image
                        src={sectionImage}
                        alt=""
                        fill
                        className="object-cover"
                    />

                    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" /> */}
                    <div className="absolute inset-0 bg-black/35" />

                    <div className="absolute bottom-0 left-0 right-0 p-10">
                        <div className="max-w-[520px] ml-auto bg-white/95 backdrop-blur-md p-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{
                                        duration: 0.35,
                                        ease: "easeOut",
                                    }}
                                    className="flex flex-col gap-4"
                                >
                                    <h3 className="text-[36px] font-semibold text-black mb-4">
                                        {TABS[activeIndex].title}
                                    </h3>

                                    <p className="text-[19px] leading-9 text-[#555] font-light">
                                        {TABS[activeIndex].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}