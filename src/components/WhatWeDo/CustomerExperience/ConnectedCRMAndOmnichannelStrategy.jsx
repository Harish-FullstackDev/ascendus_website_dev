"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import journeyMapImg from "@/assets/WhatWeDo/Customer Experience/webp/Customer_Connected_CRM.webp";

const ITEMS = [
    {
        title: " CRM Strategy",
        desc: "Modern cyber threats require continuous monitoring supported by advanced analytics, automation, and threat intelligence.",
    },
    {
        title: " Salesforce Consulting",
        desc: "We define the customer engagement model and platform architecture before a single system gets configured",
    },
    {
        title: "Experience Optimization",
        desc: "We implement and optimize Salesforce to match how your sales, service, and marketing teams actually work",
    },
    {
        title: "Omnichannel Experience",
        desc: "We connect every customer touchpoint, web, mobile, call center, in-store, into one consistent journey",
    },
    {
        title: "Customer Engagement",
        desc: "We design connected touchpoints so context carries seamlessly from initial campaign to customer service.",
    },
];

export default function ConnectedCRMAndOmnichannelStrategy() {
    return (
        <section className="w-full py-14  px-6 sm:p-16 bg-[#F3F6F9] flex flex-col gap-12 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] mx-auto  text-center"
            >
                <h2 className="text-#2E3033 text-[28px] font-medium">Connected CRM & Omnichannel Strategy
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Primary capabilities across CRM platforms, Salesforce, and journey execution.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-[111px] items-center w-full pl-0 lg:pl-[50px]">
                <div className="flex flex-col gap-8 sm:gap-10 w-full lg:w-[546px]  shrink-0">
                    {ITEMS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="flex flex-col gap-5"
                        >
                            <div className="flex flex-col gap-3">
                                <h2 className="text-#2E3033 text-xl sm:text-2xl font-medium">{item.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                            </div>
                            <div className="h-px w-[139px] bg-[#3d3d4e]/40" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full sm:my-10 h-[320px] sm:h-[500px] lg:h-[803px] lg:w-[610px] lg:ml-auto shrink-0 overflow-hidden"
                >
                    <Image src={journeyMapImg} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}

