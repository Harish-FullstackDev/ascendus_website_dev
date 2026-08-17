import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import RectangleHeader from "../../../public/blog/2807cc98147a21e2764581df7af98cfbb12fa24a.jpg";
import contact from "src/assets/contactus/Contact.jpg";


const ContactHeader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.6,
        delayChildren: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="text-gray-800 relative overflow-x-hidden overflow-hidden">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative h-[55vh] md:h-[75vh] w-full flex flex-col">
          {/* Background Image */}
          <Image
            src={contact}
            alt="Contact Background"
            fill
            priority
            className="object-cover z-0"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))`,
              backgroundBlendMode: "overlay",
            }}
          />

          {/* Navbar */}
          <Navbar />

          {/* Content - Left Aligned */}
          <div className="flex-1 flex items-start justify-center px-4 sm:px-8 lg:px-16 relative z-20 pt-8 md:pt-16">
            <div className="w-full max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[1057px]"
              >
                <p className="text-white/90 text-sm sm:text-lg lg:text-xl uppercase tracking-wide font-light">
                  Contact Us
                </p>
                <div className="mt-3 sm:mt-4 h-px w-full bg-white/40" />
                <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium capitalize mt-6 sm:mt-8 leading-tight">
                  Get in touch with us. We're <br />
                  here to assist you.
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
