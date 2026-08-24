"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dataClassificationIcon from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/icons/Section_DataProtection_DataClassification.svg";
import dataAccessControlsIcon from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/icons/Section_DataProtection_DataAccessControls.svg";
import dataProtectionIcon from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/icons/Section_DataProtection_DataProtection.svg";
import privacyControlsIcon from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/icons/Section_DataProtection_PrivacyControls.svg";

const ITEMS = [
    {
        icon: dataClassificationIcon,
        title: "Data Classification",
        desc: "We identify sensitive information and apply appropriate protection requirements.",
    },
    {
        icon: dataAccessControlsIcon,
        title: "Data Access Controls",
        desc: "We enforce role-based and least-privilege access to critical information.",
    },
    {
        icon: dataProtectionIcon,
        title: "Data Protection",
        desc: "We apply controls to protect enterprise data across storage, transmission, and usage.",
    },
    {
        icon: privacyControlsIcon,
        title: "Privacy Controls",
        desc: "We support responsible handling of customer and enterprise information through appropriate governance.",
    },
];

export default function DataProtectionPrivacy() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[64px] bg-[#F5F6F6] flex flex-col items-center gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[900px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">Data Protection &amp; Privacy</h2>
                <p className="text-[#55595E] text-lg font-light">
                    Security controls that help enterprises protect sensitive information and maintain appropriate
                    access throughout the data lifecycle.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 w-full">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className={`flex flex-col gap-12 lg:pl-8 ${index !== 0 ? "lg:border-l lg:border-[#A1A5AA]" : ""
                            }`}
                    >
                        <Image src={item.icon} alt="" width={32} height={32} />
                        <div className="flex flex-col gap-5">
                            <p className="text-black text-xl sm:text-2xl font-light">{item.title}</p>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

