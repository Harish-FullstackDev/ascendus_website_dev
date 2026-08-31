"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/hero-bg.png";

export default function WhyItMatters() {
    return (
        <section className="relative w-full px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Same sticky-background treatment as
                CloudInfrastructure/ArchitecturalResilienceStrategy.jsx: a
                fixed-attachment background (bg-fixed) so the photo stays
                pinned to the viewport while this section scrolls past it,
                with a left-to-right dark gradient (not a flat scrim) so the
                left-aligned text stays legible while the image shows through
                more on the right. No negative z-index — on a section that
                also sets its own background-color, a negative-z child paints
                *behind* that background paint and disappears entirely (see
                BroaderTechnologyServices/WhyItMatters.jsx, which hit exactly
                that with bg-[#1c5f85] on the section). This section has no
                background-color of its own, so it happened not to matter here,
                but nesting the gradient inside the bg div and marking the text
                blocks `relative` (matching the proven working reference)
                avoids relying on that coincidence. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>

            {/* Left-aligned, matching BroaderTechnologyServices/WhyItMatters.jsx —
                was centered (items-center + text-center) here, which this section
                doesn't share with the rest of the Why It Matters instances. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-2xl sm:text-[28px] font-semibold">Why It Matters</h2>
                <p className="text-white/90 text-lg font-light">Most enterprises run more than one platform</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
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