"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/overview.png";

export default function Overview() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-[64px] sm:py-[32px] flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full sm:flex-1"
            >
                <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold">
                    The work that surrounds SAP, not apart from it
                </h2>
                <p className="text-[#55595E] text-lg font-light leading-[1.5]">
                    Cloud infrastructure, integration, data governance, change management, and security don&apos;t
                    sit outside an SAP transformation, they determine whether it holds up in production. Broader
                    Technology Services covers the work that runs alongside the SAP core, planned as part of the
                    same landscape rather than a separate set of vendor contracts.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full sm:w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={overviewImage} alt="" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
