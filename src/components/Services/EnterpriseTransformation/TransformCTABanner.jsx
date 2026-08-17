"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "@/components/Cards/Button";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

const TransformCTABanner = ({
  title = "Transform Today. Lead Tomorrow.",
  description = "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
}) => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-zinc-100 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl font-medium text-black">{title}</h2>
            <p className="mt-3 text-lg text-neutral-600">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
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

export default TransformCTABanner;