"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import sapLogo from "@/assets/HomePage/OurProudPartners/sap.png";
import salesforceLogo from "@/assets/HomePage/OurProudPartners/salesforce.png";
import awsLogo from "@/assets/HomePage/OurProudPartners/aws.png";
import odooLogo from "@/assets/HomePage/OurProudPartners/odoo.png";
import uipathLogo from "@/assets/HomePage/OurProudPartners/uipath.png";
import sophosLogo from "@/assets/HomePage/OurProudPartners/sophos.png";
import googleCloudLogo from "@/assets/HomePage/OurProudPartners/google-cloud.png";
import databricksLogo from "@/assets/HomePage/OurProudPartners/databricks.png";

// Same partners, same artwork as the homepage's "Our Proud Partners" strip —
// the real brand logo files rather than text and CSS shapes standing in for
// them. The intrinsic sizes come from each file; the rendered height is
// capped in the markup so the wordmarks sit on a common baseline.
const PARTNERS = [
    { name: "SAP", logo: sapLogo, width: 48, height: 24 },
    { name: "Salesforce", logo: salesforceLogo, width: 34, height: 24 },
    { name: "AWS", logo: awsLogo, width: 37, height: 24 },
    { name: "Odoo", logo: odooLogo, width: 58, height: 18 },
    { name: "UiPath", logo: uipathLogo, width: 56, height: 18 },
    { name: "Sophos", logo: sophosLogo, width: 92, height: 16 },
    { name: "Google Cloud", logo: googleCloudLogo, width: 30, height: 24 },
    { name: "Databricks", logo: databricksLogo, width: 123, height: 20 },
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
                <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-medium text-[#0f172a] leading-[1.2]">
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
                    <Image
                        key={partner.name}
                        src={partner.logo}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                        className="w-auto h-4 sm:h-6 object-contain"
                    />
                ))}
            </motion.div>
        </section>
    );
}
