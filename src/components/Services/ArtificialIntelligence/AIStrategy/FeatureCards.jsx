"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import {
  IconOperations,
  IconBusiness,
  IconCustomer,
  IconWorkforce,
  IconAcceleration,
  IconGrowth,
} from "./Icons";

import ImgOperations from "@/assets/Service/Artificial Intelligence/AI Strategy/feature-intelligent-operations.png";
import ImgBusiness from "@/assets/Service/Artificial Intelligence/AI Strategy/feature-business-decisions.png";
import ImgCustomer from "@/assets/Service/Artificial Intelligence/AI Strategy/feature-customer-experiences.png";
import ImgWorkforce from "@/assets/Service/Artificial Intelligence/AI Strategy/feature-workforce-productivity.png";
import ImgAcceleration from "@/assets/Service/Artificial Intelligence/AI Strategy/feature-innovation-acceleration.png";
import ImgGrowth from "@/assets/Service/Artificial Intelligence/AI Strategy/feature-sustainable-growth.png";

const cards = [
  {
    title: "Intelligent Operations",
    description:
      "Reduce manual work and improve operational efficiency through intelligent automation and AI-powered workflows.",
    img: ImgOperations,
    Icon: IconOperations,
  },
  {
    title: "Better Business Decisions",
    description:
      "Turn enterprise data into actionable insights that support faster, more informed decision-making.",
    img: ImgBusiness,
    Icon: IconBusiness,
  },
  {
    title: "Personalized Customer Experiences",
    description:
      "Deliver tailored interactions that strengthen customer relationships and improve engagement.",
    img: ImgCustomer,
    Icon: IconCustomer,
  },
  {
    title: "Workforce Productivity",
    description:
      "Empower employees with AI-powered tools that simplify everyday tasks and improve collaboration.",
    img: ImgWorkforce,
    Icon: IconWorkforce,
  },
  {
    title: "Innovation Acceleration",
    description:
      "Identify new opportunities, develop smarter products, and accelerate digital transformation initiatives.",
    img: ImgAcceleration,
    Icon: IconAcceleration,
  },
  {
    title: "Sustainable Growth",
    description: "Create scalable AI capabilities that continue delivering value as your business evolves.",
    img: ImgGrowth,
    Icon: IconGrowth,
  },
];

function FeatureCard({ title, description, img, Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-[4px_4px_28px_rgba(0,0,0,0.18)] flex flex-col bg-white hover:bg-[rgba(0,97,175,0.61)] transition-colors duration-300"
    >
      <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10">
        <ArrowRight className="w-4 h-4 text-[#0061AF] group-hover:text-[#2E3033] -rotate-45 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col gap-5 flex-1">
        <h3 className="text-xl font-semibold text-black pr-12">{title}</h3>
        <p className="text-[15px] leading-relaxed text-[#515151] group-hover:text-black transition-colors duration-300">
          {description}
        </p>

        <div className="relative mt-auto rounded-xl overflow-hidden h-44 shrink-0">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute left-3 bottom-3 w-10 h-10 rounded-full bg-[#0061af] flex items-center justify-center shadow-inner">
            <div className="w-5 h-5">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const FeatureCards = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <FeatureCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
