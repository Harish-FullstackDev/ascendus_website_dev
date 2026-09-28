"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import officePhoto from "@/assets/AboutUs/office.jpg";
import statDivider from "@/assets/AboutUs/icons/stat-divider.svg";

const STATS = [
    { value: "5+", label: ["Years of", "Industry Experience"] },
    { value: "200+", label: ["Consultants", "Specialists"] },
    { value: "100%", label: ["Client", "Satisfaction"] },
];

// Section 2 — "Who We Are". White band directly under the hero, so it takes
// the full 64/48px pad the site gives a white section following a dark hero.
export default function WhoWeAreIntro() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-[48px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
            >
                <div className="flex w-full flex-col gap-6 lg:max-w-[567px]">
                    <div className="flex flex-col gap-3">
                        <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                            Who We Are
                        </p>

                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                            Built on Expertise.
                            <br />
                            Driven by People.
                        </h2>

                        <p className="pt-[2px] text-sm font-normal leading-[1.5] text-[#415773] sm:text-base">
                            Ascendus is an enterprise technology and business transformation company, established in
                            Riyadh, helping organizations simplify complexity and create lasting business value
                            through the right blend of people, processes and technology.
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-start sm:gap-8">
                        {STATS.map((stat, index) => (
                            <div key={stat.value} className="flex items-center gap-4 sm:gap-8">
                                {index > 0 ? (
                                    <Image src={statDivider} alt="" className="h-[70px] w-px" />
                                ) : null}
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <p className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] leading-[1.4] text-[#64748b]">
                                        {stat.label[0]}
                                        <br />
                                        {stat.label[1]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] sm:h-[391px] lg:max-w-[612px]">
                    <Image src={officePhoto} alt="" fill className="object-cover" />
                </div>
            </motion.div>
        </section>
    );
}
