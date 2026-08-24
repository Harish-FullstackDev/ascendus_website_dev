"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// Home-page-only variant of WhoWeAre/FutureFocusedInsights.jsx — that
// component is shared by 16 other pages, so this new "Articles" layout (left
// -aligned header, 3-up grid, circular Read More arrow) lives here instead of
// changing the shared one.
import article1Img from "@/assets/WhoWeAre/webp/Who_We_Are_Blog_1.webp";
import article2Img from "@/assets/WhoWeAre/webp/Who_We_Are_Blog_2.webp";
import article3Img from "@/assets/WhoWeAre/webp/Who_We_Are_Blog_3.webp";

const ARTICLES = [
    {
        date: "05 Nov 2026",
        title: "Why Most SAP Migrations Stall After Go-Live — and How to Avoid It",
        img: article1Img,
    },
    {
        date: "05 Nov 2026",
        title: "AI in the Enterprise: Moving From Pilot to Production",
        img: article2Img,
    },
    {
        date: "05 Nov 2026",
        title: "Compliance by Design: Building GCC-Ready Systems From Day One",
        img: article3Img,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FutureFocusedInsights() {
    return (
        <section className="w-full bg-white pt-16 pb-16 sm:pt-20 sm:pb-20 px-6 sm:px-[64px]">
            <div className="max-w-[1280px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-[700px] mb-12"
                >
                    <p className="text-sm text-[#6c6c6c] pb-2 border-b border-[#d9d9d9] w-fit">Articles</p>
                    <h2 className="mt-4 text-[#10161d] text-2xl sm:text-[32px] font-medium leading-[1.3]">
                        Perspectives on Enterprise Technology That Matter to Your Business
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {ARTICLES.map((item) => (
                        <motion.article key={item.title} variants={itemVariants} className="flex flex-col gap-4">
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image src={item.img} alt="" fill className="object-cover" />
                            </div>
                            <p className="text-sm text-[#6c6c6c]">{item.date}</p>
                            <h3 className="text-[#10161d] text-lg font-medium leading-[1.4]">{item.title}</h3>
                            <button
                                type="button"
                                className="group flex items-center gap-2 text-[#2d8ec5] text-base font-light"
                            >
                                Read More
                                <span className="flex items-center justify-center size-7 rounded-full border border-[#2d8ec5] transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight className="size-3.5" />
                                </span>
                            </button>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
