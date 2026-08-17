"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hanken_Grotesk } from "next/font/google";
import missionBg from "@/assets/WhoWeAre/new/mis.jpg";

// AktivGrotesk (used in the Figma design) isn't a freely licensed font, so this
// substitutes Hanken Grotesk, a similar neo-grotesque with matching thin/light weights.
const cardFont = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["200", "300"],
});

const SEGMENT_MS = 300;

// each edge's transition-delay depends on hover direction: the edge that draws/retracts
// first in a given direction gets 0ms, the one that continues from its meeting point waits
// for the first to finish (SEGMENT_MS).
function edgeStyle(firstOnEnter) {
    return (isHovered) => ({
        transitionDuration: `${SEGMENT_MS}ms`,
        transitionDelay: `${isHovered === firstOnEnter ? 0 : SEGMENT_MS}ms`,
        transitionTimingFunction: "ease-in-out",
        transitionProperty: "transform",
    });
}

const topStyle = edgeStyle(true);
const rightStyle = edgeStyle(false);
const leftStyle = edgeStyle(true);
const bottomStyle = edgeStyle(false);

const CARDS = [
    {
        title: "Mission",
        description:
            "To empower businesses through innovative technology, strategic consulting, and tailored digital solutions that drive sustainable growth, operational excellence, and long-term success.",
    },
    {
        title: "Vision",
        description:
            "To be a trusted global technology and consulting partner, helping organizations transform, innovate, and lead confidently in an ever-evolving digital world.",
    },
    {
        title: "Culture & Values",
        description:
            "We foster a culture of collaboration, integrity, continuous learning, and innovation. By empowering our people and embracing diverse perspectives, we create an environment where great ideas thrive and exceptional results follow.",
    },
    {
        title: "CSR",
        description:
            "We believe business success goes hand in hand with social responsibility. Through ethical practices, environmental awareness, community engagement, and sustainable initiatives, we strive to create a positive impact for society and future generations.",
    },
];

function AnimatedBorderCard({ title, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex-1 h-[320px] sm:h-[600px] px-[30px] py-10 mx-2 flex flex-col justify-start overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* border draws from the top-left corner: top+right and left+bottom each animate in sequence, meeting at bottom-right.
                On leave, each line un-draws along the same path it drew in on, so the edge that finished last (right/bottom)
                retracts first, and the edge that started first (top/left) only starts retracting once its partner returns. */}
            <span
                className="absolute left-0 top-0 h-px w-full origin-left bg-[#d0d0d0]"
                style={{ ...topStyle(isHovered), transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
            />
            <span
                className="absolute right-0 top-0 h-full w-px origin-top bg-[#d0d0d0]"
                style={{ ...rightStyle(isHovered), transform: isHovered ? "scaleY(1)" : "scaleY(0)" }}
            />
            <span
                className="absolute left-0 top-0 h-full w-px origin-top bg-[#d0d0d0]"
                style={{ ...leftStyle(isHovered), transform: isHovered ? "scaleY(1)" : "scaleY(0)" }}
            />
            <span
                className="absolute left-0 bottom-0 h-px w-full origin-left bg-[#d0d0d0]"
                style={{ ...bottomStyle(isHovered), transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
            />

            <p className={`${cardFont.className} relative text-4xl font-light text-white`}>{title}</p>
            <p
                className={`${cardFont.className} relative text-base font-extralight mt-10 leading-relaxed origin-left transition-all ease-in-out ${isHovered ? "text-white scale-105" : "text-white/50"
                    }`}
                style={{ transitionDuration: `${SEGMENT_MS}ms` }}
            >
                {description}
            </p>
        </div>
    );
}

export default function MissionVision() {
    return (
        <section className="w-full py-16 sm:py-20">
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-12 px-4 sm:px-6 lg:px-8"
            >
                <h2 className="text-2xl font-medium text-[#16171a]">Mission and Vision</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#3d3d4e]">
                    We are passionate about empowering individuals and businesses to take control of their finances
                    and achieve their financial goals.
                </p>
            </motion.div> */}

            <div className="relative w-full sm:h-[800px]">
                {/* Fixed Background */}
                <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${missionBg.src})`,
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative flex flex-col sm:flex-row sm:h-full sm:items-center px-5">
                    {CARDS.map((card) => (
                        <AnimatedBorderCard key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
