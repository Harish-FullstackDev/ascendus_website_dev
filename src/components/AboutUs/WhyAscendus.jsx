"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ApproachPillar from "./ApproachPillar";

import bandBg from "@/assets/AboutUs/why-ascendus-bg.jpg";
import iconDeepSapExpertise from "@/assets/AboutUs/icons/why-deep-sap-expertise.svg";
import iconDesign from "@/assets/AboutUs/icons/why-design.svg";
import iconImplement from "@/assets/AboutUs/icons/why-implement.svg";
import iconMeasurableOutcomes from "@/assets/AboutUs/icons/why-measurable-outcomes.svg";

const PILLARS = [
    { icon: iconDeepSapExpertise, title: "Deep SAP Expertise", description: "Your business, goals and challenges" },
    { icon: iconDesign, title: "Design", description: "Solutions tailored to your business and industry." },
    { icon: iconImplement, title: "Implement", description: "From strategy to implementation and support." },
    { icon: iconMeasurableOutcomes, title: "Measurable Outcomes", description: "Committed to driving real business value." },
];

// Section 6 — "Why Ascendus". The globe photo sits under a left-to-right black
// fade so the copy and pillars on the left stay legible over the lit Earth.
export default function WhyAscendus() {
    return (
        <section className="relative w-full overflow-hidden bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-[48px]">
            <Image src={bandBg} alt="" fill className="object-cover" />
            <div
                aria-hidden
                className="absolute inset-0"
                style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.58) 51%, rgba(0,0,0,0) 100%)" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex w-full flex-col gap-10 sm:gap-12"
            >
                <div className="flex flex-col gap-3 lg:max-w-[409px]">
                    <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#68c2f2] leading-4">
                        Why Ascendus
                    </p>

                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-white">
                        Built for What&apos;s Next.
                    </h2>

                    <p className="pt-[2px] text-sm font-normal leading-[1.5] text-white sm:text-base">
                        We combine deep SAP expertise, industry focus and end-to-end capabilities to help you
                        achieve sustainable growth and long-term success.
                    </p>
                </div>

                <div className="grid w-full grid-cols-2 gap-y-8 lg:flex lg:w-[800px] lg:grid-cols-none lg:gap-y-0 lg:divide-x lg:divide-[#f8f8f8]">
                    {PILLARS.map((pillar) => (
                        <ApproachPillar key={pillar.title} tone="dark" align="start" {...pillar} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
