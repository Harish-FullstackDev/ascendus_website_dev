"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import sapLogo from "@/assets/HomePage/OurProudPartners/sap.png";
import salesforceLogo from "@/assets/HomePage/OurProudPartners/salesforce.png";
import awsLogo from "@/assets/HomePage/OurProudPartners/aws.png";
import odooLogo from "@/assets/HomePage/OurProudPartners/odoo.png";
import uipathLogo from "@/assets/HomePage/OurProudPartners/uipath.png";
import sophosLogo from "@/assets/HomePage/OurProudPartners/sophos.png";
import googleCloudLogo from "@/assets/HomePage/OurProudPartners/google-cloud.png";
import databricksLogo from "@/assets/HomePage/OurProudPartners/databricks.png";

const PARTNERS = [
    { name: "SAP", logo: sapLogo, width: 48, height: 24 },
    { name: "Salesforce", logo: salesforceLogo, width: 34, height: 24 },
    { name: "AWS", logo: awsLogo, width: 37, height: 24 },
    { name: "Odoo", logo: odooLogo, width: 58, height: 18 },
    { name: "UiPath", logo: uipathLogo, width: 56, height: 18 },
    { name: "Sophos", logo: sophosLogo, width: 92, height: 16 },
    { name: "Google Cloud", logo: googleCloudLogo, width: 30, height: 24 },
    { name: "Databricks", logo: databricksLogo, width: 123, height: 20 },
];

export default function OurProudPartners() {
    return (
        <section className="w-full bg-white pt-10 pb-12 sm:pt-16 sm:pb-16 px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-8 w-full"
            >
                <p className="text-[#4a5568] text-lg font-light text-center max-w-[818px]">Our Proud Partners</p>

                <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-6 w-full max-w-[1152px]">
                    {PARTNERS.map((partner) => (
                        <Image
                            key={partner.name}
                            src={partner.logo}
                            alt={partner.name}
                            width={partner.width}
                            height={partner.height}
                            className="w-auto h-4 sm:h-6 object-contain"
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
