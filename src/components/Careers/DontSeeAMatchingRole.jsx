"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import teamPhoto from "@/assets/Careers/dont-see-a-matching-role.webp";
import iconArrow from "@/assets/Careers/icons/arrow-right-16-light.svg";

// Section 5 — white band between two dark bands, so it takes the full 64 on
// both edges. "Submit Your Resume" goes to the general application form the
// site already has at /careers/apply/.
export default function DontSeeAMatchingRole() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
            >
                <div className="flex w-full flex-col gap-6 lg:max-w-[473px]">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0f172a]">
                            Don&apos;t See a
                            <br className="hidden sm:block" /> Matching Role?
                        </h2>

                        <p className="pt-[4.7px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                            We are always looking for talented individuals. Share your resume and we will keep you in
                            mind for future opportunities.
                        </p>
                    </div>

                    <Link
                        href="/careers/apply/"
                        className="group inline-flex h-10 w-fit items-center gap-2 rounded-[8px] border border-[#0061af] bg-[#0061af] px-[13px] text-base font-normal capitalize leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192]"
                    >
                        Submit Your Resume
                        <Image
                            src={iconArrow}
                            alt=""
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="relative aspect-[555/265] w-full overflow-hidden rounded-[12px] bg-[#091b34] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] lg:max-w-[555px]">
                    <Image
                        src={teamPhoto}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 555px, 100vw"
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
