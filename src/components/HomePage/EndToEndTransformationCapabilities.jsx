"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import imgSap from "@/assets/HomePage/sap-transformation.webp";
import imgBusiness from "@/assets/HomePage/business-transformation.webp";
import imgDigital from "@/assets/HomePage/digital-technology-transformation.webp";
import iconButtonArrow from "@/assets/HomePage/icons/arrow-right-16.svg";
import iconExploreArrow from "@/assets/HomePage/icons/arrow-right-18.svg";

const CAPABILITIES = [
    {
        title: "SAP Transformation",
        description: "Modernize your ERP foundation and unlock greater value.",
        image: imgSap,
        href: "/what-we-do/enterprise-transformation/sap-transformation/",
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.72) 87.751%)",
    },
    {
        title: "Business Transformation",
        description: "Simplify, innovate and create a more efficient, agile enterprise.",
        image: imgBusiness,
        href: "/what-we-do/business-advisory/",
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
    },
    {
        title: "Digital & Technology Transformation",
        description: "Build connected, resilient and scalable digital ecosystems.",
        image: imgDigital,
        href: "/what-we-do/enterprise-transformation/broader-technology-services/",
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
    },
];

// Figma (633:4903) shows "Explore" on the first card only; it is the hover
// state, so every card reveals it on hover. It sits in a grid row that grows
// from 0fr to 1fr, which lifts the title and copy by exactly its own height.
function CapabilityCard({ capability }) {
    return (
        <Link
            href={capability.href}
            className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[16px] border border-[#d0d0d0] bg-white p-[25px] lg:h-[301px]"
        >
            <Image
                src={capability.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 276px, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0" style={{ backgroundImage: capability.scrim }} />

            <div className="relative flex flex-col gap-3">
                <h3 className="text-[18px] font-medium leading-[1.2] text-white">{capability.title}</h3>
                <p className="text-[14px] leading-[1.4] text-white">{capability.description}</p>

                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                        <span className="flex items-center gap-2 pt-3 text-[14px] font-semibold leading-[24px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-150 group-focus-visible:opacity-100">
                            Explore
                            <span className="flex size-[30px] items-center justify-center">
                                <Image src={iconExploreArrow} alt="" className="size-[18px]" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

// Section 3 — dark band, full 64 on both edges.
export default function EndToEndTransformationCapabilities() {
    return (
        <section className="w-full bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-10 xl:flex-row xl:items-stretch xl:justify-between xl:gap-12"
            >
                <div className="flex flex-col items-start justify-between gap-8 xl:w-[390px] xl:shrink-0">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <p className="flex h-8 items-center text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                                Our Approach
                            </p>
                            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-white xl:whitespace-nowrap">
                                End-to-end transformation
                                <br /> capabilities.
                            </h2>
                        </div>
                        <p className="max-w-[388px] text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                            We combine SAP expertise, business understanding and technology capabilities to help
                            enterprises modernize, simplify and grow.
                        </p>
                    </div>

                    <Link
                        href="/about-us/"
                        className="group inline-flex h-10 items-center gap-2 rounded-[8px] border border-[#0061af] bg-[#0061af] px-[13px] text-base font-normal capitalize leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192]"
                    >
                        Explore Our Approach
                        <Image
                            src={iconButtonArrow}
                            alt=""
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-3 xl:flex-1">
                    {CAPABILITIES.map((capability) => (
                        <CapabilityCard key={capability.title} capability={capability} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
