"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ctaBg from "@/assets/CommonComponents/PageCta/cta-bg.webp";
import arrowIcon from "@/assets/CommonComponents/PageCta/arrow-right-24.svg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

// The slim closing CTA band that sits right above the footer on About Us,
// Contact Us, Partnership, Industries, Solutions and Services. Figma draws it
// once per page (521:24, 521:35, 521:57, 521:68, 521:90, plus About Us) with
// the same photograph, scrim, 222px height and white button — only the copy
// and the text-block widths change, so those are the props.
//
// Side padding is a flat 64px on both edges, per the site's section rule —
// not Figma's 64/40 pad around a centred 1287px row, which pushed the heading
// in to ~88px. Heading, body and button run justify-between, which is why each
// page passes Figma's own heading/body widths — they decide where the body
// copy lands between the other two.
//
// Button action: pass `href` to link somewhere; leave it out and the button
// opens the Calendly scheduler, which is what the "Talk to an Expert" CTAs did
// before this component existed.
//
// `backgroundImage` overrides the shared photo for a page whose Figma band
// uses a different one (Careers); `backgroundPositionClassName` sets how that
// photo is cropped.
export default function PageCta({
    title,
    description,
    ctaLabel,
    href,
    titleClassName = "",
    descriptionClassName = "",
    backgroundImage = ctaBg,
    backgroundPositionClassName = "object-bottom",
}) {
    const [showCalendly, setShowCalendly] = useState(false);

    const titleLines = Array.isArray(title) ? title : [title];
    const descriptionLines = Array.isArray(description) ? description : [description];

    const buttonClassName =
        "group inline-flex h-[51px] min-w-[177px] shrink-0 items-center justify-center gap-3 rounded-[12px] border border-[#e8ebef] bg-white px-3 text-base font-normal capitalize leading-[1.5] text-[#00223d] transition-colors duration-300 hover:bg-[#f1f3f5]";

    const buttonContent = (
        <>
            {ctaLabel}
            <Image
                src={arrowIcon}
                alt=""
                className="size-6 transition-transform duration-300 group-hover:translate-x-1"
            />
        </>
    );

    return (
        <>
            <section className="relative flex w-full items-center overflow-hidden px-6 py-10 sm:px-[64px] lg:min-h-[222px]">
                <Image src={backgroundImage} alt="" fill sizes="100vw" className={`object-cover ${backgroundPositionClassName}`} />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/72 to-black/36" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
                >
                    <h2
                        className={`text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#f8f8f8] lg:shrink ${titleClassName}`}
                    >
                        {titleLines.map((line, index) => (
                            <span key={line} className="block">
                                {line}
                                {index < titleLines.length - 1 ? " " : null}
                            </span>
                        ))}
                    </h2>

                    <p
                        className={`text-sm font-normal capitalize leading-[1.5] text-[#f8f8f8] sm:text-base ${descriptionClassName}`}
                    >
                        {descriptionLines.map((line, index) => (
                            <span key={line} className={descriptionLines.length > 1 ? "sm:block" : undefined}>
                                {line}
                                {index < descriptionLines.length - 1 ? " " : null}
                            </span>
                        ))}
                    </p>

                    {href ? (
                        <Link href={href} className={buttonClassName}>
                            {buttonContent}
                        </Link>
                    ) : (
                        <button type="button" onClick={() => setShowCalendly(true)} className={buttonClassName}>
                            {buttonContent}
                        </button>
                    )}
                </motion.div>
            </section>

            {href ? null : (
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
            )}
        </>
    );
}
