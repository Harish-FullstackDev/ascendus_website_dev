"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomButton from "@/components/Cards/Button";

const ServiceCTA = ({
  id = "contact",
  title = "Ready to Transform Your Business?",
  description = "Let's discuss how Ascendus can help accelerate your digital transformation.",
  buttonText = "Talk to an Expert",
  onButtonClick,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleCtaClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      // Default action: scroll to a specific booking calendar / form if any, or open contact
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback or generic redirection/modal
        console.log("CTA Button Clicked");
      }
    }
  };

  return (
    <section id={id} className="py-24 bg-white text-slate-800 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-10 sm:p-16 rounded-3xl shadow-2xl flex flex-col items-center space-y-8 text-white"
        >
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="pt-2">
            <CustomButton
              text={buttonText}
              onClick={handleCtaClick}
              iconColor="text-white"
              iconBgColor="bg-blue-600 group-hover:bg-blue-700"
              buttonBgColor="bg-white"
              textColor="text-slate-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
