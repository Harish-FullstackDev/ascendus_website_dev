"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/WhoWeAre/CTA_Bg.jpg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

// Own copy for this page (not the shared WhatWeDo/ReadyToTransform) — Figma
// (node 2738:742) specs this section's title at 48px/medium and its
// description at 24px/light, notably larger/heavier than the shared
// component's generic default, so it's baked directly into this page-specific
// copy rather than overridden via a prop on the shared one.
export default function ReadyToTransform({
    title = "Ready to Transform Your Business?",
    description = "Let's Build innovative Solution that drive growth efficiency for your Business",
    buttonLabel = "Book a call",
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
                <div className="absolute inset-0 bg-black/40" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative z-10 flex flex-col items-center text-center gap-6 md:gap-12 px-6 sm:px-10 pb-16 sm:pb-24 lg:pb-32 ${hasOverlapAbove ? "pt-32 sm:pt-40 lg:pt-[210px]" : "pt-32 sm:pt-30 lg:pt-32"
                        }`}
                >
                    {/* Figma gives both an explicit max-width (title 1099px, description
                        1036px), not just a font size — without it, on a wide viewport the
                        48px title has nothing stopping it from stretching across nearly the
                        full screen on one line, which is what was actually making it read
                        as "too big": it's the missing width cap, not the type scale itself. */}
                    <div className="flex flex-col w-full gap-3 md:gap-6">
                        <h2 className="max-w-[1099px] mx-auto text-3xl sm:text-5xl font-semibold text-white">
                            {title}
                        </h2>

                        <p className="max-w-[1036px] mx-auto text-lg sm:text-2xl font-light text-white">
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
