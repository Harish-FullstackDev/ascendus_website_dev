"use client";

import { motion } from "framer-motion";

const EnterpriseCard = () => {
  return (
    <section className="relative z-10 -mt-16 sm:-mt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto bg-white rounded-2xl shadow-xl px-6 sm:px-10 py-8 sm:py-10"
      >
        <h2 className="text-2xl sm:text-3xl font-medium text-black">About Us</h2>
        <p className="mt-4 max-w-4xl text-sm sm:text-base text-[#6c6c6c] leading-relaxed">
          We are passionate about empowering individuals and businesses to take control of their
          finances and achieve their financial goals. At TCS, we believe that the future of
          technology is shaped by people. As we move towards becoming the world&apos;s largest
          AI-led technology services, we foster a culture built on long-term trust, collective
          growth, and purposeful innovation—where individuals are empowered to learn continuously,
          collaborate globally, and create meaningful impact with integrity.
        </p>
        <div className="mt-6 border-t border-gray-200 max-w-md" />
      </motion.div>
    </section>
  );
};

export default EnterpriseCard;
