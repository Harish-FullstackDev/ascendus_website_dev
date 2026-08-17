"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import heroBg from "@/assets/WhoWeAre/new/About_Us.jpg";

export default function WhoWeAreHero() {
    return (
        <section
            className="relative w-full h-[340px] sm:h-screen bg-cover bg-center bg-fixed overflow-hidden"
            style={{ backgroundImage: `url(${heroBg.src})` }}
        >
            <div className="absolute inset-0 " />

            <Navbar />


        </section>
    );
}
