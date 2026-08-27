"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import productStrategyIcon from "@/assets/WhatWeDo/Experience Design/icons/product-strategy.svg";
import mvpDesignIcon from "@/assets/WhatWeDo/Experience Design/icons/mvp-design.svg";
import productValidationIcon from "@/assets/WhatWeDo/Experience Design/icons/product-validation.svg";
import featurePrioritizationIcon from "@/assets/WhatWeDo/Experience Design/icons/feature-prioritization.svg";

const ITEMS = [
    {
        icon: productStrategyIcon,
        title: "Product Strategy",
        desc: "Aligning business goals with user needs to define a clear, validated product direction before design begins.",
    },
    {
        icon: mvpDesignIcon,
        title: "MVP Design",
        desc: "Designing a lean, functional first version that lets you test core assumptions with real users quickly.",
    },
    {
        icon: productValidationIcon,
        title: "Product Validation",
        desc: "Testing concepts and prototypes with real users to confirm demand before committing engineering resources.",
    },
    {
        icon: featurePrioritizationIcon,
        title: "Feature Prioritization",
        desc: "Structured frameworks that help teams focus effort on the features that deliver the most user and business value.",
    },
];

export default function ProductDesign() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[52px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[79px] max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[405px] shrink-0"
                >
                    <h2 className="text-[#0d0c22] text-2xl font-semibold">Product Design</h2>
                    <p className="text-black text-lg font-light">Transform Ideas into Digital Products</p>
                    <p className="text-black text-lg font-light">
                        From concept to launch, we design scalable digital products that align user expectations with
                        business goals.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col w-full"
                >
                    {ITEMS.map((item, index) => (
                        <div
                            key={item.title}
                            className={`flex items-center gap-6 sm:gap-[37px] py-6 sm:py-[18px] ${index !== 0 ? "border-t border-[#d9d9d9]" : ""
                                } ${index === ITEMS.length - 1 ? "border-b border-[#d9d9d9]" : ""}`}
                        >
                            <div className="relative size-[44px] sm:size-[60px] shrink-0">
                                <Image src={item.icon} alt="" fill className="object-contain" />
                            </div>
                            <div className="hidden sm:block w-px self-stretch bg-[#d9d9d9]" />
                            <div className="flex-1 min-w-0 flex flex-col gap-1 sm:gap-2">
                                <p className="text-black text-xl sm:text-2xl font-normal">{item.title}</p>
                                <p className="text-[#7f7f7f] text-base sm:text-lg font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
