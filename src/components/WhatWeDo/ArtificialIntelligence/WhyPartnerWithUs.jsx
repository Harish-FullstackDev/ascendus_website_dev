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
            <div className="w-full px-6 sm:px-[25px] py-10 lg:py-[40px]">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">

                    {/* Left */}
                    <div className="lg:pr-0 pl-0 md:pl-16">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl font-medium text-black"
                        >
                            Why Partner With Us
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-[#3D3D4E] text-[18px] leading-[140%] tracking-[0%]"
                        >
                            Key advantages of partnering with us for AI transformation.
                        </motion.p>
                    </div>

                    {/* Middle Line */}
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-60 bg-[#0061AF]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="justify-self-start max-w-[467px]"
                    >
                        <ul className="list-disc marker:text-[#7f7f7f] pl-16 space-y-3 text-[#3D3D4E] text-base sm:text-lg font-light">
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