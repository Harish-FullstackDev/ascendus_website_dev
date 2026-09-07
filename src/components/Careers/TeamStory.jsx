"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import separatorLine from "@/assets/career/Separetor line.png";

const AVATAR = "/blog/default-author.svg";

const TESTIMONIALS = [
    {
        avatar: AVATAR,
        name: "Vignesh",
        role: "Marketing Head",
        quote:
            "I get real ownership over how we tell our story to the market, and the freedom to try new channels without waiting months for sign-off.",
    },
    {
        avatar: AVATAR,
        name: "Santhosh",
        role: "SAP Delivery",
        quote:
            "Every SAP engagement here is run with the same discipline, whether it's a small support ticket or a full rollout. That consistency is what clients keep coming back for.",
    },
    {
        avatar: AVATAR,
        name: "Deepak",
        role: "Business Development Executive",
        quote:
            "I'm trusted to build client relationships from the first conversation onward, not just hand off leads. That ownership is what keeps the work interesting.",
    },
    {
        avatar: AVATAR,
        name: "Sneha",
        role: "SAP Project Coordinator",
        quote:
            "Coordinating across teams taught me more in a year here than I expected. Everyone is approachable, and there's always someone willing to explain the why behind a decision.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeamStory() {
    return (
        <section className="bg-[#fdfdfd] py-16 sm:py-20">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <Image src={separatorLine} alt="" className="w-full h-px object-cover mb-12 opacity-25" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-[28px] font-semibold text-[#2E3033] capitalize">Our Team Story</h2>
                    <p className="mt-4 text-sm sm:text-lg text-[#55595E]">
                        You might want to hear from some of our team on their unique expeditions
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8"
                >
                    {TESTIMONIALS.map((item, index) => (
                        <motion.div
                            key={`${item.name}-${index}`}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center gap-4"
                        >
                            <Image
                                src={item.avatar}
                                alt={item.name}
                                width={70}
                                height={70}
                                className="rounded-full object-cover size-[70px] bg-[#d8d8d8]"
                            />
                            <div>
                                <p className="font-semibold text-[##2E3033] text-base">{item.name}</p>
                                <p className="text-[#3d3d4e] text-sm opacity-60">{item.role}</p>
                            </div>
                            <p className="text-sm text-[#55595E] px-10 leading-relaxed">{item.quote}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <Image src={separatorLine} alt="" className="w-full h-px object-cover mt-12 opacity-25" />
            </div>
        </section>
    );
}
