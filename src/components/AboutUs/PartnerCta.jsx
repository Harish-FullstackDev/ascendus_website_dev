"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import bandBg from "@/assets/AboutUs/partner-cta-bg.jpg";
import iconArrow from "@/assets/AboutUs/icons/partner-cta-arrow.svg";

// Section 9 — the slim closing CTA right above the footer.
export default function PartnerCta() {
    return (
        <section className="relative w-full overflow-hidden px-6 py-10 sm:pl-[64px] sm:pr-[40px] lg:h-[222px]">
            <Image src={bandBg} alt="" fill className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/72 to-black/36" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex h-full w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between"
            >
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#f8f8f8] lg:w-[446px]">
                    Partner With Us
                    <br />
                    for a Stronger Tomorrow.
                </h2>

                <p className="text-sm font-normal leading-[1.5] text-[#f8f8f8] sm:text-base">
                    Let&apos;s connect and explore how we can help you
                    <br className="hidden sm:block" /> transform, innovate and grow.
                </p>

                <Link
                    href="/contact-us/"
                    className="group inline-flex h-[51px] w-[177px] shrink-0 items-center justify-center gap-3 rounded-[12px] border border-[#e8ebef] bg-white px-3 text-base font-normal uppercase leading-[1.5] text-[#00223d] transition-colors duration-300 hover:bg-[#f1f3f5]"
                >
                    Contact Us
                    <Image
                        src={iconArrow}
                        alt=""
                        className="size-6 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </motion.div>
        </section>
    );
}
