"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const DEFAULT_OVERLAY = "bg-gradient-to-t from-black/80 via-black/20 to-black/5";

// Tuned to settle noticeably faster than the backdrop's fade so the
// blurred backdrop never disappears mid-shrink (the source of the old jank).
const CLOSE_LAYOUT_TRANSITION = { type: "spring", stiffness: 300, damping: 34, mass: 0.9 };

const InsightCard = ({ card, index, gridId, onOpen, revealOnHover, isActive, cardHeightClass }) => {
  const [hovered, setHovered] = useState(false);
  const isHoverActive = revealOnHover && hovered;

  return (
    <motion.button
      layoutId={`insight-card-${gridId}-${index}`}
      onClick={() => onOpen(index)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative ${cardHeightClass} overflow-hidden rounded-[20px] text-left shadow-[5px_5px_11.6px_0px_rgba(217,217,217,0.18)] transition-shadow duration-500 ${
        isActive ? "z-30" : "z-0"
      } ${isHoverActive ? "shadow-[0_25px_60px_-20px_rgba(8,145,178,0.55)]" : ""}`}
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-cover transition-transform duration-700 ease-out ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${card.overlay || DEFAULT_OVERLAY} ${
          revealOnHover ? (hovered ? "opacity-100" : "opacity-60") : "opacity-100"
        }`}
      />

      {revealOnHover && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{
              background: hovered
                ? "linear-gradient(135deg, rgba(8,145,178,0.35), rgba(8,47,73,0.65))"
                : "linear-gradient(135deg, rgba(8,145,178,0), rgba(8,47,73,0))",
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent"
            animate={
              hovered
                ? { left: ["-60%", "130%"] }
                : { left: "-60%" }
            }
            transition={
              hovered
                ? { duration: 1.2, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }
                : { duration: 0 }
            }
          />
        </>
      )}

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <span className="text-sm font-normal text-white/80 sm:text-base">{card.eyebrow}</span>

        <div className="flex flex-col gap-2">
          <motion.h3
            animate={{ y: isHoverActive ? -4 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl font-medium leading-snug text-white sm:text-2xl"
          >
            {card.title}
          </motion.h3>

          {revealOnHover ? (
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="line-clamp-2 pt-1 text-sm leading-relaxed text-neutral-200 sm:text-base">
                    {card.description}
                  </p>
                  <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <>
              <p className="line-clamp-2 text-sm leading-relaxed text-neutral-200 sm:text-base">
                {card.description}
              </p>
              <span className="mt-1 w-fit text-sm font-medium text-white underline underline-offset-4 transition-opacity duration-300 group-hover:opacity-70">
                Learn More
              </span>
            </>
          )}
        </div>
      </div>
    </motion.button>
  );
};

const TransformationInsightsGrid = ({
  gridId,
  heading,
  description,
  cards,
  columns = 2,
  revealOnHover = false,
  cardHeightClass = "h-64 sm:h-72",
}) => {
  const [selected, setSelected] = useState(null);
  // Kept alive through the whole close animation (see closeModal) so the
  // grid card being returned to stays visually on top of its neighbors
  // instead of momentarily painting underneath them while it shrinks back.
  const [closingIndex, setClosingIndex] = useState(null);

  const closeModal = () => {
    setClosingIndex(selected);
    setSelected(null);
  };

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const active = selected !== null ? cards[selected] : null;
  const elevatedIndex = selected !== null ? selected : closingIndex;
  const gridColsClass = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">{heading}</h2>
          {description && (
            <p className="mt-4 text-lg text-neutral-600 sm:text-xl">{description}</p>
          )}
        </motion.div>

        <div className={`grid grid-cols-1 gap-6 ${gridColsClass} lg:gap-10`}>
          {cards.map((card, index) => (
            <InsightCard
              key={card.title}
              card={card}
              index={index}
              gridId={gridId}
              onOpen={setSelected}
              revealOnHover={revealOnHover}
              isActive={elevatedIndex === index}
              cardHeightClass={cardHeightClass}
            />
          ))}
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence onExitComplete={() => setClosingIndex(null)}>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                transition={{ duration: 0.3 }}
                onClick={closeModal}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8"
              >
                <motion.div
                  layoutId={`insight-card-${gridId}-${selected}`}
                  onClick={(e) => e.stopPropagation()}
                  transition={{ layout: CLOSE_LAYOUT_TRANSITION }}
                  className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl"
                >
                  <div className="relative h-56 flex-shrink-0 sm:h-64">
                    <Image src={active.image} alt={active.title} fill className="object-cover" />
                    <div className={`absolute inset-0 ${active.overlay || DEFAULT_OVERLAY}`} />
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                      onClick={closeModal}
                      aria-label="Close"
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sky-950 shadow-lg transition-transform duration-300 hover:scale-110"
                    >
                      <X className="h-5 w-5" />
                    </motion.button>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                      <span className="text-sm font-normal text-white/80">{active.eyebrow}</span>
                      <h3 className="text-2xl font-medium text-white sm:text-3xl">{active.title}</h3>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 sm:p-8"
                  >
                    {active.content.map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                        {paragraph}
                      </p>
                    ))}

                    {active.highlights && (
                      <div className="mt-2 flex flex-col gap-3 rounded-2xl bg-neutral-50 p-5">
                        <span className="text-sm font-medium uppercase tracking-wide text-cyan-600">
                          Inside this piece
                        </span>
                        <ul className="flex flex-col gap-2">
                          {active.highlights.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-base text-neutral-700">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default TransformationInsightsGrid;
