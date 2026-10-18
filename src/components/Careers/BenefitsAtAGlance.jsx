"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import imgBenefitsTeam from "@/assets/Careers/benefits-team.webp";

const STATS = [
    { value: "200+", label: "Consultants & Specialists" },
    { value: "8+", label: "Countries" },
    { value: "One", label: "Global Team" },
];

// Figma 1524:349 — two 310×257 tiles (dark title tile + photo) on the left,
// three stats on the right. Figma wraps each stat in a white 24/32-padded box
// on a white page, so the boxes don't show; only the text spacing is kept:
// 48 between stats, the last one ending on the 64 gutter. Shares the 32/32
// split with the white band above and keeps the full 64 against the neutral
// benefits band below.
export default function BenefitsAtAGlance() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:pb-16 sm:pt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-10 xl:flex-row xl:items-center xl:justify-between"
            >
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(2,310px)]">
                    <div className="flex h-[257px] items-center justify-center rounded-[12px] bg-[#00223d] p-8">
                        <p className="text-center text-2xl font-medium capitalize leading-[1.2] text-[#f8f9fa]">
                            Benefits that help you thrive and grow
                        </p>
                    </div>

                    <div className="relative h-[257px] overflow-hidden rounded-[12px]">
                        <Image
                            src={imgBenefitsTeam}
                            alt=""
                            fill
                            sizes="(min-width: 640px) 310px, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <dl className="flex flex-wrap gap-x-12 gap-y-8 font-medium">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="flex flex-col-reverse gap-4">
                            <dt className="whitespace-nowrap text-[18px] leading-[1.2] text-[#415773]">{stat.label}</dt>
                            <dd className="text-[clamp(2.5rem,3.4vw,3rem)] capitalize leading-[1.2] text-[#0061af]">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </motion.div>
        </section>
    );
}
