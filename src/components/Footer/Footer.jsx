"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Brand/Ascendus_Logo_Secondary.png";
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import FBIcon from "../../assets/Footer/FacebookIcon.svg";
import InstagramIcon from "../../assets/Footer/Instagram_Icon.svg";
import LinkedinIcon from "../../assets/Footer/LinkedIn_Icon.svg";
import TwitterIcon from "../../assets/Footer/X_Icon.svg";
// import CalendlyIcon from "../../assets/Footer/CalendlyIcon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSendEmail = () => {
    if (email) {
      console.log("Sending email to:", email);
      setEmail("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendEmail();
    }
  };

  return (
    <>
      <footer className="bg-neutral-900 text-gray-400 p-8 md:p-16 ">
        <div className="relative h-8 w-auto aspect-[4/1] mb-6 md:hidden">
          <Image
            src={logo}
            alt="Ascendus Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "left",
            }}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:flex md:flex-wrap md:gap-16  pb-4 md:pb-12 mb-2">
          {/* Quick Link — nine links across two columns, 5 then 4. Both are
              real grid columns rather than a nested grid, so the gap between
              them is the same gap that separates every other footer column. */}
          <div className="md:shrink-0">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Quick Link</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/enterprise-transformation"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-white transition-colors duration-200"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Industries
                </span>
              </li>
              <li>
                <Link
                  href="/who-we-are"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:shrink-0">
            <h2 className="hidden md:block text-white text-base font-semibold md:mt-21.5 mb-4 invisible" aria-hidden="true">
              &nbsp;
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ascenduspartner"
                  className="hover:text-white transition-colors duration-200"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/book-a-consultation"
                  className="hover:text-white transition-colors duration-200"
                >
                  Book a call
                </Link>
              </li>
            </ul>
          </div>

          {/* Services — three top-level services. Business Transformation and
              Digital & Technology Transformation have no page yet, so they are
              plain labels, matching how Industries is handled above. */}
          <div className="md:shrink-0 md:max-w-[190px]">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/what-we-do/enterprise-transformation/sap-transformation"
                  className="hover:text-white transition-colors duration-200"
                >
                  SAP Transformation
                </Link>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Business Transformation
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Digital &amp; Technology Transformation
                </span>
              </li>
            </ul>
          </div>

          {/* Industries — same list as the navbar, 5 and 5 across two columns.
              None of these have a page yet, so they render as plain labels
              rather than links to nowhere. */}
          <div className="md:shrink-0">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Industries</h2>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-500 cursor-default">
                  Manufacturing
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Construction &amp; EPC
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Oil &amp; Gas
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Retail
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Healthcare
                </span>
              </li>
            </ul>
          </div>

          <div className="md:shrink-0">
            <h2 className="hidden md:block text-white text-base font-semibold md:mt-21.5 mb-4 invisible" aria-hidden="true">
              &nbsp;
            </h2>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-500 cursor-default">
                  Logistics
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Government
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Utilities
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Financial Services
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-default">
                  Real Estate
                </span>
              </li>
            </ul>
          </div>

          {/* Industries */}
          {/* <div className="md:col-span-1">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Industries</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/sapService/rise-with-sap"
                  className="hover:text-white transition-colors duration-200"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/enterpriseTransformation"
                  className="hover:text-white transition-colors duration-200"
                >
                  Construction & EPC
                </Link>
              </li>
              <li>
                <Link
                  href="#product"
                  className="hover:text-white transition-colors duration-200"
                >
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Government
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Utilities
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Financial Services
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Support */}
          <div className="md:shrink-0">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Insights</h2>
            <ul className="space-y-2">
              {/* <li>
                <Link
                  href="#compliance"
                  className="hover:text-white transition-colors duration-200"
                >
                  Compliance
                </Link>
              </li> */}
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition-colors duration-200"
                >
                  Case Studies
                </Link>
              </li>
              {/* SAP Insights has no page yet — plain non-interactive label
                  until that content exists, rather than a link to nowhere. */}
              <li>
                <span className="text-gray-500 cursor-default">
                  SAP Insights
                </span>
              </li>
              <li>
                <Link
                  href="/industry-reports"
                  className="hover:text-white transition-colors duration-200"
                >
                  Industry Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/whitepapers"
                  className="hover:text-white transition-colors duration-200"
                >
                  Whitepapers
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="md:flex-1 md:min-w-[260px]">
            <div className="hidden md:block relative h-8 sm:h-10 w-auto aspect-[4/1] mb-4 md:mb-[46px]">
              <Image
                src={logo}
                alt="Ascendus Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <h2 className="text-white text-base font-semibold mb-4">
              Get In Touch
            </h2>
            <ul className="space-y-2">
              <li>
                <p>
                  Headquarters
                </p>
              </li>
              <li>

                <a
                  href="https://maps.app.goo.gl/r13crYbGJBBuQiSE7"
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7731 King Saud Ibn Abdulaziz Saud, 2839 Al Murabba Dist., <br /> Riyadh 12624, KSA

                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ascendus.sa"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@ascendus.sa
                </a>
              </li>
            </ul>
            {/* <div className="w-full max-w-xs mt-24 space-y-3">
              <label className="text-white text-sm sm:text-base font-normal block text-start">
                News Letter
              </label>

              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email address"
                  className="w-full pr-10 px-3 sm:px-4 py-2 sm:py-3  border-b border-white/20 rounded-none text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
                <MdOutlineMailOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
              </div>
            </div> */}
            <div className="flex space-x-3 md:col-span-1 min-h-[50px] mb-2 mt-4">
              <a
                href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Image
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  className="w-10 h-10"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.instagram.com/ascendus.ksa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-10 h-10"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://x.com/ascendus_ksa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Image
                  src={TwitterIcon}
                  alt="Twitter"
                  className="w-10 h-10"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

        </div>

        {/* policy  */}
        <div className="grid grid-cols-1 md:grid-cols-6  md:gap-16  ">

          <div className="md:col-span-2 ">
            <div className="space-x-3 md:col-span-1">
              <p className="text-sm text-white mb-4 md:mb-0">
                <a
                  href="/legal/terms"
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms & Conditions
                </a>
                {" | "}
                <a
                  href="/legal/privacy"
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <br />
                <a
                  href="/legal/security"
                  className="hover:text-gray-300 transition-colors"
                >
                  Security Policy
                </a>
                {" | "}
                <a
                  href="/legal/cookies"
                  className="hover:text-gray-300 transition-colors"
                >
                  Cookie Policy
                </a>
                {" | "}
                <a
                  href="/legal/disclaimer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Disclaimer
                </a>
              </p>
            </div>
            <p className="text-sm text-white flex items-center min-h-[50px]">
              © 2026 Ascendus. All Rights Reserved.
            </p>
          </div>




          {/* <a
              href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/ascendus.ksa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a> */}
          {/* <a
              href="https://calendly.com/ascendus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Calendly"
            >
              <Image
                src={CalendlyIcon}
                alt="Calendly"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a> */}

          <div className="flex space-x-3 md:col-span-1">
            {/* <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Facebook"
            >
              <Image
                src={FBIcon}
                alt="Facebook"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a> */}

            {/* <a
              href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <Image
                src={TwitterIcon}
                alt="Twitter"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a> */}
          </div>

          <div className="md:col-span-1"></div>

          <div className="md:col-span-1"></div>
          {/* <div className="flex space-x-3 md:col-span-1 min-h-[50px] mb-2">
            <a
              href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/ascendus.ksa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a>
          </div> */}
          {/* <div className="md:col-span-2 ">
            <div className="space-x-3 md:col-span-1">
              <p className="text-sm text-white mb-4 md:mb-0">
                <a
                  href="/legal/terms"
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms & Conditions
                </a>
                {" | "}
                <a
                  href="/legal/privacy"
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <br />
                <a
                  href="/legal/security"
                  className="hover:text-gray-300 transition-colors"
                >
                  Security Policy
                </a>
                {" | "}
                <a
                  href="/legal/cookies"
                  className="hover:text-gray-300 transition-colors"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
            <p className="text-sm text-white flex items-center min-h-[50px]">
              © 2026 Ascendus. All Rights Reserved.
            </p>
          </div> */}
        </div>
      </footer >
    </>
  );
};

export default Footer;
