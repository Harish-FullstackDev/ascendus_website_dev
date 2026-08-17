"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import skylinePhoto from "@/assets/WhatWeDo/Managed Services/Secton5_Image.svg";

const TIERS = [
    {
        n: "L1",
        title: " Support That Understands SAP, Not Just Tickets",
        desc: "Our managed services teams bring real SAP process knowledge to every incident, so issues get resolved at the root cause, not just closed and reopened next month",
    },
    {
        n: "L2",
        title: " From Keeping the Lights On to Continuous Improvement",
        desc: "We don’t just fix what breaks — we analyze recurring issues, optimize configurations, and implement preventive measures that reduce tickets by 20–30% over time",
    },

];

export default function L1L2L3Support() {
    return (
        <section className="w-full">
            {/* Desktop / tablet: image with overlapping title card + floating tier cards, matching the Figma canvas proportions */}
            <div className="hidden sm:block relative w-full aspect-[1281/1017] overflow-hidden">
                <Image
                    src={skylinePhoto}
                    alt=""
                    fill
                    className="object-cover"
                />

                {/* Left Black Panel */}
                {/* <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute left-0 top-[0%] w-[38%] h-[42%] bg-black/90 z-30 px-[5%] py-[5%] flex flex-col justify-center"
                >
                    <h2 className="text-white text-[42px] leading-tight font-medium">
                        L1 / L2 / L3
                        <br />
                        Support
                    </h2>

                    <p className="mt-8 text-white text-[24px] leading-snug font-light max-w-[320px]">
                        Multi-Level Technical Support for Every Challenge
                    </p>
                </motion.div> */}

                {/* White Background */}
                <div className="absolute top-[37%] left-0 w-full z-10">

                    {/* Cards */}
                    <div className="bg-white/90 pt-20 pb-16">
                        <div className="w-[92%] mx-auto grid grid-cols-2 gap-3">
                            {TIERS.map((tier, index) => (
                                <motion.div
                                    key={tier.n}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }}
                                    className="border border-gray-400 p-6 min-h-[240px]"
                                >
                                    <h3 className="text-[22px] leading-snug font-normal">
                                        {tier.title}
                                    </h3>

                                    <p className="mt-8 text-[15px] leading-7 text-gray-700">
                                        {tier.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile: simple stacked layout */}
                <div className="sm:hidden flex flex-col">
                    <div className="relative w-full h-[220px]">
                        <Image src={skylinePhoto} alt="" fill className="object-cover" />
                    </div>
                    <div className="bg-black px-6 py-8 flex flex-col gap-4">
                        <h2 className="text-white text-3xl font-medium leading-[1.2]">
                            Process-Aware Support & Root-Cause Resolution
                        </h2>
                        <p className="text-white text-lg font-light leading-[1.2]">
                            Moving beyond ticket resolution to continuous system improvement
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 px-6 py-6 bg-[#f5f5f5]">
                        {TIERS.map((tier) => (
                            <div key={tier.n} className="bg-white border border-black p-5">
                                <p className="text-black text-lg leading-snug">{tier.title}</p>
                                <p className="text-black text-sm font-light mt-4">{tier.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
