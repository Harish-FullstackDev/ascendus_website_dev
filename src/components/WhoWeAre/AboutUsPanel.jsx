"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import separatorLine from "@/assets/career/Separetor line.png";

export default function AboutUsPanel() {
    return (
        <div className="relative w-full bg-white px-6 sm:px-10 lg:px-[85px] py-10 sm:pt-16 sm:pb-5">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-xl sm:text-4xl font-medium text-black">Started around a gap, not a product</h2>
                <p className="mt-3 text-sm sm:text-xl font-thin text-[#3d3d4e] leading-relaxed">
                    Most enterprise technology providers specialize in one layer of the stack: the SAP
                    implementation, the cloud migration, or the support that follows once a system is live. We
                    were built to close the space between those layers, which is where most transformations
                    actually stall.
                </p>
                <p className="mt-3 text-sm sm:text-xl font-thin text-[#3d3d4e] leading-relaxed">
                    That has grown into a practice covering SAP transformation, cloud and data engineering, digital
                    and customer experience, and the compliance work that comes with operating across the GCC.
                    What hasn&apos;t changed is the reason the practice exists: enterprises need a partner who is
                    still accountable long after the project plan says the work is done.
                </p>
                <div className="w-full h-px bg-[#c7cbcd] max-w-[1300px] mx-auto mt-16 sm:mb-10" />
            </motion.div>
        </div>
    );
}
