"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import legacyDataModernizationIcon from "@/assets/WhatWeDo/Data Inteligent/icons/Section4_icon1_LegacyDataModernization.svg";
import cloudDataPlatformsIcon from "@/assets/WhatWeDo/Data Inteligent/icons/Section4_icon2_CloudDataPlatforms.svg";
import dataIntegrationIcon from "@/assets/WhatWeDo/Data Inteligent/icons/Section4_icon3_DataIntegration.svg";
import aiReadyDataIcon from "@/assets/WhatWeDo/Data Inteligent/icons/Section4_icon4_AIReadyData.svg";

const ITEMS = [
    {
        icon: legacyDataModernizationIcon,
        title: "Legacy Data Modernization",
        desc: "We modernize existing data environments while protecting critical business operations.",
    },
    {
        icon: cloudDataPlatformsIcon,
        title: "Cloud Data Platforms",
        desc: "We build scalable data platforms across cloud and hybrid environments.",
    },
    {
        icon: dataIntegrationIcon,
        title: "Data Integration",
        desc: "We connect SAP and non-SAP sources into reliable, governed data flows.",
    },
    {
        icon: aiReadyDataIcon,
        title: "AI-Ready Data",
        desc: "We prepare structured, trusted data environments that support advanced analytics and AI initiatives.",
    },
];

export default function DataModernizationIntegration() {
    return (
        <section className="w-full py-10 px-6 sm:px-16 sm:pt-8 sm:pb-16">
            <div className="max-w-[1300px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:max-w-[430px] shrink-0"
                >
                    <h2 className="text-black text-2xl font-medium">Data Modernization &amp; Integration</h2>
                    <p className="text-[#55595E] text-lg font-light">
                        Modern data capabilities that bring fragmented enterprise information together for
                        analytics, reporting, and AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-x-10 sm:gap-x-[73px] gap-y-10 sm:gap-y-[101px] w-full lg:max-w-[539px] shrink-0">
                    {ITEMS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                            className="flex flex-col gap-6"
                        >
                            <Image src={item.icon} alt="" width={48} height={48} />
                            <p className="text-black text-xl font-light">{item.title}</p>
                            <p className="text-[#55595E] text-lg font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

