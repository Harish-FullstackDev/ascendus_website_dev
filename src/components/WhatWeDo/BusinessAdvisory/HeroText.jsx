"use client";

import { motion } from "framer-motion";

export default function HeroText() {
    return (
        <div className="absolute inset-x-0 top-[18%] sm:top-[23%] px-6 py-6 sm:py-0 sm:px-10 lg:px-[63px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[1057px]"
            >
                <p className="text-white/90 text-sm sm:text-lg lg:text-xl uppercase tracking-wide font-light">
                    Business Advisory
                </p>
                <div className="mt-3 sm:mt-4 h-px w-full bg-white/40" />
                <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium capitalize mt-6 sm:mt-8 leading-tight">
                    Strategy that survives contact with implementation                </h1>
            </motion.div>
        </div>
    );
}
