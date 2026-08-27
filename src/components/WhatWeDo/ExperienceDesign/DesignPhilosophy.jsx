"use client";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Experience Design/new/Design.jpg";

export default function DesignPhilosophy() {
    return (
        <section className="relative w-full h-[220px] sm:h-[371px] overflow-hidden bg-[#cfe3f2]">
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
                className="relative z-10 h-full flex flex-col  justify-center  gap-8 sm:gap-8 px-6 sm:px-16"
            >

                <p className="text-white text-2xl font-light">
                    Design Philosophy
                </p>

                <p className="text-white text-lg font-light sm:pb-5">
                    The core principle behind our approach to experience design.
                </p>
                <p className="text-white text-2xl sm:text-[32px] font-light leading-snug max-w-[734px]  ">
                    Good design does not call attention to itself.
                    <br /> It gets out of the user's way.
                </p>
            </motion.div>
        </section>
    );
}