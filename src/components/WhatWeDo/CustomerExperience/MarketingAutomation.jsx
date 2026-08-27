"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import servicesImg from "@/assets/WhatWeDo/Customer Experience/Section5_Image.svg";

const SERVICES = [
    "Campaign Automation",
    "Lead Nurturing",
    "Email Marketing",
    "Customer Segmentation",
    "Personalized Marketing",
    "Marketing Performance Analytics",
];

export default function MarketingAutomation() {
    return (
        <section className="relative z-10 w-full py-14 sm:py-20">
            <div className="w-full flex flex-col lg:flex-row lg:items-start gap-10 pl-6 sm:pl-[150px]">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex gap-5 max-w-[400px] shrink-0"
                >
                    <div className="w-1 shrink-0 bg-[#2d8ec5]" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[#0d0c22] text-2xl font-semibold">Marketing Automation</h2>
                        <p className="text-[#3d3d4e] text-lg font-normal">
                            Engage Customers with Personalized Campaigns
                        </p>
                        <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                            Automate marketing campaigns and customer communications to deliver personalized
                            experiences across multiple channels.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative w-full lg:w-[700px] shrink-0 lg:ml-auto lg:mt-[126px] h-[280px] sm:h-[348px] overflow-hidden"
                >
                    <Image
                        src={servicesImg}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/40 to-black/70" />
                    <div className="absolute inset-0 flex flex-col justify-center gap-4 px-8 sm:px-[60px]">
                        <p className="text-white text-2xl sm:text-3xl font-normal">Services</p>
                        <ul className="flex flex-col gap-1 text-white text-base sm:text-lg font-light">
                            {SERVICES.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
