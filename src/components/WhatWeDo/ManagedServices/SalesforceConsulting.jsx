"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import consultingImg from "@/assets/WhatWeDo/Customer Experience/Section6_Image.svg";
import nextArrow from "@/assets/WhatWeDo/Customer Experience/Icons/Section6_Arrow.svg";

const SERVICES = [
    {
        heading: "Salesforce Implementation",
        title: "Maximize the Value of Salesforce",
        desc: "We design, implement, customize, and optimize Salesforce solutions that empower your sales, service, and marketing teams through tailored configuration, seamless integrations, and ongoing platform optimization.",
    },
    {
        heading: "Salesforce Sales Cloud",
        title: "Accelerate Your Sales Process",
        desc: "Streamline lead management, opportunity tracking, forecasting, and sales automation to help your teams close deals faster and improve productivity.",
    },
    {
        heading: "Salesforce Service Cloud",
        title: "Deliver Exceptional Customer Support",
        desc: "Empower service teams with intelligent case management, omnichannel support, knowledge bases, and AI-powered assistance for superior customer experiences.",
    },
    {
        heading: "Salesforce Marketing Cloud",
        title: "Create Personalized Customer Journeys",
        desc: "Build targeted campaigns, automate customer engagement, and deliver personalized experiences across email, mobile, social, and digital channels.",
    },
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
                    <div className="absolute top-8 sm:top-[32px] left-6 sm:left-[35px] flex flex-col gap-4 max-w-[374px] px-2">
                        <h2 className="text-white text-2xl font-semibold">Why Partner With Us</h2>
                        <p className="text-white/90 text-base sm:text-lg font-light">
                            Core operational standards driving our managed delivery..
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:max-w-[800px] self-center h-[480px] bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center gap-6 px-6 sm:px-12 py-12"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-black text-2xl font-normal">
                                {service.heading}
                            </h3>

                            <div className="flex flex-col gap-4">
                                <p className="text-black text-lg font-semibold">
                                    {service.title}
                                </p>

                                <p className="text-[#3d3d4e] text-base sm:text-lg font-light max-w-[545px]">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </motion.div>
            </div>
        </section>
    );
}

