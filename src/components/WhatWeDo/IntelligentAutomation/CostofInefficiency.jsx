"use client";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Intelligent Automation/new/Cost.jpg";

export default function CostofInefficiency() {
    return (
        <section className="relative w-full h-[420px] sm:h-[471px] overflow-hidden bg-[#cfe3f2]">
            {/* Fixed background image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${buildingPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 h-full flex flex-col justify-center gap-4 sm:gap-16 px-6 sm:px-[64px] "
            >
                <h2 className="text-white  text-lg sm:text-lg font-light">
                    Cost of Inefficiency

                </h2>
                {/* <p className="text-white text-lg sm:text-lg font-light">
                    Identifying hidden costs in manual operational workflows.

                </p> */}
                <p className="text-white text-base sm:text-[32px] font-light leading-snug">
                    “The most expensive process is the one nobody
                    <br /> questioned because it always ran manually”
                </p>

            </motion.div>
        </section >
    );
}