"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/Solution/CTA_Bg.webp";
import arrowIcon from "@/assets/Solution/icons/arrow-right-24.svg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

// Same construction as the /industries/ CTA — full-bleed photo, top-down scrim,
// copy left, outlined button stacked underneath with a trailing arrow.
export default function ReadyToUnlockMoreWithSAP({
    bgImage = ctaBg,
    buttonLabel = "Schedule a Consultation",
    description = "Talk to our experts and discover how we can help you transform, innovate and grow with SAP.",
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
                    className="relative z-10 flex flex-col items-start gap-6 px-6 sm:px-[64px] py-[64px]"
                >
                    <div className="flex w-full max-w-[935px] flex-col gap-4">
                        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-medium text-[#f8f8f8] leading-[1.2]">
                            Ready to Unlock
                            <br />
                            More with SAP?
                        </h2>

                        <p className="max-w-[836px] text-sm sm:text-base font-normal text-[#f8f8f8] leading-[1.5]">
                            {description}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowCalendly(true)}
                        className="group inline-flex h-[51px] shrink-0 items-center gap-3 rounded-[12px] border border-[#e8ebef] px-3 text-base font-normal text-[#f8f8f8] transition-colors hover:bg-white hover:text-black"
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
