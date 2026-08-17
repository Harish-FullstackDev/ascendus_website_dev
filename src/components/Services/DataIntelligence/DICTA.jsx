"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

const DICTA = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section
        id="cta-banner"
        className="relative overflow-hidden bg-slate-900 py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white"
      >
        {/* Fluid Mesh Radial/Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050b14] via-[#0b2545] to-[#0061af]/60 opacity-95" />

        <div className="absolute -top-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px] pointer-events-none" />

        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/25 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center z-10 flex flex-col items-center">

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.2] max-w-4xl text-white">
            Ready to Transform Your Business?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed">
            Let’s Build innovative solutions that drive growth and operational
            efficiency for your Business. Partner with our team of data
            scientists and engineers today.
          </p>


          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >

            {/* Calendly Button */}
            <motion.button
              onClick={() => setShowCalendly(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold bg-white text-[#0b2545] hover:bg-slate-100 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="h-4.5 w-4.5 text-[#0061af]" />
            </motion.button>


            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold bg-white/10 hover:bg-white/20 border border-white/10 shadow-lg transition-all duration-300"
            >
              <span>Explore All Services</span>
            </Link>

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

export default DICTA;