"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import bannerBg from "@/assets/WhatWeDo/Customer Experience/Section4_Bg.svg";
import prevArrow from "@/assets/WhatWeDo/Customer Experience/Icons/Section4_LeftPreviousArrow.svg";
import nextArrow from "@/assets/WhatWeDo/Customer Experience/Icons/Section4_RightNextArrow.svg";

const SLIDES = [
    {
        title: "Service Desk Solutions",
        subtitle: "Deliver Faster, Smarter Customer Support",
        paragraphs: [
            "Modern service desks provide a single point of contact for customer inquiries, technical support, and issue resolution, ensuring consistent and efficient service delivery.",
            "Ascendus helps organizations implement intelligent service desk platforms with automation, knowledge management, and AI-assisted support to improve response times and customer satisfaction.",
        ],
    },
    {
        title: "Omnichannel Customer Support",
        subtitle: "Connect with Customers Across Every Channel",
        paragraphs: [
            "Customers expect seamless support whether they reach out through phone, email, chat, social media, or self-service portals. An integrated omnichannel strategy ensures every interaction feels connected.",
            "We design customer engagement solutions that unify communication channels, providing agents with complete customer context and delivering a consistent support experience.",
        ],
    },
    {
        title: "AI-Powered Customer Service",
        subtitle: "Intelligent Support Available 24/7",
        paragraphs: [
            "Artificial intelligence enhances customer service by automating repetitive requests, providing instant responses, and intelligently routing complex issues to the right specialists.",
            "Ascendus leverages AI chatbots, virtual assistants, predictive analytics, and automation to reduce service costs while improving customer satisfaction and operational efficiency.",
        ],
    },
    {
        title: "Customer Experience Optimization",
        subtitle: "Turn Every Interaction into Lasting Value",
        paragraphs: [
            "Exceptional customer experiences are built through personalization, proactive communication, and continuous performance monitoring across every touchpoint.",
            "Our customer experience solutions combine analytics, feedback management, and process optimization to help organizations strengthen customer loyalty and drive sustainable business growth.",
        ],
    },
];

export default function CustomerServiceSolutions() {
    const [active, setActive] = useState(0);
    const slide = SLIDES[active];

    const handlePrev = () => setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    const handleNext = () => setActive((prev) => (prev + 1) % SLIDES.length);

    return (
        <section className="w-full py-14 sm:pt-20 sm:pb-0  bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-14"
            >
                <h2 className="text-black text-2xl font-semibold">Team Adoption & Seamless Context</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    Why our approach to customer experience drives long-term adoption.
                </p>
            </motion.div>

            <div className="relative w-full h-[420px] sm:h-[600px] lg:h-[650px] overflow-hidden bg-black">
                <Image src={bannerBg} alt="" fill className="object-cover opacity-70" />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black" /> */}

                <div className="absolute inset-0 flex items-end justify-center px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.4 }}
                            className="w-full max-w-[938px] bg-white/[0.28] h-[500px] text-center text-white px-6 sm:px-12 py-10 sm:py-14"
                        >
                            <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8">{slide.title}</h3>
                            <div className="flex flex-col gap-4 text-base sm:text-lg lg:text-2xl font-light">
                                <p>{slide.subtitle}</p>
                                {slide.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    type="button"
                    aria-label="Previous"
                    onClick={handlePrev}
                    className="hidden sm:flex items-center justify-center absolute left-6 lg:left-[210px] bottom-0 -translate-y-1/2 size-[52px] lg:size-[74px] transition-transform duration-300 hover:scale-110"
                >
                    <Image src={prevArrow} alt="" fill className="object-contain" />
                </button>
                <button
                    type="button"
                    aria-label="Next"
                    onClick={handleNext}
                    className="hidden sm:flex items-center justify-center absolute right-6 lg:right-[210px] bottom-0 -translate-y-1/2 size-[52px] lg:size-[74px] transition-transform duration-300 hover:scale-110"
                >
                    <Image src={nextArrow} alt="" fill className="object-contain" />
                </button>
            </div>
        </section>
    );
}
