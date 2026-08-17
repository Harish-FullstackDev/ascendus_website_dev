"use client";

import { motion } from "framer-motion";
import { strengthStats } from "@/components/Constants/About/aboutData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const OurStrength = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-[700px] mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-black">Our Strength</h2>
          <p className="mt-3 text-sm sm:text-base text-[#6c6c6c] leading-relaxed">
            We are passionate about empowering individuals and businesses to take control of
            their finances and achieve their financial goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200"
        >
          {strengthStats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col gap-3 px-6 py-4 sm:py-0">
              <p className="text-3xl sm:text-4xl font-normal text-black">{stat.value}</p>
              <p className="text-base font-medium text-black">{stat.title}</p>
              <p className="text-xs text-[#6c6c6c] leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurStrength;
