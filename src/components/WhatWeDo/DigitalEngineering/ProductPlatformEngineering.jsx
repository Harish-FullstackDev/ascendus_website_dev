"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Product Engineering",
        desc: "We build digital products around business requirements, user needs, and technical scalability.",
    },
    {
        title: "Rapid Prototyping",
        desc: "We validate product concepts and technical approaches before full-scale development.",
    },
    {
        title: "Platform Development",
        desc: "We create reusable platforms and capabilities that support multiple enterprise applications.",
    },
    {
        title: "Engineering Enablement",
        desc: "Developer tooling, reusable components, and automation help teams deliver software faster.",
    },
];

export default function ProductPlatformEngineering() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-6 sm:pb-0 px-6 sm:px-[0px] flex flex-col items-center gap-10 sm:gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-6 sm:px-0"
            >
                <h2 className="text-black text-2xl font-medium">Product &amp; Platform Engineering</h2>
                <p className="text-[#55595E] text-lg font-light">
                    Engineering capabilities that help enterprises build scalable digital products and platforms.
                </p>
            </motion.div>

            {/* Mobile / tablet layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 w-full px-6 sm:px-0">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-[#A1A5AA] bg-[#F5F6F6] flex flex-col gap-4 px-6 py-8"
                    >
                        <p className="text-black text-lg font-medium">{card.title}</p>
                        <p className="text-[#55595E] text-sm font-light">{card.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop layout — white title cards floating on top of a full-bleed Neutral/100 band that holds the descriptions */}
            <div className="hidden lg:block relative w-full lg:min-h-[303px]">
                <div className="absolute inset-x-0 top-[99px] bottom-0 bg-[#F5F6F6]" />

                <div className="relative z-10 max-w-full mx-auto px-6 sm:px-[64px] grid grid-cols-4 gap-x-6 lg:gap-x-[50px]">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-[#A1A5AA] min-h-[121px] flex items-center px-13">
                                <p className="text-black text-xl font-medium leading-tight">{card.title}</p>
                            </div>
                            <p className="text-[#55595E] text-lg font-light pt-6 pb-10 pr-4">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

