"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import iconArrow from "@/assets/Careers/icons/arrow-right-21.svg";

// Route of the job listing page, which replaces the Open Positions section
// that used to sit on /careers/. Built as its own page next.
export const OPEN_ROLES_HREF = "/careers/open-positions/";

// Figma 1619:10954 — centered intro band right under the hero. Heading and
// body each sit on one line at 1440 (text boxes 1098 / 970 wide). Figma draws it
// 48 top / 32 bottom; it borders the hero curtain, so it keeps the full 64 on
// top, and the white Life at Ascendus band below shares the 32/32 split.
export default function GreatTransformations() {
    return (
        <section className="w-full border-b border-[#c9d0d8] bg-white px-6 py-10 sm:px-[64px] sm:pb-8 sm:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-center text-center"
            >
                <h2 className="max-w-[1098px] text-[clamp(2rem,3.4vw,3rem)] font-medium capitalize leading-[1.2] text-[#0e2b4b]">
                    Great Transformations Start With Great People
                </h2>

                <p className="mt-[18px] max-w-[970px] pt-[2px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                    We hire curious, accountable professionals and give them meaningful work from day one. See which
                    roles match your experience.
                </p>

                <Link
                    href={OPEN_ROLES_HREF}
                    className="group mt-[35px] inline-flex h-12 items-center justify-center gap-[10px] rounded-[8px] bg-[#0061af] px-7 text-base font-normal capitalize leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192]"
                >
                    Search Open Roles
                    <Image
                        src={iconArrow}
                        alt=""
                        className="h-4 w-[21px] transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </motion.div>
        </section>
    );
}
