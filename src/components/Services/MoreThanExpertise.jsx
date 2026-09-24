"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import aboutImage from "@/assets/Services/More_Than_Expertise.webp";
import arrowRight from "@/assets/Services/icons/arrow-right-16.svg";

// Section 5 — the About Us band. Figma pads the left edge to 64px and runs the
// photograph flush to the right edge of the frame, so the section carries side
// padding on the left only and the image bleeds out on desktop. White band
// between the dark "More Than Services" band and the pale highlights strip, so
// it keeps the full 64px top and bottom.
export default function MoreThanExpertise() {
    return (
        <section className="w-full bg-white py-10 pl-6 sm:py-[64px] sm:pl-[64px] max-lg:pr-6 sm:max-lg:pr-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full items-center justify-between gap-10 max-lg:flex-col max-lg:items-start"
            >
                <div className="flex w-full flex-col gap-6 lg:w-[529px] lg:shrink-0">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium uppercase leading-[1.2] tracking-[1.8px] text-[#0061af] sm:text-[18px]">
                            About Us
                        </p>

                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0d1b2e]">
                            More Than Expertise.
                            <br className="hidden sm:block" /> A Partner Built for Transformation
                        </h2>

                        <p className="max-w-[448px] text-sm font-normal leading-[1.5] text-[#4a5565] sm:text-base">
                            We combine business expertise, technology, and industry insight to help organizations
                            navigate complex challenges and create meaningful, measurable change.
                        </p>
                    </div>

                    <Link
                        href="/who-we-are"
                        className="group inline-flex h-12 w-fit items-center gap-2.5 rounded-[8px] bg-[#0061af] px-7 text-sm font-normal leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192] sm:text-base"
                    >
                        Discover About Us
                        <Image
                            src={arrowRight}
                            alt=""
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* 667x412 in Figma — kept as an aspect ratio so the crop stays put
                    while the column itself flexes. */}
                <div className="relative aspect-[667/412] w-full lg:w-[667px] lg:shrink-0">
                    <Image
                        src={aboutImage}
                        alt="Ascendus office tower"
                        fill
                        sizes="(min-width: 1024px) 667px, 100vw"
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
