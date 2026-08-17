"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import peopleIcon from "@/assets/Service/Enterprise Transformation/Grow with SAP/12ffb9a4391681c98c1e08c913f0c868967f3226.png";

const SERVICES = [
  "User onboarding",
  "Role-based training",
  "Process workshops",
  "Change management",
  "Go-live support",
  "Post-implementation guidance",
];

const AdoptionAcceleration = () => {
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
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            Adoption Acceleration Services
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Successful ERP implementation depends on user adoption. Ascendus helps your teams embrace
            change through structured enablement programs that improve user confidence and
            maximize business value.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative h-48 w-48 flex-shrink-0 sm:h-64 sm:w-64"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image src={peopleIcon} alt="Adoption Acceleration" fill className="object-contain" />
            </motion.div>
          </motion.div>

          <div className="flex w-full max-w-md flex-col gap-6">
            <h3 className="text-2xl font-medium text-black sm:text-3xl">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 text-lg text-neutral-600 sm:text-xl"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cyan-600" strokeWidth={2} />
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionAcceleration;
