"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import insightPhoto from "@/assets/Service/Enterprise Transformation/Card 1 (insihjts ).jpg";
import { insightsArticles } from "@/components/Constants/About/aboutData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FutureFocusedInsights = () => {
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
          <h2 className="text-2xl sm:text-3xl font-medium text-black">Future Focused Insights</h2>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {insightsArticles.map((article, index) => (
            <motion.article key={index} variants={itemVariants} className="flex flex-col gap-4">
              <div className="relative w-full h-[160px] overflow-hidden">
                <Image src={insightPhoto} alt="Insight article" fill className="object-cover" />
              </div>
              <p className="text-sm font-medium text-black">{article.date}</p>
              <p className="text-sm text-[#6c6c6c] leading-relaxed">{article.text}</p>
              <button className="group inline-flex items-center gap-2 text-sm text-[#0061af] w-fit">
                Read More
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#0061af] transition-transform duration-300 group-hover:translate-x-1">
                  <HiOutlineArrowRight className="w-3 h-3" />
                </span>
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FutureFocusedInsights;
