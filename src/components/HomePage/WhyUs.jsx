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
import ctaArrowIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-cta-arrow.svg";

const FEATURES = [
    {
        icon: sapFoundationIcon,
        title: "A Deep SAP Foundation",
        desc: "We build SAP solutions with minimal customization, safe upgrades, and systems that stay reliable at scale.",
    },
    {
        icon: fullDeliveryIcon,
        title: "Full Delivery Capability",
        desc: "One team owns strategy, implementation, and support no vendor handoffs, no lost context.",
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
        <section className="w-full bg-[#f3f6f9] pt-10 pb-10 sm:p-16 px-6 ">
            <div className="w-full flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
                >
                    <div className="flex flex-col gap-2 max-w-[910px]">
                        <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold  leading-relaxed ">
                            Everything an Enterprise Technology Estate Needs, Under One Roof
                        </h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.5] max-w-[600px]">
                            Strategy, implementation, integration, security, and managed operations delivered by
                            one team to simplify complexity and accelerate growth.
                        </p>
                    </div>
                    <Link
                        href="/who-we-are"
                        className="group shrink-0 flex items-center justify-between gap-4 rounded-full border border-[#2d8ec5] pl-8 pr-1.5 py-1.5 text-lg font-light text-[#2E3033] transition-colors hover:bg-[#00447A] hover:text-white whitespace-nowrap"
                    >
                        Who We Are
                        <span className="relative size-[42px] shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                            <Image src={ctaArrowIcon} alt="" fill className="object-contain" />
                        </span>
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
                        <div key={feat.title} className="flex flex-col items-start gap-[clamp(2rem,6vw,6.5rem)] p-6 first:pl-0">
                            <div className="relative size-10 sm:size-12 shrink-0">
                                <Image src={feat.icon} alt="" fill className="object-contain" />
                            </div>
                            <div className="flex flex-col gap-6 w-full">
                                {/* Fixed to a 2-line height regardless of actual wrap count, so every
                                    card's description starts on the same row — titles range from one
                                    to two lines at this column width and would otherwise stagger the
                                    descriptions (a misalignment the Figma source has too; not reproduced
                                    here on purpose). */}
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold leading-normal min-h-[60px] sm:min-h-[72px]">{feat.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light leading-normal">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
