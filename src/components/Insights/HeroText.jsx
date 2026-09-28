"use client";

import { motion } from "framer-motion";

// Same structure and type scale as ServicesHeroText / SolutionsHeroText /
// AboutUsHeroText: a small uppercase eyebrow, a hairline rule, a large medium
// heading and a light paragraph — not the old, reversed hierarchy where the
// heading was the small line and the description carried the big type.
export default function HeroText({ subtitle, title, description }) {
    return (
        <div className="absolute inset-x-0 top-[22%] sm:top-[25%] px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[1056px]"
            >
                {subtitle && (
                    <p className="text-white text-xs sm:text-base uppercase tracking-[1.2px] font-semibold">
                        {subtitle}
                    </p>
                )}

                <div className="mt-4 sm:mt-5 h-px w-full bg-white/40" />

                {title && (
                    <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-medium capitalize text-white leading-tight">
                        {title}
                    </h1>
                )}

                {description && (
                    <p className="mt-4 sm:mt-6 max-w-[620px] text-sm sm:text-base font-light text-white tracking-[0.16px] leading-relaxed">
                        {description}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
