"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Figma (602:2376) draws three questions in the left column and four in the
// right; the left column gets a fourth so both columns balance. The first four
// fill the left column, the last four the right. Copy is placeholder until the
// final questions and answers are supplied: Figma's own questions, topped up
// with the answered ones the old careers FAQ carried. The culture and remote
// work answers are generic stand-ins and need confirming.
const FAQS = [
    {
        question: "What types of questions can I expect during the interview?",
        answer:
            "You can expect questions about your experience, skills, previous projects, problem-solving approach, and the role you're applying for. We may also discuss your portfolio, design process, tools you use, and how you collaborate with teams. Some questions may focus on real-world situations to understand how you approach challenges and make decisions.",
    },
    {
        question: "What is the company culture like at Ascendus?",
        answer:
            "We foster a collaborative, inclusive and high-performance culture where people are empowered to learn, innovate and make a difference.",
    },
    {
        question: "What is the interview process like at Ascendus?",
        answer:
            "Our process usually includes an initial screening, one or more interviews, and an assessment depending on the role.",
    },
    {
        question: "How do I apply for a job?",
        answer:
            "You can apply directly through our Careers page by selecting a role and submitting your application online.",
    },
    {
        question: "What documents do I need to submit?",
        answer:
            "Typically, you'll need to provide your updated resume or CV, along with a cover letter if requested in the job description.",
    },
    {
        question: "Can I apply for more than one position?",
        answer: "Yes, you are welcome to apply for multiple roles that match your skills and interests.",
    },
    {
        question: "How long does it take to hear back after applying?",
        answer: "You will typically receive an update within 1-2 weeks of submitting your application.",
    },
    {
        question: "Are there opportunities for remote work at Ascendus?",
        answer:
            "Work arrangements depend on the role and the client engagement. Each job listing states whether the position is on-site, hybrid or remote.",
    },
];

// Figma's glyph is a 32px #ecf2f9 disc with a #0061af plus. It is drawn with
// two bars rather than the exported SVG so the vertical bar can turn to make
// the minus — the site's +/− toggle pattern, never a rotating "×".
function ToggleIcon({ open }) {
    return (
        <span aria-hidden className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-[#ecf2f9]">
            <span className="absolute h-px w-3 rounded-full bg-[#0061af]" />
            <span
                className={`absolute h-3 w-px rounded-full bg-[#0061af] transition-transform duration-300 ease-out ${
                    open ? "rotate-90" : "rotate-0"
                }`}
            />
        </span>
    );
}

function FaqItem({ faq, open, onToggle, id }) {
    return (
        <div className="rounded-[12px] border border-[#e2e8f0] bg-white">
            <h3>
                <button
                    type="button"
                    id={`${id}-button`}
                    aria-expanded={open}
                    aria-controls={`${id}-panel`}
                    onClick={onToggle}
                    className="flex w-full items-center justify-between gap-4 p-[21px] text-left"
                >
                    <span className="text-base font-medium leading-[1.2] text-[#1e293b] sm:text-[18px]">
                        {faq.question}
                    </span>
                    <ToggleIcon open={open} />
                </button>
            </h3>

            <AnimatePresence initial={false}>
                {open ? (
                    <motion.div
                        key="panel"
                        id={`${id}-panel`}
                        role="region"
                        aria-labelledby={`${id}-button`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <p className="max-w-[578px] px-[21px] pb-[21px] text-[14px] leading-[1.4] text-[#1e293b]">
                            {faq.answer}
                        </p>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}

// Section 7 — white band between the dark "Stay Updated" band and the dark
// closing CTA, so it keeps the full 64 on both edges. The two columns stack
// independently (Figma's left column opens its first item without pushing the
// right column down).
export default function CareersFaq() {
    const [openIndex, setOpenIndex] = useState(0);
    const half = FAQS.length / 2;
    const columns = [FAQS.slice(0, half), FAQS.slice(half)];

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-6"
            >
                <div className="flex flex-col gap-3">
                    <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                        Frequently Asked Questions
                    </p>
                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0f172a]">
                        Common Questions
                    </h2>
                </div>

                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-[30px]">
                    {columns.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col gap-6">
                            {column.map((faq, itemIndex) => {
                                const index = columnIndex * half + itemIndex;
                                return (
                                    <FaqItem
                                        key={faq.question}
                                        id={`careers-faq-${index}`}
                                        faq={faq}
                                        open={openIndex === index}
                                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
