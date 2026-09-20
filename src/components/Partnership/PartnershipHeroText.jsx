"use client";

import { motion } from "framer-motion";

// Figma places the copy block at 202/800 of the hero frame (~25% from the top)
// and runs the hairline rule the full width of the text column, so both are
// expressed as percentages/full-width rather than the frame's raw 59px offset.
export default function PartnershipHeroText() {
    return (
        <div className="absolute inset-x-0 top-[22%] sm:top-[25%] px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[1056px]"
            >
                {/* The eyebrow is Houschka Pro Light — it needs the utility
                    explicitly, since only h1/h2 pick Houschka up automatically and
                    everything else inherits General Sans. */}

                <p className="text-white text-xs sm:text-base uppercase tracking-[1.2px] font-light">
                    Partnership
                </p>

                <div className="mt-4 sm:mt-5 h-px w-full bg-white/40" />

                {/* No letter-spacing here, despite Figma's 0.48px: any non-zero
                    letter-spacing makes Chrome position the glyphs at fractional
                    offsets, which visibly blunts the sharp diagonal joints of
                    Houschka Pro's A, W, V, X and M. font-medium (500 → Houschka
                    Pro Medium) matches the other heroes on the site. */}
                <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-medium capitalize text-white leading-tight">
                    Stronger Together for Greater Impact
                </h1>

                {/* Figma tags this line as Urbane Light; Urbane is SST's face and
                    is not licensed here, so it stays on the project's General Sans
                    at the same weight. */}
                <p className="mt-4 sm:mt-6 max-w-[620px] text-sm sm:text-base font-light capitalize text-white  tracking-[0.16px] leading-relaxed">
                    We believe in the power of collaboration. Our partnership ecosystem brings together trusted
                    technology providers, channel partners and industry leaders to create lasting value for our clients.
                </p>
            </motion.div>
        </div>
    );
}
