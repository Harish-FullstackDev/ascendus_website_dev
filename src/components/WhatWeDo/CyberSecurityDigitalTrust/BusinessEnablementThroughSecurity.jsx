"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import decisionAutomationPhoto from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/webp/Cybersecurity_Business_Enablement.webp";

const ITEMS = [
    {
        eyebrow: "Business Enablement Through Security",
        title: "Rethinking cybersecurity as a driver of safe growth",
        desc: "Security is not the department that says no. It is the reason the business can say yes safely",
        image: decisionAutomationPhoto,
    },
];

export default function BusinessEnablementThroughSecurity() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-0 flex flex-col gap-16 sm:gap-[70px]">
            {ITEMS.map((item) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col sm:block"
                >
                    {/* Color panel: Figma is 768x391 (an aspect ratio, not a fixed box) sitting flush
                        against the right edge of the row and taking ~60% of its width. aspect-[768/391]
                        keeps that ratio intact as the container itself grows/shrinks, instead of a
                        hardcoded height that would distort the panel at other viewport widths. */}
                    <div className="relative w-full sm:w-[60%] sm:ml-auto h-[220px] sm:h-auto sm:aspect-[768/391]">
                        <Image src={item.image} alt="" fill className="object-cover" />
                    </div>

                    {/* Text card: Figma places it 4.5% in from the row's left edge, at ~60% of the
                        row's width, sitting roughly centered against the panel's height — expressed
                        as % + a true vertical center (top-1/2 -translate-y-1/2) so the overlap onto
                        the panel stays proportional at any viewport and self-adjusts to the panel's
                        height instead of a fixed 918x313 box pinned to a magic top offset. */}
                    <div className="relative sm:absolute sm:left-[4.5%] sm:top-1/2 sm:-translate-y-1/2 bg-[#F5F6F6] w-full sm:w-[60%] -mt-4 sm:mt-0 overflow-hidden flex flex-col justify-center gap-6 px-6 py-8 sm:pl-[10%] sm:pr-[20%] sm:pt-[49px] sm:pb-8">
                        <p className="font-heading text-black text-xl sm:text-2xl font-normal">{item.eyebrow}</p>
                        <div className="flex flex-col gap-3">
                            <p className="text-black text-xl sm:text-2xl font-normal">{item.title}</p>
                            <p className="text-[#515151] text-base sm:text-lg font-light">{item.desc}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
