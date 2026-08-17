"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const SubServiceEssentials = ({ essentials = [] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % essentials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + essentials.length) % essentials.length);
  };

  const dragEndHandler = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <section className="py-20 bg-[radial-gradient(circle_at_bottom_right,_rgba(102,205,243,0.15),_transparent_40%),linear-gradient(135deg,_#090d16_0%,_#2e3033_100%)] text-white overflow-hidden relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-400 text-sm">✦</span>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                Core Pillars
              </p>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-100">
              Strategic Essentials
            </h3>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/40 text-slate-350 transition-all duration-300 flex items-center justify-center focus:outline-none"
              aria-label="Previous slide"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              {String(currentIdx + 1).padStart(2, "0")} / {String(essentials.length).padStart(2, "0")}
            </span>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/40 text-slate-350 transition-all duration-300 flex items-center justify-center focus:outline-none"
              aria-label="Next slide"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Drag Panel */}
        <div className="relative cursor-grab active:cursor-grabbing" ref={containerRef}>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={dragEndHandler}
            animate={{ x: `-${currentIdx * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex w-full"
          >
            {essentials.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 px-2 sm:px-4"
                style={{ width: "100%" }}
              >
                <div className="bg-slate-900/60 border border-white/5 p-8 sm:p-12 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-8">
                      <span className="text-blue-300 font-bold text-lg">{idx + 1}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {essentials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIdx === idx ? "w-8 bg-blue-400" : "w-2 bg-slate-700 hover:bg-slate-650"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubServiceEssentials;
