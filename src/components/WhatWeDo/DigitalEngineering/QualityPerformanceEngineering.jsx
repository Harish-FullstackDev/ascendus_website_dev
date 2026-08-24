"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import qualityEngineeringIcon from "@/assets/WhatWeDo/Digital Engineering/icons/Section_QualityEngineering.svg";
import performanceEngineeringIcon from "@/assets/WhatWeDo/Digital Engineering/icons/Section_PerformanceEngineering.svg";
import applicationSecurityIcon from "@/assets/WhatWeDo/Digital Engineering/icons/Section_ApplicationSecurity.svg";
import continuousTestingIcon from "@/assets/WhatWeDo/Digital Engineering/icons/Section_ContinuousTesting.svg";

const ITEMS = [
    {
        icon: qualityEngineeringIcon,
        title: "Quality Engineering",
        desc: "We embed testing across the software lifecycle to improve application quality.",
    },
    {
        icon: performanceEngineeringIcon,
        title: "Performance Engineering",
        desc: "We optimize applications for enterprise workloads, transaction volumes, and demanding usage conditions.",
    },
    {
        icon: applicationSecurityIcon,
        title: "Application Security",
        desc: "We incorporate security practices into application architecture and development.",
    },
    {
        icon: continuousTestingIcon,
        title: "Continuous Testing",
        desc: "Automated testing helps maintain quality as applications evolve and new releases are introduced.",
    },
];

export default function QualityPerformanceEngineering() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-16">
            <div className="max-w-[1300px] mx-auto flex flex-col items-center gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[900px] text-center"
                >
                    <h2 className="text-black text-2xl font-medium">Quality &amp; Performance Engineering</h2>
                    <p className="text-[#55595E] text-lg font-light">
                        Engineering capabilities focused on software quality, performance, security, and
                        long-term reliability.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-16 gap-y-10 w-full">
                    {ITEMS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="flex flex-col items-center gap-6 text-center"
                        >
                            <Image src={item.icon} alt="" width={48} height={48} />
                            <p className="text-black text-xl font-normal">{item.title}</p>
                            <p className="text-[#55595E] text-lg font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

