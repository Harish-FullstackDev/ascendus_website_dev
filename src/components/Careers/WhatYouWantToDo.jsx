"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/career/webp/Careers_Grow_your_career.webp";
import card2 from "@/assets/career/webp/Careers_Flex_Work.webp";
import card3 from "@/assets/career/webp/Careers_World_Class_Benefits.webp";

const CARDS = [
    {
        image: card1,
        title: "Work That Reaches Production",
        description:
            "Your work is connected to real enterprise environments, real operational challenges and outcomes that continue beyond implementation.",
    },
    {
        image: card2,
        title: "Learn From Specialists",
        description:
            "Work alongside experienced practitioners who bring depth across SAP, cloud, data, cybersecurity and digital transformation. Build expertise through delivery, not theory alone.",
    },
    {
        image: card3,
        title: "Take Ownership Early",
        description:
            "We give capable people responsibility for meaningful parts of an engagement, with the support and context needed to make sound decisions.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhatYouWantToDo() {
    return (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl mx-auto text-center mb-12"
            >
                <h2 className="text-2xl sm:text-3xl font-medium text-black">Work where expertise has room to grow.</h2>
                <p className="mt-4 text-sm sm:text-base text-[#4a5565] leading-relaxed">
                    The strongest careers are built through meaningful work, experienced teams and opportunities to
                    take ownership. That is how we structure the work here.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
                {CARDS.map((card) => (
                    <motion.div
                        key={card.title}
                        variants={itemVariants}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-white shadow-[0px_2px_7.5px_rgba(0,0,0,0.19)] flex flex-col"
                    >
                        <div className="relative aspect-[470/263] w-full overflow-hidden">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-md font-semibold font-medium text-black">{card.title}</h3>
                            <p className="mt-2 text-sm font-light ">{card.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
