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
//
// Redesigned against Figma node 2669:149: a single row (heading left, button
// right) instead of the previous centered stack, a stronger top-to-bottom
// black gradient instead of a flat black/20 overlay, and a solid filled CTA
// button instead of the outlined pill. The design dropped the supporting
// description line entirely, so that prop is gone too — description text
// only ever existed in the previous centered-stack version this replaces.
// Side padding matches this page's standard 64px/24px desktop/mobile content
// inset rather than Figma's own 40px, and vertical padding is the original
// pt-32/pb-32-based values (not Figma's flatter 80px) so the section — and
// the background image filling it — keeps its previous height; only the
// content's internal layout changed, not the section's overall size.
export default function ReadyToTransform({
    title = "Ready to Transform Your Business?",
    buttonLabel = "Book a Consultation",
    bgImage = ctaBg,
}) {
    const [showCalendly, setShowCalendly] = useState(false);

    const handleContactClick = () => {
        setShowCalendly(true);
    };

    return (
        <>
            <section className="relative z-0 w-full overflow-hidden">
                <Image src={bgImage} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/72 to-black/36" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 flex flex-col sm:flex-row items-center gap-8 sm:gap-12 px-6 sm:px-[64px] pt-32 sm:pt-30 lg:pt-32 pb-16 sm:pb-24 lg:pb-32"
                >
                    <h2 className="flex-1 text-2xl sm:text-3xl lg:text-[40px] font-medium leading-[1.5] text-white text-center sm:text-left">
                        {title}
                    </h2>

                    <button
                        type="button"
                        onClick={handleContactClick}
                        className="w-full sm:w-[304px] h-14 sm:h-[76px] shrink-0 border border-[#00447a] bg-[#00447a] px-6 text-lg font-medium text-white transition-colors hover:bg-white hover:text-[#00447a]"
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
