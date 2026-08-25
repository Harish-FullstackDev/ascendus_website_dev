"use client";

import { motion } from "framer-motion";

const POINTS = [
    "SAP-certified delivery teams",
    "GCC regulatory awareness",
    "Governance built into every deployment",
    "Proven enterprise integration experience",
    "Outcome-based engagement models",
    "Cross-industry delivery track record",
];

export default function WhyPartnerWithUs() {
    return (
        <section className="w-full">
            <div className="w-full px-6 sm:p-16 sm:pt-0 py-10 ">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">

                    {/* Left */}
                    <div className="flex flex-col gap-2 ">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl font-medium text-[#2E3033]"
                        >
                            Why Partner With Us
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-[#55595E] text-[18px]"
                        >
                            Key advantages of partnering with us for AI transformation.
                        </motion.p>
                    </div>

                    {/* Middle Line */}
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-60 bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="justify-self-start max-w-[467px]"
                    >
                        <ul className="list-disc marker:text-[#7f7f7f] pl-16 space-y-3 text-[#55595E] text-base sm:text-lg font-light">
                            {POINTS.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}