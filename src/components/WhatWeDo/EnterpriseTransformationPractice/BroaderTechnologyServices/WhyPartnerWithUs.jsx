"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/why-partner-1.png";
import card2 from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/why-partner-2.png";
import card3 from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/why-partner-3.png";
import card4 from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/why-partner-4.png";

// Figma only writes out a description for the first card (a skeleton-design
// artifact, same pattern noted elsewhere on this site) — the other 3 stay
// title-only, matching the design exactly rather than inventing copy for them.
const REASONS = [
    {
        image: card1,
        title: "Built Around Your SAP Core",
        desc: "Integration and infrastructure work is designed with the SAP landscape as the anchor, not bolted on afterward by a separate team.",
    },
    { image: card2, title: "Vendor-Neutral Cloud Approach" },
    { image: card3, title: "Governance Built In From Day One" },
    { image: card4, title: "Regional Compliance Fluency" },
];

export default function WhyPartnerWithUs() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-[#0d0c22] text-2xl sm:text-[28px] font-medium">Why Partner With Us For This</h2>
                <p className="text-[#3d3d4e] text-lg font-light">
                    The same practice that runs your SAP core also builds and secures everything connected to it.
                </p>
            </motion.div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className="group relative overflow-hidden flex flex-col justify-end p-6 aspect-[256/320]"
                    >
                        <Image
                            src={reason.image}
                            alt=""
                            fill
                            className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                            className={`absolute inset-0 pointer-events-none bg-gradient-to-b ${index === 0 ? "from-black/80 to-black/40" : "from-black/50 to-transparent"
                                }`}
                        />
                        <div className="relative z-10 flex flex-col gap-4">
                            <p className="text-white text-2xl font-medium leading-normal">{reason.title}</p>
                            {reason.desc && (
                                <p className="text-white text-lg font-light leading-[1.6]">{reason.desc}</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
