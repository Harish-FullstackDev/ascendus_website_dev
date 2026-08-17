"use client";

import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/Brand/Ascendus_Logo_Flat_WHT.svg";
import logo2 from "../../assets/Brand/Ascendus_Logo_Primary.svg";
import logo3 from "../../assets/Brand/Ascendus_Icon_Primary.png";
import logo4 from "../../assets/Brand/Ascendus_Wordmark_OnDark.svg";
import logo5 from "../../assets/Brand/Ascendus_Wordmark_OnLight.svg";
import { validRoutes } from "../Constants/Routes/routes";
import LanguageSelector from "../languageselector/Language_selector.jsx";
import ContactUsButton from "../Contactusbutton/contact_us_button";
import BookAcallButton from "../BookAcallButton/BookAcall_button";
import CalendlyModal from "../CommonComponents/CommonCalendy";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const lightThemeRoutes = ["/privacyPolicy", "/ssterrors", "/termsOfService"];

  const navLinkClass = `
                          relative py-2 px-3
                          transition-colors duration-300
                          text-[clamp(0.9rem,1vw,1rem)]
 
                          after:absolute
                          after:left-0
                          after:-bottom-1
                          after:h-[2px]
                          after:w-full
                          after:bg-[#0061af]
                          after:scale-x-0
                          after:origin-left
                          after:transition-transform
                          after:duration-300
                          after:content-['']
 
                          hover:after:scale-x-100
                          hover:text-[#0061af]
                        `;

  const isLight = lightThemeRoutes.includes(pathname) || !validRoutes.includes(pathname);
  const isNavbarLight = isLight || isScrolled;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Always show navbar near the top of the page (within 10px)
      if (currentScrollY <= 10) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Check threshold (at least 10px scroll difference) to prevent jitter
      const scrollDifference = currentScrollY - lastScrollY;
      if (Math.abs(scrollDifference) < 10) {
        return;
      }

      if (scrollDifference > 0) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };


  const servicesMenu = {
    capabilities: [
      { name: "Enterprise Transformation", href: "/services/enterpriseTransformation" },
      { name: "Artificial Intelligence", href: "/whatWeDo/artificial-intelligence" },
      { name: "Cloud & Infrastructure", href: "/whatWeDo/cloud-infrastructure" },
      { name: "Data & Intelligence", href: "/whatWeDo/data-intelligence" },
      { name: "Digital Engineering", href: "/whatWeDo/digital-engineering" },
      { name: "Customer Experience", href: "/whatWeDo/customer-experience" },

      { name: "Experience Design", href: "/whatWeDo/experience-design" },
      { name: "Intelligent Automation", href: "/whatWeDo/intelligent-automation" },
      { name: "Cybersecurity & Digital Trust", href: "/whatWeDo/cybersecurity-digital-trust" },
      { name: "Managed Services", href: "/whatWeDo/managed-services" },
      { name: "Business Advisory", href: "/whatWeDo/business-advisory" },
      { name: "Innovation & Emerging Technologies", href: "/whatWeDo/innovation-emerging-technologies" },
    ],

    industries: [
      { name: "Manufacturing", href: "/services" },
      { name: "Construction & EPC", href: "/services" },
      { name: "Oil & Gas", href: "/services" },
      { name: "Retail", href: "/services" },
      { name: "Healthcare", href: "/services" },
      { name: "Logistics", href: "/services" },

      { name: "Government", href: "/services" },
      { name: "Utilities", href: "/services" },
      { name: "Financial Services", href: "/services" },
      { name: "Real Estate", href: "/services" },
    ],
  };

  const capabilityColumns = [
    servicesMenu.capabilities.slice(0, 6),
    servicesMenu.capabilities.slice(6),
  ];

  const industryColumns = [
    servicesMenu.industries.slice(0, 6),
    servicesMenu.industries.slice(6),
  ];

  return (
    <>
      <nav
        className={`w-full z-50 fixed top-0 left-0 transition-transform duration-300 ease-in-out ${visible || isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-full mx-auto">
          <div className="hidden lg:flex">
            <div
              className="
                relative
                lg:h-[60px]
                w-full
                flex items-center
                justify-between
                px-4 py-1.5
              "
            >
              {/* Sibling background layer to avoid nested backdrop-filter bug */}
              <div
                className={`
                  absolute inset-0 -z-10
                  backdrop-blur-md
                  transition-all duration-500 ease-in-out
                  ${isNavbarLight
                    ? "bg-white/80 border-b border-gray-200/20 shadow-md"
                    : "bg-white/10 border-b border-white/10"
                  }
                `}
              />
              {/* Left Logo Area with Ascendus and SAP logos */}
              <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-10">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="group flex items-center overflow-hidden"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <Image
                      src={logo3}
                      alt="Ascendus Icon"
                      width={48}
                      height={48}
                      className="w-10.5 h-10.5 transition-all duration-300 ease-out"
                    />
                  </div>

                  {/* Company Name Reveal */}
                  <div
                    className="
                    w-0
                    opacity-0
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-[200px]
                    group-hover:opacity-100
                  "
                  >
                    <Image
                      src={isNavbarLight ? logo5 : logo4}
                      alt="Support Studio Technologies"
                      width={230}
                      height={40}
                      className="block w-[210px] h-10 max-w-none object-contain"
                    />
                  </div>
                </Link>

                {/* Subtle vertical separator line */}
                <div
                  className={`h-8 w-[1px] ${isNavbarLight ? "bg-gray-400/40" : "bg-white/20"
                    }`}
                />

                {/* SAP Partner Logo */}
                <Link href="/" className="flex items-center flex-shrink-0">
                  <Image
                    src="/sap-logo-svg.svg"
                    alt="SAP Partner Logo"
                    className="h-8.5 w-auto object-contain"
                    width={140}
                    height={40}
                  />
                </Link>
              </div>

              {/* Center Menu (Absolutely Centered) */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex items-center gap-3">
                  <Link
                    href="/"
                    className={`${navLinkClass} ${pathname === "/"
                      ? "text-[#0061af] after:w-full"
                      : isNavbarLight
                        ? "text-black"
                        : "text-white"
                      }`}
                  >
                    Home
                  </Link>

                  <li className="relative group">
                    <button
                      type="button"
                      className={`${navLinkClass} flex items-center gap-1 ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      What we do

                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className="
                        invisible opacity-0 translate-y-3
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300
                        absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50
                      "
                    >
                      {/* <div
                        className={`absolute top-[18px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t transition-colors duration-500 ${isNavbarLight
                          ? "bg-white/80 border-gray-200/30"
                          : "bg-neutral-900/85 border-white/10"
                          }`}
                      /> */}

                      <div
                        // className={`rounded-3xl shadow-2xl min-w-[1150px] p-8 border transition-colors duration-500 backdrop-blur-md ${isNavbarLight
                        //   ? "bg-white/80 border-gray-200/30 text-gray-800"
                        //   : "bg-neutral-900/80 border-white/20 text-white"
                        //   }`}
                        className={`rounded-3xl shadow-2xl min-w-[990px] p-8 pl-20 border transition-colors duration-500 backdrop-blur-md ${isNavbarLight
                          ? "bg-white/80 border-gray-200/30 text-gray-800"
                          : "bg-neutral-900/80 border-white/20 text-white"
                          }`}
                      >
                        {/* <div className="grid grid-cols-4 gap-10"> */}
                        <div className="grid grid-cols-2 gap-10">

                          {/* Capability Column 1 */}
                          <div>
                            <h3
                              className={`text-sm font-semibold uppercase tracking-wider mb-5 ${isNavbarLight ? "text-black" : "text-white"
                                }`}
                            >
                              Capabilities
                            </h3>

                            <ul className="space-y-2">
                              {capabilityColumns[0].map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className={`block px-2 py-1 rounded-md text-sm transition ${isNavbarLight
                                      ? "hover:bg-gray-100 text-gray-700"
                                      : "hover:bg-white/10 text-white/80"
                                      }`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Capability Column 2 */}
                          <div className="pt-9">
                            <ul className="space-y-2">
                              {capabilityColumns[1].map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className={`block px-2 py-1 rounded-md text-sm transition ${isNavbarLight
                                      ? "hover:bg-gray-100 text-gray-700"
                                      : "hover:bg-white/10 text-white/80"
                                      }`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Industry Column 1 */}
                          {/* <div>
                            <h3
                              className={`text-sm font-semibold uppercase tracking-wider mb-5 ${isNavbarLight ? "text-black" : "text-white"
                                }`}
                            >
                              Industries
                            </h3>

                            <ul className="space-y-2">
                              {industryColumns[0].map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className={`block px-2 py-1 rounded-md text-sm transition ${isNavbarLight
                                      ? "hover:bg-gray-100 text-gray-700"
                                      : "hover:bg-white/10 text-white/80"
                                      }`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div> */}

                          {/* Industry Column 2 */}
                          {/* <div className="pt-9">
                            <ul className="space-y-2">
                              {industryColumns[1].map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className={`block px-2 py-1 rounded-md text-sm transition ${isNavbarLight
                                      ? "hover:bg-gray-100 text-gray-700"
                                      : "hover:bg-white/10 text-white/80"
                                      }`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div> */}

                        </div>
                      </div>
                    </div>
                  </li>


                  <li>
                    <Link
                      href="/who-we-are"
                      className={`${navLinkClass} ${pathname === "/who-we-are"
                        ? "text-[#0061af] after:w-full"
                        : isNavbarLight
                          ? "text-black"
                          : "text-white"
                        }`}
                    >
                      Who we are
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact-us"
                      className={`${navLinkClass} ${pathname === "/contact-us"
                        ? "text-[#0061af] after:w-full"
                        : isNavbarLight
                          ? "text-black"
                          : "text-white"
                        }`}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className={`${navLinkClass} ${pathname === "/careers"
                        ? "text-[#0061af] after:w-full"
                        : isNavbarLight
                          ? "text-black"
                          : "text-white"
                        }`}
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Right Side Placeholder to balance the centered layout */}
              {/* Right Side */}
              <div className="hidden lg:flex items-center gap-3">
                <LanguageSelector isNavbarLight={isNavbarLight} />
                {/* <ContactUsButton /> */}
                <BookAcallButton
                  isNavbarLight={isNavbarLight}
                  setShowCalendly={setShowCalendly} />
              </div>
            </div>
          </div>

          {/* Improved Mobile Layout Header */}
          <div className={`flex justify-between items-center lg:hidden w-full px-6 py-2.5 md:px-8 md:py-5 border-b shadow-md transition-all duration-500 ease-in-out backdrop-blur-md ${isNavbarLight
            ? "bg-white/80 border-gray-200/20 text-black shadow-md"
            : "bg-neutral-900/90 border-neutral-800/30 text-white"
            }`}>
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <Image
                src={isNavbarLight ? logo2 : logo}
                alt="Ascendus Logo"
                className="h-8 sm:h-10 w-auto"
                width={160}
                height={40}
              />
            </Link>

            {/* Mobile menu toggle button */}
            <button
              className={`lg:hidden transition-colors duration-300 flex items-center justify-center p-1.5 rounded-lg ${isNavbarLight
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-neutral-800"
                }`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <IoMdMenu className="text-3xl sm:text-4xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 lg:hidden transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } bg-white z-[60] flex flex-col`}
      >
        <div className="flex justify-between items-center p-5">
          {/* Logo inside mobile menu */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src={logo2}
              alt="Ascendus Logo"
              className="h-8 sm:h-10 w-auto"
              width={160}
              height={40}
            />
          </Link>
          {/* Right side controls (Language Selector and Close Menu button) */}
          <div className="flex items-center gap-3">
            <LanguageSelector isNavbarLight={true} />
            {/* Close button */}
            <button onClick={closeMenu} aria-label="Close menu" className="flex items-center justify-center">
              <IoMdClose className="text-3xl sm:text-4xl text-black" />
            </button>
          </div>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-y-auto px-5 py-8">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${pathname === "/"
                  ? "text-[#0061af] bg-gray-100"
                  : "text-gray-800 hover:text-[#0061af]"
                  }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <div
                className={`w-full flex items-center justify-between rounded-lg ${pathname.startsWith("/services") ? "bg-gray-100" : ""
                  }`}
              >
                <div
                  className={`flex-1 py-3 px-4 text-2xl sm:text-3xl font-medium rounded-lg ${pathname.startsWith("/services")
                    ? "text-[#0061af]"
                    : "text-gray-800"
                    }`}
                >
                  What we do
                </div>

                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="py-3 px-4 text-gray-800 hover:text-[#0061af] transition-colors duration-300 flex items-center justify-center"
                  aria-label="Toggle Services dropdown"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-[3000px] mt-2" : "max-h-0"
                  }`}
              >

                <div className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden">

                  {/* Header */}
                  {/* <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Explore Services
                    </p>
                  </div> */}

                  {/* Capabilities */}
                  <div>

                    <button
                      onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                      className="w-full flex items-center justify-between px-4 py-4 hover:bg-white transition"
                    >
                      <span className="font-medium text-gray-800">
                        Capabilities
                      </span>

                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${isCapabilitiesOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${isCapabilitiesOpen ? "max-h-[800px]" : "max-h-0"
                        }`}
                    >
                      <div className="mx-4 border-t border-gray-200" />
                      <ul className="pb-3">
                        {servicesMenu.capabilities.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="block pl-8 pr-4 py-2 text-gray-600 hover:text-[#0061af]"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="border-t border-gray-200" />

                  {/* Industries */}
                  <div>

                    <button
                      onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                      className="w-full flex items-center justify-between px-4 py-4 hover:bg-white transition"
                    >
                      <span className="font-medium text-gray-800">
                        Industries
                      </span>

                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${isIndustriesOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${isIndustriesOpen ? "max-h-[800px]" : "max-h-0"
                        }`}
                    >
                      <div className="mx-4 border-t border-gray-200" />
                      <ul className="pb-3">
                        {servicesMenu.industries.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="block pl-8 pr-4 py-2 text-gray-600 hover:text-[#0061af]"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            </li>

            <li>
              <Link
                href="/who-we-are"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${pathname === "/who-we-are"
                  ? "text-[#0061af] bg-gray-100"
                  : "text-gray-800 hover:text-[#0061af]"
                  }`}
                onClick={closeMenu}
              >
                Who we are
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${pathname === "/contact-us"
                  ? "text-[#0061af] bg-gray-100"
                  : "text-gray-800 hover:text-[#0061af]"
                  }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${pathname === "/career"
                  ? "text-[#0061af] bg-gray-100"
                  : "text-gray-800 hover:text-[#0061af]"
                  }`}
                onClick={closeMenu}
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden fixed bottom-6 right-6 z-[70]">
            {/* <ContactUsButton /> */}
            <BookAcallButton setShowCalendly={setShowCalendly} />
          </div>
        )}
      </div>
      {/* Spacer to prevent content overlap */}
      <div className="h-[64px] lg:h-[68px] w-full" />

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "#0061af",
          textColor: "#0061af",
        }}
      />
    </>
  );
};

export default Navbar;

