"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

const CXWhySST = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      {/* Supporting Global Compliance */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Supporting Global Compliance
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Every country has unique electronic invoicing regulations. Ascendus helps organizations navigate
            changing compliance requirements through scalable SAP solutions that support multiple
            jurisdictions and evolving legal mandates.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Our approach enables businesses to maintain consistency across global operations while
            adapting to local regulatory requirements.
          </p>
        </motion.div>
      </section>

      {/* Why Ascendus split row */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why Ascendus for Customer Experience?
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-widest">
              GROW with SAP combines intelligent technologies and business best practices within a single cloud ERP environment.
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              At Ascendus, we believe exceptional customer experiences are built through the right combination of strategy, technology, and data.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We help organizations understand individual customer needs, optimize every interaction, and create connected experiences across the entire customer journey. By combining CRM, customer analytics, journey mapping and engagement tools, we enable businesses to build stronger relationships, improve customer satisfaction, and drive long-term business growth.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Our business-first approach ensures every customer experience initiative delivers measurable value while supporting continuous innovation and lasting customer loyalty.
            </p>

            <button
              onClick={() => setShowCalendly(true)}
              className="mt-8 inline-flex items-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-sky-800"
            >
              Schedule a demo
            </button>
          </motion.div>

          {/* Right – earth/space image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/ServicePage/software-delivery-team.jpg"
              alt="Earth from space representing global reach"
              width={600}
              height={480}
              className="h-full w-full rounded-2xl object-cover"
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

export default CXWhySST;
