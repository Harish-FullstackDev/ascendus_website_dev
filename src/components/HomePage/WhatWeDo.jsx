"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import serverRoomImg from "@/assets/HomePage/Homepage_Business_built_around.webp";

export default function WhatWeDo() {
    return (
        // Bordering the colored WhyUs section above (full 64 top); the section
        // below (Stats) is white too, so the bottom half of that boundary lives here.
        <section className="w-full bg-white pt-10 pb-8 sm:pt-16 sm:pb-8 px-6 sm:px-[64px]">
            <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-end">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full lg:w-[437px] max-w-[437px] aspect-[437/453] shrink-0 order-2 lg:order-1"
                >
                    <Image
                        src={serverRoomImg}
                        alt="Our technology team at work"
                        fill
                        className="object-cover object-bottom"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex-1 flex flex-col gap-2 order-1 lg:order-2"
                >
                    <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold leading-[1.4] max-w-[356px]">
                        Technology built around your business.
                    </h2>
                    <p className="mt-4 text-[#55595E] text-lg font-light leading-[1.5]">
                        We help enterprises plan, build, secure, and manage their technology with one
                        connected team. From strategy and implementation to cloud, data, cybersecurity,
                        automation, and ongoing support, we make complex technology simpler, smarter, and
                        ready to scale.
                    </p>
                    <Link
                        href="/whatWeDo/en"
                        className="mt-6 self-start rounded-none border border-[#2d8ec5] px-8 py-3 text-lg font-light text-[#2E3033] transition-colors hover:bg-[#2d8ec5] hover:text-white"
                    >
                        What We Do
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
