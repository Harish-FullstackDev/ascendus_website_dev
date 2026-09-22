"use client";

import { motion } from "framer-motion";

import SAPSolutionCard from "./SAPSolutionCard";

import imgS4Hana from "@/assets/Solution/SAP_S4HANA.webp";
import imgAriba from "@/assets/Solution/SAP_Ariba.webp";
import imgSuccessFactors from "@/assets/Solution/SAP_SuccessFactors.webp";
import imgBtp from "@/assets/Solution/SAP_BTP.webp";
import imgAnalytics from "@/assets/Solution/SAP_Analytics.webp";
import imgIntegration from "@/assets/Solution/SAP_Integration.webp";
import imgEhs from "@/assets/Solution/SAP_EHS.webp";
import imgCx from "@/assets/Solution/SAP_CX.webp";
import imgRise from "@/assets/Solution/RISE_with_SAP.webp";
import imgGrow from "@/assets/Solution/GROW_with_SAP.webp";

// Copy is transcribed from Figma as written, including "SUCESS" and "stranger
// customer relations" — both look like typos, so flag them with the designer
// rather than silently correcting them here.
const SOLUTIONS = [
    {
        description: "Intelligent ERP for a simpler, faster and more agile enterprise",
        image: imgS4Hana,
        title: "SAP S/4HANA",
    },
    {
        description: "Digitize procurement and build a more resilient supply chain",
        image: imgAriba,
        title: "SAP ARIBA",
    },
    {
        description: "Innovate faster with a unified, scalable cloud platform",
        image: imgSuccessFactors,
        title: "SAP SUCESS FACTORS",
    },
    {
        description: "Turn data into insights and make confident decision",
        image: imgBtp,
        title: "SAP BTP",
    },
    {
        description: "Turn data into insights and make confident decisions",
        image: imgAnalytics,
        title: "SAP ANALYTICS",
    },
    {
        description: "Connect systems, processes and people for a unified enterprise",
        image: imgIntegration,
        title: "SAP INTEGRATION",
    },
    {
        description: "Ensure a safer, more sustainable and compliant organization",
        image: imgEhs,
        title: "SAP EHS",
    },
    {
        description: "Deliver connected experience and build stranger customer relations",
        image: imgCx,
        title: "SAP CX",
    },
    {
        description: "Accelerate your transformation to a clean, intelligent, sustainable enterprise",
        image: imgRise,
        title: "RISE WITH SAP",
    },
    {
        description: "Get started with a proven, package solution to scale with confidence",
        image: imgGrow,
        title: "GROW WITH SAP",
    },
];

// White section sitting between the hero band and the dark "More Than
// Implementation" band, so it keeps the full 64px on both edges rather than the
// 48px Figma's frame carries.
export default function ComprehensiveSAPSolutions() {
    return (
        <section className="w-full bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full max-w-[900px] flex-col gap-3"
            >
                <p className="text-[14px] font-semibold uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                    Our SAP Solutions
                </p>

                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                    Comprehensive SAP Solutions for Every Business Need.
                </h2>

                <p className="max-w-[748px] pt-[2px] text-sm sm:text-base font-normal leading-[1.5] text-[#415773]">
                    From core ERP to cloud, procurement, people, analytics and beyond — we deliver integrated SAP
                    solutions to help you simplify, innovate and grow.
                </p>
            </motion.div>

            {/* Figma draws the first tile 28px wider than the other nine — that is
                a stray resize on one layer, not a layout intent, so all ten run on
                one five-track grid at the file's own 53px column gutter. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="mt-10 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6 lg:gap-x-10 lg:gap-y-[51px] xl:gap-x-[53px]"
            >
                {SOLUTIONS.map((solution) => (
                    <SAPSolutionCard
                        key={solution.title}
                        description={solution.description}
                        image={solution.image}
                        title={solution.title}
                    />
                ))}
            </motion.div>
        </section>
    );
}
