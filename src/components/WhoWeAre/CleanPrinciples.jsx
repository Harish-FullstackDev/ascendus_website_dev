"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
    {
        title: "Ownership",
        description:
            "We stay accountable for outcomes after go-live, not just the milestones written into a statement of work.",
    },
    {
        title: "Precision",
        description:
            "Every recommendation is built around your landscape and your compliance obligations, not a generic playbook applied regardless of fit.",
    },
    {
        title: "Transparency",
        description:
            "Clients see the plan, the risks, and the trade-offs early, so decisions get made on full information rather than after the fact.",
    },
    {
        title: "Regional Fluency",
        description:
            "We operate inside the regulatory and operational realities of the GCC, not at a distance from them, and design accordingly.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CleanPrinciples() {
    return (
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            {/* <div className="w-full h-px bg-[#c7cbcd] max-w-[1300px] mx-auto mb-16 sm:mb-20" /> */}

            <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl font-medium text-[#0d0c22]">What shapes how we deliver</h2>
                    <p className="mt-2 text-base sm:text-lg font-light text-[#3d3d4e]">
                        Four principles carried into every engagement, not values printed on a wall and left there.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[18px]"
                >
                    {PRINCIPLES.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-[#0a2b3e] shadow-[0px_2px_8px_rgba(0,0,0,0.19)] flex flex-col justify-end p-6 h-[220px] sm:h-[237px]"
                        >
                            <p className="text-lg font-medium text-white">{item.title}</p>
                            <p className="text-xs font-light text-white/80 mt-4 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
