"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import bandBg from "@/assets/AboutUs/vision-mission-bg.jpg";
import iconVision from "@/assets/AboutUs/icons/vision.svg";
import iconMission from "@/assets/AboutUs/icons/mission.svg";
import iconCultureValues from "@/assets/AboutUs/icons/culture-values.svg";
import iconCsr from "@/assets/AboutUs/icons/csr.svg";

const CARDS = [
    {
        icon: iconVision,
        title: "Our Vision",
        description:
            "To give enterprises across the GCC a single, accountable partner for the technology their operations depend on, from the first SAP assessment through years of live production support. We measure our work by whether systems keep running the way they were designed to, long after the project team has moved on.",
    },
    {
        icon: iconMission,
        title: "Our Mission",
        description:
            "To be the enterprise technology practice GCC organizations turn to first, not because we cover every capability on a page, but because our SAP foundation, cloud engineering, and compliance fluency operate as one coordinated practice instead of five separate vendor relationships.",
    },
    {
        icon: iconCultureValues,
        title: "Culture & Values",
        description:
            "We foster a culture of collaboration, integrity, continuous learning, and innovation. By empowering our people and embracing diverse perspectives, we create an environment where great ideas thrive and exceptional results follow.",
    },
    {
        icon: iconCsr,
        title: "CSR",
        description:
            "We believe business success goes hand in hand with social responsibility. Through ethical practices, environmental awareness, community engagement, and sustainable initiatives, we strive to create a positive impact for society and future generations.",
    },
];

// The dark strip between "Our Purpose" and "Our Approach". A plain 4-up band —
// no hover state in Figma, just an icon, a title and a description per column,
// separated by hairline dividers that drop on the last (shadow-only) column.
export default function VisionMissionBand() {
    return (
        <section className="relative w-full overflow-hidden bg-[#00223d] px-6 py-8 sm:px-[64px] sm:py-[64px]">
            <Image src={bandBg} alt="" fill className="object-cover" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-12 lg:flex lg:grid-cols-none lg:gap-0 lg:divide-x lg:divide-white/40"
            >
                {CARDS.map((card) => (
                    <div key={card.title} className="flex flex-1 flex-col items-center gap-2 px-4 text-center lg:px-6">
                        <span className="flex size-16 items-center justify-center rounded-[10px]">
                            <Image src={card.icon} alt="" className="size-12" />
                        </span>

                        <p className="pt-2 text-base font-normal capitalize leading-[1.5] text-[#ecf2f9]">
                            {card.title}
                        </p>

                        <p className="pt-2 max-w-[280px] text-sm leading-[1.4] text-[#c9d0d8]">
                            {card.description}
                        </p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
