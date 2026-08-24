"use client";

import { motion } from "framer-motion";

export default function WhyItMatters() {
    return (
        <section className="w-full bg-[#1c5f85] px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col items-center gap-8 sm:gap-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-white text-2xl sm:text-[28px] font-medium">Why It Matters</h2>
                <p className="text-white/90 text-lg font-light">Most enterprises run more than one platform</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    SAP rarely runs alone. Microsoft&apos;s stack usually sits right next to it, handling
                    productivity, subsidiary operations, or reporting that doesn&apos;t need full SAP weight behind
                    it.
                </p>
                <p>
                    Treated as two unrelated vendor relationships, that split creates duplicate data, inconsistent
                    access controls, and reporting that never quite reconciles. Treated as one landscape, it
                    doesn&apos;t.
                </p>
            </motion.div>
        </section>
    );
}
