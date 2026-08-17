"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BannerBg from "@/assets/Service/Artificial Intelligence/Image.jpg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

const CTABanner = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="relative min-h-[414px] w-full flex items-center py-20 text-white overflow-hidden bg-[#2E3033]">
        <div className="absolute inset-0 z-0">
          <Image
            src={BannerBg}
            alt="AI Business Transformation"
            fill
            className="object-cover object-center"
            priority={false}
          />
          <div className="absolute inset-0 bg-[#2E3033]/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 w-full text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
              Streamline your Business with Rise with{" "}
              <span className="text-sky-300">SAP</span> Today
            </h2>

            <p className="text-2xl md:text-3xl font-medium text-white">
              Ready to Transform Your Business?
            </p>

            <p className="text-zinc-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Let&apos;s Build innovative Solution that drive growth efficiency
              for your Business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => setShowCalendly(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-white text-[#2E3033] hover:bg-blue-50 font-medium text-2xl px-9 py-5 rounded-[10px] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
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
          </motion.div>
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
          textColor: "#2E3033",
        }}
      />
    </>
  );
};

export default CTABanner;