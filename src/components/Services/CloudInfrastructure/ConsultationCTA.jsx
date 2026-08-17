"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

// Import asset
import FooterCtaBg from "@/assets/Service/Cloud & Infrastructure/Footer container.jpg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

const ConsultationCTA = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="relative min-h-[400px] w-full flex items-center py-20 text-white overflow-hidden bg-[#16171a]">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src={FooterCtaBg}
            alt="Schedule a Consultation"
            fill
            className="object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-[#001724]/75 z-0" /> */}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 block">
              <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />
              Get in Touch
            </span>

            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Ready to Build Future-Proof Cloud Infrastructure?
            </h2>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Partner with Ascendus to design secure, cost-optimized, and highly
              resilient cloud architectures that scale with your enterprise
              goals.
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
              className="inline-flex items-center justify-center bg-white text-[#16171a] hover:bg-blue-500 hover:text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
            >
              <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
              Schedule a Consultation

              <svg
                className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
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
          textColor: "#0061af",
        }}
      />
    </>
  );
};

export default ConsultationCTA;