"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CalendlyModal from "@/components/CommonComponents/CommonCalendy";
import CtaBg from "@/assets/Service/Data&Intelligence/Data Engineering/Footer container.jpg";

const CTABanner = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden rounded-tl-[60px] rounded-tr-[60px] sm:rounded-tl-[120px] sm:rounded-tr-[120px] mx-3 sm:mx-6 lg:mx-10 mt-6">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={CtaBg} alt="" fill className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
        <div className="absolute inset-0 bg-[rgba(46,48,51,0.73)]" />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[#0061af]/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-8 sm:gap-10 py-16 sm:py-24 px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-medium text-white text-[24px] sm:text-[30px] lg:text-[36px] max-w-[560px] mx-auto mb-4 sm:mb-6">
              Ready to Build Custom Backend Gateways?
            </h2>
            <p className="font-light text-white text-[15px] sm:text-[18px] lg:text-[22px] max-w-[560px] mx-auto">
              Let&apos;s build an API-first layer that secures your endpoints and accelerates data transit.
            </p>
          </motion.div>

          {/* Calendly Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowCalendly(true)}
            className="mt-2 flex items-center gap-3 rounded-[10px] bg-white px-8 py-4 text-lg font-medium text-sky-950 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Book a Demo
            <svg
              className="w-6 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </div>
      </section>
      {/* Calendly Modal */}
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

export default CTABanner;
