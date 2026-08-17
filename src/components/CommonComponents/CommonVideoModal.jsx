"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  const videoId = match?.[1];
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
};

/**
 * Reusable video lightbox — embeds a YouTube video and autoplays it on open.
 *
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Callback function to close the modal
 * @param {string} videoUrl - Any standard YouTube URL (watch/embed/shorts/youtu.be)
 */
export default function CommonVideoModal({ isOpen, onClose, videoUrl }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      {isOpen && embedUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
            >
              ✕
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
              <iframe
                src={embedUrl}
                title="Video player"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
