"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card1.svg";
import card2 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card2.jpg";
import card3 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card3.svg";
import card4 from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/card4.svg";

const CARDS = [
    { image: card1, title: "Identity & Access Management", desc: "Helping businesses transform with innovative SAP solutions." },
    { image: card2, title: "Security Operations", desc: "We monitor, detect, and respond to threats continuously, not just during scheduled reviews." },
    { image: card3, title: "Governance, Risk & Compliance", desc: "Helping businesses transform with innovative SAP solutions." },
    { image: card4, title: " Zero Trust Architecture", desc: "Helping businesses transform with innovative SAP solutions." },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyCybersecurityMatters() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:gap-[82px] px-6 sm:px-[50px] py-10 sm:py-[40px] pb-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1073px] text-center"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Identity Management & Continuous Operations</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Core protective pillars including IAM, GRC, SOC, and Zero Trust.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[18px] w-full max-w-[1300px]"
            >
                {CARDS.map((card) => (
                    <motion.div
                        key={card.title}
                        variants={itemVariants}
                        className="relative w-full aspect-[278/290] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /> */}
                        <div className="absolute left-[12%] right-[12%] bottom-[18%] flex flex-col gap-2 text-white">
                            <p className="text-base sm:text-lg font-medium">{card.title}</p>
                            <p className="text-xs font-light">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
