"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import skylinePhoto from "@/assets/WhatWeDo/Managed Services/new/Process.jpg";

const TIERS = [
    {
        n: "L1",
        title: "Support That Understands SAP, Not Just Tickets",
        desc: "Our managed services teams bring real SAP process knowledge to every incident, so issues get resolved at the root cause, not just closed and reopened next month",
    },
    {
        n: "L2",
        title: "From Keeping the Lights On to Continuous Improvement",
        desc: "We treat managed services as an ongoing opportunity to tune performance and reduce recurring issues, not a static support contract that only reacts to tickets.",
    },
];

export default function ProcessAwareSupportRootCauseResolution() {
    return (
        <section className="w-full">
            {/* Desktop / tablet — the background image is locked to the Figma
                frame's own 1281:829 ratio, and the header + white card panel are
                positioned as percentages of that same box, so both track the
                image proportionally instead of drifting at other widths. */}
            <div className="relative hidden w-full overflow-hidden sm:block sm:aspect-[1281/809]">
                <Image
                    src={skylinePhoto}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />

                {/* Header — sits in the image's upper band, above the panel */}
                <div className="absolute left-1/2 top-[7.7%] w-[90%] max-w-[772px] -translate-x-1/2 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[28px] font-semibold leading-tight text-white"
                    >
                        Process-Aware Support &amp; Root-Cause Resolution
                    </motion.h2>
                    <p className="mt-2 text-lg font-light leading-snug text-white">
                        Moving beyond ticket resolution to continuous system improvement
                    </p>
                </div>

                {/* White panel — a fixed window onto the frame (top 29.3% / height
                    61.8%, matching the Figma proportions), so it scales with the
                    image instead of being sized off the cards' content. */}
                <div className="absolute inset-x-0 top-[29.3%] flex h-[55%] items-center justify-center bg-white/[0.94]">
                    <div className="grid w-full sm:px-[70px] grid-cols-2 gap-[3.7%]">
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
                                className="aspect-[580/300] border border-black px-[clamp(1rem,2.4vw,2.5rem)] py-[clamp(1.25rem,2.6vw,2.5rem)]"
                            >
                                <h2 className="text-2xl sm:w-[60%] font-semibold leading-snug text-[#2E3033]">
                                    {tier.title}
                                </h2>
                                <p className="mt-8 text-lg sm:w-[90%] font-light leading-snug text-[#55595E]">
                                    {tier.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile: simple stacked layout */}
            <div className="flex flex-col sm:hidden">
                <div className="relative h-[220px] w-full">
                    <Image src={skylinePhoto} alt="" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-2 bg-black px-6 py-8">
                    <h2 className="font-heading text-3xl font-semibold leading-[1.2] text-white">
                        Process-Aware Support &amp; Root-Cause Resolution
                    </h2>
                    <p className="text-lg font-light leading-[1.2] text-white">
                        Moving beyond ticket resolution to continuous system improvement
                    </p>
                </div>
                <div className="flex flex-col gap-8 bg-[#f5f5f5] px-6 py-6">
                    {TIERS.map((tier) => (
                        <div key={tier.n} className="border border-black bg-white p-5">
                            <p className="text-lg leading-snug text-black">{tier.title}</p>
                            <p className="mt-4 text-sm font-light text-black">{tier.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
