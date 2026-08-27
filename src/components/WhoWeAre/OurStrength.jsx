"use client";

import React from "react";
import { motion } from "framer-motion";

// Per the copy deck: only ship stats we can confirm. The deck lists a 4th
// ("[X] years operating across the region") but flags it explicitly as
// unconfirmed and says to drop to a 3-stat row rather than publish a
// placeholder number — so there are 3 here, not 4.
const STRENGTHS = [
    { value: "150+", title: "SAP engagements delivered", description: "" },
    { value: "400+", title: "Specialists across the practice", description: "" },
    { value: "6", title: "Delivery locations across the GCC", description: "" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function OurStrength() {
    return (
        <section className="w-full py-16 sm:pb-20 sm:pt-10 px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h2 className="text-[28px] font-semibold text-[#2E3033]">The scale behind the practice</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                    Numbers that describe reach, not just size.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-stretch"
            >
                {STRENGTHS.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <div className="hidden sm:block w-px bg-[#cdcdcd] shrink-0" />}
                        <motion.div
                            variants={itemVariants}
                            className="flex-1 flex flex-col justify-center items-center text-center gap-7 py-8 px-6 sm:px-10"
                        >
                            <p className="text-3xl sm:text-4xl text-[#2E3033]">{item.value}</p>
                            <div>
                                <p className="text-xl text-[#55595E]">{item.title}</p>
                                {/* <p className="text-sm font-light text-black mt-3 leading-relaxed">
                                    {item.description}
                                </p> */}
                            </div>
                        </motion.div>
                    </React.Fragment>
                ))}
            </motion.div>
            <div className="w-full h-px bg-gray-100 max-w-[1300px] mx-auto mt-16 sm:mt-20" />
        </section>
    );
}
