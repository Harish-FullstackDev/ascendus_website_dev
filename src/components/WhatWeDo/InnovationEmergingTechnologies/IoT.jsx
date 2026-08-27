"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "IoT Strategy & Consulting",
        desc: "Helping businesses transform with innovative SAP solutions.",
    },
    {
        title: "Smart Device Integration",
        desc: "Helping businesses transform with innovative SAP solutions.",
    },
    {
        title: "Sensor Network Deployment",
        desc: "Helping businesses transform with innovative SAP solutions.",
    },
    {
        title: "Industrial IoT (IIoT)",
        desc: "Helping businesses transform with innovative SAP solutions.",
    },
];

export default function IoT() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1011px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="text-black text-2xl font-semibold">Internet of Things (IoT)</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Connect physical assets and operations to real-time data so decisions happen closer to where work
                    actually gets done.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[18px] max-w-[1182px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="bg-[#0a2b3e] h-[237px] flex flex-col justify-end px-6 pb-8"
                    >
                        <p className="text-white text-lg sm:text-xl font-semibold">{card.title}</p>
                        <p className="text-white/70 text-sm font-light mt-3">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
