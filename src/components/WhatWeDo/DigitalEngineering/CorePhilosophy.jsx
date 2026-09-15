"use client";

import { motion } from "framer-motion";

export default function CorePhilosophy() {
    return (
        <section className="w-full">
            {/* px-8 (32px) on mobile is this page's edge — APIDevelopment, DevOpsSection and
                ApplicationModernization all sit on it. sm+ keeps px-[25px]. */}
            <div className="w-full px-8 sm:px-[25px] py-10 lg:py-[40px]">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">

                    {/* Left — centered in the stacked mobile layout; at lg it is the left
                        column of the three-column row and stays left aligned. */}
                    <div className="lg:pr-0 pl-0 md:pl-16 max-sm:text-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            Core Philosophy
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-2 text-[#55595E] text-[18px] leading-[140%] tracking-[0%]"
                        >
                            Defining the stakes of software engineering in growing businesses.
                        </motion.p>
                    </div>

                    {/* Middle Line */}
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-60 bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        // Mobile: 32px under the description (the grid is gap-0 because at lg
                        // these are side-by-side columns, so stacked spacing has to come from
                        // here), centered to match the heading, and without the pl-16 that
                        // exists only to clear the lg divider.
                        className="justify-self-start max-w-[467px] pl-16 max-sm:mt-8 max-sm:pl-0 max-sm:justify-self-center max-sm:text-center"
                    >
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Software that cannot scale with the business becomes the business's next constraint.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

