"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Cloud Security",
        desc: "Securing Cloud-First and Hybrid Enterprise Environments. Cloud transformation introduces new operational models, shared responsibility frameworks, and evolving security risks.",
    },
    {
        title: "Data Encryption",
        desc: "Protecting sensitive information through cryptographic measures ensures data remains confidential and secure during cloud transactions.",
    },
    {
        title: "Access Control",
        desc: "Implementing strict access policies and identity verification helps prevent unauthorized access to cloud resources.",
    },
    {
        title: "Cloud Workload Protection",
        desc: "Continuous monitoring and hardening of containers, virtual machines, and serverless workloads across multi-cloud environments.",
    },
    {
        title: "Compliance Management",
        desc: "Ensuring that cloud services adhere to industry regulations and standards is crucial for maintaining data integrity and security.",
    },
    {
        title: "Cloud Security Posture Management",
        desc: "Continuously scanning cloud environments for misconfigurations and drift from secure baselines across AWS, Azure, and GCP.",
    },
    {
        title: "Multi-Cloud Visibility",
        desc: "Unified monitoring and policy enforcement across multiple cloud providers to eliminate blind spots and inconsistent controls.",
    },
    {
        title: "Secure DevOps Integration",
        desc: "Embedding security checks directly into CI/CD pipelines so vulnerabilities are caught before workloads reach production.",
    },
];

export default function CloudSecurity() {
    const trackRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const updateProgress = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
    }, []);

    const scrollByCard = (direction) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const cardWidth = card ? card.getBoundingClientRect().width + 25 : 275;
        el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    };

    return (
        <section className="w-full py-10 sm:py-[46px] px-6 sm:px-[50px] flex flex-col items-center gap-8 sm:gap-[46px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1011px] text-center"
            >
                <h2 className="font-heading text-black text-2xl font-semibold">Cloud Security</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Securing Cloud-First and Hybrid Enterprise Environments
                    <br />
                    <br />
                    Cloud transformation introduces new operational models, shared responsibility frameworks, and evolving
                    security risks. Effective cloud security requires continuous visibility, automated policy enforcement,
                    identity protection, workload security, and secure configuration management.
                </p>
            </motion.div>

            <div className="flex flex-col gap-6 sm:gap-[30px] w-full md:ml-10">
                <div
                    ref={trackRef}
                    onScroll={updateProgress}
                    className="flex gap-4 sm:gap-[25px] w-full overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {CARDS.map((card) => (
                        <div
                            key={card.title}
                            data-card
                            className="snap-start shrink-0 w-[220px] sm:w-[250px] aspect-[250/338] border-x border-b border-black/70 border-t-[5px] border-t-black flex flex-col gap-8 sm:gap-[141px] items-center px-4 pt-[18px]"
                        >
                            <p className="text-black text-lg sm:text-2xl font-normal text-center w-full">{card.title}</p>
                            <p className="text-[#3d3d4e] text-sm sm:text-lg font-light text-center">{card.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4 sm:gap-6 w-full">
                    <div className="relative flex-1 h-[10px] rounded-full bg-[#d9d9d9] overflow-hidden">
                        <div
                            className="absolute inset-y-0 left-0 rounded-full bg-[#2d8ec5] transition-all duration-300"
                            style={{ width: `${Math.max(progress * 100, 8)}%` }}
                        />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => scrollByCard(-1)}
                            className="flex items-center justify-center size-[31px] rounded-full border border-[#6c6c6c] text-[#6c6c6c] hover:bg-black hover:text-white hover:border-black transition-colors"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => scrollByCard(1)}
                            className="flex items-center justify-center size-[31px] rounded-full border border-[#6c6c6c] text-[#6c6c6c] hover:bg-black hover:text-white hover:border-black transition-colors"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
