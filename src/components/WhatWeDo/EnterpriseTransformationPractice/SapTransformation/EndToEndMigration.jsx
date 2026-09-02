"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import whyItMattersImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/why-it-matters.svg";

export default function EndToEndMigration() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-[64px] sm:pt-[64px] sm:pb-[32px] flex flex-col-reverse sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full sm:w-[442px] aspect-[442/417] shrink-0 self-start overflow-hidden"
            >
                <Image src={whyItMattersImage} alt="Why timely SAP migration matters" fill className="object-cover" />
            </motion.div>

            {/* Figma: no eyebrow label above the heading here (unlike Overview),
                heading is the literal 24px heading token (not the 28px override
                used elsewhere), and there's a roomy gap_(~64px, matching the
                sitewide description-to-content rhythm) between the heading and
                the body paragraphs rather than a tight gap-4. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col gap-8 sm:gap-16 w-full sm:flex-1"
            >
                <h2 className="text-[#2E3033] text-2xl font-semibold leading-[1.4]">
                    End-to-end migration from ECC to S/4HANA, planned around your compliance deadlines and cutover
                    windows, not a generic timeline.
                </h2>
                <div className="flex flex-col gap-4 text-[#55595E] text-lg font-light leading-[1.5]">
                    <p>
                        Every year an ECC system runs past its maintenance window adds risk: security patches, tax
                        and legal updates, and vendor support all get harder to get and more expensive to buy.
                        Migration planned now, on your timeline, costs less than migration forced later, on
                        SAP&apos;s.
                    </p>
                    <p>
                        The decision isn&apos;t only when to migrate. It&apos;s which path gets you there without
                        disrupting the processes your business already depends on, which is why path selection and
                        migration planning happen together here, not as two separate conversations.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
