"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import officeImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/a668dd661d78ea8a3f426b2c59762caf6911b96f.jpg";
import researchBg from "@/assets/Service/Enterprise Transformation/Rise with SAP/1ec0a55d134775f5deb229fe01e562ab4e8bd401.png";
import researchOverlay from "@/assets/Service/Enterprise Transformation/Rise with SAP/71bfa3487b1f0ce902ebcf68da38f02e4c64d529.jpg";
import eventBg from "@/assets/Service/Enterprise Transformation/Rise with SAP/7c060ccc0b2c620d001c20df5ade6fbda20390aa.jpg";
import eventOverlay from "@/assets/Service/Enterprise Transformation/Rise with SAP/6ed673b8e2dac70308addd7fa945f7428c2b665e.jpg";

const CARDS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    image: officeImage,
    variant: "image",

    content: [
      "Modern ERP transformation requires more than simply moving systems to the cloud. Organizations must redesign business processes, improve data quality, and enable intelligent automation.",
      "RISE with SAP provides a framework for cloud ERP modernization while Ascendus helps align implementation with measurable business outcomes.",
    ],

    highlights: [
      "Business process modernization",
      "Cloud ERP migration strategy",
      "Continuous innovation roadmap",
    ],
  },

  {
    eyebrow: "Research Report",
    title: "Building a Business Case for RISE with SAP",
    bg: researchBg,
    variant: "layered",
    content: [
      "Successful ERP transformations begin with a clear business case. Organizations must align technology investments with operational improvements and measurable ROI.",
      "Ascendus helps businesses prioritize initiatives that reduce complexity while accelerating innovation.",
    ],

    highlights: [
      "ROI assessment",
      "Transformation roadmap",
      "Cloud readiness evaluation",
    ],
  },

  {
    eyebrow: "Event",
    title: "Preparing Your Organization for SAP Transformation",
    bg: eventBg,
    variant: "layered",
    content: [
      "Technology alone doesn't guarantee transformation success. Organizational readiness, governance, and user adoption are equally important.",
      "This session explores practical strategies for preparing teams and business processes before implementation begins.",
    ],

    highlights: [
      "Change management",
      "Governance framework",
      "User adoption strategy",
    ],
  },
];

const RiseInsights = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            RISE with SAP Transformation Insights
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[20px] bg-black shadow-[5px_5px_11.6px_0px_rgba(217,217,217,0.18)] transition-shadow duration-300 hover:shadow-2xl"
            >
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              {card.bg && (
                <Image
                  src={card.bg}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              {card.overlay && (
                <Image src={card.overlay} alt="" fill className="object-cover mix-blend-overlay" />
              )}
              <div
                className={`absolute inset-0 ${card.variant === "layered"
                  ? "bg-gradient-to-b from-black/0 via-black/10 to-black"
                  : "bg-gradient-to-t from-black/85 via-black/20 to-black/10"
                  }`}
              />

              <div onClick={() => setSelectedCard(card)} className="relative z-10 flex h-full flex-col justify-end p-6">
                <span className="text-base font-normal text-white/80">
                  {card.eyebrow}
                </span>

                <h3 className="mt-2 text-xl font-medium leading-snug text-white sm:text-2xl">
                  {card.title}
                </h3>

                {card.description && (
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
                    {card.description}
                  </p>
                )}

                <button
                  onClick={() => setSelectedCard(card)}
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:text-cyan-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ scale: 0.92, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl"
            >
              {/* Hero Image */}
              <div className="relative h-72">
                <Image
                  src={selectedCard.image || selectedCard.bg}
                  alt={selectedCard.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition"
                >
                  <X className="w-5 h-5 mx-auto" />
                </button>

                <div className="absolute bottom-8 left-8">
                  <span className="text-sm uppercase tracking-widest text-cyan-300">
                    {selectedCard.eyebrow}
                  </span>

                  <h2 className="mt-2 text-3xl font-bold text-white">
                    {selectedCard.title}
                  </h2>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                {selectedCard.content?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-600 leading-relaxed mb-5"
                  >
                    {paragraph}
                  </p>
                ))}

                {selectedCard.highlights && (
                  <>
                    <h4 className="font-semibold text-slate-900 mb-4">
                      Key Takeaways
                    </h4>

                    <ul className="space-y-3">
                      {selectedCard.highlights.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RiseInsights;
