"use client";

import { motion } from "framer-motion";

// Figma places the copy block at 202/800 of the hero frame (~25% from the top)
// and runs the hairline rule the full width of the text column, so both are
// expressed as percentages/full-width rather than the frame's raw 59px offset.
export default function ContactUsHeroText() {
    return (
        <div className="absolute inset-x-0 top-[22%] sm:top-[25%] px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[1056px]"
            >
                <p className="text-white text-xs sm:text-[18px] uppercase tracking-[1.2px] font-semibold">
                    Let&apos;s Connect
                </p>

                <div className="mt-4 sm:mt-1 h-px w-full bg-white/40" />

                {/* No letter-spacing here, despite Figma's 0.48px: any non-zero
                    letter-spacing makes Chrome position the glyphs at fractional
                    offsets, which visibly blunts the sharp diagonal joints of
                    Switzer's A, W, V, X and M — the heading then reads as a
                    rounder typeface than every other hero on the site. */}
                <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-medium capitalize text-white leading-tight">
                    Let&apos;s Talk About What&apos;s Next
                </h1>

                {/* 16px now, not 18px, and running the full width of the intro
                    column (Figma 1053 of 1051) rather than the narrower measure
                    it had before. Figma tags this line as Urbane Light; Urbane is
                    SST's face and is not licensed here, so it stays on the
                    project's Switzer at the same weight. */}
                <p className="mt-4 sm:mt-6 max-w-[570px] text-sm sm:text-base font-normal capitalize text-white tracking-[0.16px] leading-relaxed">
                    Whether you&apos;re planning a transformation, evaluating a new solution, or need support for an
                    existing engagement, our team is ready to help.
                </p>
            </motion.div>
        </div>
    );
}
