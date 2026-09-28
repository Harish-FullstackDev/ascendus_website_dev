"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import bandBg from "@/assets/About-us/why-ascendus-bg.jpg";
import iconDeepSapExpertise from "@/assets/About-us/icons/why-deep-sap-expertise.svg";
import iconDesign from "@/assets/About-us/icons/why-design.svg";
import iconImplement from "@/assets/About-us/icons/why-implement.svg";
import iconMeasurableOutcomes from "@/assets/About-us/icons/why-measurable-outcomes.svg";

// Copy is Figma's (583:1729) verbatim, including "Committed real business
// value." which reads like a dropped "to driving".
const PILLARS = [
    { icon: iconDeepSapExpertise, title: "Deep SAP Expertise", description: "Your business, goals and challenges" },
    { icon: iconDesign, title: "Design", description: "Solutions tailored to your business and industry." },
    { icon: iconImplement, title: "Implement", description: "From strategy to implementation and support." },
    { icon: iconMeasurableOutcomes, title: "Measurable Outcomes", description: "Committed real business value." },
];

// Section 6 — "Why Ascendus". Figma (583:1729) is a 1440x464 band with the
// content centred vertically, and the copy column starting 266px in (18.5% of
// the frame) rather than at the usual 64px. The right edge keeps the site's
// 64px: Figma's four 200px pillar cells overflow their own 768px frame, so the
// cells flex to the space that is left instead.
//
// The pillars are not ApproachPillar: here each 200px cell centres a fixed
// 136px column with the icon and copy left-aligned inside it, and the dividers
// are full-strength #f8f8f8.
export default function WhyAscendus() {
    return (
        <section className="relative flex w-full items-center overflow-hidden bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-[48px] xl:min-h-[464px] xl:pl-[18.5%]">
            <Image src={bandBg} alt="" fill className="object-cover" />
            <div
                aria-hidden
                className="absolute inset-0"
                style={{ backgroundImage: "linear-gradient(90.24deg, rgba(0,0,0,0.58) 51.012%, rgba(0,0,0,0) 99.923%)" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex w-full flex-col items-start gap-10 xl:flex-row xl:items-center xl:gap-12"
            >
                <div className="flex w-full flex-col gap-6 xl:w-[318px] xl:shrink-0">
                    <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                        Why Ascendus
                    </p>

                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-white">
                        Built for What&apos;s Next.
                    </h2>

                    <p className="max-w-[318px] pt-[2px] text-sm font-normal capitalize leading-[1.5] text-white sm:text-base">
                        We combine deep SAP expertise, industry focus and end-to-end capabilities to help you
                        achieve sustainable growth and long term success.
                    </p>
                </div>

                <div className="grid w-full min-w-0 grid-cols-2 gap-y-8 md:flex md:flex-1 md:gap-y-0">
                    {PILLARS.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="flex flex-1 items-center justify-center py-px shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] md:min-h-[182px] md:border-r md:border-[#f8f8f8] md:last:border-r-0"
                        >
                            <div className="flex w-[136px] flex-col items-start gap-2">
                                <span className="flex size-16 items-center justify-center rounded-[10px]">
                                    <Image src={pillar.icon} alt="" className="size-12" />
                                </span>

                                <div className="flex w-full flex-col gap-3 pt-2">
                                    <p className="text-base font-normal capitalize leading-[1.5] text-white">
                                        {pillar.title}
                                    </p>
                                    <p className="text-sm leading-[1.4] text-[#c9d0d8]">{pillar.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
