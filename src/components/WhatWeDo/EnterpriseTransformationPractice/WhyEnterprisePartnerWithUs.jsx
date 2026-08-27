"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import certifiedIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/WhyEnterprisePartner/icons/certified.svg";
import predictableIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/WhyEnterprisePartner/icons/predictable.svg";
import endToEndIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/WhyEnterprisePartner/icons/end-to-end.svg";
import longRunIcon from "@/assets/WhatWeDo/Enterprise Transformation Practice/WhyEnterprisePartner/icons/long-run.svg";

// Rebuilt against Figma node 2662:159 — the previous version had a different
// header (left-aligned, "Why Enterprise Partner With Us"), a single reused
// icon repeated 4x, and 3 of the 4 cards' copy was invented to fill in for a
// skeleton-repeat pattern. None of that matches this node: real header copy,
// 4 distinct icons, and every card has its own genuine text. Row-major order
// here ([Certified, Predictable, EndToEnd, LongRun]) is deliberate — with
// grid-cols-2's default row-major flow, that ordering is what lands
// Certified/EndToEnd in the left column and Predictable/LongRun in the right
// column, matching Figma's left/right grouping without needing separate
// per-column arrays.
// Split into two independent columns instead of one array mapped over a
// shared grid — Figma stacks Certified/EndToEnd on the left and
// Predictable/LongRun on the right as two separately-flowing lists (the
// left column's first item sits ~87px lower than the right column's), which
// a single `grid-cols-2` can never reproduce: grid auto-placement forces
// both columns into the same row tracks, so neither the top offset nor the
// two horizontal dividers can move independently of each other.
const LEFT_COLUMN = [
    {
        icon: certifiedIcon,
        title: "Certified Across Platforms",
        desc: "SAP-certified consultants and Microsoft-aligned specialists working as one accountable team.",
    },
    {
        icon: endToEndIcon,
        title: "End-to-End Ownership",
        desc: "From strategy and design through implementation and long-term AMS support.",
    },
];

const RIGHT_COLUMN = [
    {
        icon: predictableIcon,
        title: "Predictable, Risk-Managed Delivery",
        desc: "Structured governance and transparent milestones throughout every engagement.",
    },
    {
        icon: longRunIcon,
        title: "Built for the Long Run",
        desc: "We stay on after go-live — optimizing and evolving the system as your business changes.",
    },
];

function ReasonItem({ icon, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className="flex flex-col gap-4"
        >
            <Image src={icon} alt="" className="size-12" />
            <div className="flex flex-col gap-4">
                <h2 className="text-[#2E3033] text-2xl font-semibold">{title}</h2>
                <p className="text-[#55595E] text-lg font-light leading-normal">{desc}</p>
            </div>
        </motion.div>
    );
}

export default function WhyEnterprisePartnerWithUs() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-[72px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-3 sm:gap-5 max-w-[818px] text-center"
            >
                <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold">Why Partner With Us</h2>
                <p className="text-[#55595E] text-lg font-light leading-[1.5]">
                    Expertise, flexibility, and measurable outcomes—built around your business needs.
                </p>
            </motion.div>

            {/* Mobile: one simple stacked list, no vertical divider, no stagger —
                the two-column offset only makes sense at the width where both
                columns render side by side. */}
            <div className="w-full flex flex-col gap-10 sm:hidden">
                {[...LEFT_COLUMN, ...RIGHT_COLUMN].map((reason, index) => (
                    <div key={reason.title} className={index > 0 ? "pt-8 border-t border-[#A4A7A5]/40" : ""}>
                        <ReasonItem {...reason} delay={0} />
                    </div>
                ))}
            </div>

            {/* Desktop: two independently-flowing columns. The vertical divider is
                its own thin flex item between them (not a border on the columns
                themselves), so `items-stretch` sizes it to exactly this row's own
                content height — never the full section — and it never touches the
                horizontal dividers, which stop at each column's own width instead
                of spanning into the shared gap. The left column's extra top
                padding (pt-12) is what creates the ~87px stagger against the right
                column's first item, matching Figma — every other spacing value
                (icon/heading/description gaps, divider-to-item gap) stays identical
                between the two columns.

                Divider colors are the real values pulled from Figma's own line
                assets (imgLine70 → #A4A7A5 horizontal, imgLine84 → #8794A3
                vertical, the latter matching the --Border-strong token), each at
                reduced opacity — a solid 1px line at full strength reads bolder on
                screen than it does in the Figma canvas. Same /opacity treatment
                the project already uses elsewhere for subtle dividers (see
                Ascendus/WhyUs.jsx's divide-[#4a5568]/30) rather than inventing an
                unrelated lighter hex. */}
            <div className="hidden sm:flex w-full items-stretch">
                <div className="flex-1 flex flex-col pt-12">
                    <ReasonItem {...LEFT_COLUMN[0]} delay={0} />
                    <div className="w-full h-px bg-[#A4A7A5]/40 my-10" />
                    <ReasonItem {...LEFT_COLUMN[1]} delay={0.1} />
                </div>

                <div className="w-px bg-[#8794A3]/40 mx-8 sm:mx-12" />

                <div className="flex-1 flex flex-col">
                    <ReasonItem {...RIGHT_COLUMN[0]} delay={0} />
                    <div className="w-full h-px bg-[#A4A7A5]/40 my-10" />
                    <ReasonItem {...RIGHT_COLUMN[1]} delay={0.1} />
                </div>
            </div>
        </section>
    );
}
