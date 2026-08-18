"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dashboardsImage from "@/assets/WhatWeDo/Cloud and Infrastructure/webp/Cloud_Card_1.webp";
import reportsImage from "@/assets/WhatWeDo/Cloud and Infrastructure/webp/Cloud_Card_2.webp";

const ROWS = [
    {
        eyebrow: "",
        title: "Migration Without the Disruption",
        desc: "We sequence cloud migrations around your business calendar and risk tolerance, with rollback plans built in, so the move to cloud never becomes a reason to pause the business.",
        image: dashboardsImage,
    },
    {
        eyebrow: "",
        title: " Infrastructure That Scales With You",
        desc: "Capacity planning, cost governance, and automation are built into the architecture from the start, so growth does not force a redesign eighteen months later.",
        image: reportsImage,
    },
];

export default function DisruptionFreeMigrationScalability() {
    return (
        <section className="w-full py-10 sm:py-16 pl-6 pr-6 sm:pl-[40px] sm:pr-0 bg-[#F5F6F6] flex flex-col gap-16 sm:gap-[70px] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full px-7 pt-6 pb-8 text-left sm:px-8 sm:pt-8 sm:pb-0"
            >
                <div className="max-w-[420px]">
                    <h2
                        className="text-black text-[22px] leading-[1.2] font-normal tracking-[-0.02em] sm:text-[26px] lg:text-[30px]"
                    >
                        Disruption-Free Migration & Scalability
                    </h2>

                    <p
                        className="mt-3 max-w-[430px] text-[#666666] text-[13px] leading-[1.4] font-light sm:text-[15px] lg:text-[16px]"
                    >
                        How we manage cloud migrations without disrupting
                        business operations.
                    </p>
                </div>
            </motion.div>

            <div className="flex w-full flex-col gap-10 sm:gap-14 lg:gap-16">
                {ROWS.map((row) => (
                    <motion.div
                        key={row.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative flex flex-col sm:block"
                    >
                        {/* Right Image: full-width on mobile like BusinessEnablementThroughSecurity's
                            panel, only narrowing and right-bleeding at sm+ (desktop keeps the original
                            54%-wide, flush-right treatment). */}
                        <div
                            className="relative w-full sm:ml-auto h-[300px] sm:w-[54%] sm:h-[420px] lg:h-[480px]"
                        >
                            <Image src={row.image} alt="" fill sizes="(max-width: 640px) 100vw, 54vw" className="object-cover" />
                        </div>
                        <div className="relative sm:absolute sm:left-[56px] sm:top-1/2 sm:-translate-y-1/2 bg-white w-full sm:w-[860px] sm:h-[250px] lg:h-[290px] -mt-4 sm:mt-0 overflow-hidden flex flex-col justify-center gap-6 px-6 sm:pl-[34px] sm:pr-[60px] py-8 sm:py-0">
                            <p className="text-black text-xl sm:text-2xl font-normal">{row.eyebrow}</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-black text-xl sm:text-2xl font-normal">{row.title}</p>
                                <p className="text-[#515151] text-base sm:text-lg font-light w-full">
                                    {row.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

