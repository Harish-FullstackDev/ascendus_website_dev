"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serverManagementPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card1.svg";
import networkAdminPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card2.svg";
import cloudInfraPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card3.svg";
import backupRecoveryPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card4.svg";
import storageManagementPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card5.svg";
import capacityPlanningPhoto from "@/assets/WhatWeDo/Managed Services/Section4_Card6.svg";

// Each row's cards keep a fixed height but grow at different ratios so the
// row reads as a stylized, unevenly-split composition (per Figma).
const ROWS = [
    {
        height: "h-[280px]",
        cards: [
            { title: "Server Management", image: serverManagementPhoto, grow: 24 },
            { title: "Network Administration", image: networkAdminPhoto, grow: 48 },
            { title: "Cloud Infrastructure Management", image: cloudInfraPhoto, grow: 28 },
        ],
    },
    {
        height: "h-[292px]",
        cards: [
            { title: "Backup & Disaster Recovery", image: backupRecoveryPhoto, grow: 41 },
            { title: "Storage Management", image: storageManagementPhoto, grow: 26 },
            { title: "Capacity Planning", image: capacityPlanningPhoto, grow: 33 },
        ],
    },
];

const CARDS = ROWS.flatMap((row) => row.cards);

function InfraCard({ card, index, style, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
            style={style}
            className={`relative overflow-hidden ${className}`}
        >
            <Image src={card.image} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
            <p className="absolute left-6 top-6 text-white text-xl sm:text-2xl max-w-[240px] tracking-tight">
                {card.title}
            </p>
        </motion.div>
    );
}

export default function InfrastructureManagement() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1116px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="font-heading text-black text-2xl font-semibold">Infrastructure Management</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Transformation shouldn&apos;t end at Go-Live. The real impact begins afterward.
                </p>
            </motion.div>

            {/* lg+: stylized rows with unevenly-sized cards */}
            <div className="hidden lg:flex flex-col gap-[23px] max-w-[1280px] mx-auto">
                {ROWS.map((row, rowIndex) => (
                    <div key={rowIndex} className={`flex gap-[23px] ${row.height}`}>
                        {row.cards.map((card, index) => (
                            <InfraCard
                                key={card.title}
                                card={card}
                                index={rowIndex * 3 + index}
                                style={{ flexGrow: card.grow, flexBasis: 0 }}
                                className="min-w-0"
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* below lg: uniform grid fallback */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-[23px] max-w-[1280px] mx-auto">
                {CARDS.map((card, index) => (
                    <InfraCard key={card.title} card={card} index={index} className="h-[270px]" />
                ))}
            </div>
        </section>
    );
}

