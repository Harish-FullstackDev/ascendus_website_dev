"use client";

import { motion } from "framer-motion";

import IndustryCard from "./IndustryCard";

import manufacturing from "@/assets/Industries/Manufacturing.webp";
import retail from "@/assets/Industries/Retail_Consumer.webp";
import government from "@/assets/Industries/Government_Public_Sector.webp";
import banking from "@/assets/Industries/Banking_Financial_Services.webp";
import education from "@/assets/Industries/Education_Research.webp";
import energy from "@/assets/Industries/Energy_Utilities.webp";
import engineering from "@/assets/Industries/Engineering_Construction.webp";
import healthcare from "@/assets/Industries/Healthcare_Life_Sciences.webp";
import technology from "@/assets/Industries/Technology_Media_Communications.webp";
import transportation from "@/assets/Industries/Transportation_Logistics.webp";

// Figma lays these out as two rows of five. They are one grid here so the
// columns collapse cleanly instead of two rows reflowing independently. The
// order matches the design, reading left to right across both rows.
const INDUSTRIES = [
    {
        description: "Drive operational efficiency, resilience and innovation across your value chain.",
        image: manufacturing,
        title: "Manufacturing",
    },
    {
        description: "Create seamless customer experiences and build agile, future-ready operations.",
        image: retail,
        title: "Retail & Consumer",
    },
    {
        description: "Enable citizen-centric services through secure, efficient and transparent solutions.",
        image: government,
        title: "Government & Public Sector",
    },
    {
        description: "Accelerate digital transformation and deliver secure, customer-focused financial services.",
        image: banking,
        title: "Banking & Financial Services",
    },
    {
        description: "Modernize operations and support a cleaner, more sustainable future.",
        image: education,
        title: "Education & Research",
    },
    {
        description: "Improve project delivery, resource management and operational performance.",
        image: energy,
        title: "Energy & Utilities",
    },
    {
        description: "Enhance patient care and research outcomes through data-driven innovation.",
        image: engineering,
        title: "Engineering & Construction",
    },
    {
        description: "Enable growth in a connected world through scalable and intelligent solutions.",
        image: healthcare,
        title: "Healthcare & Life Sciences",
    },
    {
        description: "Build smarter, more connected supply chains for a faster, more resilient future.",
        image: technology,
        title: "Technology, Media & Communications",
    },
    {
        description: "Empower learning, research and innovation through world-class digital solutions.",
        image: transportation,
        title: "Transportation & Logistics",
    },
];

// First content section under the hero. The hero is a full-bleed image band, so
// this side keeps the full 64px on top; "Industry Expertise That Delivers
// Outcomes" below changes the background to #00223d, so the bottom keeps its
// full 64px too.
export default function ACollaborativeEcosystem() {
    return (
        <section
            id="our-industries"
            className="w-full scroll-mt-24 bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex max-w-[811px] flex-col gap-3"
            >
                <p className="text-sm font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                    Our Industries
                </p>
                <h2 className="text-2xl sm:text-[32px] font-semibold text-[#0e2b4b] leading-[1.2]">
                    A Collaborative Ecosystem for Greater Possibilities
                </h2>
                <p className="pt-0.5 text-base font-normal text-[#415773] leading-[1.5]">
                    Our ecosystem includes strategic partners, technology leaders, and industry alliances that help us
                    deliver innovative solutions, expand capabilities and create greater value for our client.
                </p>
            </motion.div>

            {/* ~13px between columns and 32px between the two rows in Figma. */}
            <div className="mt-10 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 lg:gap-x-[13px] lg:gap-y-8">
                {INDUSTRIES.map((industry) => (
                    <IndustryCard
                        key={industry.title}
                        description={industry.description}
                        image={industry.image}
                        title={industry.title}
                    />
                ))}
            </div>
        </section>
    );
}
