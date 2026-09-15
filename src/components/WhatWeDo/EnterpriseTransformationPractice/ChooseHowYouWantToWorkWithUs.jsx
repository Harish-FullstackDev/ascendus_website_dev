"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serverRoomImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/EngagementModelsOverview/server-room.png";

export default function ChooseHowYouWantToWorkWithUs() {
    return (
        <section className="w-full px-8 py-10 sm:pl-[64px] sm:pr-[64px] sm:py-[64px]">

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[143px]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-[700px] shrink-0 flex flex-col gap-2 text-[#3d3d4e]"
                >
                    <h2 className="text-[28px] text-[#2E3033] font-semibold leading-normal">
                        Choose How You Want to Work With Us
                    </h2>

                    <p className="text-lg text-[#55595E] font-light leading-relaxed">
                        Enterprise technology rarely fails on ambition. It fails on execution systems that don&apos;t talk
                        to each other, projects that stall after go-live, compliance treated as an afterthought instead
                        of a starting point. Closing that gap is the work.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1,
                    }}
                    className="relative w-full lg:w-[467px] lg:ml-auto shrink-0 aspect-[467/357] overflow-hidden"
                >
                    <Image src={serverRoomImage} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
