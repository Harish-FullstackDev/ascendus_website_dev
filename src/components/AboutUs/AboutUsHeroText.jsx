"use client";

import { motion } from "framer-motion";

// Figma places the copy block at 202/800 of the hero frame (~25% from the top)
// and runs the hairline rule the full width of the text column, so both are
// expressed as percentages/full-width rather than the frame's raw offset.
export default function AboutUsHeroText() {
    return (
        <div className="absolute inset-x-0 top-[22%] sm:top-[25%] px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[1056px]"
            >
                <p className="text-white text-xs sm:text-base uppercase tracking-[1.2px] font-semibold">
                    About Us
                </p>

                <div className="mt-4 sm:mt-5 h-px w-full bg-white/40" />

                <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-medium capitalize text-white leading-tight">
                    More Than a Service Provider.
                    <br />
                    A Long-Term Partner.
                </h1>

                <p className="mt-4 sm:mt-6 max-w-[760px] text-sm sm:text-base font-light text-white tracking-[0.16px] leading-relaxed">
                    Ascendus is an enterprise technology and business transformation company, established in
                    Riyadh, helping organizations turn complexity into opportunity.
                </p>
            </motion.div>
        </div>
    );
}
