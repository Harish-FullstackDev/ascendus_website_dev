"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import iconGenai from "@/assets/HomePage/icons/genai-cognitive-32.svg";
import iconCloud from "@/assets/HomePage/icons/cloud-foundations-32.svg";
import iconProduct from "@/assets/HomePage/icons/product-engineering-32.svg";
import iconData from "@/assets/HomePage/icons/data-analytics-32.svg";
import iconExperience from "@/assets/HomePage/icons/experience-design-32.svg";
import iconButtonArrow from "@/assets/HomePage/icons/arrow-right-16.svg";

// Copy is Figma's (633:5020) verbatim. Two slips kept as drawn: GenAI's
// description is about the cloud, and Product Engineering's stops mid-sentence
// ("…digital products that drive").
const CAPABILITIES = [
    { icon: iconGenai, title: "GenAI & Cognitive", description: "Build a secure and scalable foundation for your cloud journey." },
    { icon: iconCloud, title: "Cloud Foundations", description: "Build secure, scalable, and reliable cloud solutions for your business." },
    { icon: iconProduct, title: "Product Engineering", description: "Build scalable, reliable, and user-focused digital products that drive" },
    { icon: iconData, title: "Data & Analytics", description: "Turn data into clear insights that support smarter business decisions." },
    { icon: iconExperience, title: "Experience Design", description: "Digital experiences that are simple, engaging, and user-focused." },
];

// Section 5 — dark band, full 64 on both edges. Figma (633:5008) repeats the
// "Our Approach" heading, body and button here word for word; kept as drawn
// and flagged. Figma spreads five 229px cards across its 1312px row, leaving
// 41.75px gutters. Here the gutter stays at that 42px and the cards share the
// row, so wider viewports widen the cards instead of the gaps.
export default function DigitalAndTechnologyTransformation() {
    return (
        <section className="w-full bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-10 sm:gap-16"
            >
                <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex flex-col gap-3">
                        <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                            Digital &amp; Technology Transformation
                        </p>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-white">
                            End-to-end transformation
                            <br /> capabilities.
                        </h2>
                    </div>

                    <div className="flex flex-col items-start gap-3 lg:w-[374px] lg:shrink-0">
                        <p className="max-w-[354px] text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                            We combine SAP expertise, business understanding and technology capabilities to help
                            enterprises modernize, simplify and grow.
                        </p>
                        <Link
                            href="/services/"
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
                </div>

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-[42px]">
                    {CAPABILITIES.map((capability) => (
                        <div
                            key={capability.title}
                            className="flex min-h-[207px] flex-col justify-between gap-4 rounded-[12px] border border-[#c9d0d8] bg-white p-[25px]"
                        >
                            <Image src={capability.icon} alt="" className="size-8" />
                            <h3 className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">{capability.title}</h3>
                            <p className="max-w-[180px] text-[14px] leading-[1.4] text-[#0e2b4b]">{capability.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
