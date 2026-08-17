"use client";
import React from "react";
import { motion } from "framer-motion";

const SubServiceInsights = ({ insights = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white text-slate-800 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-500 text-sm">✦</span>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                Trending Content
              </p>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              Related Insights
            </h3>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group border border-slate-200/80 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Banner */}
              {item.image && (
                <div className="aspect-[21/9] w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Content Panel */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                    {item.type}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceInsights;
