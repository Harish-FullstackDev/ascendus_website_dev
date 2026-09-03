"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import serverRoomImg from "@/assets/HomePage/images/server-room.png";
import ctaArrowIcon from "@/assets/HomePage/WhyEnterprisePartner/icon-cta-arrow.svg";

export default function AboutPartner() {
    return (
        // Bordering the hero curtain above (full 64 top); the section below is
        // also white, so the bottom half of that boundary (32) lives here.
        <section className="w-full bg-white pt-10 pb-8 sm:pt-16 sm:pb-8 px-6 sm:px-[64px]">
            <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1 flex flex-col gap-2"
                >
                    <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold w-full">
                        A Technology Partner Built for Enterprise Complexity
                    </h2>
                    <p className="mt-4 text-[#55595E] text-lg font-light leading-[1.5]">
                        Most enterprise programs are not lost on strategy. They are lost in the handoffs: between the firm that designed the architecture and the firm that built it, between the project that went live and the team that has to run it, between a compliance requirement and the system that was already in production when it arrived. Ascendus keeps design, build and run under one accountable team, so architecture context is not re-learned at every stage.
                    </p>
                    <Link
                        href="/who-we-are"
                        className="group mt-6 self-start flex items-center justify-between gap-4 rounded-full border border-[#2d8ec5] pl-8 pr-1.5 py-1.5 text-lg font-light text-[#2E3033] transition-colors hover:bg-[#00447A] hover:text-white whitespace-nowrap"
                    >
                        Who We Are
                        <span className="relative size-[42px] shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                            <Image src={ctaArrowIcon} alt="" fill className="object-contain" />
                        </span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[400px] max-w-[400px] aspect-[400/304] shrink-0"
                >
                    <Image
                        src={serverRoomImg}
                        alt="Enterprise technology infrastructure"
                        fill
                        className="object-cover object-bottom"
                    />
                </motion.div>
            </div>
        </section>
    );
}
