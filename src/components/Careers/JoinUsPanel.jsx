"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import separatorLine from "@/assets/career/Separetor line.png";

export default function JoinUsPanel() {
    return (
        <div className="relative w-full bg-white px-6 sm:px-10 lg:px-[85px] py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-xl sm:text-4xl font-medium text-black">Join us</h2>
                <p className="mt-3 text-sm sm:text-xl font-thin text-[#6c6c6c] leading-relaxed">
                    Work alongside specialists solving complex technology challenges across SAP, cloud, data,
                    cybersecurity and digital transformation, with the opportunity to see your work move from
                    strategy into production.
                </p>
                <div className="relative w-full max-w-3xl h-px mt-8 mx-auto opacity-30">
                    <Image
                        src={separatorLine}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
}
