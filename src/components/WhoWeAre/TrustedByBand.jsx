"use client";

import { motion } from "framer-motion";

export default function TrustedByBand() {
    return (
        <section className="w-full bg-[#f4f3f9] py-16 sm:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto px-4 lg:px-40 text-center"
            >
                <p className="text-2xl sm:text-[28px] leading-[1.5] font-semibold text-[#2E3033]">
                    Enterprise technology only works when the people who built it are still there to answer for it.
                </p>
                <p className="mt-4 text-base sm:text-lg font-light text-[#55595E]">
                    That belief has shaped every team we&apos;ve built and every engagement we&apos;ve taken on.
                </p>
            </motion.div>
        </section>
    );
}
