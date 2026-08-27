"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDesignPhoto from "@/assets/WhatWeDo/Customer Experience/webp/Customer_Team_Adoption.webp";

const BOXES = [
    {
        title: "CRM That Sales Teams Actually Use",
        desc: "We design CRM implementations around how your sales and service teams actually work, not a generic template, so adoption happens naturally instead of by mandate.",
    },
    {
        title: "Connected Journeys Across Every Channel",
        desc: "We build omnichannel experiences where context follows the customer, from a marketing campaign through to a service call, so no interaction starts from zero.",
    },
];

export default function TeamAdoption() {
    return (
        <section className="w-full py-10 px-6 sm:p-[64px] bg-[#f3f6f9]">
            {/* Two columns fill the full padded width via proportional flex-grow (≈654:475,
                the Figma ratio) instead of fixed px, so they scale together on any desktop
                width instead of leaving a mismatched gap between them. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-6 w-full">
                {/* Left column: title/description sits only above the cards, level with the image's top */}
                <div className="flex flex-col gap-10 lg:gap-[75px] w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap23"
                    >
                        <h2 className="text-[#2E3033] text-[28px] font-semibold">Team Adoption &amp; Seamless Context</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Why our approach to customer experience drives long-term adoption.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6 w-full lg:flex-1"
                    >
                        {BOXES.map((box) => (
                            <div
                                key={box.title}
                                className="bg-white w-full sm:flex-1 lg:h-full flex flex-col items-start gap-12 lg:gap-16 px-6 py-8"
                            >
                                <h2 className="text-[#2E3033] text-2xl font-semibold">{box.title}</h2>
                                <p className="text-[#55595E] text-lg font-light leading-relaxed tracking-relaxed ">{box.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:flex-[475_1_0%] aspect-auto lg:aspect-[475/563] overflow-hidden"
                >
                    <Image src={serviceDesignPhoto} alt="" fill className="object-cover object-bottom" />
                </motion.div>
            </div>
        </section>
    );
}

