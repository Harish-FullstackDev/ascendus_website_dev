"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import separatorLine from "@/assets/career/Separetor line.png";
import chroPhoto from "@/assets/career/CHRO Bhuvaneshwari.jpg";

export default function GrowthQuoteBand() {
    return (
        <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <Image src={separatorLine} alt="" className="w-full h-px object-cover" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
                >
                    <div className="flex flex-col items-center text-center gap-3 shrink-0">
                        <Image
                            src={chroPhoto}
                            alt="Bhuvaneshwari"
                            width={94}
                            height={94}
                            className="rounded-full object-cover size-[94px] bg-[#d8d8d8]"
                        />
                        <div>
                            <p className="font-semibold text-[#2E3033] text-lg">Bhuvaneshwari</p>
                            <p className="text-[#3d3d4e] text-sm opacity-60 mt-1">
                                Chief Human Resources Officer (CHRO)
                                <br />
                                Ascendus
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <span className="hidden sm:block absolute -top-8 -left-2 text-[80px] leading-none text-[#2d8ec5]/30 font-serif select-none">
                            &ldquo;
                        </span>
                        <p className="relative text-base sm:text-lg text-[#55595E] font-light leading-relaxed text-center lg:text-left">
                            Good work gets better when the right people stay close to it. From the first problem
                            definition to the final delivery, we believe people do their best work when they have
                            context, ownership and access to the expertise around them.
                        </p>
                    </div>
                </motion.div>

                <Image src={separatorLine} alt="" className="w-full h-px object-cover" />
            </div>
        </section>
    );
}
