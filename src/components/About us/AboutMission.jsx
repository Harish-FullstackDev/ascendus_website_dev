"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { missionVisionItems } from "@/components/Constants/About/aboutData";

const AboutMission = () => {
  const [activeItem, setActiveItem] = useState("vision");

  return (
    <section className="w-full">
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-[700px] mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-black">Mission and Vision</h2>
          <p className="mt-3 text-sm sm:text-base text-[#6c6c6c] leading-relaxed">
            We are passionate about empowering individuals and businesses to take control of
            their finances and achieve their financial goals.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08),_transparent_70%)] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-4">
          {missionVisionItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveItem(item.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex flex-col justify-between gap-24 h-[320px] p-6 border transition-colors duration-500 cursor-pointer ${
                  isActive
                    ? "bg-black border-black"
                    : "border-white/30 bg-transparent hover:border-white/60"
                }`}
              >
                <h3 className={`text-xl font-medium ${isActive ? "text-white" : "text-white/70"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isActive ? "text-white/90" : "text-white/50"}`}>
                  {item.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
