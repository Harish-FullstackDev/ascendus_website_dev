"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import incidentManagementPhoto from "@/assets/WhatWeDo/Managed Services/webp/Infrastructure_Management.webp";
import serviceRequestsPhoto from "@/assets/WhatWeDo/Managed Services/webp/Service_Request.webp";
import userSupportPhoto from "@/assets/WhatWeDo/Managed Services/webp/SLA_Management.webp";
import knowledgeManagementPhoto from "@/assets/WhatWeDo/Managed Services/webp/Continous_Improvement.webp";

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
        <div className="flex w-full max-w-[420px] flex-col items-center gap-6 rounded-[32px] bg-white px-6 py-8 sm:px-8 sm:py-9 lg:min-w-[584px] lg:max-w-[700px] lg:flex-1 lg:px-10">
            <p className="text-center text-xl font-medium text-[#111] sm:text-2xl">{item.title}</p>
            <div className="relative aspect-[333/150] w-full max-w-[402px] overflow-hidden">
                <Image src={item.image} alt="" fill className="object-cover" />
            </div>
        </div>
    );
}

function CompanionBlock({ item }) {
    return (
        <div className="flex w-full max-w-[480px] items-center gap-4 px-2 sm:gap-5 sm:px-6 lg:max-w-[504px] lg:flex-1 lg:px-6">
            <div className="w-[4px] shrink-0 self-stretch bg-[#808a99] sm:w-[8px]" />
            <div>
                {/* <p className="text-lg leading-snug text-[#808a99] sm:text-2xl">{item.companionTitle}</p> */}
                <p className="mt-1 text-lg leading-snug text-[#808a99] sm:text-2xl">{item.companionDesc}</p>
            </div>
        </div>
    );
}

export default function InfrastructureManagementSLAs() {
    return (
        <section className="w-full">
            {/* Figma pads this whole section 40px on every side (not just
                left/right), so padding lives on one wrapper here rather than
                split across mismatched horizontal/vertical padding values. */}
            <div className="mx-auto flex w-full sm:px-[70px] flex-col items-center gap-12 p-6 sm:gap-16 sm:p-10 lg:gap-[88px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex max-w-[772px] flex-col items-center gap-4 text-center"
                >
                    <h2 className="font-heading text-2xl font-medium text-black sm:text-[32px]">
                        Infrastructure Management &amp; SLAs
                    </h2>
                    <p className="text-base font-light text-[#515151] sm:text-lg">
                        Extended support capabilities, desk management, and clear SLAs.
                    </p>
                </motion.div>

                <div className="flex w-full flex-col gap-12 sm:gap-16">
                    {ITEMS.map((item, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`flex flex-col items-center gap-8 lg:gap-60 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
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
