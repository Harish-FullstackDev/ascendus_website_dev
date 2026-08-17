"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import codeBg from "@/assets/WhatWeDo/Digital Engineering/Section5_API_CodeBg.jpg";

const SLIDES = [
    {
        title: "RESTful & GraphQL APIs",
        desc: "Develop secure, scalable APIs that allow applications, systems, and services to communicate efficiently across your enterprise.",
        image: codeBg
    },
    {
        title: "API Gateway & Management",
        desc: "Centralize traffic control, versioning, and throttling through a governed API gateway layer built for enterprise scale.",
        image: codeBg
    },
    {
        title: "Authentication & Authorization",
        desc: "Protect every endpoint with OAuth2, token-based auth, and continuous identity verification at each layer of the stack.",
        image: codeBg
    },
    {
        title: "API Monitoring & Analytics",
        desc: "Real-time observability into latency, error rates, and usage patterns keeps connected ecosystems fast and reliable.",
        image: codeBg
    },
    {
        title: "Third-Party & Partner Integrations",
        desc: "Expose and consume well-documented APIs that let partners and third-party systems plug into your ecosystem safely.",
        image: codeBg
    },
];

const ROTATE_INTERVAL = 5500;

export default function APIDevelopment() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % SLIDES.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [index]);

    const goTo = (next) => setIndex((next + SLIDES.length) % SLIDES.length);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[42px]"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">API Development</h2>
                <div className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    <p className="text-black">Enable Connected Digital Ecosystems</p>
                    <p>
                        Develop secure, scalable APIs that allow applications, systems, and services to communicate
                        efficiently across your enterprise.
                    </p>
                </div>
            </motion.div>

            <div className="relative w-full aspect-[1280/487] min-h-[420px] sm:min-h-[200px] overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-full sm:w-[40.5%]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={SLIDES[index].image}
                                alt={SLIDES[index].title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[59.5%] bg-[#ececec] flex items-center px-6 sm:px-10 lg:px-[53px] py-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex flex-col gap-5 sm:gap-[34px] text-black max-w-full sm:max-w-[500px]"
                        >

                            <p className="text-xl sm:text-[32px] font-normal">{SLIDES[index].title}</p>
                            <p className="text-sm sm:text-lg font-light">{SLIDES[index].desc}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute bottom-6 sm:bottom-10 left-1/2 sm:left-[58%] -translate-x-1/2">
                    <div className="bg-white rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2">
                        <button
                            type="button"
                            aria-label="Previous slide"
                            onClick={() => goTo(index - 1)}
                            className="flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border border-black text-black shrink-0 transition-transform hover:scale-110"
                        >
                            ←
                        </button>
                        <div className="flex items-center gap-[10px]">
                            {SLIDES.map((_, dotIndex) => (
                                <button
                                    key={dotIndex}
                                    type="button"
                                    aria-label={`Go to slide ${dotIndex + 1}`}
                                    onClick={() => goTo(dotIndex)}
                                    className={`size-[8px] rounded-full border-[0.5px] transition-colors ${dotIndex === index ? "bg-[#0061af] border-[#0061af]" : "border-black"
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            aria-label="Next slide"
                            onClick={() => goTo(index + 1)}
                            className="flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border border-black text-black shrink-0 transition-transform hover:scale-110"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
