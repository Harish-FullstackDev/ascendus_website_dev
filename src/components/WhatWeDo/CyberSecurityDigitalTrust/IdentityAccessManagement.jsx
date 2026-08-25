"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import plusIcon from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/icons/section4_Plus.svg";
import circleIcon from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/icons/Section4_Surrounding_Circle.svg";

const ITEMS = [
    {
        title: "Identity Governance",
        desc: "Centralized policies and workflows that determine who should have access to what, with visibility and accountability across the entire identity lifecycle.",
    },
    {
        title: "Single Sign-On (SSO)",
        desc: "One set of credentials for secure, seamless access across enterprise applications, reducing password fatigue and login friction for users.",
    },
    {
        title: "Multi-Factor Authentication (MFA)",
        desc: "An additional layer of verification beyond passwords, drastically reducing the risk of unauthorized access from compromised credentials.",
    },
    {
        title: "Privileged Access Management (PAM)",
        desc: "Tightly controlled, monitored, and time-bound access for administrative and privileged accounts to limit the blast radius of a compromise.",
    },
    {
        title: "Role-Based Access Control (RBAC)",
        desc: "Access rights assigned according to job function, ensuring users only reach the systems and data required for their role.",
    },
    {
        title: "User Lifecycle Management",
        desc: "Automated provisioning, modification, and de-provisioning of user accounts as employees join, move within, or leave the organization.",
    },
    {
        title: "Identity Federation",
        desc: "Trusted identity sharing across organizational boundaries, enabling secure collaboration with partners, customers, and cloud providers.",
    },
    {
        title: "Access Reviews & Certification",
        desc: "Periodic validation of existing access rights against business need, helping close gaps left by role changes or offboarding delays.",
    },
];

export default function IdentityAccessManagement() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-[#ededed] py-10 sm:py-[51px] px-6 sm:px-[50px] flex flex-col items-center gap-10 sm:gap-[51px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-5 max-w-[990px] text-center"
            >
                <h2 className="font-heading text-black text-2xl font-medium">Identity &amp; Access Management</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Identity has become the primary security perimeter within modern organizations. Effective identity
                    management ensures that every user, application, device, and workload receives only the access
                    required to perform authorized activities.
                    <br />
                    <br />
                    Identity &amp; Access Management (IAM) establishes centralized authentication, authorization,
                    lifecycle management, and privileged access controls across enterprise systems.
                </p>
            </motion.div>

            <div className="flex flex-col items-start w-full md:px-5 max-w-full">
                {ITEMS.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                            <button
                                type="button"
                                onClick={() => handleClick(index)}
                                className="flex w-full items-center justify-between py-5 sm:py-6 lg:py-[26px] text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="text-[#6c6c6c] text-lg sm:text-2xl lg:text-[28px] font-light">
                                    {item.title}
                                </span>
                                <span className="relative shrink-0 size-8 sm:size-[37px] flex items-center justify-center">
                                    <Image src={circleIcon} alt="" fill className="object-contain" />

                                    {/* Horizontal line */}
                                    <span className="absolute w-[14px] h-[2px] bg-[#2D8EC5] rounded-full" />

                                    {/* Vertical line */}
                                    <motion.span
                                        className="absolute w-[2px] h-[14px] bg-[#2D8EC5] rounded-full"
                                        animate={{
                                            rotate: isOpen ? 90 : 0,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
                                    />
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-5 sm:pb-6 pr-10 sm:pr-16 text-[#6C6C6C] text-base sm:text-[18px] font-normal leading-[150%] tracking-[0]">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
