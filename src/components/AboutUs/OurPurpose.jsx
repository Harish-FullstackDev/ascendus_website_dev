"use client";

import { motion } from "framer-motion";

// Section 3 — a lone heading band between "Who We Are" and the dark
// Vision/Mission strip. A hairline top border separates it from the white
// section above, matching Figma's border-t on this frame.
export default function OurPurpose() {
    return (
        <section className="w-full border-t border-[#f1f5f9] bg-white px-6 py-8 sm:px-[64px] sm:py-[49px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4"
            >
                <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                    Our Purpose
                </p>

                <h2 className="max-w-[366px] text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                    To help businesses move forward with clarity and confidence.
                </h2>
            </motion.div>
        </section>
    );
}
