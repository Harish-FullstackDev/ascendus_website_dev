"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Figma (828:1212) uses the same photograph as the About Us vision/mission
// band, so it is imported from there rather than shipped twice.
import panelBg from "@/assets/About-us/vision-mission-bg.jpg";
import iconButtonArrow from "@/assets/SAP-S4HanaTransformation/icons/arrow-right-24.svg";
import iconLocalCompliance from "@/assets/SAP-S4HanaTransformation/icons/built-for-local-compliance-24.svg";
import iconBeyondSap from "@/assets/SAP-S4HanaTransformation/icons/beyond-sap-24.svg";
import iconReusableInterfaces from "@/assets/SAP-S4HanaTransformation/icons/reusable-interfaces-24.svg";
import iconDataOwnership from "@/assets/SAP-S4HanaTransformation/icons/clear-data-ownership-24.svg";
import iconProblemsCaughtEarly from "@/assets/SAP-S4HanaTransformation/icons/problems-caught-early-24.svg";
import iconLocalCompliance2 from "@/assets/SAP-S4HanaTransformation/icons/built-for-local-compliance-2-24.svg";

// Copy is Figma's verbatim, slips included: "Built for local compliance"
// appears twice (on two different glyphs), "Clear data ownership" repeats the
// "Beyond SAP" description, and "Problems caught early" carries what reads as
// the data-ownership description.
const COLUMNS = [
    [
        {
            icon: iconLocalCompliance,
            title: "Built for local compliance",
            description: "Connections designed to support e-invoicing and regulatory requirements.",
        },
        {
            icon: iconBeyondSap,
            title: "Beyond SAP",
            description: "Secure links to banks, government platforms, logistics partners and legacy applications.",
        },
        {
            icon: iconReusableInterfaces,
            title: "Reusable interfaces",
            description: "An API-led design that replaces fragile point-to-point connections",
        },
    ],
    [
        {
            icon: iconDataOwnership,
            title: "Clear data ownership",
            description: "Secure links to banks, government platforms, logistics partners and legacy applications.",
        },
        {
            icon: iconProblemsCaughtEarly,
            title: "Problems caught early",
            description: "Defined responsibility for data as it moves between systems, without silos.",
        },
        {
            icon: iconLocalCompliance2,
            title: "Built for local compliance",
            description: "Connections designed to support e-invoicing and regulatory requirements.",
        },
    ],
];

function IntegrationPoint({ point }) {
    return (
        <li className="flex items-center p-2">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-[#d5e2f2]">
                <Image src={point.icon} alt="" />
            </div>
            <div className="flex flex-col gap-3 px-3">
                <h3 className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">{point.title}</h3>
                <p className="text-[14px] font-normal leading-[1.4] text-[#0e2b4b]">{point.description}</p>
            </div>
        </li>
    );
}

// Section 8 — white, between the dark route band (full 64 on top) and the
// white testing section (32 at the shared edge).
export default function EverySystemAroundYourCore() {
    return (
        <section className="w-full bg-white px-6 pb-10 pt-10 sm:px-[64px] sm:pb-8 sm:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-12"
            >
                <div className="relative flex w-full flex-col justify-between gap-10 overflow-hidden rounded-[28px] bg-black p-6 xl:h-[470px] xl:w-[438px] xl:shrink-0">
                    <Image src={panelBg} alt="" fill sizes="(min-width: 1280px) 438px, 100vw" className="object-cover" />

                    <div className="relative flex max-w-[390px] flex-col gap-3">
                        <p className="flex h-8 items-center text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                            Integration
                        </p>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-white">
                            Every System Around Your Core Working From the Same Data
                        </h2>
                        <p className="text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                            S/4HANA delivers its full value when the systems around it share the same data. We design
                            integrations that stay reliable as your landscape grows.
                        </p>
                    </div>

                    <Link
                        href="#migration-routes"
                        className="group relative flex h-14 w-full items-center justify-center gap-2 rounded-[8px] border border-[#0061af] bg-[#0061af] px-[13px] text-base font-medium leading-[1.2] text-white transition-colors duration-300 hover:bg-[#005192] sm:text-[18px]"
                    >
                        Explore implementation paths
                        <Image
                            src={iconButtonArrow}
                            alt=""
                            className="size-6 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="grid w-full min-w-0 grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2 xl:h-[364px] xl:flex-1">
                    {COLUMNS.map((column, index) => (
                        <ul key={index} className="flex flex-col gap-6 xl:justify-between xl:gap-0">
                            {column.map((point) => (
                                <IntegrationPoint key={point.title + point.icon.src} point={point} />
                            ))}
                        </ul>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
