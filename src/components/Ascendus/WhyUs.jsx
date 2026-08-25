"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// Same four differentiators (title, description, icon) as
// HomePage/WhyEnterprisePartnerWithUs.jsx — the Figma copy for this section
// matched that content exactly, so the icons are reused rather than duplicated.
import sapFoundationIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-sap-foundation.svg";
import fullDeliveryIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-full-delivery.svg";
import regionalComplianceIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-regional-compliance.svg";
import executionDisciplineIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-execution-discipline.svg";

const FEATURES = [
    {
        icon: sapFoundationIcon,
        title: "A Deep SAP Foundation",
        desc: "We build SAP solutions with minimal customization, safe upgrades, and systems that stay reliable at scale.",
    },
    {
        icon: fullDeliveryIcon,
        title: "Full Delivery Capability",
        desc: "One team owns strategy, implementation, and support — no vendor handoffs, no lost context.",
    },
    {
        icon: regionalComplianceIcon,
        title: "Regional Compliance Fluency",
        desc: "Compliance is built into every solution from day one, meeting local regulatory requirements without slowing delivery.",
    },
    {
        icon: executionDisciplineIcon,
        title: "Execution Discipline",
        desc: "Flexible, standards-based architectures that minimize vendor lock-in and protect your long-term roadmap.",
    },
];

export default function WhyUs() {
    return (
        // Colored section bordered by white sections on both edges — full 64 on each.
        <section className="w-full bg-[#f3f6f9] pt-10 pb-10 sm:pt-16 sm:pb-16 px-6 sm:px-[64px]">
            <div className="w-full flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
                >
                    <div className="flex flex-col gap-2 max-w-[910px]">
                        <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-medium capitalize leading-[1.4] tracking-[0.28px]">
                            Everything an enterprise technology estate needs, under one roof
                        </h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.5] max-w-[600px]">
                            Strategy, implementation, integration, security, and managed operations delivered by
                            one team to simplify complexity and accelerate growth.
                        </p>
                    </div>
                    <Link
                        href="/who-we-are"
                        className="shrink-0 rounded-none border border-[#2d8ec5] px-8 py-3 text-lg font-light text-[#2E3033] text-center transition-colors hover:bg-[#2d8ec5] hover:text-white whitespace-nowrap"
                    >
                        Who We Are
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#55595E]/30"
                >
                    {FEATURES.map((feat) => (
                        <div key={feat.title} className="flex flex-col items-start gap-6 p-6 first:pl-0">
                            <div className="relative size-10 sm:size-12 shrink-0">
                                <Image src={feat.icon} alt="" fill className="object-contain" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-[#2E3033] text-xl sm:text-2xl font-medium leading-normal">{feat.title}</h3>
                                <p className="text-[#55595E] text-base sm:text-lg font-light leading-normal">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
