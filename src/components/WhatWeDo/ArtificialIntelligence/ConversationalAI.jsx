"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import conversationalImage from "@/assets/WhatWeDo/Artificial Intelligence/Section10_ConversationalAI_Image3.jpg";

const ITEMS = [
    {
        title: "AI Chatbots",
        desc: "Resolve common questions instantly and hand off seamlessly to a human when a conversation needs one.",
    },
    {
        title: "Voice Assistants",
        desc: "Let customers and employees get things done hands-free with natural, conversational voice interfaces.",
    },
    {
        title: "Omnichannel Conversational Platforms",
        desc: "Deliver one consistent AI experience across web, mobile, messaging, and voice channels.",
    },
    {
        title: "Internal Networks",
        desc: "Give employees a single conversational front door to internal systems, policies, and knowledge.",
    },
];

export default function ConversationalAI() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-black text-2xl font-semibold">Conversational AI</h2>
                <p className="text-black text-base sm:text-lg font-light">Deliver Intelligent Conversations at Scale</p>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Create natural, engaging conversational experiences through AI-powered chatbots and virtual
                    assistants across multiple digital channels.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row max-w-screen mx-auto bg-[#ededed]">
                <div className="flex flex-col gap-8 sm:gap-[54px] px-6 sm:px-[54px] py-8 sm:py-[54px] w-full lg:w-[850px] shrink-0">
                    {ITEMS.map((item) => (
                        <div key={item.title} className="flex flex-col gap-4">
                            <p className="text-black text-xl sm:text-2xl font-semibold">{item.title}</p>
                            <p className="text-[#3d3d4e] text-base sm:text-lg font-light">{item.desc}</p>
                            <div className="h-px w-[140px] bg-[#8f8f8f]" />
                        </div>
                    ))}
                </div>
                <div className="relative w-full h-[260px] lg:h-auto lg:flex-1">
                    <Image src={conversationalImage} alt="" fill className="object-cover" />
                </div>
            </div>
        </section>
    );
}
