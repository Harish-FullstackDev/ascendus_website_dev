"use client";

import { motion } from "framer-motion";
import { cleanPrinciples } from "@/components/Constants/About/aboutData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutValues = () => {
  return (
    <>
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-[700px] mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-medium text-black">Our Clean Principles</h2>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {cleanPrinciples.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-[#16171a] shadow-[0px_2px_8px_rgba(0,0,0,0.19)] flex flex-col justify-end gap-3 p-6 h-[200px] sm:h-[220px]"
              >
                <p className="text-lg font-medium text-white">{item.title}</p>
                <p className="text-xs text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-[#F4F4F9] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <p className="max-w-[800px] mx-auto text-center text-xl sm:text-2xl font-normal text-black">
          Trusted by <span className="text-[#0061af] font-medium">300 +</span> Company for their
          sustainable growth partner
        </p>
      </motion.section>
    </>
  );
};

export default AboutValues;
