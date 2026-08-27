"use client";

import { motion } from "framer-motion";

// Hardcoded as two rows (matching Figma's exact 3-and-3 grouping) rather than
// a single auto-wrapping list — a plain flex-wrap here is width-sensitive and
// can silently reflow to 2-per-row or let a 4th pill sneak into row one.
// Each row still wraps further on its own if the viewport is too narrow.
const CAPABILITY_ROWS = [
    ["Research-Led Design Process", "Enterprise UX Specialization", "Reusable Design Systems"],
    ["Accessibility Built In", "Engineering-Ready Handoff", "Cross-Platform Design Capability"],
];

export default function OurDesignCapabilities() {
    return (
        <section className="w-full px-6 pt-8 pb-16 sm:px-[64px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-[28px] font-semibold">Our Design Capabilities</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Key differentiators of our design practice
                </p>
            </motion.div>

            {/* Capability pills — sized to their own text, packed with a fixed minimal gap,
                each row centered independently (matches Figma's flex-wrap + justify-center).
                Grey border by default, blue on hover on every pill — Figma's node just shows
                the first one mid-hover as an example, not a distinct default state. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col items-center gap-6 sm:gap-10  mx-auto"
            >
                {CAPABILITY_ROWS.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap items-center justify-center gap-6 sm:gap-16">
                        {row.map((item) => (
                            <div
                                key={item}
                                className="border border-[#d3dae2] hover:border-[#2d8ec5] rounded-2xl px-4 py-3 transition-colors duration-300"
                            >
                                <p className="text-[#55595E] text-lg sm:text-2xl font-light whitespace-normal sm:whitespace-nowrap text-center">{item}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

