"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import strategyPhoto from "@/assets/WhatWeDo/Business Advisory/Section3_Business_Strategy_Bg.svg";

const SLIDES = [
    {
        title: "Strategic Planning",
        subtitle: "Build a Roadmap for Sustainable Growth",
        overlay: "In today's rapidly evolving business landscape, organizations must continuously adapt to changing market conditions, emerging technologies, and customer expectations. A well-defined strategy enables businesses to improve efficiency, reduce risk, optimize investments, and remain competitive.",
        image: strategyPhoto
    },
    {
        title: "Transformation Advisory",
        subtitle: "Bridge the gap between vision and execution",
        overlay: "Successful transformation requires connecting long-term vision with operational readiness. We design programs that build internal capability, align diverse stakeholder priorities, and implement rigorous governance structures to ensure goals are met.",
        image: strategyPhoto
    },
    {
        title: "Performance Optimization",
        subtitle: "Identify efficiency and productivity gains",
        overlay: "Optimize your operating model by auditing workflows, identifying operational bottlenecks, and applying lean principles. We help organizations streamline processes to drive sustained efficiency and bottom-line impact.",
        image: strategyPhoto
    }
];

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0
    })
};

export default function BusinessStrategy() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setActive((prev) => (prev + 1) % SLIDES.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    const currentSlide = SLIDES[active];

    return (
        <section className="relative w-full lg:max-w-screen lg:h-[728px] mx-auto overflow-hidden">
            {/* Top Info Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:absolute lg:left-[50px] lg:top-0 lg:w-96 px-6 lg:px-0 py-6 lg:py-0 z-10"
            >
                <h2 className="text-black text-2xl font-normal mb-2">Business Strategy</h2>
                <p className="text-gray-700 text-lg font-normal leading-6 mb-2">
                    Build a Roadmap for Sustainable Growth
                </p>
                <p className="text-gray-700 text-lg font-normal leading-6">
                    Develop clear business strategies that align organizational goals with market opportunities, innovation, and operational excellence.
                </p>
            </motion.div>

            {/* Horizontal Background & Active Slide Info */}
            <div className="w-full h-64 lg:absolute lg:left-0 lg:top-[262px] bg-gradient-to-r from-stone-300 to-zinc-100 overflow-hidden flex flex-col justify-center px-6 sm:px-[50px] lg:px-0">
                <div className="lg:absolute lg:left-[50px] lg:top-[61px] lg:w-72">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={active}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-black text-3xl font-normal leading-10 mb-2">
                                {currentSlide.title}
                            </h3>
                            <p className="text-gray-700 text-lg font-normal leading-6">
                                {currentSlide.subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Main Featured Image Card */}
            <div className="relative w-full lg:w-[715px] h-[500px] lg:h-[707px] lg:absolute lg:left-[550px] lg:top-[21px] overflow-hidden bg-black/5 z-10">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={active}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/70" />

                        <p className="absolute left-6 lg:left-[68px] right-6 lg:right-[140px] bottom-8 lg:bottom-[60px] text-white text-lg lg:text-2xl font-normal leading-relaxed lg:leading-8">
                            {currentSlide.overlay}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Left Navigation Arrow */}
            <button
                type="button"
                aria-label="Previous"
                onClick={handlePrev}
                className="hidden lg:flex items-center justify-center absolute left-[497px] top-[600px] z-20 hover:opacity-75 transition-opacity"
            >
                <svg width="28" height="56" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L3 21L22 40" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button
                type="button"
                aria-label="Next"
                onClick={handleNext}
                className="hidden lg:flex items-center justify-center absolute left-[1285px] top-[600px] z-20 hover:opacity-75 transition-opacity"
            >
                <svg width="28" height="56" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L21 21L2 40" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </section>
    );
}