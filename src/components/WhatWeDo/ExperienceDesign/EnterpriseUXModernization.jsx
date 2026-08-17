"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDesignPhoto from "@/assets/WhatWeDo/Experience Design/new/Enterprise.jpg";

const BOXES = [
    {
        title: "Simplifying What Enterprise Software Gets Wrong",
        desc: "We redesign enterprise interfaces around how people actually complete their work, removing steps and screens that exist for the system's convenience rather than the user's.",
    },
    {
        title: "Design Systems That Scale With Your Product",
        desc: "We build component libraries and design standards that keep your digital products visually and functionally consistent as your product portfolio grows.",
    },
];

export default function EnterpriseUXModernization() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[52px] bg-[#f5f6f6]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-3 max-w-[1390px] mx-auto mb-10 sm:mb-[47px]"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">Enterprise UX Modernization</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    Eliminating unnecessary complexity in software and scaling interface standards.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full lg:w-auto shrink-0 mt-0 md:mt-[180px]"
                >
                    {BOXES.map((box) => (
                        <div
                            key={box.title}
                            className="bg-white w-full sm:w-[350px] min-h-[331px] p-8 flex flex-col justify-between gap-6"
                        >
                            <p className="text-black text-2xl font-medium">{box.title}</p>
                            <p className="text-[#6c6c6c] text-base font-light">{box.desc}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[600px] h-[300px] sm:h-[480px] lg:h-[560px] overflow-hidden"
                >
                    <Image src={serviceDesignPhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}