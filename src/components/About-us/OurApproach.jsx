"use client";

import { motion } from "framer-motion";

import ApproachPillar from "./ApproachPillar";

import iconUnderstand from "@/assets/About-us/icons/approach-understand.svg";
import iconDesign from "@/assets/About-us/icons/approach-design.svg";
import iconCultureValues from "@/assets/About-us/icons/approach-culture-values.svg";
import iconEnable from "@/assets/About-us/icons/approach-enable.svg";

const PILLARS = [
    { icon: iconUnderstand, title: "Understand", description: "Certified professionals with real-world experience." },
    { icon: iconDesign, title: "Design", description: "Solutions tailored to your business and industry." },
    { icon: iconCultureValues, title: "Culture & Values", description: "From strategy to implementation and support." },
    { icon: iconEnable, title: "Enable", description: "Committed to driving real business value." },
];

// Section 5 — "Our Approach". White band, heading + copy on the left and a
// row of four icon pillars on the right, divided by hairlines.
export default function OurApproach() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12"
            >
                <div className="flex w-full flex-col gap-3 lg:max-w-[409px] lg:shrink-0">
                    <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                        Our Approach
                    </p>

                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                        Strategy. Technology.
                        <br />
                        Real Business Impact.
                    </h2>

                    <p className="pt-[2px] text-sm font-normal leading-[1.5] text-[#0e2b4b] sm:text-base">
                        We start by understanding your unique challenges, then design and deliver tailored
                        solutions that simplify complexity and create measurable value.
                    </p>
                </div>

                <div className="grid w-full grid-cols-2 gap-y-8 sm:flex sm:flex-1 sm:grid-cols-none sm:gap-y-0 sm:divide-x sm:divide-[#0e2b4b]/20">
                    {PILLARS.map((pillar) => (
                        <ApproachPillar key={pillar.title} tone="light" {...pillar} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
