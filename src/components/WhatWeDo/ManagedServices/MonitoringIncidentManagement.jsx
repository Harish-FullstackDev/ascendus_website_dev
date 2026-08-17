"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import monitoringPhoto from "@/assets/WhatWeDo/Managed Services/Section7_Image.svg";

export default function MonitoringIncidentManagement() {
    return (
        <section className="relative w-full h-[420px] sm:h-[480px] overflow-hidden">
            {/* Fixed Background */}
            <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${monitoringPhoto.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 h-full flex flex-col justify-center gap-4 sm:gap-6 px-6 sm:px-[50px] max-w-[640px]"
            >
                <h2 className="font-heading text-white text-2xl sm:text-[32px] font-medium">Monitoring &amp; Incident Management</h2>
                <p className="text-white text-lg sm:text-2xl font-light">Proactive Monitoring. Rapid Response.</p>
                <p className="text-white text-base sm:text-2xl font-normal leading-snug">
                    Continuously monitor enterprise systems to identify issues early, minimize disruptions, and ensure
                    business continuity through proactive incident management.
                </p>
            </motion.div>
        </section>
    );
}
