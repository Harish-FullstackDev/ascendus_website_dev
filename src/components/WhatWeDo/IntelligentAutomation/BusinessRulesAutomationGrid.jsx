"use client";

import { motion } from "framer-motion";

const ITEMS = [
    { title: "Business Rules Management", desc: "Modern servers and virtual environments designed for high performance and scalability." },
    { title: "Decision Automation", desc: "Upgrade operating systems, middleware, and business platforms for improved reliability." },
    { title: "Policy Enforcement", desc: "Modern networking architectures that improve connectivity, security, and performance." },
    { title: "Workflow Decision Engines", desc: "Optimize virtualization environments for better resource utilization and flexibility." },
];

export default function BusinessRulesAutomationGrid() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[0px] flex flex-col items-center gap-10 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-black text-2xl font-normal">Business Rules Automation</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Turn policy into automated, consistent decisions across every process.
                </p>
            </motion.div>

            {/* Mobile / tablet layout (unchanged) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 max-w-screen w-full">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-black/10 flex flex-col gap-4 px-6 py-8"
                    >
                        <p className="text-black text-lg font-medium">{item.title}</p>
                        <p className="text-[#6c6c6c] text-sm font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop layout — matches Figma: white shadowed title cards
               floating on top of a light-gray band that holds the descriptions */}
            <div className="hidden lg:block relative w-full max-w-screen">
                <div className="absolute left-0 right-0 top-16 bottom-0 bg-[#e6e6e6]" />

                <div className="relative z-10 grid grid-cols-4 gap-11 max-w-[1350px] mx-auto">
                    {ITEMS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white outline outline-[0.5px] outline-offset-[-0.5px] outline-neutral-400 flex items-center min-h-[128px] px-8 py-8">
                                <p className="text-black text-xl font-normal leading-tight">{item.title}</p>
                            </div>
                            <p className="text-black text-lg font-light pt-6 pb-10 pr-4">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
