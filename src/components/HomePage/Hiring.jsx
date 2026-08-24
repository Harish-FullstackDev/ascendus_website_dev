"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import officeStaircaseImg from "@/assets/Ascendus/images/office-staircase.png";

export default function Hiring() {
    return (
        // Bordering the boundary from Stats above (white → white, top half of the
        // 32/32 split); bottom half of the same split lives on the next section.
        <section className="w-full bg-white pt-8 pb-8 sm:pt-8 sm:pb-8 px-6 sm:px-[64px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-stretch"
                >
                    {/* Image panel */}
                    <div className="relative w-full lg:w-[46%] aspect-[607/460] lg:aspect-auto lg:min-h-[480px] shrink-0 bg-[#1c5f85]">
                        <Image
                            src={officeStaircaseImg}
                            alt="Our team"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Card overlaps the image on large screens via negative margin */}
                    <div className="relative z-10 w-full lg:w-[62%] lg:-ml-[10%] bg-[#f3f6f9] px-8 md:px-12 py-10 md:py-12 flex flex-col justify-center gap-8">
                        <div className="flex flex-col gap-2 max-w-[512px]">
                            <p className="text-black text-lg font-light">We&apos;re Hiring</p>
                            <h2 className="mt-2 text-black text-2xl font-medium leading-[1.35]">
                                Building the Team Behind Enterprise Technology That Lasts
                            </h2>
                            <p className="mt-4 text-[#6c6c6c] text-lg font-light leading-[1.5]">
                                We&apos;re growing — and looking for people who care about doing enterprise
                                technology right. If you want to build systems that actually work long after
                                launch day, we want to hear from you.
                            </p>
                        </div>
                        <Link
                            href="/careers"
                            className="self-start rounded-[54px] border border-[#2d8ec5] px-8 py-3 text-lg font-light text-[#10161d] transition-colors hover:bg-[#2d8ec5] hover:text-white"
                        >
                            View Open Roles
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
