"use client";
import React from "react";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CustomButton from "@/components/Cards/Button";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

const BusinessContinuityBanner = ({
  title = "Designed Around Business Continuity",
  description = "A successful conversion is one your business hardly notices. We carefully plan every stage of the project to reduce downtime, maintain operational stability, and ensure your teams can continue working with confidence throughout the transformation.",
}) => {
  const router = useRouter();
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-sky-950 py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl font-medium text-white">{title}</h2>
            <p className="mt-3 text-base text-white/70 sm:text-lg">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <CustomButton
              text="Book a Demo"
              iconColor="text-white"
              iconBgColor="bg-cyan-600 group-hover:bg-cyan-700"
              buttonBgColor="bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              textColor="text-black"
              onClick={() => setShowCalendly(true)}
            />
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

export default BusinessContinuityBanner;
