"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import CustomButton from "@/components/Cards/Button";
import CommonVideoModal from "@/components/CommonComponents/CommonVideoModal";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";
import heroMain from "@/assets/Service/Enterprise Transformation/Rise with SAP/8b7ad66090c17c7a61f5520778f413fa064a0e59.png";
import heroGlowA from "@/assets/Service/Enterprise Transformation/Rise with SAP/3723fdb1cb335a4ef09bb50cffc7e305d61d1560.png";
import heroGlowB from "@/assets/Service/Enterprise Transformation/Rise with SAP/7939ef78bdbb2d5f6bab9a30e84f12f40a4dd5e4.jpg";

const RISE_VIDEO_URL = "https://www.youtube.com/watch?v=3-tNsEJu1iw";

const RiseHero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Ambient decorative glows */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 overflow-hidden rounded-full blur-3xl"
      >
        <Image src={heroGlowA} alt="" fill className="object-cover" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ y: [0, 24, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 overflow-hidden rounded-full blur-3xl"
      >
        <Image src={heroGlowB} alt="" fill className="object-cover" />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          <h1 className="text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl">
            Future-Ready with RISE with{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">
              SAP
            </span>
          </h1>

          <div className="flex flex-col gap-4">
            <p className="text-2xl font-light text-black">
              Why Rise With <span className="text-cyan-600">SAP</span>
            </p>
            <h2 className="text-xl font-medium text-black sm:text-2xl">
              Transform Your Business with Confidence
            </h2>
            <p className="text-base leading-relaxed text-black/80 sm:text-lg">
              RISE with SAP helps organizations accelerate digital transformation by combining
              cloud ERP, business process optimization, and continuous innovation into a single
              solution. It enables businesses to simplify operations, improve agility, and adapt
              quickly to changing market demands while reducing IT complexity.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-fit">
            <CustomButton
              text="Book a Demo"
              iconColor="text-black"
              iconBgColor="bg-white group-hover:bg-gray-100"
              buttonBgColor="bg-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              textColor="text-white"
              onClick={() => setShowCalendly(true)}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-sky-950/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-cyan-600/20"
        >
          <Image
            src={heroMain}
            alt="RISE with SAP"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

          <motion.button
            type="button"
            aria-label="Play overview video"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowVideo(true)}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-sky-950 shadow-lg sm:h-20 sm:w-20"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
            <Play className="relative ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
          </motion.button>

          <div className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col gap-1 p-6 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xl font-medium tracking-wide text-white sm:text-2xl">
              RISE WITH SAP
            </span>
            <span className="text-sm text-white/75 sm:text-base">
              Driving business transformation together
            </span>
          </div>
        </motion.div>
      </div>

      <CommonVideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={RISE_VIDEO_URL}
      />
      <CalendlyModal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "#0061af",
          textColor: "#2E3033",
        }}
      />
    </section>
  );
};

export default RiseHero;
