"use client";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Experience Design/new/Design.jpg";

export default function DesignPhilosophy() {
    return (
        <section className="relative w-full min-h-[220px] sm:min-h-[371px] overflow-hidden bg-[#cfe3f2] flex">
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
                className="relative z-10 w-full flex flex-col justify-center gap-4 sm:gap-8 px-6 py-10 sm:px-16 sm:py-0"
            >

                <p className="text-white text-2xl font-light">
                    Design Philosophy
                </p>

                <p className="text-white text-lg font-light sm:pb-5">
                    The core principle behind our approach to experience design.
                </p>
                <p className="text-white text-xl sm:text-[32px] font-light leading-snug max-w-[734px]">
                    Good design does not call attention to itself.
                    {/* The line break is a desktop composition choice; on mobile the copy wraps naturally. */}
                    <br className="hidden sm:inline" /> It gets out of the user&apos;s way.
                </p>
            </motion.div>
        </section>
    );
}