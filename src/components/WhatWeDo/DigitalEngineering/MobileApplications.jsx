"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import iosPhoto from "@/assets/WhatWeDo/Digital Engineering/Section4_Card1_Image.jpg";
import androidPhoto from "@/assets/WhatWeDo/Digital Engineering/Section4_Card2_Image.jpg";
import crossPlatformPhoto from "@/assets/WhatWeDo/Digital Engineering/Section4_Card3_image.jpg";
import enterpriseMobilityPhoto from "@/assets/WhatWeDo/Digital Engineering/Section4_Card4_Image.jpg";
import mobileUiUxPhoto from "@/assets/WhatWeDo/Digital Engineering/Section4_Card5_Image.jpg";
import mobileMaintenancePhoto from "@/assets/WhatWeDo/Digital Engineering/Section4_Card6_Image.jpg";

const CARDS = [
    {
        title: "iOS Development",
        desc: "Build native and cross-platform mobile applications that provide exceptional performance, security, and user engagement.",
        image: iosPhoto,
    },
    {
        title: "Android Development",
        desc: "Helping businesses transform with innovative, high-performance native Android experiences.",
        image: androidPhoto,
    },
    {
        title: "Cross-Platform Apps",
        desc: "One codebase, every device — ship consistent experiences across iOS and Android faster.",
        image: crossPlatformPhoto,
    },
    {
        title: "Enterprise Mobility",
        desc: "Secure mobility solutions that keep distributed teams connected and productive on the go.",
        image: enterpriseMobilityPhoto,
    },
    {
        title: "Mobile UI/UX",
        desc: "Human-centered design that turns complex workflows into intuitive, delightful mobile experiences.",
        image: mobileUiUxPhoto,
    },
    {
        title: "Mobile App Maintenance",
        desc: "Ongoing support, updates, and performance tuning that keep your apps fast, stable, and secure.",
        image: mobileMaintenancePhoto,
    },
];

export default function MobileApplications() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[60px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Mobile Applications</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Build native and cross-platform mobile applications that provide exceptional performance, security,
                    and user engagement.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] max-w-[1390px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="group relative h-[240px] sm:h-[290px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                    >
                        {card.image ? (
                            <>
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/50" />
                            </>
                        ) : (
                            <div className="absolute inset-0 bg-[#0a2b3e]" />
                        )}
                        <div className="absolute inset-0 bg-[#0A2B3E] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col px-8 sm:px-10 pb-6 sm:pb-10">
                            <p className="text-white text-xl sm:text-2xl font-normal">{card.title}</p>
                            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                                <div className="overflow-hidden">
                                    <p className="text-white/85 text-sm sm:text-base font-light max-w-[275px] pt-3 sm:pt-[19px]">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
