"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import userInterviewsPhoto from "@/assets/WhatWeDo/Experience Design/Section3_Card1_UserInterviews.jpg";
import surveysPhoto from "@/assets/WhatWeDo/Experience Design/Section3_Card2_Surveys.jpg";
import usabilityTestingPhoto from "@/assets/WhatWeDo/Experience Design/Section3_Card3_UsabilityTesting.jpg";
import personaDevelopmentPhoto from "@/assets/WhatWeDo/Experience Design/Section3_Card4_PersonaDevelopment.jpg";
import competitiveAnalysisPhoto from "@/assets/WhatWeDo/Experience Design/Section3_Card5_CompetitiveAnalysis.jpg";
import behavioralResearchPhoto from "@/assets/WhatWeDo/Experience Design/Section3_Card6_BehavioralResearch.jpg";

const CARDS = [
    {
        title: "User Interviews",
        desc: "One-on-one conversations that surface real user needs, motivations, and pain points behind every product decision.",
        image: userInterviewsPhoto,
    },
    {
        title: "Surveys",
        desc: "Structured questionnaires that capture quantitative feedback at scale to validate assumptions across your user base.",
        image: surveysPhoto,
    },
    {
        title: "Usability Testing",
        desc: "Observing real users complete tasks to uncover friction points before they ever reach production.",
        image: usabilityTestingPhoto,
    },
    {
        title: "Persona Development",
        desc: "Data-backed user personas that keep every design decision grounded in real audience needs.",
        image: personaDevelopmentPhoto,
    },
    {
        title: "Competitive Analysis",
        desc: "Benchmarking against market leaders to identify gaps, opportunities, and differentiation points.",
        image: competitiveAnalysisPhoto,
    },
    {
        title: "Behavioral Research",
        desc: "Analyzing how users actually interact with digital products to inform evidence-based design choices.",
        image: behavioralResearchPhoto,
    },
];

export default function UserResearch() {
    return (
        <section className="w-full py-10 sm:pt-5 sm:pb-5 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[750px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="text-black text-2xl font-semibold">User Research</h2>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    No matter the challenge, we apply proven research methods to understand real users and validate
                    decisions before a single line of code is written.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[17px] max-w-[1390px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="bg-white shadow-[0px_2px_7.5px_rgba(0,0,0,0.19)] flex flex-col items-center pb-3"
                    >
                        <div className="relative w-full aspect-[470/263]">
                            <Image src={card.image} alt={card.title} fill className="object-cover" />
                        </div>
                        <div className="w-full text-center px-4 pt-3">
                            <p className="text-black text-base font-semibold">{card.title}</p>
                            <p className="text-[#6c6c6c] text-sm font-light mt-1">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
