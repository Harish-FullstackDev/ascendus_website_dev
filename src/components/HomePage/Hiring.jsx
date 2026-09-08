"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import officeStaircaseImg from "@/assets/HomePage/images/office-staircase.png";

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
                            <p className="text-[#2E3033] text-lg font-light">We&apos;re Hiring</p>
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold leading-[1.35]">
                                Building the Team Behind Enterprise Technology That Lasts
                            </h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                                We&apos;re growing and looking for people who care about doing enterprise
                                technology right. If you want to build systems that actually work long after
                                launch day, we want to hear from you.
                            </p>
                        </div>
                        <Link
                            href="/careers"
                            className="group self-start inline-flex items-center gap-4 whitespace-nowrap"
                        >
                            <span className="relative pb-[3px] text-lg font-light text-[#2E3033]">
                                View Open Roles
                                <span className="absolute left-0 bottom-0 h-[0.5px] w-full origin-left scale-x-0 bg-[#00447A] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                            </span>
                            <span className="relative size-7 shrink-0 overflow-hidden rounded-full bg-[#00447A]">
                                <svg viewBox="0 0 24 24" fill="none" className="absolute inset-0 size-full transition-transform duration-500 ease-out group-hover:translate-x-full group-hover:-translate-y-full">
                                    <path d="M7.76011 16.2427L16.2454 7.75738M9.88143 7.75738H16.2454V14.1213" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg viewBox="0 0 24 24" fill="none" className="absolute inset-0 size-full -translate-x-full translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                                    <path d="M7.76011 16.2427L16.2454 7.75738M9.88143 7.75738H16.2454V14.1213" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
