"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import articleImage from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/36f80cc5c996ed165a2cc96ab98804f606158c93.png";

const ARTICLES = [
  {
    title: "Rethinking ERP for a Digital-First World",
    desc: "Discover how modern ERP platforms are helping enterprises become more agile, connected, and data-driven.",
  },
  {
    title: "AI and Automation: The Next Competitive Advantage",
    desc: "Learn how intelligent technologies are transforming operations and creating new opportunities for growth.",
  },
  {
    title: "Why Legacy Infrastructure Is Holding You Back",
    desc: "Understand the hidden costs of aging systems and how modernization unlocks new performance.",
  },
  {
    title: "Building a Cloud-Ready Security Posture",
    desc: "A practical look at the controls enterprises need before and after infrastructure modernization.",
  },
];

const PAGE_SIZE = 2;
const PAGE_COUNT = Math.ceil(ARTICLES.length / PAGE_SIZE);

const ArticleCard = ({ article, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ y: -4 }}
    className="group bg-black rounded-[20px] overflow-hidden flex flex-col sm:flex-row items-center shadow-md transition-shadow duration-300 hover:shadow-xl"
  >
    <div className="relative w-full sm:w-[220px] lg:w-[301px] h-[160px] sm:h-[200px] lg:h-[250px] shrink-0 overflow-hidden">
      <Image
        src={articleImage}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-5 sm:p-6 flex flex-col gap-2">
      <p className="font-medium text-white text-[15px] sm:text-[18px] lg:text-[20px]">{article.title}</p>
      <p className="font-light text-white/80 text-[13px] sm:text-[15px] lg:text-[16px]">{article.desc}</p>
    </div>
  </motion.div>
);

const CommonChallenges = () => {
  const [page, setPage] = useState(0);

  const goTo = (dir) => setPage((prev) => (prev + dir + PAGE_COUNT) % PAGE_COUNT);
  const visible = ARTICLES.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-semibold text-[24px] sm:text-[30px] lg:text-[36px] text-black mb-3">
            Common Challenges We Solve
          </h2>
          <p className="font-light text-[#515151] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[600px] mx-auto">
            Evaluate your current environment, identify modernization opportunities, and create a
            roadmap
          </p>
        </motion.div>
        <div>
          <p className="text-black text-[20px] sm:text-[26px] lg:text-[32px] text-center mb-6">
            Article for you
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row gap-5 lg:gap-8"
            >
              {visible.map((a, i) => (
                <ArticleCard key={a.title} article={a} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-end gap-4 mt-6">
            <button
              onClick={() => goTo(-1)}
              aria-label="Previous articles"
              className="bg-[#484848] text-white rounded-[8px] w-8 h-8 flex items-center justify-center rotate-180 transition-transform duration-300 hover:scale-110 hover:bg-[#0061af]"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="font-light text-black text-[18px]">
              {page + 1}/{PAGE_COUNT}
            </span>
            <button
              onClick={() => goTo(1)}
              aria-label="Next articles"
              className="bg-[#484848] text-white rounded-[8px] w-8 h-8 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-[#0061af]"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonChallenges;
