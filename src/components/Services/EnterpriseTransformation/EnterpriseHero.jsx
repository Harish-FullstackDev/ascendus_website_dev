"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TrendingUp, BarChart3, RefreshCw, Rocket } from "lucide-react";

import riseImage from "@/assets/Service/Enterprise Transformation/54d4d318f9dd0fdafd3f2f709cc5dc6f717d303d.png";
import growImage from "@/assets/Service/Enterprise Transformation/20bdf20a6588f934ec63d9dfa323262236fa5182.png";
import cmuImage from "@/assets/Service/Enterprise Transformation/1de68374670aa11007c475dd5961553921b3ca79.png";
import rolloutImage from "@/assets/Service/Enterprise Transformation/SAP Rollout/ai-services-panel-bg.jpg";

const MotionLink = motion.create(Link);

const PROGRAMS = [
  {
    title: "RISE With SAP",
    description: "Move to a cloud-based, AI-ready ERP core with a guided, low-risk migration path.",
    href: "/services/enterpriseTransformation/rise-with-sap",
    image: riseImage,
    icon: TrendingUp,
    gradient: "from-[rgba(24,31,122,0.43)] to-[#3b3073]",
  },
  {
    title: "GROW With SAP",
    description: "Purpose-built cloud ERP that scales fast-growing and mid-market enterprises.",
    href: "/services/enterpriseTransformation/grow-with-sap",
    image: growImage,
    icon: BarChart3,
    gradient: "from-[rgba(155,190,219,0.14)] to-[#407194]",
  },
  {
    title: "SAP CMU",
    description: "Modernize and consolidate your SAP landscape with Custom Migration & Upgrade.",
    href: "/services/enterpriseTransformation/sap-cmu",
    image: cmuImage,
    icon: RefreshCw,
    gradient: "from-[rgba(93,2,169,0)] to-[#3e59a3]",
    hue: "bg-[rgba(59,120,234,0.87)]",
  },
  {
    title: "SAP Rollout",
    description: "Standardize and deploy proven SAP templates across new markets and business units.",
    href: "/services/enterpriseTransformation/sap-rollout",
    image: rolloutImage,
    icon: Rocket,
    gradient: "from-[rgba(115,97,199,0)] to-[#2E3033]",
    hue: "bg-[rgba(0,97,175,0.55)]",
  },
];

const ProgramCard = ({ program, index }) => {
  const cardRef = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const rotateY = useTransform(sx, [0, 1], [-8, 8]);

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      >
        <MotionLink
          ref={cardRef}
          href={program.href}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="group relative block h-[280px] overflow-hidden rounded-[20px] border border-[#aeaeae] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(46,48,51,0.35)] sm:h-[300px] md:h-[324px]"
        >
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${program.gradient}`} />
          {program.hue && <div className={`absolute inset-0 mix-blend-hue ${program.hue}`} />}

          <div className="relative z-10 flex h-full flex-col justify-between p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="mb-2 text-lg font-medium text-[#f8f8f8]">{program.title}</p>
              <p className="mb-3 max-h-0 max-w-[190px] overflow-hidden text-sm font-normal text-white/75 opacity-0 transition-all duration-300 group-hover:mb-3 group-hover:max-h-20 group-hover:opacity-100">
                {program.description}
              </p>
              <div className="h-[1px] w-16 bg-white opacity-80 transition-all duration-300 group-hover:w-24" />
            </div>
          </div>
        </MotionLink>
      </motion.div>
    </motion.div>
  );
};

const EnterpriseHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h1 className="text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl">
            Transform Today. Lead Tomorrow.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-600 sm:text-xl">
            Business transformation is more than adopting new technology—it&apos;s about
            reimagining how your organization operates, innovates, and grows. Ascendus helps
            enterprises transform with confidence through strategy, technology, and execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
