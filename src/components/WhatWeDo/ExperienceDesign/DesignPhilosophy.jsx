"use client";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Experience Design/webp/Experience_Design_Philosophy.webp";

export default function DesignPhilosophy() {
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
                className="relative z-10 h-full flex flex-col  justify-center  gap-8 sm:gap-12 px-6 sm:px-[52px]"
            >
                <div className="flex flex-col gap-2 sm:gap-3 max-w-[420px]">
                    <h2 className="text-black text-2xl font-normal">
                        Design Philosophy
                    </h2>
                    <p className="text-black text-lg font-light">
                        The core principle behind our approach to experience design.
                    </p>
                </div>
                <p className="text-black text-2xl sm:text-[32px] font-light leading-snug max-w-[734px] lg:translate-y-15">
                    Good design does not call attention to itself. It gets out of the user's way.
                </p>
            </motion.div>
        </section>
    );
}