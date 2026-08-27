"use client";

import { motion } from "framer-motion";

export default function TrustedByBand() {
    return (
        <section className="w-full  py-16 sm:py-24">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto px-4 lg:px-40 text-center text-2xl sm:text-[32px] leading-[1.5] text-black"
            >
                Trusted by <span className="text-[#2d8ec5]">300 +</span> Company for their sustainable growth partner
            </motion.p>
        </section>
    );
}