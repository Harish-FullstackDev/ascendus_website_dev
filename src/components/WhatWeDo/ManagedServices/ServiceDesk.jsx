"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import incidentManagementPhoto from "@/assets/WhatWeDo/Managed Services/Section6_Image1.svg";
import serviceRequestsPhoto from "@/assets/WhatWeDo/Managed Services/Section6_Image2.svg";
import userSupportPhoto from "@/assets/WhatWeDo/Managed Services/Section6_Image3.svg";
import knowledgeManagementPhoto from "@/assets/WhatWeDo/Managed Services/Section6_Image4.svg";
import ticketLifecyclePhoto from "@/assets/WhatWeDo/Managed Services/Section6_Image5.svg";

const ITEMS = [
    {
        title: "Infrastructure Management",
        desc: "Detect, triage, and resolve incidents quickly with defined severity levels and escalation paths that keep downtime to a minimum.",
        image: incidentManagementPhoto,
        companionTitle: "Round-the-Clock Coverage",
        companionDesc: "Ongoing operation and optimization of the infrastructure your enterprise applications run on.",
    },
    {
        title: "Service Requests",
        desc: "Standardized workflows for provisioning access, changes, and routine requests, tracked from submission to fulfillment.",
        image: serviceRequestsPhoto,
        companionTitle: "Self-Service Enablement",
        companionDesc: "A single point of contact for your teams, staffed to resolve issues quickly and track them properly.",
    },
    {
        title: "SLA Management",
        desc: "Multilingual, multichannel support that resolves everyday issues and keeps end users productive.",
        image: userSupportPhoto,
        companionTitle: "Consistent Experience",
        companionDesc: "Clear, measurable service commitments with transparent reporting against them.",
    },
    {
        title: " Continuous Improvement",
        desc: "A living knowledge base that captures fixes and best practices so issues get resolved faster the next time.",
        image: knowledgeManagementPhoto,
        companionTitle: "Continuous Learning",
        companionDesc: "Ongoing performance tuning and enhancement recommendations, not just break-fix support.",
    },
];

function CardBlock({ item }) {
    return (
        <div className="bg-white  flex-1 flex flex-col items-center gap-5 px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-[#111] text-xl sm:text-2xl font-medium">{item.title}</p>
                <p className="text-[#111]/60 text-sm sm:text-base font-medium max-w-[420px]">{item.desc}</p>
            </div>
            <div className="relative w-full max-w-[333px] aspect-[333/150] overflow-hidden">
                <Image src={item.image} alt="" fill className="object-cover" />
            </div>
        </div>
    );
}

function CompanionBlock({ item }) {
    return (
        <div className="flex-1 flex gap-5 items-center px-2 sm:px-6">
            <div className="w-[4px] sm:w-[8px] self-stretch bg-[#808a99] shrink-0" />
            <div>
                <p className="text-[#808a99] text-xl sm:text-2xl leading-snug">{item.companionTitle}</p>
                <p className="text-[#808a99] text-xl sm:text-2xl leading-snug mt-1">{item.companionDesc}</p>
            </div>
        </div>
    );
}

export default function ServiceDesk() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[736px] mx-auto text-center mb-12 sm:mb-[60px]"
            >
                <h2 className="text-black text-2xl font-medium">Infrastructure Management & SLAs</h2>
                <p className="text-[#515151] text-base sm:text-lg font-light">
                    Extended support capabilities, desk management, and clear SLAs.
                </p>
            </motion.div>

            <div className="max-w-[1120px] mx-auto flex flex-col gap-16 sm:gap-5">
                {ITEMS.map((item, index) => {
                    const isEven = index % 2 === 1;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className={`flex flex-col sm:items-center gap-8 sm:gap-10 ${isEven ? "sm:flex-row-reverse" : "sm:flex-row"
                                }`}
                        >
                            <CardBlock item={item} />
                            <CompanionBlock item={item} />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
