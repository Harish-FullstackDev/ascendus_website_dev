"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import sapFoundationIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-sap-foundation.svg";
import fullDeliveryIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-full-delivery.svg";
import regionalComplianceIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-regional-compliance.svg";
import executionDisciplineIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-execution-discipline.svg";

const ITEMS = [
    {
        icon: sapFoundationIcon,
        title: "A Deep SAP Foundation",
        desc: "We built our practice on SAP, and it shows in how we approach every engagement: minimal customization to the core, upgrade-safe extensions, and a bias toward standard, supportable solutions.",
    },
    {
        icon: fullDeliveryIcon,
        title: "Full Delivery Capability",
        desc: "Strategy, implementation, and managed operations sit under one team, so you're not re-briefing a new vendor at every stage of the journey.",
    },
    {
        icon: regionalComplianceIcon,
        title: "Regional Compliance Fluency",
        desc: "We work inside the regulatory realities of the GCC, from e-invoicing mandates to data residency requirements, so compliance is built in rather than retrofitted.",
    },
    {
        icon: executionDisciplineIcon,
        title: "Execution Discipline",
        desc: "We build architectures that avoid vendor lock-in and route workloads to the platform best suited for each.",
    },
];

export default function WhyEnterprisePartnerWithUs() {
    return (
        <section className="w-full bg-[#f3f6f9] pt-10 pb-10 sm:pt-16 sm:pb-16 px-6 sm:px-[64px]">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[38%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-[28px] font-medium">
                        A Partnership Built on <span className="text-[#0061AF]">Delivery Discipline</span>
                    </h2>
                    <p className="text-[#55595E] text-lg font-light">
                        Everything an enterprise technology estate needs,under one roof
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 w-full lg:flex-1 lg:min-w-0"
                >
                    {ITEMS.map((item, index) => (
                        <div key={item.title} className="flex flex-col gap-8">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={item.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-medium">{item.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                            </div>
                            {index < ITEMS.length - 1 && <div className="h-px w-full bg-[#d3dae2]" />}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
