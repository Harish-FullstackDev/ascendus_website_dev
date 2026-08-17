"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
// import heroBg from "@/assets/WhoWeAre/WhoWeAre_Hero_Bg.jpg";
import heroBg from "@/assets/About-Us.jpg";

export default function WhoWeAreHero() {
    return (
        <section
            className="relative w-full h-[340px] sm:h-screen bg-cover bg-center bg-fixed overflow-hidden"
            style={{ backgroundImage: `url(${heroBg.src})` }}
        >
            <div className="absolute inset-0 " />

            <Navbar />

            <div className="absolute inset-x-0 bottom-0 md:bottom-65 z-10 px-6 sm:px-10 md:ml-7 lg:px-[165px] pb-10 sm:pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-white/70 text-base sm:text-2xl">About us</p>

                    <div className="h-px w-32 bg-white/30 my-4" />

                    <h1 className="text-white text-3xl sm:text-5xl font-medium max-w-4xl">
                        Opportunities don&apos;t happen, you create them.
                    </h1>

                    <p className="text-white/70 mt-3 text-sm sm:text-lg">
                        We are always interested in receiving and reviewing resumes
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
