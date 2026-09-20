"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/Industries/CTA_Bg.webp";
import arrowIcon from "@/assets/Industries/icons/arrow-right.svg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

// Same photo and scrim as the /partnership/ and /contact-us/ CTAs, but Figma
// stacks the button under the copy here instead of setting it off to the right,
// and gives it a trailing arrow.
export default function YourIndustryOurExpertise({
    buttonLabel = "Talk to Our Experts",
    bgImage = ctaBg,
    description = "Let's explore how we can help you solve your industry's unique challenges and create new opportunities for growth.",
}) {
    const [showCalendly, setShowCalendly] = useState(false);

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
                    className="relative z-10 flex flex-col items-start gap-7 px-6 sm:px-[64px] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-32"
                >
                    <div className="flex w-full max-w-[935px] flex-col gap-4">
                        <h2 className="text-2xl sm:text-5xl font-semibold text-white leading-tight">
                            Your Industry.
                            <br />
                            Our Expertise.
                        </h2>

                        <p className="max-w-[836px] text-base sm:text-2xl font-light text-white">{description}</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowCalendly(true)}
                        className="group inline-flex h-[51px] shrink-0 items-center gap-3 rounded-[12px] border border-[#e8ebef] px-6 text-lg font-light text-white transition-colors hover:bg-white hover:text-black"
                    >
                        {buttonLabel}
                        {/* The arrow ships with a white stroke, so it is inverted
                            to black alongside the label on hover. */}
                        <Image
                            src={arrowIcon}
                            alt=""
                            className="size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:brightness-0"
                        />
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
