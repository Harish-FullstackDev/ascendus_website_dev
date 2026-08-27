"use client";

import { motion } from "framer-motion";

export default function EngagementModelsOverview() {
    return (
        <section className="w-full bg-white px-6 pt-10 pb-8 sm:px-[64px] sm:pt-16 sm:pb-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:max-w-[586px]"
            >
                <p className="text-[#10161d] text-lg font-medium">Engagement Models</p>
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium">
                    Choose how you want to work with us
                </h2>
                <p className="text-[#4a5568] text-lg font-light leading-[1.5]">
                    Enterprise technology rarely fails on ambition. It fails on execution: systems that don&apos;t talk
                    to each other, projects that stall after go-live, compliance treated as an afterthought instead
                    of a starting point. Closing that gap is the work.
                </p>
            </motion.div>

            {/* Figma places a flat #1C5F85 placeholder here (skeleton design, no image
                fill yet) — reproduced as a color block at the source aspect ratio
                (518:325) so a real image can drop in later without reflowing the
                section. Width is fluid/capped, not a fixed px, so it scales with
                the text column instead of overflowing on narrower screens. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="w-full lg:max-w-[518px] aspect-[518/325] bg-[#1c5f85] shrink-0"
            />
        </section>
    );
}
