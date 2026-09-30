"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import iconAssessAndPlan from "@/assets/SAP-S4HanaTransformation/icons/assess-and-plan-24.svg";
import iconImplement from "@/assets/SAP-S4HanaTransformation/icons/implement-24.svg";
import iconConvertAndMigrate from "@/assets/SAP-S4HanaTransformation/icons/convert-and-migrate-24.svg";
import iconConnect from "@/assets/SAP-S4HanaTransformation/icons/connect-24.svg";
import iconTestAndDeploy from "@/assets/SAP-S4HanaTransformation/icons/test-and-deploy-32.svg";
import iconRunAndImprove from "@/assets/SAP-S4HanaTransformation/icons/run-and-improve-24.svg";

// Figma (828:1055) exports five of the glyphs at 24px and "Test and deploy" at
// 32px; each keeps its own size inside the 56px tile.
const CAPABILITIES = [
    {
        icon: iconAssessAndPlan,
        title: "Assess and plan",
        description: "Business case, landscape review and a roadmap your leadership can approve.",
    },
    {
        icon: iconImplement,
        title: "Implement",
        description: "Greenfield, Brownfield and hybrid delivery, matched to your landscape.",
    },
    {
        icon: iconConvertAndMigrate,
        title: "Convert and migrate",
        description: "Data and system transition planned around business continuity.",
    },
    {
        icon: iconConnect,
        title: "Connect",
        description: "Reliable links between S/4HANA, other SAP products and non-SAP systems.",
    },
    {
        icon: iconTestAndDeploy,
        title: "Test and deploy",
        description: "Automated testing and structured cutover, so go-live is uneventful.",
    },
    {
        icon: iconRunAndImprove,
        title: "Run and improve",
        description: "Managed services (AMS) that keep the system stable and keep improving it after go-live.",
    },
];

// Section 4 — the intro pins while the capability list scrolls past it, the
// same sticky-column treatment and slide-in as "Cloud Migration & Hybrid
// Strategy" on /what-we-do/cloud-infrastructure/. White, sitting between the
// starfield band and the full-bleed team photo, so the full 64 on both edges.
export default function OneTeamFromFirstAssessment() {
    return (
        <section className="w-full border-t border-[#8695a7] bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:justify-between lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex w-full flex-col gap-3 lg:sticky lg:top-28 lg:w-[497px] lg:shrink-0"
                >
                    <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                        Our S/4HANA Capabilities
                    </p>
                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-[#0f172a]">
                        One Team From First Assessment to Daily Operations
                    </h2>
                    <p className="max-w-[490px] pt-[5px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                        Your program stays with the same people from business case to support, so nothing is lost
                        between phases.
                    </p>
                </motion.div>

                <motion.ul
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex w-full flex-col gap-6 lg:w-[605px] lg:shrink"
                >
                    {CAPABILITIES.map((capability) => (
                        <li
                            key={capability.title}
                            className="flex items-center gap-6 rounded-[12px] bg-white p-3 shadow-[1px_1px_20px_0px_rgba(0,0,0,0.15)] sm:gap-10"
                        >
                            <div className="my-3 flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-[#004174]">
                                <Image src={capability.icon} alt="" />
                            </div>
                            <div className="flex max-w-[360px] flex-col gap-3 py-[3px]">
                                <h3 className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">
                                    {capability.title}
                                </h3>
                                <p className="text-[14px] font-normal leading-[1.4] text-[#0e2b4b]">
                                    {capability.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
