"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import productStrategyIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/select-product_svgrepo.com.svg";
import mvpIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/Vector.svg";
import validationIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/Vector-1.svg";
import prioritizationIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/Vector-2.svg";

const ITEMS = [
    {
        icon: productStrategyIcon,
        title: "Product Strategy",
        desc: "Define the product vision, target users, and success metrics before a single line of code is written.",
    },
    {
        icon: mvpIcon,
        title: "MVP Design",
        desc: "Scope a lean, testable version of the product that proves the core value proposition fast.",
    },
    {
        icon: validationIcon,
        title: "Product Validation",
        desc: "Validate assumptions with real users early so investment goes toward what actually works.",
    },
    {
        icon: prioritizationIcon,
        title: "Feature Prioritization",
        desc: "Sequence the roadmap by impact and effort so the team always builds what matters most next.",
    },
];

export default function SmartEnterpriseSolutions() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[57px] flex flex-col lg:flex-row gap-10 lg:gap-[60px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:w-[442px] shrink-0"
            >
                <h2 className="text-black text-2xl font-normal">Smart Enterprise Solutions</h2>
                <p className="text-[#6c6c6c] text-lg font-light">
                    Integrate emerging technologies across your enterprise to create connected, automated, and
                    data-driven business environments.
                </p>
            </motion.div>

            <div className="flex-1 flex flex-col">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className={`flex items-center gap-8 py-6 sm:py-[27px] ${
                            index !== 0 ? "border-t border-black/10" : ""
                        }`}
                    >
                        <div className="flex items-center justify-center size-[60px] shrink-0">
                            <Image src={item.icon} alt="" width={40} height={40} className="object-contain" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-black text-xl sm:text-2xl font-normal">{item.title}</p>
                            <p className="text-[#6c6c6c] text-base font-light">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
