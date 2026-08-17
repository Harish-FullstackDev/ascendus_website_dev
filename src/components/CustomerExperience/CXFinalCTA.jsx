"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

const CXFinalCTA = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-800 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
        {/* Decorative blob */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-5 text-base text-white/80 sm:text-lg">
            Let&apos;s Build Innovative Solution that drive growth efficiency for your Business
          </p>

          <motion.button
            onClick={() => setShowCalendly(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-sky-800 shadow-lg transition-all duration-300 hover:bg-sky-50"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
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

export default CXFinalCTA;
