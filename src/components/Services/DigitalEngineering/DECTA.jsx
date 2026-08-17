"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import CalendlyModal from "@/components/CommonComponents/CommonCalendy";
import footerBg from "@/assets/Service/Enterprise Transformation/Footer container.jpg";

const DECTA = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section
        id="cta-banner"
        className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 text-white"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={footerBg}
            alt="Consultation background"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest bg-white/10 uppercase mb-4 border border-white/20">
              Partner With Us
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight text-white mb-6">
              Ready to Transform Your Business?
            </h2>

            <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed mb-10">
              Connect with Ascendus developers today to schedule a detailed design
              review. We will map operational bottlenecks, model microservice
              structures, and create a high-fidelity digital engineering plan
              tailored for your system scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

              {/* Calendly Button */}
              <motion.button
                onClick={() => setShowCalendly(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold tracking-wide bg-white text-[#0061af] hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>


              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold tracking-wide border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </Link>

            </div>
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

export default DECTA;