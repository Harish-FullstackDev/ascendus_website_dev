"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import supportIcon from "@/assets/Contact-us/icons/customer-support-32.svg";
import serviceRequestIcon from "@/assets/Contact-us/icons/service-request.svg";
import escalationIcon from "@/assets/Contact-us/icons/escalation-reporting-32.svg";
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
        // Figma (278:5888) puts the "Request Assessment" link on this card,
        // which belongs to the Prospective panel — kept as the escalation link
        // here and flagged to design.
        description: "Raise critical service, SLA or engagement-related concerns.",
        href: "#tell-us-what-youre-looking-to-achieve",
        icon: escalationIcon,
        linkLabel: "Raise an Escalation",
        title: "Escalation & Reporting",
    },
];

// The alternate panel to StartANewConversation: shown only while the "For
// Existing Customers" segment is selected. Same tinted band, same rule and the
// same card treatment as that panel, so swapping between them doesn't shift
// the sections around it.
export default function AlreadyAnAscendusCustomer() {
    return (
        <section
            id="already-an-ascendus-customer"
            className="w-full scroll-mt-24 border-t border-[#f1f5f9] bg-[rgba(248,250,252,0.4)] px-6 sm:px-[64px] py-10 sm:py-[48px]"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-[811px]"
            >
                <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                    Existing Customers
                </p>
                <h2 className="mt-4 text-[26px] sm:text-[32px] font-medium text-[#0e2b4b] leading-[1.2]">
                    Already an Ascendus Customer?
                </h2>
                <p className="mt-3 pt-[2px] text-base font-normal text-[#415773] leading-[1.5]">
                    Access the right support channel for your service,
                    <br className="hidden sm:block" /> operational or escalation requirements.
                </p>
            </motion.div>

            {/* Three cards now share the four-card panel's 24px gutter
                (Figma 278:5848), so each card simply runs wider rather than the
                row opening up. */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                            className="group flex h-full min-h-[265px] flex-col justify-between rounded-[16px] border border-[#8695a7] bg-[#f8f8f8] p-[25px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0px_6px_18px_rgba(10,58,82,0.12)]"
                        >
                            <div>
                                <span className="flex size-12 items-center justify-center rounded-[10px] bg-[#ecf2f9]">
                                    <Image src={card.icon} alt="" className="w-8 h-8" />
                                </span>

                                <h3 className="mt-4 text-lg font-medium text-[#0a3a52] leading-[1.2]">{card.title}</h3>
                                <p className="mt-2 text-base font-normal text-[#64748b] leading-[1.5]">
                                    {card.description}
                                </p>
                            </div>

                            <span className="mt-6 inline-flex items-center py-[2px] text-base font-normal text-[#0061af]">
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
