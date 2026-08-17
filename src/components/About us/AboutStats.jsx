"use client";

import { motion } from "framer-motion";
import { statCards } from "@/components/Constants/About/aboutData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutStats = () => {
  return (
    <section className="w-full pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {statCards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative flex flex-col justify-between gap-10 p-6 h-[280px] sm:h-[320px] overflow-hidden rounded-md ${card.className}`}
          >
            <p className="text-sm leading-relaxed max-w-[160px]">{card.text}</p>
            <p className="text-4xl sm:text-5xl">{card.percent}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutStats;
