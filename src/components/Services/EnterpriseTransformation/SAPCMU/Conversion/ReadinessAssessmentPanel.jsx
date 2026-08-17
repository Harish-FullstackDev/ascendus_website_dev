"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import CustomButton from "@/components/Cards/Button";

import CalendlyModal from "@/components/CommonComponents/CommonCalendy";
import rectangle26 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Rectangle 26.jpg";
import dottedMap from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Dotted map.png";

const STEPS = [
  {
    title: "System Readiness Assessment",
    description: "Industry-aligned processes designed to accelerate implementation.",
  },
  {
    title: "Business Process Assessment",
    description: "Improve system speed and responsiveness across your business.",
  },
  {
    title: "Data Readiness",
    description: "Deliver a modern and intuitive experience that improves productivity.",
  },
  {
    title: "Custom Code Analysis",
    description: "Keep your SAP landscape aligned with current security and compliance standards.",
  },
  {
    title: "System Conversion",
    description: "Create a foundation that supports automation, analytics, AI, and future digital initiatives.",
  },
];

const TimelineTrackFill = ({ active }) => (
  <>
    <Image src={rectangle26} alt="" fill className="object-cover opacity-30" />
    {/* Active progress highlight */}
    <motion.div
      className="absolute top-0 left-0 right-0 rounded-full origin-top"
      style={{ height: `${(active / (STEPS.length - 1)) * 100}%` }}
      animate={{ height: `${(active / (STEPS.length - 1)) * 100}%` }}
      transition={{ type: "spring", stiffness: 85, damping: 14 }}
    >
      <Image src={rectangle26} alt="" fill className="object-cover" />
    </motion.div>
  </>
);

const ReadinessAssessmentPanel = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });
  const timelineRef = useRef(null);
  const firstNodeRef = useRef(null);
  const lastNodeRef = useRef(null);
  const [mobileTrack, setMobileTrack] = useState({ top: 16, height: 0 });
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    if (!inView || isHovered) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % STEPS.length), 2600);
    return () => clearInterval(id);
  }, [inView, isHovered]);

  // Measure the exact centers of the first and last circle nodes so the
  // mobile connecting line starts/ends precisely on them, regardless of how
  // tall each step's wrapped description text ends up being.
  useEffect(() => {
    const measure = () => {
      const container = timelineRef.current;
      const first = firstNodeRef.current;
      const last = lastNodeRef.current;
      if (!container || !first || !last) return;
      const containerRect = container.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      const firstCenter = firstRect.top - containerRect.top + firstRect.height / 2;
      const lastCenter = lastRect.top - containerRect.top + lastRect.height / 2;
      setMobileTrack({ top: firstCenter, height: lastCenter - firstCenter });
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (timelineRef.current) ro.observe(timelineRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <section ref={containerRef} className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] border border-neutral-100 bg-white px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16 shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
          >
            <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Content Area */}
              <div className="flex flex-col items-start gap-8 z-10">
                <h2 className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl lg:text-[40px] leading-tight">
                  Is Your Business Ready for SAP Conversion?
                </h2>
                <div className="flex flex-col gap-6 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-[500px]">
                  <p>
                    If your current SAP landscape is becoming difficult to manage or limiting business
                    agility, it may be time to modernize.
                  </p>
                  <p>
                    Our SAP Conversion Assessment helps evaluate your system, identify potential risks,
                    and create a roadmap for a successful transformation.
                  </p>
                </div>
                <div className="mt-2">
                  <CustomButton
                    text="Book a Demo"
                    iconColor="text-black"
                    iconBgColor="bg-white"
                    buttonBgColor="bg-black hover:bg-neutral-900 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                    textColor="text-white"
                    onClick={() => setShowCalendly(true)}
                  />
                </div>

                {/* Dotted Map — sits in normal flow below the button so it can never overlap it,
                  regardless of how tall the right-hand timeline column grows. */}
                <div className="relative mt-4 h-36 w-full max-w-[380px] pointer-events-none select-none opacity-90 sm:h-44 lg:h-48">
                  <Image
                    src={dottedMap}
                    alt=""
                    fill
                    className="object-contain object-left-top"
                    priority
                  />
                </div>
              </div>

              {/* Right Timeline Area */}
              <div ref={timelineRef} className="relative flex flex-col gap-8 pl-4 lg:pl-10">
                {/* Vertical timeline progress bar — desktop (unchanged) */}
                <div className="absolute left-[11px] top-[16px] bottom-[16px] w-[10px] rounded-full overflow-hidden bg-neutral-100 z-0 hidden lg:block">
                  <TimelineTrackFill active={active} />
                </div>

                {/* Vertical timeline progress bar — mobile/tablet, centered on the
                  circle nodes and measured to span exactly first-to-last center */}
                <div
                  className="absolute left-[27px] w-[10px] rounded-full overflow-hidden bg-neutral-100 z-0 lg:hidden"
                  style={{ top: mobileTrack.top, height: mobileTrack.height }}
                >
                  <TimelineTrackFill active={active} />
                </div>

                {/* Steps List */}
                {STEPS.map((step, index) => {
                  const isActive = index === active;
                  const isFirst = index === 0;
                  const isLast = index === STEPS.length - 1;
                  return (
                    <div
                      key={step.title}
                      onMouseEnter={() => {
                        setActive(index);
                        setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                      }}
                      className="relative flex items-start gap-6 group cursor-pointer z-10"
                    >
                      {/* Circle Node */}
                      <div
                        ref={isFirst ? firstNodeRef : isLast ? lastNodeRef : undefined}
                        className="relative flex items-center justify-center w-8 h-8 flex-shrink-0 z-10"
                      >
                        <motion.div
                          animate={{
                            scale: isActive ? 1.15 : 1,
                            borderColor: isActive ? "#2e3033" : "#e5e5e5",
                            borderWidth: isActive ? "5px" : "3px",
                          }}
                          transition={{ duration: 0.25 }}
                          className="w-8 h-8 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.04)]"
                        />
                        {isActive && (
                          <span className="absolute -inset-1 rounded-full border border-sky-400/25 animate-ping pointer-events-none" />
                        )}
                      </div>

                      {/* Step Text Details */}
                      <div className="flex-1 pt-0.5 select-none">
                        <motion.h3
                          animate={{
                            color: isActive ? "#000000" : "#525252",
                            fontWeight: isActive ? 700 : 600,
                          }}
                          transition={{ duration: 0.25 }}
                          className="text-lg sm:text-xl tracking-tight transition-colors duration-300 font-sans"
                        >
                          {step.title}
                        </motion.h3>
                        <motion.p
                          animate={{
                            color: isActive ? "#404040" : "#a3a3a3",
                            opacity: isActive ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.25 }}
                          className="mt-1 text-sm sm:text-base leading-relaxed transition-colors duration-300 font-sans"
                        >
                          {step.description}
                        </motion.p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <CalendlyModal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "#0061af",
          textColor: "#0061af",
        }}
      />
    </>
  );
};

export default ReadinessAssessmentPanel;
