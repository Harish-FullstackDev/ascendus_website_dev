"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/overview.png";

export default function OnepracticeTheWholeSAPLifecycle() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-[64px] sm:py-[64px] flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 w-full sm:flex-1"
            >

                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium">
                    One practice, the whole SAP lifecycle
                </h2>
                <p className="text-[#4a5568] text-lg font-light leading-[1.5]">
                    From the first landscape assessment to the system still running years into production, SAP work
                    sits in one practice here, not scattered across a project team and a separate support vendor. SAP
                    Transformation covers migration, platform extension, analytics, data warehousing, and the managed
                    services that keep all of it running once it&apos;s live.
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
