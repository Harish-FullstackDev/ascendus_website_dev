"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import bandArt from "@/assets/Careers/stay-updated-bg.png";
import iconArrow from "@/assets/Careers/icons/arrow-right-16-light.svg";

// Section 6 — dark band, full 64 on both edges. Figma (602:2362) pads this
// band 112px left/right; it uses the site's 64px like every other section.
// Its eyebrow reads "Why Our Services", which looks carried over from the
// Services page — kept as drawn and flagged. There is no talent-network
// sign-up yet, so the button goes to the general application form.
export default function StayUpdated() {
    return (
        <section className="relative w-full overflow-hidden bg-[#00223d] px-6 py-10 sm:px-[64px] sm:py-16">
            <Image src={bandArt} alt="" fill sizes="100vw" className="object-cover opacity-20" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
            >
                <div className="flex flex-col gap-3 lg:w-[397px] lg:shrink-0">
                    <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                        Why Our Services
                    </p>
                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-white">
                        Stay Updated On New Opportunities
                    </h2>
                </div>

                <p className="text-sm font-normal capitalize leading-[1.5] text-white sm:text-base lg:w-[363px] lg:pt-[4.7px]">
                    Join our network and be the first to know about new role that match your skills
                </p>

                <Link
                    href="/careers/apply/"
                    className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-[8px] border border-[#0061af] bg-[#0061af] px-[13px] text-base font-normal capitalize leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192]"
                >
                    Join Our Talent Network
                    <Image
                        src={iconArrow}
                        alt=""
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </motion.div>
        </section>
    );
}
