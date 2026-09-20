"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import rfpIcon from "@/assets/Contact-us/icons/rfp-proposal.svg";
import expertIcon from "@/assets/Contact-us/icons/talk-to-expert.svg";
import assessmentIcon from "@/assets/Contact-us/icons/solution-assessment.svg";
import meetingIcon from "@/assets/Contact-us/icons/schedule-meeting.svg";
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
// ChooseWhatFitsYourNeed. It shares the white background of the section above,
// so 32px at the top, and pays the full 64px at the bottom where the assessment
// band changes the background.
export default function StartANewConversation() {
    return (
        <section
            id="start-a-new-conversation"
            className="w-full scroll-mt-24 bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.6px] text-[#2d8ec5] leading-4">
                    For Prospective Customers
                </p>
                <h2 className="mt-1 text-2xl sm:text-[32px] font-semibold text-[#0a3a52] leading-[36px]">
                    Start a New Conversation
                </h2>
                <p className="mt-2 text-base sm:text-lg text-[#64748b] leading-5">
                    Explore solutions, discuss your business requirements, or connect with our experts to identify the
                    right approach for your organization.
                </p>
            </motion.div>

            {/* 20px between cards (Figma 62:432). The three-card panel next to
                this one uses a much wider gutter because it has one card fewer —
                see AlreadyAnAscendusCustomer. */}
            <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
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

                                <h3 className="mt-4 text-base sm:text-lg font-medium text-[#0a3a52] leading-5">{card.title}</h3>
                                <p className="mt-2 text-sm sm:text-base text-[#64748b] leading-[19.5px]">{card.description}</p>
                            </div>

                            {/* Figma shows the label underlined on one card only —
                                that is the hover state, so it is bound to hover here
                                rather than baked into a single card. */}
                            <span className="mt-8 inline-flex items-center gap-1 text-sm sm:text-base font-medium text-[#2d8ec5]">
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
