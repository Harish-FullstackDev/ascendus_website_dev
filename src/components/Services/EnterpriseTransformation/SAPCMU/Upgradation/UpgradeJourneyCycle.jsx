"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import bgImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/Frame 1000003899.jpg";
import outerRing from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/icons/Ellipse 42.png";
import innerRing from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/icons/Ellipse 41.png";
import badgeBg from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/icons/Ellipse 43.svg";

// Fixed design canvas — matches the Figma frame exactly, then the whole
// canvas scales as one rigid unit so the rings, numbered nodes, and labels
// keep their exact relative positions at any screen width.
const CANVAS_W = 1145;
const CANVAS_H = 591;

const NODES = [
  { n: 1, label: "Observe", description: "Understand system behavior, user patterns, and business priorities.", badge: { left: 749, top: 56 }, text: { left: 864, top: 41, width: 207 } },
  { n: 2, label: "Improve", description: "Optimize applications, workflows, and business processes.", badge: { left: 841, top: 249 }, text: { left: 926, top: 231, width: 201 } },
  { n: 3, label: "Enable", description: "Deliver new capabilities that increase productivity and efficiency.", badge: { left: 720, top: 457 }, text: { left: 820, top: 451, width: 201 } },
  { n: 4, label: "Protect", description: "Maintain governance, security, compliance, and operational resilience.", badge: { left: 420, top: 405 }, text: { left: 199, top: 416, width: 219 } },
  { n: 5, label: "Transform", description: "Prepare your SAP landscape for future business growth and innovation.", badge: { left: 398, top: 116 }, text: { left: 175, top: 65, width: 209 } },
];

// Outer ring geometry (matches the Ellipse 42 asset: left 398, top 41, 471x471)
const RING_CENTER = { x: 398 + 471 / 2, y: 41 + 471 / 2 };
const RING_RADIUS = 471 / 2;
const BADGE_SIZE = 55;

// The raw Figma badge coordinates are hand-placed and land a few px off the
// ring for some nodes (most noticeably node 5). Re-project each badge onto
// the ring at its own angle so every node sits exactly on the line.
const snapToRing = ({ left, top }) => {
  const cx = left + BADGE_SIZE / 2;
  const cy = top + BADGE_SIZE / 2;
  const dx = cx - RING_CENTER.x;
  const dy = cy - RING_CENTER.y;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const scale = RING_RADIUS / dist;
  return {
    left: RING_CENTER.x + dx * scale - BADGE_SIZE / 2,
    top: RING_CENTER.y + dy * scale - BADGE_SIZE / 2,
  };
};

const UpgradeJourneyCycle = () => {
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
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">Our Upgrade Journey</h2>
          <p className="mt-4 text-lg font-light text-[#515151] sm:text-xl">
            Transformation shouldn&apos;t end at Go-Live. The real impact begins afterward.
          </p>
        </motion.div>

        {/* Mobile / tablet: simple stacked list */}
        <div className="flex flex-col gap-3 lg:hidden">
          {NODES.map((node, index) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0061af] text-sm font-medium text-white shadow-md">
                {node.n}
              </span>
              <div>
                <p className="text-base font-medium text-black">{node.label}</p>
                <p className="mt-1 text-sm font-light text-neutral-500">{node.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: full-bleed photo band (breaks out of the max-w-7xl container
          above so there's no white margin on either side), with the fixed-canvas
          circular diagram re-centered inside it to the same width as the heading */}
      <div className="relative hidden lg:block" style={{ height: CANVAS_H * scale }}>
        <div className="absolute inset-0 bg-black">
          <Image src={bgImage} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
        </div>

        <div className="relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={wrapperRef} className="relative h-full w-full">
            <div
              className="absolute left-0 top-0"
              style={{ width: CANVAS_W, height: CANVAS_H, transformOrigin: "top left", transform: `scale(${scale})` }}
            >
              {/* Outer solid ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="absolute"
                style={{ left: 398, top: 41, width: 471, height: 471 }}
              >
                <Image src={outerRing} alt="" fill />
              </motion.div>

              {/* Inner dashed ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="absolute"
                style={{ left: 448, top: 91, width: 372, height: 372 }}
              >
                <Image src={innerRing} alt="" fill />
              </motion.div>

              {/* Center label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -translate-x-1/2 text-center text-[32px] font-medium leading-tight text-black"
                style={{ left: 634, top: 227, width: 316 }}
              >
                The Ascendus Continuous Value Cycle
              </motion.p>

              {/* Numbered nodes + labels */}
              {NODES.map((node, index) => {
                const badgePos = snapToRing(node.badge);
                return (
                  <React.Fragment key={node.label}>
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.1 }}
                      className="absolute z-10 cursor-pointer"
                      style={{ left: badgePos.left, top: badgePos.top, width: BADGE_SIZE, height: BADGE_SIZE }}
                    >
                      <Image src={badgeBg} alt="" fill className="pointer-events-none select-none" />
                      <span className="absolute inset-0 flex items-center justify-center text-[22px] font-light leading-none text-white">
                        {node.n}
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
                      className="absolute flex flex-col gap-1.5"
                      style={{ left: node.text.left, top: node.text.top, width: node.text.width }}
                    >
                      <h3 className="text-2xl font-medium text-black">{node.label}</h3>
                      <p className="text-base font-light leading-snug text-black">{node.description}</p>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeJourneyCycle;

