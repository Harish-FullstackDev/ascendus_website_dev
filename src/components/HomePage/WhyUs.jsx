"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import UnderlineArrowLink from "./UnderlineArrowLink";
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
        desc: "Flexible, standards based architectures that minimize vendor lock-in and protect your long-term roadmap.",
    },
];

// One fluid gap value used in two places that are meant to read as the same
// interval: between the "Who We Are" link and the card row, and inside each
// card between its icon and title. Declared once (as a full literal, so
// Tailwind's scanner still sees the class) rather than repeated, so the two
// cannot drift apart later.
const MATCHED_GAP = "gap-[clamp(2rem,6vw,6.5rem)]";
// The same interval as MATCHED_GAP, expressed as a top margin. Inside a card the
// icon/title/description are laid out as three flat siblings (so mobile can put
// the icon *below* the title with `order`), which means the icon-to-title
// interval has to come from a margin rather than the container's gap.
const MATCHED_GAP_MT = "sm:mt-[clamp(2rem,6vw,6.5rem)]";

export default function WhyUs() {
    return (
        // Colored section bordered by white sections on both edges — full 64 on each.
        <section className="w-full bg-[#f5f6f6] pt-10 pb-10 sm:p-16 px-6 ">
            <div className={`w-full flex flex-col ${MATCHED_GAP}`}>
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
                        <UnderlineArrowLink
                            href="/who-we-are"
                            label="Who We Are"
                            className="shrink-0 mt-2"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#55595E]/30"
                >
                    {FEATURES.map((feat) => (
                        // Flat icon/title/description siblings so the mobile order can differ from
                        // desktop: below sm the title leads and the icon follows it; from sm up the
                        // source order (icon, title, description) is restored. Intervals are margins
                        // rather than a container gap because they differ per element.
                        // No horizontal padding in the mobile stack: the section's own px-6 already
                        // sets the edge, so every card lines up with the heading above them — and
                        // `first:pl-0` (which flushes the leftmost card of the sm+ row with the
                        // section edge) would otherwise indent only cards 2-4 in a single column.
                        <div key={feat.title} className="flex flex-col items-start py-6 px-0 sm:px-6 sm:first:pl-0">
                            <div className="relative size-10 sm:size-12 shrink-0 order-2 mt-6 sm:order-1 sm:mt-0">
                                <Image src={feat.icon} alt="" fill className="object-contain" />
                            </div>
                            {/* From sm up, fixed to a 2-line height regardless of actual wrap count,
                                so every card's description starts on the same row — titles range
                                from one to two lines at that column width and would otherwise
                                stagger the descriptions (a misalignment the Figma source has too;
                                not reproduced here on purpose). Single-column mobile has no row to
                                align to, so the reserve would only be dead space above the icon. */}
                            <h2 className={`text-[#2E3033] text-xl sm:text-2xl font-semibold leading-normal sm:min-h-[72px] w-full order-1 sm:order-2 ${MATCHED_GAP_MT}`}>{feat.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light leading-normal w-full order-3 mt-6">{feat.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
