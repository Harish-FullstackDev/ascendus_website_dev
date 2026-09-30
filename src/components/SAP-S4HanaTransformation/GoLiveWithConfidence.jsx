"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import railPhoto from "@/assets/SAP-S4HanaTransformation/testing-and-deployment.webp";

// Figma (835:1632) puts the eyebrow and heading at the top of the column and
// the description at the bottom. The heading repeats the eyebrow ("Testing &
// Deployment") and the description opens with "Go Live With Confidence, Not
// Crossed Fingers" on its own line; both are Figma's text as written.
//
// The card copy is verbatim too, including titles and descriptions that do not
// pair up (e.g. "Users who are ready" / data-breach risk).
const CHECKS = [
    {
        title: "Numbers that reconcile",
        description:
            "Mock migrations and reconciliation checks confirm that what leaves the old system arrives intact.",
    },
    {
        title: "User adoption hurdles",
        description: "Repeated trial runs expose timing and volume issues long before go-live.",
    },
    {
        title: "Users who are ready",
        description: "Risks associated with data breaches during migration.",
    },
    {
        title: "Access that is locked down",
        description: "Difficulty in syncing with existing systems.",
    },
    {
        title: "Interfaces that hold up",
        description: "Every connection is tested end to end, including failure scenarios.",
    },
];

// Section 9 — white, under the white integration section (32 at the shared
// edge) and above the CTA photo band (full 64).
export default function GoLiveWithConfidence() {
    return (
        <section className="w-full bg-white px-6 pb-10 pt-10 sm:px-[64px] sm:pb-16 sm:pt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,345px)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[382px_345px_minmax(0,1fr)] xl:items-stretch"
            >
                <div className="flex flex-col justify-between gap-8 lg:col-span-2 xl:col-span-1 xl:p-3">
                    <div className="flex flex-col gap-3">
                        <p className="py-1 text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                            Testing &amp; Deployment
                        </p>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-[#0e2b4b] xl:whitespace-nowrap">
                            TESTING &amp; DEPLOYMENT
                        </h2>
                    </div>
                    <p className="text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base xl:max-w-[388px]">
                        Go Live With Confidence, Not Crossed Fingers
                        <br />
                        Most go-live problems are visible weeks earlier if someone is looking for them. We test for the
                        risks that matter and rehearse cutover until it is routine.
                    </p>
                </div>

                <div className="relative mx-auto aspect-[4/5] w-full max-w-[345px] overflow-hidden rounded-[24px] lg:mx-0 lg:aspect-auto lg:min-h-[600px] lg:max-w-none xl:min-h-[678px]">
                    <Image
                        src={railPhoto}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 345px, 100vw"
                        className="object-cover"
                    />
                </div>

                <ul className="flex flex-col gap-3">
                    {CHECKS.map((check) => (
                        <li
                            key={check.title}
                            className="flex flex-1 flex-col justify-center gap-3 rounded-[12px] border border-[#c9d0d8] bg-[#f8f8f8] px-[25px] py-[17px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.14)]"
                        >
                            <h3 className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">{check.title}</h3>
                            <p className="text-[14px] font-normal leading-[1.4] text-[#0e2b4b]">{check.description}</p>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
