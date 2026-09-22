"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import iconDeepExpertise from "@/assets/Solution/icons/deep-sap-expertise-48.svg";
import iconIndustryFocused from "@/assets/Solution/icons/industry-focused-48.svg";
import iconEndToEndSupport from "@/assets/Solution/icons/end-to-end-support-48.svg";
import iconMeasurableImpact from "@/assets/Solution/icons/measurable-impact-48.svg";

const PILLARS = [
    { icon: iconDeepExpertise, title: "Deep SAP Expertise" },
    { icon: iconIndustryFocused, title: "Industry Focused" },
    { icon: iconEndToEndSupport, title: "End-to-End Support" },
    { icon: iconMeasurableImpact, title: "Measurable Impact" },
];

// Dark band between two lighter sections, so it keeps its full 64px top and
// bottom — the white/coloured boundary is never halved.
export default function MoreThanImplementation() {
    return (
        <section className="w-full border-t border-[#f1f5f9] bg-[#00223d] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12"
            >
                <div className="flex w-full flex-col gap-4 lg:w-[436px] lg:shrink-0">
                    <p className="text-[14px] font-semibold uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                        Why Choose Ascendus for SAP
                    </p>

                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#f8f8f8]">
                        More Than
                        <br className="hidden lg:block" /> Implementation.
                        <br className="hidden lg:block" /> A True Partner.
                    </h2>
                </div>

                {/* The hairlines are dividers between pillars, not card borders, so
                    they are drawn with divide-* on the row and disappear once the
                    pillars wrap onto two rows at tablet width. */}
                <div className="grid w-full grid-cols-2 gap-y-10 lg:flex lg:flex-1 lg:grid-cols-none lg:gap-y-0 lg:divide-x lg:divide-[#f8f8f8]">
                    {PILLARS.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="flex flex-1 flex-col items-center justify-center gap-2 px-2 py-1.5"
                        >
                            <span className="flex size-16 items-center justify-center rounded-[10px]">
                                <Image src={pillar.icon} alt="" className="size-12" />
                            </span>

                            <p className="max-w-[132px] pt-2 text-center text-sm sm:text-base font-normal leading-[1.5] text-[#f8f8f8]">
                                {pillar.title}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
