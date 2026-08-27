"use client";

import { motion } from "framer-motion";

export default function CorePhilosophy() {
    return (
        <section className="w-full">
            <div className="w-full px-6 sm:px-[25px] py-10 lg:py-[40px]">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">

                    {/* Left */}
                    <div className="lg:pr-0 pl-0 md:pl-16">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[28px] font-semibold text-[#2E3033]"
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
                        className="justify-self-start max-w-[467px] pl-16"
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

