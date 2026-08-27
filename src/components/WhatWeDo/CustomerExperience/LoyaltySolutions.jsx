"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import loyaltyBg from "@/assets/WhatWeDo/Customer Experience/SectionBg.svg";

const LOYALTY_ITEMS = [
    "Customer Loyalty Programs",
    "Rewards & Membership Platforms",
    "Referral Programs",
    "Customer Retention Strategies",
    "Personalized Offers",
    "Loyalty Analytics",
];

export default function LoyaltySolutions() {
    return (
        <section className="relative w-full h-[480px] sm:h-[560px] lg:h-[602px] overflow-hidden bg-black">
            <Image src={loyaltyBg} alt="" fill className="object-cover" />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/10" /> */}

            <div className="absolute inset-0 flex items-center px-6 sm:px-[52px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-8 max-w-[478px]"
                >
                    <div className="flex flex-col gap-3">
                        <h2 className="text-black text-2xl sm:text-3xl font-semibold">Loyalty Solutions</h2>
                        <p className="text-black text-xl sm:text-2xl font-normal">
                            Build Long-Term Customer Relationships
                        </p>
                        <p className="text-black text-base sm:text-lg font-light">
                            Design and implement loyalty programs that reward customers, strengthen engagement,
                            and encourage repeat business.
                        </p>
                    </div>

                    <ul className="flex flex-col gap-2 text-black text-lg sm:text-2xl font-light">
                        {LOYALTY_ITEMS.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
