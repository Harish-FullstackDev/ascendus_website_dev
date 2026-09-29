"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Figma (633:4996) uses the same team photograph as the Careers "Don't See a
// Matching Role?" section, so it is imported from there.
import teamPhoto from "@/assets/Careers/dont-see-a-matching-role.webp";
import iconS4hana from "@/assets/HomePage/icons/s4hana-implementation-24.svg";
import iconMigration from "@/assets/HomePage/icons/migration-conversion-32.svg";
import iconApplication from "@/assets/HomePage/icons/application-management-32.svg";
import iconRise from "@/assets/HomePage/icons/rise-with-sap-32.svg";
import iconBrim from "@/assets/HomePage/icons/brim-cx-32.svg";
import iconSecurity from "@/assets/HomePage/icons/sap-security-governance-32.svg";
import iconArrowLight from "@/assets/HomePage/icons/arrow-right-20-light.svg";
import iconArrowDark from "@/assets/HomePage/icons/arrow-right-20-dark.svg";
import iconBannerArrow from "@/assets/HomePage/icons/arrow-right-38.svg";

const SAP_SERVICES_HREF = "/what-we-do/enterprise-transformation/sap-transformation/";

// Figma draws the first tile in the dark, highlighted treatment and the rest
// light; its icon is the only one exported in white (and at 24px rather than
// 32px), so the highlight stays on that tile.
const SERVICES = [
    { label: ["S/4HANA", "Implementation"], icon: iconS4hana, iconSize: "size-6", featured: true },
    { label: ["Migration &", "Conversion"], icon: iconMigration, iconSize: "size-8" },
    { label: ["Application", "Management"], icon: iconApplication, iconSize: "size-8" },
    { label: ["RISE with SAP"], icon: iconRise, iconSize: "size-8" },
    { label: ["BRIM and CX"], icon: iconBrim, iconSize: "size-8" },
    { label: ["SAP Security &", "Governance"], icon: iconSecurity, iconSize: "size-8" },
];

function ServiceTile({ service }) {
    const featured = Boolean(service.featured);

    return (
        <Link
            href={SAP_SERVICES_HREF}
            className={`group flex h-[99px] items-center justify-between gap-3 rounded-[12px] border p-[17px] transition-colors duration-300 ${featured
                    ? "border-white bg-[#003056] text-[#f8f8f8] hover:bg-[#003d6b]"
                    : "border-[#c9d0d8] bg-white text-[#111827] hover:border-[#0061af]"
                }`}
        >
            <Image src={service.icon} alt="" className={`${service.iconSize} shrink-0`} />
            <span className="text-center text-[14px] leading-[1.4]">
                {service.label.map((line) => (
                    <span key={line} className="block">
                        {line}
                    </span>
                ))}
            </span>
            <Image
                src={featured ? iconArrowLight : iconArrowDark}
                alt=""
                className="h-4 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
        </Link>
    );
}

// Section 4 — white band between two dark bands, so it keeps the full 64 on
// both edges. Figma separates it from the band above with a 1px rule.
export default function ModernizeMigrateRunSmarter() {
    return (
        <section className="w-full border-t border-[#8695a7] bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-6"
            >
                <div className="flex w-full flex-col gap-4 lg:grid lg:grid-cols-[482px_minmax(0,1fr)] lg:items-end lg:gap-x-[42px]">
                    <div className="flex flex-col gap-3 lg:w-[497px]">
                        <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                            SAP Transformation
                        </p>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0f172a]">
                            Modernize. Migrate. Run Smarter.
                        </h2>
                    </div>

                    <p className="max-w-[677px] pt-[4.7px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                        Grow your SAP foundation with modern services to help you transition to S/4HANA, optimize
                        operations and maximize your SAP investment.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-10 lg:grid lg:grid-cols-[482px_minmax(0,1fr)] lg:items-end lg:gap-x-[42px]">
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:mb-[10.5px]">
                        {SERVICES.map((service) => (
                            <ServiceTile key={service.label.join(" ")} service={service} />
                        ))}
                    </div>

                    {/* The button overlaps the banner's top edge by 34px and sits
                        32px in from its right, as in Figma. */}
                    <div className="relative w-full pt-[38px]">
                        <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[12px] bg-[#091b34] p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] lg:h-[354px]">
                            <Image
                                src={teamPhoto}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 788px, 100vw"
                                className="object-cover"
                            />
                            <div
                                aria-hidden
                                className="absolute inset-0"
                                style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0) 100%)" }}
                            />
                            <p className="relative text-xl font-medium capitalize leading-[1.2] text-white/95 sm:text-2xl">
                                One platform.
                                <br /> Greater possibilities.
                            </p>
                        </div>

                        <Link
                            href={SAP_SERVICES_HREF}
                            className="group absolute right-4 top-0 inline-flex h-[60px] items-center gap-2 whitespace-nowrap rounded-[8px] border border-[#0061af] bg-[#0061af] px-5 text-base font-medium leading-[1.2] text-white transition-colors duration-300 hover:bg-[#005192] sm:right-8 sm:h-[72px] sm:min-w-[266px] sm:justify-center sm:px-[25px] sm:text-[18px]"
                        >
                            Explore SAP Services
                            <Image
                                src={iconBannerArrow}
                                alt=""
                                className="size-[38px] transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
