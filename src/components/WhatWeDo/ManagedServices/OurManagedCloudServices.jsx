"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import cardBg from "@/assets/WhatWeDo/Managed Services/Section10_Card_Bg.svg";
import arrowImg from "@/assets/WhatWeDo/Managed Services/Section10_Arrow.png";
import discoverIcon from "@/assets/WhatWeDo/Managed Services/Icons/Section10_Icon.svg";

// Fixed design canvas — matches the Figma frame (916x1013) exactly, then the
// whole canvas scales as one rigid unit so cards and connectors never drift
// apart, at any screen width.
const CANVAS_W = 916;
const CANVAS_H = 1013;
const CARD_W = 358;
const CARD_H = 231;

const STEPS = [
    { n: 1, title: "Monitor", desc: "Track cloud performance, health, and availability in real time.", left: 0, top: 0 },
    { n: 2, title: "Detect", desc: "Identify security threats, system issues, and performance bottlenecks early.", left: 546, top: 164 },
    { n: 3, title: "Respond", desc: "Resolve incidents quickly with proactive support and operational expertise.", left: 42, top: 355 },
    { n: 4, title: "Optimize", desc: "Continuously improve cloud performance, security, and cost efficiency.", left: 558, top: 557 },
    { n: 5, title: "Evolve", desc: "Adapt cloud environments to changing business needs and future technologies.", left: 104, top: 782 },
];

// One connector per gap, positioned exactly as the Figma export defines it.
// "mirror" flips the (down-right) arrow horizontally for the down-left hops.
const CONNECTORS = [
    { left: 356, top: 96, mirror: false }, // Monitor -> Detect
    { left: 210, top: 292, mirror: true }, // Detect -> Respond
    { left: 392, top: 490, mirror: false }, // Respond -> Optimize
    { left: 218, top: 681, mirror: true }, // Optimize -> Evolve
];
const CONNECTOR_W = 333;
const CONNECTOR_H = 63;

// Overlay positions within a single 358x231 card, as % of the card's own
// width/height (the card locks aspect-ratio: 358/231, so these proportions
// stay exact at any responsive size).
const PILL_CENTER_X = ((23 + 46 / 2) / CARD_W) * 100;
const CIRCLE_CENTER_X = ((86 + 57 / 2) / CARD_W) * 100;
const CIRCLE_CENTER_Y = ((14 + 57 / 2) / CARD_H) * 100;
const TITLE_LEFT = (160 / CARD_W) * 100;
const DESC_LEFT = (86 / CARD_W) * 100;
const DESC_TOP = (91 / CARD_H) * 100;
const DESC_WIDTH = (249 / CARD_W) * 100;

const StepCard = ({ step, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="absolute"
        style={{ left: step.left, top: step.top, width: CARD_W, height: CARD_H }}
    >
        <Image src={cardBg} alt="" fill className="object-fill" />

        <span
            className="absolute -translate-x-1/2 -translate-y-1/2 text-xl font-medium text-black"
            style={{ left: `${PILL_CENTER_X}%`, top: "50%" }}
        >
            {step.n}
        </span>

        <div
            className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${CIRCLE_CENTER_X}%`, top: `${CIRCLE_CENTER_Y}%` }}
        >
            <Image src={discoverIcon} alt="" fill />
        </div>

        <p
            className="absolute -translate-y-1/2 whitespace-nowrap text-lg font-medium text-black sm:text-xl"
            style={{ left: `${TITLE_LEFT}%`, top: `${CIRCLE_CENTER_Y}%` }}
        >
            {step.title}
        </p>

        <p
            className="absolute text-sm leading-relaxed text-black sm:text-base"
            style={{ left: `${DESC_LEFT}%`, top: `${DESC_TOP}%`, width: `${DESC_WIDTH}%` }}
        >
            {step.desc}
        </p>
    </motion.div>
);

const Connector = ({ connector, index }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        className="absolute"
        style={{
            left: connector.left,
            top: connector.top,
            width: CONNECTOR_W,
            height: CONNECTOR_H,
            transform: connector.mirror ? "scaleX(-1)" : undefined,
        }}
    >
        <Image src={arrowImg} alt="" fill className="object-contain" />
    </motion.div>
);

const OurManagedCloudServices = () => {
    const wrapperRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return undefined;
        const update = () => setScale(el.offsetWidth / CANVAS_W);
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-14 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl text-center"
                >
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4">
                        How We Manage Your Cloud
                    </h2>
                    <p className="text-lg sm:text-xl font-light text-[#515151]">
                        A continuous cycle that keeps your cloud environment secure, performant, and ready for
                        what&apos;s next.
                    </p>
                </motion.div>

                {/* Mobile / tablet: simple stacked list, no diagram */}
                <div className="flex w-full flex-col gap-6 lg:hidden">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="flex gap-4 rounded-[10px] bg-[#E1E4E5] px-6 py-4"
                        >
                            <div className="flex h-12 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-lg font-medium text-black">
                                {step.n}
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                                        <Image src={discoverIcon} alt="" width={20} height={20} />
                                    </div>
                                    <p className="text-lg font-medium text-black">{step.title}</p>
                                </div>
                                <p className="text-base font-light text-black">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop: fixed-canvas diagram, scaled as one rigid unit */}
                <div ref={wrapperRef} className="hidden w-full lg:block" style={{ height: CANVAS_H * scale }}>
                    <div
                        className="relative"
                        style={{ width: CANVAS_W, height: CANVAS_H, transformOrigin: "top left", transform: `scale(${scale})` }}
                    >
                        {CONNECTORS.map((connector, i) => (
                            <Connector key={i} connector={connector} index={i} />
                        ))}
                        {STEPS.map((step, i) => (
                            <StepCard key={step.n} step={step} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurManagedCloudServices;
