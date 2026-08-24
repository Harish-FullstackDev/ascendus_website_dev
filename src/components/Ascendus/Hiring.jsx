"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import officeStaircaseImg from "@/assets/Ascendus/images/office-staircase.png";

// Image-right / overlapping-card treatment lifted from
// WhatWeDo/CloudInfrastructure/DisruptionFreeMigrationScalability.jsx —
// image bleeds right, card sits absolutely centered over it, instead of the
// previous flex-row + negative-margin overlap.
export default function Hiring() {
    return (
        // Bordering the boundary from Stats above (white → white, top half of the
        // 32/32 split); bottom half of the same split lives on the next section.
        <section className="w-full bg-white pt-8 pb-8 sm:pt-8 sm:pb-8 px-6 sm:px-[64px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col sm:block"
                >
                    {/* Left Image: full-width on mobile, left-bled and 54%-wide at sm+ */}
                    <div className="relative w-full sm:mr-auto h-[300px] sm:w-[54%] sm:h-[420px] lg:h-[480px]">
                        <Image
                            src={officeStaircaseImg}
                            alt="Our team"
                            fill
                            sizes="(max-width: 640px) 100vw, 54vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="relative sm:absolute sm:top-1/2 sm:right-0 sm:-translate-y-1/2 bg-[#f3f6f9] w-full sm:w-[860px] -mt-4 sm:mt-0 flex flex-col justify-center gap-6 px-6 sm:pl-[60px] sm:pr-[34px] py-8 sm:py-10">
                        <div className="flex flex-col gap-3 max-w-[512px]">
                            <p className="text-[#10161d] text-lg font-light">We&apos;re Hiring</p>
                            <h2 className="text-[#10161d] text-xl sm:text-2xl font-medium leading-[1.35]">
                                Building the Team Behind Enterprise Technology That Lasts
                            </h2>
                            <p className="text-[#4a5568] text-base sm:text-lg font-light leading-[1.5]">
                                We&apos;re growing — and looking for people who care about doing enterprise
                                technology right. If you want to build systems that actually work long after
                                launch day, we want to hear from you.
                            </p>
                        </div>
                        <Link
                            href="/careers"
                            className="self-start rounded-none border border-[#2d8ec5] px-8 py-3 text-lg font-light text-[#10161d] transition-colors hover:bg-[#2d8ec5] hover:text-white"
                        >
                            View Open Roles
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
