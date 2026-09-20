"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import supportIcon from "@/assets/Contact-us/icons/customer-support.svg";
import serviceRequestIcon from "@/assets/Contact-us/icons/service-request.svg";
import escalationIcon from "@/assets/Contact-us/icons/escalation-reporting.svg";
import arrowRightIcon from "@/assets/Contact-us/icons/arrow-right.svg";

const CARDS = [
    {
        description: "Get assistance with your existing services and engagements.",
        href: "#tell-us-what-youre-looking-to-achieve",
        icon: supportIcon,
        linkLabel: "Get Support",
        title: "Customer Support",
    },
    {
        description: "Submit a request related to your ongoing services or support needs.",
        href: "#tell-us-what-youre-looking-to-achieve",
        icon: serviceRequestIcon,
        linkLabel: "Submit a Request",
        title: "Service Request",
    },
    {
        description: "Raise critical service, SLA or engagement-related concerns.",
        href: "#tell-us-what-youre-looking-to-achieve",
        icon: escalationIcon,
        linkLabel: "Raise an Escalation",
        title: "Escalation & Reporting",
    },
];

// The alternate panel to StartANewConversation: shown only while the "For
// Existing Customers" segment is selected. Same white background and same
// 32/64 vertical rhythm as that panel so swapping between them doesn't shift
// the sections around it.
export default function AlreadyAnAscendusCustomer() {
    return (
        <section
            id="already-an-ascendus-customer"
            className="w-full scroll-mt-24 bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#2d8ec5]">Existing Customers</p>
                <h2 className="mt-1 text-2xl sm:text-[32px] font-medium text-[#0a3a52] leading-[36px]">
                    Already an Ascendus Customer?
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#64748b] leading-5">
                    Access the right support channel for your service, operational or escalation requirements.
                </p>
            </motion.div>

            {/* Wider gutter than the four-card panel: with one card fewer, Figma
                (62:1530) spreads three cards across the same 64px-inset content
                box, leaving ~84px between them instead of 20px. The outer 64px
                inset is identical in both panels — only the inner gap changes. */}
            <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-10 lg:gap-x-[84px] md:gap-y-8">
                {CARDS.map((card) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="h-full"
                    >
                        <Link
                            href={card.href}
                            className="group flex h-full flex-col justify-between rounded-[16px] border border-[#d3dae2] bg-white p-[25px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0px_6px_18px_rgba(10,58,82,0.12)]"
                        >
                            <div>
                                <span className="flex size-10 items-center justify-center rounded-[10px] bg-[#eff6ff]">
                                    <Image src={card.icon} alt="" className="w-6 h-6" />
                                </span>

                                <h3 className="mt-4 text-sm font-semibold text-[#0a3a52] leading-5">{card.title}</h3>
                                <p className="mt-2 text-xs text-[#64748b] leading-[19.5px]">{card.description}</p>
                            </div>

                            <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2d8ec5]">
                                <span className="border-b-[0.5px] border-transparent transition-colors duration-300 group-hover:border-[#2d8ec5]">
                                    {card.linkLabel}
                                </span>
                                <Image
                                    src={arrowRightIcon}
                                    alt=""
                                    className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
