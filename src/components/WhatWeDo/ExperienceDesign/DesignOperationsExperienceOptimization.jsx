"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import designOperationsIcon from "@/assets/WhatWeDo/Experience Design/icons/design-operations.svg";
import designSystemsIcon from "@/assets/WhatWeDo/Experience Design/icons/design-systems.svg";
import accessibilityIcon from "@/assets/WhatWeDo/Experience Design/icons/accessibility.svg";
import experienceAnalyticsIcon from "@/assets/WhatWeDo/Experience Design/icons/experience-analytics.svg";
import experienceOptimizationIcon from "@/assets/WhatWeDo/Experience Design/icons/experience-optimization.svg";
import continuousImprovementIcon from "@/assets/WhatWeDo/Experience Design/icons/continuous-improvement.svg";

const ROW_1 = [
    {
        icon: designOperationsIcon,
        title: "Design Operations",
        desc: "We create structured processes and reusable practices for efficient design delivery.",
    },
    {
        icon: designSystemsIcon,
        title: "Design Systems",
        desc: "We build reusable components, patterns, and guidelines for consistent experiences.",
    },
    {
        icon: accessibilityIcon,
        title: "Accessibility",
        desc: "We design inclusive experiences that are easy to use across different users and platforms.",
    },
];

const ROW_2 = [
    {
        icon: experienceAnalyticsIcon,
        title: "Experience Analytics",
        desc: "We use user behaviour and product data to identify friction and improvement opportunities.",
    },
    {
        icon: experienceOptimizationIcon,
        title: "Experience Optimization",
        desc: "We improve interfaces, workflows, and interactions to make digital products more effective.",
    },
    {
        icon: continuousImprovementIcon,
        title: "Continuous Improvement",
        desc: "We continuously refine experiences based on user feedback, business needs, and product changes.",
    },
];

const Card = ({ icon, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className="flex flex-col gap-4"
    >
        <div className="relative size-10 shrink-0">
            <Image src={icon} alt="" fill className="object-contain" />
        </div>
        <p className="text-black text-2xl font-medium">{title}</p>
        <p className="text-[#55595E] text-lg font-light leading-[1.4]">{desc}</p>
    </motion.div>
);

const FeatureRow = ({ items }) => (
    <div className="w-full">
        {/* Mobile / tablet: plain stacked grid, no divider lines — the divider treatment only
            reads correctly once all 3 cards share a single row, at lg. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-x-8 gap-y-8">
            {items.map((item, index) => (
                <Card key={item.title} {...item} index={index} />
            ))}
        </div>

        {/* Desktop: 3 cards in one row. Each divider is a fixed 144px spacer (72px clear space,
            a hairline, 72px clear space) rather than a shared grid gap, so the gap is identical
            on both sides of every line and the 3 cards stay equal width, filling edge-to-edge
            between the section's own 64px left/right padding. */}
        <div className="hidden lg:flex lg:items-stretch">
            {items.map((item, index) => (
                <div key={item.title} className="contents">
                    <div className="flex-1 min-w-0">
                        <Card {...item} index={index} />
                    </div>
                    {index < items.length - 1 && (
                        <div className="w-[144px] shrink-0 flex justify-center">
                            <div className="w-px self-stretch bg-[#A1A5AA]/30" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default function DesignOperationsExperienceOptimization() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-10 sm:pb-10 lg:pb-16 px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center mb-10 sm:mb-16 w-full"
            >
                <h2 className="text-[#16171A] text-2xl font-medium">
                    Design Operations &amp; Experience Optimization
                </h2>
                <p className="text-[#55595E] text-lg font-light">
                    Design capabilities that help enterprise products remain consistent, accessible, and effective
                    as they grow.
                </p>
            </motion.div>

            <div className="flex flex-col gap-10 lg:gap-28 w-full">
                <FeatureRow items={ROW_1} />
                <FeatureRow items={ROW_2} />
            </div>
        </section>
    );
}

