"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import financialIcon from "@/assets/Careers/icons/financial-wellbeing-48.svg";
import healthIcon from "@/assets/Careers/icons/health-wellness-48.svg";
import briefcaseIcon from "@/assets/Careers/icons/briefcase-group.svg";
import balanceIcon from "@/assets/Careers/icons/work-life-balance-48.svg";

const BENEFITS = [
    {
        icon: <Image src={financialIcon} alt="" width={48} height={48} />,
        // Every title is broken onto two lines by hand (whitespace-pre-line).
        title: "Financial\nwellbeing",
        body: "We regularly review market data to ensure compensation reflects the value you bring. Your benefits extend beyond pay and may include retirement plans, financial education, etc.",
    },
    {
        icon: <Image src={healthIcon} alt="" width={48} height={48} />,
        title: "Health and\nwellness",
        body: "Our comprehensive health plans support your physical and mental well-being, including access to fitness programs, counseling services, and wellness resources.",
    },
    {
        // heroicons briefcase: the glyph sits inset 5% / 10% / 10% / 10% in its 48 box.
        icon: (
            <span className="relative block size-12">
                <Image src={briefcaseIcon} alt="" width={38.4} height={40.8} className="absolute left-[10%] top-[5%]" />
            </span>
        ),
        title: "Professional\ndevelopment",
        body: "We provide opportunities for growth through workshops, mentorship programs, and funding for courses that align with your career goals.",
    },
    {
        icon: <Image src={balanceIcon} alt="" width={48} height={48} />,
        title: "Work-life\nbalance",
        body: "We promote a flexible work environment that includes remote work options, generous paid time off, and family leave to help you maintain a healthy balance.",
    },
];

// Figma 1486:7799 — same section as the HRMS portal's job details page
// (Hrmsportal JobDetails/BenefitsSection), kept identical: neutral band,
// heading block, then four 262×353 white cards spread edge to edge
// (space-between), each with 8px corners (Figma 1641:13585). Each card keeps
// the icon at the top and pins the title +
// body group to the bottom. Two columns below xl, one on phones.
export default function CareersBenefits() {
    return (
        <section className="w-full bg-[#f1f3f5]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-8 px-6 py-10 sm:px-[64px]"
            >
                <div className="flex max-w-[740px] flex-col gap-2">
                    <h2 className="text-2xl font-medium capitalize leading-[1.2] text-[#0e2b4b]">
                        Benefits that help you thrive and grow
                    </h2>
                    <p className="text-sm leading-[1.4] text-[#415773]">
                        Our benefits program is built with you in mind so you can enjoy a fulfilling, balanced and
                        healthy life.
                    </p>
                </div>

                {/* Figma: four 262×353 cards 88 apart on the 1312 row. One row of four
                    from lg. The gap is the smaller of Figma's share of the row
                    (6.71%) and a line from 24px at a 896 row (lg) to 88px at
                    1312, so it matches Figma from 1440 up and narrows on smaller
                    laptops to keep the cards wide enough for their titles. The
                    cards get a min height that equals the 262:353 shape at the
                    Figma gap (26.9vw - 34.4px), and the row stretches them to
                    one height when the text needs more. Each card is a 3-row subgrid
                    (icon / title / body) so titles and bodies share rows across
                    the cards and start at the same height; the 1fr icon row takes
                    the spare height, keeping the text pinned to the bottom. */}
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[1fr_auto_auto] lg:gap-x-[min(6.71%,calc(15.38%_-_113.8px))]">
                    {BENEFITS.map(({ icon, title, body }) => (
                        <li
                            key={title}
                            className="row-span-3 grid grid-rows-subgrid gap-y-0 rounded-[8px] bg-white px-6 py-8 lg:min-h-[calc(26.9vw_-_34.4px)]"
                        >
                            <div className="mb-8">{icon}</div>
                            <h3 className="mb-6 whitespace-pre-line text-2xl font-medium capitalize leading-[1.2] text-[#0e2b4b]">
                                {title}
                            </h3>
                            <p className="text-sm leading-5 text-[#415773]">{body}</p>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
