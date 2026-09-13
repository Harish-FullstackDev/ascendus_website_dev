"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import separatorLine from "@/assets/career/Separetor line.png";

export default function JoinUsPanel() {
    return (
        <div className="relative w-full bg-white px-6 sm:px-10 lg:px-[64px] pt-10 sm:pt-16 pb-5 sm:pb-8">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">Join us</h2>
                <p className="mt-2 text-sm sm:text-lg font-light text-[#55595E] leading-relaxed">
                    Work alongside specialists solving complex technology challenges across SAP, cloud, data,
                    cybersecurity and digital transformation, with the opportunity to see your work move from
                    strategy into production.
                </p>
            </motion.div>
        </div>
    );
}
