"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/WhoWeAre/CTA_Bg.jpg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

// Own copy for this page (not the shared WhatWeDo/ReadyToTransform) since its
// text sizing/alignment needs to match this page's own Figma spec rather than
// the shared component's generic default — same reasoning applies to the 3
// sibling pages under EnterpriseTransformationPractice, each with their own copy.
export default function ReadyToTransform({
    title = "Ready to Transform Your Business?",
    description = "Let's Build innovative Solution that drive growth efficiency for your Business",
    buttonLabel = "Book a Call",
    bgImage = ctaBg,
    hasOverlapAbove = false,
}) {
    const [showCalendly, setShowCalendly] = useState(false);

    const handleContactClick = () => {
        setShowCalendly(true);
    };

    return (
        <>
            <section className="relative z-0 w-full overflow-hidden">
                <Image src={bgImage} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative z-10 flex flex-col items-center text-center gap-6 md:gap-12 px-4 pb-16 sm:pb-24 lg:pb-32 ${hasOverlapAbove ? "pt-32 sm:pt-40 lg:pt-[210px]" : "pt-32 sm:pt-30 lg:pt-32"
                        }`}
                >
                    <div className="flex flex-col w-full md:gap-12">
                        <h2 className="text-2xl sm:text-4xl font-light text-white">
                            {title}
                        </h2>

                        <p className=" text-base sm:text-2xl font-light text-white">
                            {description}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleContactClick}
                        className="rounded-full border border-[#d0d0d0] px-8 py-2 text-sm sm:text-base font-light text-white transition-colors hover:bg-white hover:text-black"
                    >
                        {buttonLabel}
                    </button>
                </motion.div>
            </section>

            <CalendlyModal
                isOpen={showCalendly}
                onClose={() => setShowCalendly(false)}
                calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
                pageSettings={{
                    backgroundColor: "ffffff",
                    primaryColor: "#2d8ec5",
                    textColor: "#003756",
                }}
            />
        </>
    );
}
