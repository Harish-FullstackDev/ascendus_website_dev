"use client";
import React from "react";
import { motion } from "framer-motion";

const CXIntelligentInvoice = () => {
  return (
    <section className="bg-slate-50 py-14 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Intelligent Invoice Processing from End to End
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Ascendus provides comprehensive SAP E-Invoicing services that cover every stage of the invoice lifecycle.
        </p>
      </motion.div>
    </section>
  );
};

export default CXIntelligentInvoice;
