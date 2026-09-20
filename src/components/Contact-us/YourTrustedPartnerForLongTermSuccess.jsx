"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import enterpriseIcon from "@/assets/Contact-us/icons/enterprise-expertise.svg";
import regionalIcon from "@/assets/Contact-us/icons/regional-presence.svg";
import teamsIcon from "@/assets/Contact-us/icons/experienced-teams.svg";
import certificationsIcon from "@/assets/Contact-us/icons/certifications-partnerships.svg";

const PILLARS = [
    { description: "Domain & technology capabilities", icon: enterpriseIcon, title: "Enterprise Expertise" },
    { description: "Across key markets and geographies", icon: regionalIcon, title: "Regional Presence" },
    { description: "Business, functional & technical specialists", icon: teamsIcon, title: "Experienced Teams" },
    {
        description: "Trusted by leading technology partners",
        icon: certificationsIcon,
        title: "Certifications & Partnerships",
    },
];

// Last content section before the CTA band: 32px shared with the white
// locations section above, the full 64px at the bottom where the background
// changes to the CTA image.
export default function YourTrustedPartnerForLongTermSuccess() {
    return (
        <section className="w-full border-t border-[#f1f5f9] bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,421px)_minmax(0,1fr)] gap-10 lg:gap-[100px] xl:gap-[199px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.55px] text-[#2d8ec5] leading-4">
                        Built for Enterprise Engagement
                    </p>
                    <h2 className="mt-1 text-2xl sm:text-[32px] font-semibold text-[#0a3a52] leading-[1.4]">
                        Your Trusted Partner for Long Term Success
                    </h2>
                    <p className="mt-2 text-base sm:text-lg text-[#64748b] leading-[19.5px]">
                        We bring deep expertise, a strong regional presence and a commitment to your business outcomes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-16">
                    {PILLARS.map((pillar) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <span className="flex size-[30px] items-center justify-start">
                                <Image src={pillar.icon} alt="" className="w-6 h-6" />
                            </span>
                            <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-[#0a3a52] leading-6">{pillar.title}</h3>
                            <p className="mt-3 text-base sm:text-lg text-[#64748b] leading-[24.75px]">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
