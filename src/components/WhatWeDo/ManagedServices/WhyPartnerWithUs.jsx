"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import buildingImg from "@/assets/WhatWeDo/Managed Services/new/why.jpg";

const BENEFITS = [
    "SAP-certified support teams",
    "Tiered L1/L2/L3 model",
    "Transparent SLA reporting",
    "Continuous improvement built in",
    "24/7 monitoring capability",
    "Proven transition methodology",
];

export default function WhyPartnerWithUs() {
    return (
        <section className="relative z-10 w-full pt-10 sm:pt:16 pb-10 sm:pb-0">
            {/* The image is a full-bleed element like the photo bands in the
                other Managed Services sections — it must reach the real
                browser edge, not just the edge of a centered/padded container,
                so this row is intentionally NOT wrapped in mx-auto/max-w or
                given side padding. Its width is a fixed px cap (matching
                Figma's 578px) rather than a % of the viewport, so it holds its
                design size instead of growing on wide screens. The card fills
                the remaining space next to it, capped at Figma's 656px. */}
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[360px] w-full shrink-0 overflow-hidden sm:h-[460px] lg:h-[588px] lg:w-[578px]"
                >
                    <Image
                        src={buildingImg}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    {/* Text sits in the image's lower-left, inset as a % of the
                        image itself (not the viewport) so it stays proportionally
                        placed as the image scales between breakpoints. */}
                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 sm:bottom-8 lg:inset-x-auto lg:bottom-[24%] lg:left-[20.8%] lg:right-[14.5%]">
                        <h2 className="font-heading text-2xl font-medium text-white">
                            Why Partner With Us
                        </h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            Core operational standards driving our managed delivery..
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:max-w-[800px] self-center min-h-[400px] lg:h-[480px] bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-6 sm:px-12 py-12" >

                    <ul className="list-disc pl-5 text-lg font-light leading-[48px] text-[#55595E] sm:pl-6">
                        {BENEFITS.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
