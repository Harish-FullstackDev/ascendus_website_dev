"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/Contact-us/CTA_Bg.webp";
import arrowButtonIcon from "@/assets/Contact-us/icons/arrow-button-24.svg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

// Background photo, a top-to-bottom black gradient and a left-aligned stack:
// heading, supporting line, then the outlined button beneath them. The revised
// design pulls the button out of the right rail and under the copy, and drops
// the band to the same 48px vertical inset the rest of the page uses.
export default function ReadyToTurnYourVisionIntoAction({
    title = "Your Industry. Our Expertise.",
    // A node rather than a string: Figma breaks the line after "unique"
    // (278:5660), and the break only holds from sm up.
    description = (
        <>
            Let&apos;s explore how we can help you solve your industry&apos;s unique
            <br className="hidden sm:block" /> challenges and create new opportunities for growth.
        </>
    ),
    buttonLabel = "Talk to Our Experts",
    bgImage = ctaBg,
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
                    className="relative z-10 flex flex-col items-start gap-6 px-6 sm:px-[64px] py-12 sm:py-[48px]"
                >
                    <div className="flex flex-col gap-3">
                        <h2 className="max-w-[935px] text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-[#f8f8f8] leading-[1.2]">
                            {title}
                        </h2>

                        <p className="max-w-[836px] text-base font-normal text-[#f8f8f8] leading-[1.5]">
                            {description}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowCalendly(true)}
                        className="inline-flex h-[51px] items-center justify-center gap-3 rounded-[12px] border border-[#f8f8f8] px-3 text-base font-normal text-[#f8f8f8] transition-colors hover:bg-[#f8f8f8] hover:text-black sm:w-[218px]"
                    >
                        {buttonLabel}
                        <Image src={arrowButtonIcon} alt="" className="w-6 h-6" />
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
