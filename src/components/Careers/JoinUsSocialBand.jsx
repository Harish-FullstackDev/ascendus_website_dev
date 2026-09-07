"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import linkedinIcon from "@/assets/career/icons/Linkedin.svg";
import instagramIcon from "@/assets/career/icons/Instagram.svg";
import twitterIcon from "@/assets/career/icons/Twitter.svg";
import footerBanner from "@/assets/career/Footer image banner.png";

const SOCIALS = [
    { icon: linkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/ascendus-company/?viewAsMember=true" },
    { icon: instagramIcon, label: "Instagram", href: "https://www.instagram.com/ascendus.ksa" },
    { icon: twitterIcon, label: "Twitter", href: "https://x.com/ascendus_ksa" },
];

export default function JoinUsSocialBand() {
    return (
        <section className="w-full">
            <div className="bg-[#f4f3f9] py-10 sm:py-14 px-4 sm:px-16 lg:p-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-start gap-6 sm:gap-16"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 sm:gap-10">
                        <div className="flex flex-col max-w-5xl gap-6">
                            <div>
                                <h2 className="text-2xl text-[#2E3033] font-semibold">Your Next Opportunity</h2>
                                <p className="mt-2 text-base sm:text-lg sm:w-[80%] font-light text-[#55595E]">
                                    Ready to work on problems worth solving? Explore our current openings and find
                                    an opportunity where your expertise can contribute to work that matters to
                                    enterprise organisations.
                                </p>
                            </div>
                            <a
                                href="#job-listings"
                                className="inline-flex items-center gap-3 text-sm text-[#2d8ec5] font-medium group"
                            >
                                <span className="flex items-center justify-center size-8 rounded-full bg-black text-white transition-transform group-hover:scale-105">
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                                View Open Positions
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-2xl text-[#2E3033] font-semibold">Social</p>
                            <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">Follow us for the latest updates</p>
                        </div>
                        <div className="flex items-center gap-3">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex items-center justify-center size-9 rounded-full overflow-hidden transition-transform hover:scale-110"
                                >
                                    <Image src={social.icon} alt="" width={36} height={36} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
