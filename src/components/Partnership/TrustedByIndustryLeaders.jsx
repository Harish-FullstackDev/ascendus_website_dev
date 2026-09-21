"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import adobeIcon from "@/assets/Partnership/icons/adobe.svg";
import googleCloudIcon from "@/assets/Partnership/icons/google-cloud.svg";
import sapLogo from "@/assets/Partnership/icons/sap.svg";

// Figma draws most of these wordmarks as styled text rather than supplying the
// real brand logos, so they are rendered the same way here: a `mark` describes
// the glyph that sits beside the label, and the label carries the brand's own
// colour and weight. SAP and Adobe and Google Cloud ship as real artwork.
const PARTNERS = [
    { label: "SAP", mark: "sap" },
    { className: "text-lg font-semibold text-[#334155]", label: "Microsoft", mark: "microsoft" },
    { className: "text-lg font-extrabold tracking-[-0.45px] text-[#0f172a]", icon: adobeIcon, label: "Adobe" },
    { className: "text-xl font-extrabold tracking-[-0.5px] text-[#1e293b]", label: "aws" },
    { className: "text-base font-medium text-[#334155]", icon: googleCloudIcon, label: "Google Cloud" },
    { className: "text-xl font-bold tracking-[1px] text-[#e83e8c]", label: "tcs" },
];

// Centred block, white on white with "More Than a Partnership" above it: 32px on
// top (the other half of that shared boundary) and the full 64px at the bottom,
// where the CTA band changes the background. Figma rules a hairline across the
// top of the section (232:453) to keep the two white blocks apart.
export default function TrustedByIndustryLeaders() {
    return (
        <section
            id="our-partners"
            className="w-full scroll-mt-24 border-t border-[#f1f5f9] bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-3 text-center"
            >
                <p className="text-sm font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                    Our Partners
                </p>
                {/* Figma sets this one at the 48px Title-1 size rather than the
                    32px used by the other section headings on this page. */}
                <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold text-[#0f172a] leading-[1.2]">
                    Trusted by Industry Leaders
                </h2>
                <p className="max-w-[728px] text-base font-normal text-[#64748b] leading-[1.5]">
                    We work with a select group of partners who share our commitment to excellence, innovation and
                    customer success.
                </p>
            </motion.div>

            {/* 56px gutters in Figma on a single row; wraps to as many rows as the
                viewport needs rather than scrolling or shrinking the marks. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-14"
            >
                {PARTNERS.map((partner) => (
                    <span key={partner.label} className="flex items-center gap-2">
                        {partner.mark === "sap" ? <Image src={sapLogo} alt="SAP" className="h-4 w-[32px]" /> : null}

                        {/* The Microsoft mark is four coloured squares, which is
                            geometry rather than artwork — drawn with a grid so it
                            stays crisp at any density. */}
                        {partner.mark === "microsoft" ? (
                            <span className="grid size-4 grid-cols-2 gap-0.5">
                                <span className="bg-[#f25022]" />
                                <span className="bg-[#7fba00]" />
                                <span className="bg-[#0061af]" />
                                <span className="bg-[#ffb900]" />
                            </span>
                        ) : null}

                        {partner.icon ? <Image src={partner.icon} alt="" className="size-5" /> : null}

                        {partner.className ? (
                            <span className={`${partner.className} leading-7`}>{partner.label}</span>
                        ) : null}
                    </span>
                ))}

                <span className="text-xs font-medium italic text-[#94a3b8] leading-4">and more...</span>
            </motion.div>
        </section>
    );
}
