"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import incidentManagementPhoto from "@/assets/WhatWeDo/Managed Services/new/card_1.jpg";
import serviceRequestsPhoto from "@/assets/WhatWeDo/Managed Services/new/card_2.jpg";
import userSupportPhoto from "@/assets/WhatWeDo/Managed Services/new/card_3.jpg";
import knowledgeManagementPhoto from "@/assets/WhatWeDo/Managed Services/new/card_4.jpg";

const ITEMS = [
    {
        title: "Infrastructure Management",
        image: incidentManagementPhoto,
        companionTitle: "Round-the-Clock Coverage",
        companionDesc: "Ongoing operation and optimization of the infrastructure your enterprise applications run on.",
    },
    {
        title: "Service Requests",
        image: serviceRequestsPhoto,
        companionTitle: "Self-Service Enablement",
        companionDesc: "A single point of contact for your teams, staffed to resolve issues quickly and track them properly.",
    },
    {
        title: "SLA Management",
        image: userSupportPhoto,
        companionTitle: "Consistent Experience",
        companionDesc: "Clear, measurable service commitments with transparent reporting against them.",
    },
    {
        title: "Continuous Improvement",
        image: knowledgeManagementPhoto,
        companionTitle: "Continuous Learning",
        companionDesc: "Ongoing performance tuning and enhancement recommendations, not just break-fix support.",
    },
];

function CardBlock({ item }) {
    return (
        <div className="flex w-full max-w-[420px] flex-col items-center gap-6 sm:max-w-[512px] lg:max-w-none lg:flex-1 lg:basis-1/2">
            <h2 className="text-center text-lg font-semibold text-[#2E3033] sm:text-2xl">{item.title}</h2>
            <div className="relative aspect-[512/200] w-full overflow-hidden">
                <Image src={item.image} alt="" fill className="object-cover" />
            </div>
        </div>
    );
}

function CompanionBlock({ item }) {
    return (
        <div className="flex w-full max-w-[480px] items-center gap-4 px-2 sm:gap-5 sm:px-0 lg:max-w-none lg:flex-1 lg:basis-1/2">
            <div className="w-[4px] shrink-0 self-stretch bg-[#808a99] sm:w-[8px]" />
            <p className="w-full text-lg font-light leading-[1.5] text-[#55595E] sm:text-2xl">{item.companionDesc}</p>
        </div>
    );
}


export default function InfrastructureManagementSLAs() {
    return (
        <section className="w-full">
            {/* Figma has no inner content cap here — the row fills the full width
                inside the section's own 64px side padding, so image + text scale
                together as the viewport grows instead of sitting in a boxed column. */}
            <div className="flex w-full flex-col items-center gap-10 px-6 py-8 sm:gap-16 sm:px-[64px] sm:py-10 lg:py-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex max-w-[772px] flex-col items-center gap-2 text-center"
                >
                    <h2 className="text-2xl font-semibold text-[#2E3033] sm:text-[28px]">
                        Infrastructure Management &amp; SLAs
                    </h2>
                    <p className="text-base font-light text-[#55595E] sm:text-lg">
                        Extended support capabilities, desk management, and clear SLAs.
                    </p>
                </motion.div>

                <div className="flex w-full flex-col gap-10 sm:gap-8">
                    {ITEMS.map((item, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`flex flex-col items-center gap-8 lg:gap-16 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                                    }`}
                            >
                                <CardBlock item={item} />
                                <CompanionBlock item={item} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
