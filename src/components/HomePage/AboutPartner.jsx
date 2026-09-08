"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import serverRoomImg from "@/assets/HomePage/images/server-room.png";

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
                        Make enterprise technology work as one system.
                    </h2>
                    <p className="mt-4 text-[#55595E] text-lg font-light leading-[1.5]">
                        Most enterprise programs are not lost on strategy. They are lost in the handoffs: between the firm that designed the architecture and the firm that built it, between the project that went live and the team that has to run it, between a compliance requirement and the system that was already in production when it arrived. Ascendus keeps design, build and run under one accountable team, so architecture context is not re-learned at every stage.
                    </p>
                    <Link
                        href="/who-we-are"
                        className="group mt-6 self-start inline-flex items-center gap-4 whitespace-nowrap"
                    >
                        <span className="relative pb-[3px] text-lg font-light text-[#2E3033]">
                            Who We Are
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
