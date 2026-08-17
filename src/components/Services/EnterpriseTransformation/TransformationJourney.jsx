"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import journeyBg from "@/assets/Service/Enterprise Transformation/0a3d1c657297d9a862953b68d70c1276eac330f8.png";

// Fixed design canvas — every position below is authored in this exact
// pixel space (matching the Figma design 1:1), then the whole canvas is
// scaled as one rigid unit to fit the container. This avoids container-query
// units entirely, so circles/text/curve never drift out of alignment.
const CANVAS_W = 1282;
const CANVAS_H = 932;

const STEPS = [
  {
    number: 1,
    title: "Discover",
    description: "Understand business goals, current challenges, and future opportunities.",
    circle: { left: 181, top: 763, diameter: 54 },
    text: { left: 261, top: 763, width: 347 },
  },
  {
    number: 2,
    title: "Strategize",
    description: "Develop a practical roadmap aligned with your business vision.",
    circle: { left: 275, top: 503, diameter: 54 },
    text: { left: 322, top: 572, width: 286 },
  },
  {
    number: 3,
    title: "Transform",
    description: "Implement modern technologies and optimize business processes.",
    circle: { left: 378, top: 311, diameter: 75 },
    text: { left: 480, top: 354, width: 286 },
  },
  {
    number: 4,
    title: "Enable",
    description: "Empower teams with the right tools, skills, and support to embrace change.",
    circle: { left: 602, top: 108, diameter: 75 },
    text: { left: 679, top: 195, width: 286 },
  },
  {
    number: 5,
    title: "Optimize",
    description: "Continuously measure, improve, and evolve to maximize business value.",
    circle: { left: 882, top: 21, diameter: 90 },
    text: { left: 965, top: 108, width: 286 },
  },
];

// Curve, authored in its own local coordinate space exactly as the Figma
// export defines it. Rendered inside an absolutely-positioned wrapper
// (see CURVE_BOX below) so the browser maps it into canvas space natively —
// no hand-transformed coordinates that could drift out of alignment.
const CURVE_PATH = "M3.44008 744.461C44.2734 526.628 242.04 73.4609 706.44 3.4609";
const CURVE_VIEWBOX = "0 0 706.962 745.106";
const CURVE_BOX = { left: 207.5, top: 49, width: 703, height: 741 };

const TransformationJourney = () => {
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
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background image — covers the entire section */}
      <Image src={journeyBg} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
      <div className="absolute inset-0 bg-[rgba(46,48,51,0.56)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-3xl font-semibold text-white sm:text-4xl"
        >
          The Transformation Journey
        </motion.h2>

        {/* Mobile / tablet: simple stacked list, no curve */}
        <div className="flex flex-col gap-14 lg:hidden">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.85, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-white to-[#0061AF] text-xl font-bold leading-none text-[#0e3067] shadow-lg shadow-[#0061AF]/20 transition-transform duration-300 hover:scale-110">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white sm:text-3xl">{step.title}</h3>
                <p className="mt-1.5 max-w-[240px] text-sm text-neutral-300 sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: fixed-canvas diagram, scaled as one rigid unit */}
        <div ref={wrapperRef} className="hidden w-full overflow-hidden lg:block" style={{ height: CANVAS_H * scale }}>
          <div
            className="relative"
            style={{ width: CANVAS_W, height: CANVAS_H, transformOrigin: "top left", transform: `scale(${scale})` }}
          >
            {/* Curve — positioned exactly as Figma authors it: an absolute
                wrapper box, with an SVG inside mapping its own local
                viewBox onto that box. */}
            <div
              className="pointer-events-none absolute"
              style={{ left: CURVE_BOX.left, top: CURVE_BOX.top, width: CURVE_BOX.width, height: CURVE_BOX.height }}
            >
              <svg className="block h-full w-full" viewBox={CURVE_VIEWBOX} fill="none">
                <motion.path
                  d={CURVE_PATH}
                  stroke="url(#journey-line)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="journey-line" x1="884.44" y1="-84.04" x2="75.94" y2="720.96" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#66CDF3" />
                    <stop offset="0.5" stopColor="white" />
                    <stop offset="1" stopColor="#66CDF3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {STEPS.map((step, index) => (
              <React.Fragment key={step.number}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.18, ease: "easeOut" }}
                  className="absolute flex items-center justify-center rounded-full font-bold leading-none text-[#0e3067] shadow-lg shadow-[#0061AF]/20 transition-transform duration-300 hover:scale-110"
                  style={{
                    left: step.circle.left,
                    top: step.circle.top,
                    width: step.circle.diameter,
                    height: step.circle.diameter,
                    fontSize: 32,
                    background: "linear-gradient(to bottom, white 20%, #0061AF 100%)",
                  }}
                >
                  {step.number}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.18 + 0.15, ease: "easeOut" }}
                  className="absolute flex flex-col gap-1.5"
                  style={{ left: step.text.left, top: step.text.top, width: step.text.width }}
                >
                  <p className="text-[32px] font-bold leading-none text-white">{step.title}</p>
                  <p className="text-[24px] leading-relaxed text-[#e1e1e1]">{step.description}</p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationJourney;
