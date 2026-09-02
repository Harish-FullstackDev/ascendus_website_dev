"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import consultingImg from "@/assets/WhatWeDo/Customer Experience/webp/Customer_Our_Expertise.webp";
import nextArrow from "@/assets/WhatWeDo/Customer Experience/Icons/Section6_Arrow.svg";

const SERVICES = [
    "Certified Salesforce delivery expertise",
    "SAP and CRM integration experience",
    "Journey-first design approach",
    "Regional customer behavior insight",
    "Omnichannel implementation capability",
    "Analytics-driven optimization"

];

export default function SalesforceConsulting() {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % SERVICES.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
    };

    const service = SERVICES[active];
    return (
        <section className="relative z-10 w-full py-14 sm:py-20">
            <div className="w-full mx-auto flex flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative w-full lg:w-[578px] h-[360px] sm:h-[460px] lg:h-[588px] overflow-hidden shrink-0"
                >
                    <Image
                        src={consultingImg}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/40" />
                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 sm:bottom-8 lg:inset-x-auto lg:bottom-[24%] lg:left-[20.8%] lg:right-[14.5%]">
                        <h2 className="text-white text-2xl font-semibold">Our Expertise</h2>
                        <p className="text-white/90 text-base sm:text-lg font-light">
                            Strategic advantages in delivering enterprise-grade CX.
                        </p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1, }}
                    className="relative w-full lg:max-w-[800px] self-center min-h-[400px] lg:h-[480px] bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-6 sm:px-12 py-12" >
                    <ul className="list-disc marker:text-[#7f7f7f] pl-6 sm:pl-8 space-y-4 text-[#3D3D4E] text-base sm:text-lg font-light">
                        {SERVICES.map((service) => (<li key={service}> {service} </li>))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

