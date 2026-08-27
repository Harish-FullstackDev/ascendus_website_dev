"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/hero-bg.png";

export default function WhyItMatters() {
    return (
        <section className="relative w-full bg-[#1c5f85] px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Same sticky-background treatment as
                CloudInfrastructure/ArchitecturalResilienceStrategy.jsx (and now
                MicrosoftServices/WhyItMatters.jsx): a fixed-attachment
                background (bg-fixed) so the photo stays pinned to the viewport
                while this section scrolls past it, with a left-to-right dark
                gradient so the left-aligned text stays legible while the image
                shows through more on the right. bg-[#1c5f85] stays as the
                fallback color underneath while the image loads. No negative
                z-index here — on a section that also sets its own
                background-color, a negative-z child paints *behind* that
                background paint (it's the box's own bottom layer, below any
                negative-z descendant) and disappears entirely; plain DOM
                order already stacks these two divs under the text content
                that follows. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-2xl sm:text-[28px] font-medium">Why It Matters</h2>
                <p className="text-white/90 text-lg font-light">
                    Integration is where most transformations actually fail
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    The SAP core rarely causes a transformation to stall. What surrounds it does: systems that
                    don&apos;t talk to each other, data no one trusts, users who quietly revert to their old
                    process.
                </p>
                <p>
                    We treat that surrounding work as core to delivery, not an afterthought bolted onto the SAP
                    project plan after the budget for it has already been spent elsewhere.
                </p>
            </motion.div>
        </section>
    );
}
