"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import rfpIcon from "@/assets/Contact-us/icons/rfp-proposal-32.svg";
import expertIcon from "@/assets/Contact-us/icons/talk-to-expert-32.svg";
import assessmentIcon from "@/assets/Contact-us/icons/solution-assessment-32.svg";
import meetingIcon from "@/assets/Contact-us/icons/schedule-meeting-32.svg";
import arrowRightIcon from "@/assets/Contact-us/icons/arrow-right.svg";

const CARDS = [
    {
        description: "Submit your project requirements and receive a tailored response from our team.",
        href: "#tell-us-what-youre-looking-to-achieve",
        icon: rfpIcon,
        linkLabel: "Request an RFP",
        title: "Request an RFP / Proposal",
    },
    {
        description: "Connect with a specialist to discuss your business or technology challenge.",
        href: "#tell-us-what-youre-looking-to-achieve",
        icon: expertIcon,
        linkLabel: "Talk to an Expert",
        title: "Talk to an Expert",
    },
    {
        // Figma (278:5405 / 278:5408) pairs this card with the escalation copy
        // and link that belong to the Existing Customers panel — kept as the
        // assessment copy here and flagged to design.
        description: "Evaluate your current environment, identify gaps and explore opportunities for transformation.",
        href: "#is-your-technology-landscape-ready",
        icon: assessmentIcon,
        linkLabel: "Request Assessment",
        title: "Request a Solution Assessment",
    },
    {
        description: "Book a conversation with our business or technology team.",
        href: "/book-a-consultation/",
        icon: meetingIcon,
        linkLabel: "Schedule a Meeting",
        title: "Schedule a Meeting",
    },
];

// Shown only while the "For Prospective Customers" segment is selected — see
// ChooseWhatFitsYourNeed. The revised design lifts this panel off white onto a
// barely-there slate tint with a hairline rule against the section above it.
export default function StartANewConversation() {
    return (
        <section
            id="start-a-new-conversation"
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
                    For Prospective Customers
                </p>
                <h2 className="mt-4 text-[26px] sm:text-[32px] font-medium text-[#0e2b4b] leading-[1.2]">
                    Start a New Conversation
                </h2>
                <p className="mt-3 pt-[2px] text-base font-normal text-[#415773] leading-[1.5]">
                    Explore solutions, discuss your business requirements,
                    <br className="hidden sm:block" />{" "}
                    or connect with our experts to identify the right approach for your organization.
                </p>
            </motion.div>

            {/* 24px between cards (Figma 278:5368) — the same gutter the
                three-card panel uses, so swapping segments doesn't change the
                rhythm. */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

                            {/* Figma shows the label underlined on one card only —
                                that is the hover state, so it is bound to hover here
                                rather than baked into a single card. */}
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
