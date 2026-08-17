"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import officePhoto from "@/assets/career/card 1 image.jpg";
import { setsUsApartCards } from "@/components/Constants/About/aboutData";

const DiscoverWhatSetsUsApart = () => {
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
          <h2 className="text-2xl sm:text-3xl font-medium text-black">Discover What Set Us apart</h2>
          <p className="mt-3 text-sm sm:text-base text-[#6c6c6c] leading-relaxed">
            We are passionate about empowering individuals and businesses to take control of
            their finances and achieve their financial goals.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full sm:w-[52%] h-[280px] sm:h-[480px] grayscale"
          >
            <Image src={officePhoto} alt="Team at Ascendus" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-[26%] sm:right-0 mt-[-2rem] sm:mt-0 flex flex-col sm:flex-row gap-4 sm:gap-0"
          >
            {setsUsApartCards.map((card, index) => (
              <div key={index} className="flex-1 bg-[#F5F6F6] p-6 sm:p-8">
                <p className="text-sm text-[#6c6c6c]">{card.tag}</p>
                <h3 className="mt-3 text-xl font-medium text-black">{card.title}</h3>
                <ul className="mt-4 space-y-1">
                  {card.points.map((point, i) => (
                    <li key={i} className="text-sm text-[#6c6c6c] leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverWhatSetsUsApart;
