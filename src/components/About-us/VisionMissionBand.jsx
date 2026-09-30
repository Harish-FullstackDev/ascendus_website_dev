"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import bandBg from "@/assets/About-us/vision-mission-bg.jpg";
import iconVision from "@/assets/About-us/icons/vision.svg";
import iconMission from "@/assets/About-us/icons/mission.svg";
import iconCultureValues from "@/assets/About-us/icons/culture-values.svg";
import iconCsr from "@/assets/About-us/icons/csr.svg";

// Copy, per-card text widths and colours are Figma's (495:81) verbatim. The
// designer gave "Our Vision" an #ecf2f9 title; all four body descriptions use
// #c9d0d8. The widths are what set each description's line breaks, so they
// are carried as max-widths.
const CARDS = [
    {
        icon: iconVision,
        title: "OUR VISION",
        titleColor: "text-[#ecf2f9]",
        bodyColor: "text-[#c9d0d8]",
        bodyWidth: "max-w-[231px]",
        description:
            "To give enterprises across the GCC a single, accountable partner for the technology their operations depend on, from the first SAP assessment through years of live production support. We measure our work by whether systems keep running the way they were designed to, long after the project team has moved on.",
    },
    {
        icon: iconMission,
        title: "OUR MISSION",
        titleColor: "text-white",
        bodyColor: "text-[#c9d0d8]",
        bodyWidth: "max-w-[234px]",
        description:
            "To be the enterprise technology practice GCC organizations turn to first, not because we cover every capability on a page, but because our SAP foundation, cloud engineering, and compliance fluency operate as one coordinated practice instead of five separate vendor relationships.",
    },
    {
        icon: iconCultureValues,
        title: "Culture & Values",
        titleColor: "text-white",
        bodyColor: "text-[#c9d0d8]",
        bodyWidth: "max-w-[199px]",
        padding: "lg:px-6",
        description:
            "We foster a culture of collaboration, integrity, continuous learning, and innovation. By empowering our people and embracing diverse perspectives, we create an environment where great ideas thrive and exceptional results follow.",
    },
    {
        icon: iconCsr,
        title: "CSR",
        titleColor: "text-white",
        bodyColor: "text-[#c9d0d8]",
        bodyWidth: "max-w-[248px]",
        description:
            "We believe business success goes hand in hand with social responsibility. Through ethical practices, environmental awareness, community engagement, and sustainable initiatives, we strive to create a positive impact for society and future generations.",
    },
];

// The dark strip between "Our Purpose" and "Our Approach". On desktop Figma
// draws four equal 413px-tall columns split by solid white rules (none after
// the last). Each column centres a 340px stack that runs justify-between:
// icon at the top, a 210px description slot at the bottom with its copy
// vertically centred, and the title floating between them — which is why the
// descriptions start at different heights across the four columns.
export default function VisionMissionBand() {
    return (
        <section className="relative w-full overflow-hidden bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-16">
            <Image src={bandBg} alt="" fill className="object-cover" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-y-12 lg:flex lg:h-[413px] lg:gap-0"
            >
                {CARDS.map((card) => (
                    <div
                        key={card.title}
                        className={`flex flex-1 flex-col items-center justify-center px-3 lg:border-r lg:border-white lg:py-[6px] lg:last:border-r-0 ${card.padding ?? ""}`}
                    >
                        <div className="flex w-full flex-col items-center gap-4 text-center lg:h-[340px] lg:justify-between lg:gap-0">
                            <span className="flex size-16 shrink-0 items-center justify-center rounded-[10px]">
                                <Image src={card.icon} alt="" className="size-12" />
                            </span>

                            <p className={`text-base font-normal leading-[1.5] ${card.titleColor}`}>
                                {card.title}
                            </p>

                            <div className="flex w-full items-center justify-center lg:h-[210px] lg:pt-2">
                                <p className={`w-full text-sm font-normal leading-[1.4] ${card.bodyWidth} ${card.bodyColor}`}>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
