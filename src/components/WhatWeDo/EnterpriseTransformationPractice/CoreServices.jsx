"use client";

import { motion } from "framer-motion";

const SERVICES = [
    {
        number: "01",
        title: "SAP S/4HANA Migration",
        desc: "End-to-end migration from ECC to S/4HANA, planned around your compliance deadlines and cutover windows, not a generic timeline.",
    },
    {
        number: "02",
        title: "RISE with SAP",
        desc: "Full RISE with SAP delivery: infrastructure, migration, and managed operations bundled under a single SAP-backed contract.",
    },
    {
        number: "03",
        title: "GROW with SAP",
        desc: "Cloud-native S/4HANA on SAP's best-practice reference architecture, built for organizations without legacy customization to carry over.",
    },
];

export default function CoreServices() {
    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-8 sm:gap-[54px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
            >
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium shrink-0">Core Services</h2>
                <p className="text-[#4a5568] text-lg sm:text-2xl font-light sm:tracking-[0.24px] w-full sm:max-w-[518px]">
                    SAP is our core — deliberately. Microsoft and adjacent platforms extend that core so the enterprise
                    moves as a system, not a set of silos.
                </p>
            </motion.div>

            <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-[29px] items-stretch">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className="flex-1 bg-white flex flex-col items-start justify-between gap-6 p-8 shadow-[2px_4px_8.4px_0px_rgba(0,0,0,0.1)] min-h-[280px] sm:min-h-[304px]"
                    >
                        <p className="text-[#8794a3] text-[28px] font-medium">{service.number}</p>
                        <p className="text-[#10161d] text-2xl font-medium">{service.title}</p>
                        <p className="text-[#10161d] text-base font-extralight leading-[1.59]">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
