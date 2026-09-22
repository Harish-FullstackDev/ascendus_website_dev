"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import enterpriseIcon from "@/assets/Contact-us/icons/enterprise-expertise-48.svg";
import regionalIcon from "@/assets/Contact-us/icons/regional-presence-48.svg";
import teamsIcon from "@/assets/Contact-us/icons/experienced-teams-48.svg";
import certificationsIcon from "@/assets/Contact-us/icons/certifications-partnerships-48.svg";

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

// Last content section before the CTA band: white, off the tinted locations
// section above it via a hairline rule. The revised design drops the pillar
// type down a step — 18px titles over 14px captions — so the four of them read
// as a supporting grid rather than four sub-headings.
export default function YourTrustedPartnerForLongTermSuccess() {
    return (
        <section className="w-full border-t border-[#f1f5f9] bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-[25px] sm:pb-[48px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] xl:gap-[199px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-[446px] lg:shrink-0"
                >
                    <p className="text-[14px] font-normal uppercase tracking-[0.7px] text-[#2d8ec5] leading-4">
                        Built for Enterprise Engagement
                    </p>
                    <h2 className="mt-4 text-[26px] sm:text-[32px] font-medium text-[#0a3a52] leading-[1.2]">
                        Your Trusted Partner for
                        <br className="hidden sm:block" /> Long Term Success
                    </h2>
                    <p className="mt-3 pt-[2px] text-base font-normal text-[#415773] leading-[1.5]">
                        We bring deep expertise, a strong regional
                        <br className="hidden sm:block" /> presence and a commitment to your business outcomes.
                    </p>
                </motion.div>

                <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 lg:max-w-[661px]">
                    {PILLARS.map((pillar) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="p-2"
                        >
                            <Image src={pillar.icon} alt="" className="w-12 h-12" />
                            <h3 className="mt-3 text-lg font-medium text-[#0a3a52] leading-[1.2]">{pillar.title}</h3>
                            <p className="mt-3 text-sm font-normal text-[#64748b] leading-[1.4]">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
