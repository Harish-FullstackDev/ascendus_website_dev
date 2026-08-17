"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import insightsCardImg from "@/assets/WhoWeAre/InsightsCard.jpg";
import insightsArrow from "@/assets/WhoWeAre/icons/InsightsArrow.svg";

const INSIGHTS = [
    { date: "05 Nov 2026", text: "sustainability inspires us to innovate, priorites resilience and build for the future" },
    { date: "05 Nov 2026", text: "sustainability inspires us to innovate, priorites resilience and build for the future" },
    { date: "05 Nov 2026", text: "sustainability inspires us to innovate, priorites resilience and build for the future" },
    { date: "05 Nov 2026", text: "sustainability inspires us to innovate, priorites resilience and build for the future" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FutureFocusedInsights() {
    return (
        <>
            <div className="w-full h-px bg-gray-200 max-w-[1300px] mx-auto mt-16 sm:mt-10" />
            <section className="relative z-10 w-full pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-2xl font-medium text-[#16171a]">Future Focused Insights</h2>
                    <p className="mt-2 text-base sm:text-lg font-light text-[#3d3d4e]">
                        We are passionate about empowering individuals and businesses to take control of their finances
                        and achieve their financial goals.
                    </p>
                </motion.div>

                {/* Card overlaps the CTA background below it, matching the Figma layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative z-20 bg-white max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mb-0 sm:-mb-30 lg:-mb-[180px]"
                >
                    {INSIGHTS.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col gap-5 px-6 py-9 border-b lg:border-b-0 lg:border-r border-[#d9d9d9] last:border-0"
                        >
                            <div className="relative w-full h-[170px] sm:h-[200px]">
                                <Image src={insightsCardImg} alt="" fill className="object-cover" />
                            </div>
                            <p className="text-base font-medium text-black">{item.date}</p>
                            <p className="text-base font-light text-[#6c6c6c]">{item.text}</p>
                            <button
                                type="button"
                                className="flex items-center justify-between w-[118px] text-[#0061af] text-base font-light"
                            >
                                Read More
                                <Image src={insightsArrow} alt="" width={25} height={25} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
}
