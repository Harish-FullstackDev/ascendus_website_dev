"use client";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Intelligent Automation/webp/Intelligent_Cost_of_Inefficency.webp";

export default function CostofInefficiency() {
    return (
        <section className="relative w-full h-[420px] sm:h-[471px] overflow-hidden bg-[#66cdf3]">
            {/* Fixed background image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${buildingPhoto.src})` }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 h-full flex flex-col justify-center gap-4 sm:gap-6 px-6 sm:px-[52px] max-w-[716px]"
            >
                <h2 className="text-black text-2xl sm:text-[32px] font-medium">
                    Cost of Inefficiency

                </h2>
                <p className="text-black text-lg sm:text-2xl font-normal">
                    Identifying hidden costs in manual operational workflows.

                </p>
                <p className="text-black text-base sm:text-lg font-light leading-snug">
                    The most expensive process is the one nobody questioned because it always ran manually
                </p>
            </motion.div>
        </section>
    );
}