"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cultureImage from "@/assets/career/webp/Careers_Cultural.webp";

export default function OurCulture() {
    return (
        <section className="w-full py-8 sm:py-12">
            <div className="flex flex-col lg:relative lg:w-full lg:aspect-[1280/537]">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-[280px] sm:h-[380px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-[65.078%] bg-[#5c5c5c]"
                >
                    <Image src={cultureImage} alt="" fill className="object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full lg:absolute lg:top-[12.104%] lg:left-[44.766%] lg:h-[77.467%] lg:w-[50.547%] bg-[#f4f3f9] flex flex-col justify-center gap-6 px-6 sm:px-10 py-10 sm:py-14"
                >
                    <div>
                        <p className="text-lg text-black">Life Here</p>
                        <h2 className="text-2xl font-semibold text-[#2E3033] mt-1">A team built around how the work gets done.</h2>
                    </div>
                    <p className="text-sm sm:text-lg text-[#55595E] font-light leading-relaxed">
                        We value clarity, accountability and collaboration because complex work demands all three.
                        People are expected to contribute, challenge assumptions and take responsibility for the
                        quality of what they deliver. There is no single profile for success here. What matters is
                        curiosity, technical discipline, a willingness to learn and the ability to work well with
                        people across different disciplines.
                    </p>
                    {/* <button
                        type="button"
                        aria-label="Meet our team"
                        className="flex items-center justify-center size-9 rounded-full border border-[#6c6c6c] text-[#6c6c6c] transition-colors hover:bg-black hover:text-white hover:border-black"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button> */}
                </motion.div>
            </div>
        </section>
    );
}
