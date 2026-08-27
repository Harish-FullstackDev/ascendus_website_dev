"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serverRoomImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/EngagementModelsOverview/server-room.png";

export default function ChooseHowYouWantToWorkWithUs() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-[64px] sm:py-[64px] flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full sm:flex-1 pr-0 sm:pr-[80px]"
            >
                <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold">
                    Choose how you want to work with us
                </h2>
                <p className="text-[#55595E] text-lg font-light leading-[1.5]">
                    Enterprise technology rarely fails on ambition. It fails on execution: systems that don&apos;t talk
                    to each other, projects that stall after go-live, compliance treated as an afterthought instead
                    of a starting point. Closing that gap is the work.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full sm:w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={serverRoomImage} alt="" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
