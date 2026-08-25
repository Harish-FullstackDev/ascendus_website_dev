"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/why-partner-1.png";
import card2 from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/why-partner-2.png";
import card3 from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/why-partner-3.png";
import card4 from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/why-partner-4.png";

// Real per-card copy from Figma (nodes 2740:966, 2740:1136, 2740:1138,
// 2740:1140) — not the skeleton-repeat pattern seen elsewhere on this site;
// each of these 4 cards has its own genuine description.
const REASONS = [
    {
        image: card1,
        title: "Built Around Your SAP Core",
        desc: "Integration and infrastructure work is designed with the SAP landscape as the anchor, not bolted on afterward by a separate team.",
    },
    {
        image: card2,
        title: "Vendor-Neutral Cloud Approach",
        desc: "AWS, Azure, or GCP, whichever fits the workload, not a single-cloud agenda we're incentivized to push.",
    },
    {
        image: card3,
        title: "Governance Built In From Day One",
        desc: "Data and access controls are part of the initial design, not a remediation project after an audit.",
    },
    {
        image: card4,
        title: "Regional Compliance Fluency",
        desc: "The same GCC regulatory fluency behind our SAP practice, from data residency to e-invoicing, applies here too.",
    },
];

// Same hover-reveal pattern as DataIntelligence/EnterpriseDataFoundations.jsx:
// pure CSS group/group-hover (no activeIndex state, no exclusivity between
// cards) — each card's description reveals on its own hover and closes again
// on mouse-leave, unlike the Capabilities-style accordion elsewhere on this
// page. Mobile drops the hover interaction entirely (nothing to hover on
// touch) and just shows every description already open, same as that
// reference component's mobile treatment.
export default function WhyPartnerWithUs() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#0d0c22] text-2xl sm:text-[28px] font-medium">Why Partner With Us For This</h2>
                <p className="text-[#3d3d4e] text-lg font-light">
                    The same practice that runs your SAP core also builds and secures everything connected to it.
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible — no hover. */}
            <div className="flex sm:hidden flex-col gap-4">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={reason.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <p className="text-white text-xl font-normal">{reason.title}</p>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{reason.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-reveal grid. */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-[43px]">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="group relative aspect-[258/335] overflow-hidden"
                    >
                        <Image
                            src={reason.image}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/70" />
                        <div className="absolute inset-0 flex items-start justify-start px-6 py-10 text-left">
                            <p className="text-white text-xl sm:text-3xl font-normal">{reason.title}</p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                                <p className="text-white/85 text-xl font-light pt-2">{reason.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
