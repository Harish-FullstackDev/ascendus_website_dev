"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import whyItMattersImage from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/why-it-matters.png";

export default function WhyItMatters() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-[64px] sm:py-[32px] flex flex-col-reverse sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full sm:w-[518px] aspect-[518/489] shrink-0 self-start overflow-hidden"
            >
                <Image src={whyItMattersImage} alt="" fill className="object-cover" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col gap-4 w-full sm:flex-1"
            >
                <p className="text-[#10161d] text-lg font-medium">Why It Matters</p>
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium">
                    End-to-end migration from ECC to S/4HANA, planned around your compliance deadlines and cutover
                    windows, not a generic timeline.
                </h2>
                <div className="flex flex-col gap-4 text-[#4a5568] text-lg font-light leading-[1.5]">
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
