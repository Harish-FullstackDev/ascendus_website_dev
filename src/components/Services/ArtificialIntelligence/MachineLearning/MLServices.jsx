"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import PredictiveMaintenanceImg from "@/assets/Service/Artificial Intelligence/Machine Learning/service-predictive-maintenance.png";
import RecommendationSystemsImg from "@/assets/Service/Artificial Intelligence/Machine Learning/service-recommendation-systems.png";
import AnomalyDetectionImg from "@/assets/Service/Artificial Intelligence/Machine Learning/service-anomaly-detection.png";
import ModelDevelopmentImg from "@/assets/Service/Artificial Intelligence/Machine Learning/service-model-development.png";
import FraudRiskScoringImg from "@/assets/Service/Artificial Intelligence/Machine Learning/service-fraud-risk-scoring.png";
import DemandForecastingImg from "@/assets/Service/Artificial Intelligence/Machine Learning/service-demand-forecasting.png";

const SERVICE_CARDS = [
  {
    title: "Regional Bank – AML Compliance Overhaul",
    bg: "#87aaea",
    img: PredictiveMaintenanceImg,
    textColor: "text-black",
  },
  {
    title: "Predictive Analytics",
    bg: "#17275a",
    img: null,
    textColor: "text-white",
    desc: "Develop predictive models that support forecasting, planning, and business optimization.",
  },
  {
    title: "Intelligent Recommendation Systems",
    bg: "#ab797f",
    img: RecommendationSystemsImg,
    textColor: "text-black",
  },
  {
    title: "Anomaly Detection",
    bg: "#011826",
    img: AnomalyDetectionImg,
    textColor: "text-white",
  },
  {
    title: "Model Development & Deployment",
    bg: "#0b022d",
    img: ModelDevelopmentImg,
    textColor: "text-white",
  },
  {
    title: "Fraud & Risk Scoring",
    bg: "#00080b",
    img: FraudRiskScoringImg,
    textColor: "text-white",
  },
  {
    title: "Model Monitoring & Optimization",
    bg: "#470742",
    img: null,
    textColor: "text-white",
    desc: "Continuously evaluate model performance, retrain algorithms, and improve prediction accuracy.",
  },
  {
    title: "Demand Forecasting & Planning",
    bg: "#87aaea",
    img: DemandForecastingImg,
    textColor: "text-black",
  },
];

const MLServices = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
      <div className="max-w-[1157px] mx-auto flex flex-col gap-10 sm:gap-14">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-black"
          >
            Our Machine Learning Services
          </motion.h2>
          <p className="text-[#515151] text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
            Evaluate your current ERP landscape, identify transformation opportunities, and create
            a roadmap
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-xl overflow-hidden h-[220px] sm:h-[260px] lg:h-[387px] shadow-[4px_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-500 hover:shadow-[0_25px_50px_-15px_rgba(0,97,175,0.5)]"
              style={{ backgroundColor: card.bg }}
            >
              {card.img && (
                <div className="absolute bottom-0 left-0 w-full h-[45%] overflow-hidden rounded-b-xl">
                  <Image
                    src={card.img}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    aria-hidden
                  />
                </div>
              )}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-start">
                <p
                  className={`font-semibold text-sm sm:text-base lg:text-[20px] leading-[1.4] tracking-[0.1px] transition-transform duration-300 group-hover:-translate-y-0.5 ${card.textColor}`}
                >
                  {card.title}
                </p>
                {card.desc && (
                  <p className="mt-4 text-[#f5f5f5] text-xs sm:text-sm font-medium leading-[1.4]">
                    {card.desc}
                  </p>
                )}
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100 bg-gradient-to-t from-[#0061af]/25 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MLServices;
