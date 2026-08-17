"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import separatorLine from "@/assets/career/Separetor line.png";

export default function AboutUsPanel() {
    return (
        <div className="relative w-full bg-white px-6 sm:px-10 lg:px-[85px] py-10 sm:pt-16 sm:pb-5">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-xl sm:text-4xl font-medium text-black">About Us</h2>
                <p className="mt-3 text-sm sm:text-xl font-thin text-[#3d3d4e] leading-relaxed">
                    We are passionate about empowering individuals and businesses to take control of their finances
                    and achieve their financial goals.At Ascendus, we believe that the future of technology is shaped by
                    people. As we move towards becoming the world&apos;s largest AI‑led technology services, we
                    foster a culture built on long‑term trust, collective growth, and purposeful innovation—where
                    individuals are empowered to learn continuously, collaborate globally, and create meaningful
                    impact with integrity.
                </p>
                <div className="w-full h-px bg-[#c7cbcd] max-w-[1300px] mx-auto mt-16 sm:mb-10" />
            </motion.div>
        </div>
    );
}
