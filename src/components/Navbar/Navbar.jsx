"use client";

import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/Brand/Ascendus_Logo_Secondary.png";
import logo2 from "../../assets/Brand/Ascendus_Logo_Primary.png";
import logo4 from "../../assets/Brand/Ascendus_Wordmark_OnDark.svg";
import logo5 from "../../assets/Brand/Ascendus_Wordmark_OnLight.svg";
import { isValidRoute } from "../Constants/Routes/routes";
// import LanguageSelector from "../languageselector/Language_selector.jsx";
import ContactUsButton from "../Contactusbutton/contact_us_button";
import BookAcallButton from "../BookAcallButton/BookAcall_button";
import CalendlyModal from "../CommonComponents/CommonCalendy";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const lightThemeRoutes = ["/legal/privacy/", "/ascenduserrors/", "/legal/terms/"];

  const navLinkClass = `
                          relative py-2 px-3
                          transition-colors duration-300
                          text-[clamp(0.9rem,1vw,1rem)]
 
                          after:absolute
                          after:left-0
                          after:-bottom-1
                          after:h-[2px]
                          after:w-full
                          after:scale-x-0
                          after:origin-left
                          after:transition-transform
                          after:duration-300
                          after:content-['']
 
                          hover:after:scale-x-100
                        `;

  // No blue anywhere, active or hover — the underline is always after:bg-current,
  // so it (and the text above it) just match whatever color the link already is
  // in each navbar state (white on the dark/top-of-page navbar, black on the
  // scrolled/bright navbar). Active links show that line permanently
  // (after:scale-x-100); inactive links reveal the same line on hover only
  // (via navLinkClass's hover:after:scale-x-100).
  const activeLinkClass = "after:scale-x-100 after:bg-current";
  const inactiveLinkClass = "after:bg-current";

  const isLight = lightThemeRoutes.includes(pathname) || !isValidRoute(pathname);
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
    setIsSolutionsOpen(false);
    setIsIndustriesOpen(false);
  };


  const servicesMenu = {
    // Only three top-level services now. Business Transformation and Digital &
    // Technology Transformation have no page yet, so they carry no href and
    // render as plain labels rather than links to nowhere.
    services: [
      { name: "SAP Transformation", href: "/what-we-do/enterprise-transformation/sap-transformation" },
      { name: "Business Transformation" },
      { name: "Digital & Technology Transformation" },
    ],

    // No per-industry pages exist yet — all point at the /industries overview
    // until each gets its own route.
    industries: [
      { name: "Manufacturing", href: "/industries" },
      { name: "Retail & Consumer", href: "/industries" },
      { name: "Government & Public Sector", href: "/industries" },
      { name: "Banking & Financial Services", href: "/industries" },
      { name: "Energy & Utilities", href: "/industries" },

      { name: "Engineering & Construction", href: "/industries" },
      { name: "Healthcare & Life Sciences", href: "/industries" },
      { name: "Technology, Media & Communications", href: "/industries" },
      { name: "Transportation & Logistics", href: "/industries" },
      { name: "Education & Research", href: "/industries" },
    ],
  };

  const solutionsMenu = [
    { name: "SAP S/4HANA", href: "/solutions" },
    { name: "SAP Ariba", href: "/solutions" },
    { name: "SAP SuccessFactors", href: "/solutions" },
    { name: "SAP BTP", href: "/solutions" },
    { name: "SAP Analytics", href: "/solutions" },
    { name: "SAP Integration", href: "/solutions" },
    { name: "SAP EHS", href: "/solutions" },
    { name: "SAP CX", href: "/solutions" },
    { name: "RISE with SAP", href: "/solutions" },
    { name: "GROW with SAP", href: "/solutions" },
  ];

  const industryColumns = [
    servicesMenu.industries.slice(0, 6),
    servicesMenu.industries.slice(6),
  ];

  const solutionsColumns = [
    solutionsMenu.slice(0, 5),
    solutionsMenu.slice(5),
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
                lg:h-[80px]
                w-full
                flex items-center
                justify-between
                py-[24px]
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
              {/* <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-10">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="group flex items-center overflow-hidden"
                > */}
              {/* Icon */}
              {/* <div className="relative z-10 flex-shrink-0">
                    <Image
                      src={logo3}
                      alt="Ascendus Icon"
                      width={124}
                      height={101}
                      className="h-8.5 w-auto object-contain transition-all duration-300 ease-out"
                    />
                  </div> */}

              {/* Company Name Reveal */}
              {/* <div
                    className="
                    w-0
                    ml-0
                    opacity-0
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-[140px]
                    group-hover:ml-2.5
                    group-hover:opacity-100
                  "
                  >
                    <Image
                      src={isNavbarLight ? logo5 : logo4}
                      alt="Ascendus"
                      width={344}
                      height={60}
                      className="block h-6 w-auto max-w-none object-contain"
                    />
                  </div>
                </Link> */}

              {/* Subtle vertical separator line */}
              {/* <div
                  className={`h-8 w-[1px] ${isNavbarLight ? "bg-gray-400/40" : "bg-white/20"
                    }`}
                /> */}

              {/* SAP Partner Logo */}
              {/* <Link href="/" className="flex items-center flex-shrink-0">
                  <Image
                    src="/sap-logo-svg.svg"
                    alt="SAP Partner Logo"
                    className="h-8.5 w-auto object-contain"
                    width={140}
                    height={40}
                  />
                </Link>
              </div> */}

              {/* Nav links start at the row's left edge, 64px in. */}
              <div className="absolute left-0 pl-[52px]">
                <ul className="flex items-center gap-3">
                  <Link
                    href="/"
                    className={`${navLinkClass} ${pathname === "/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                      }`}
                  >
                    Home
                  </Link>

                  <li className="relative group">
                    {/* The trigger is a link, not a button: Services now has an
                        overview page of its own, and the dropdown still opens on
                        hover over the same element. */}
                    <Link
                      href="/services"
                      className={`${navLinkClass} ${pathname === "/services/" ? activeLinkClass : inactiveLinkClass} flex items-center gap-1 ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Services

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
                    </Link>

                    {/* Dropdown — anchored to the trigger's left edge (not centered on
                        it) since the nav now starts near the viewport's left edge; a
                        centered 990px-wide panel would run off-screen to the left. */}
                    {/* The padding is the hover bridge between the trigger and the
                        panel, so the cursor can cross the gap without dropping the
                        group-hover. It is sized to land the panel flush against the
                        navbar's bottom edge rather than below it: this wrapper starts at
                        the trigger's bottom, and the trigger is centred in an 80px row,
                        leaving ~21px of slack beneath it. At 30px the panel cleared the
                        navbar by ~9px and a strip of the page showed through. */}
                    <div
                      className="
                        invisible opacity-0 translate-y-3
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300
                        absolute left-0 top-full pt-[24px] z-50
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
                        className={`shadow-2xl min-w-[320px] p-6 border transition-colors duration-500 backdrop-blur-xl ${isNavbarLight
                          ? "bg-white/80 border-gray-200/30 text-gray-800"
                          : "bg-white/10 border-white/20 text-white"
                          }`}
                      >
                        <ul className="space-y-2">
                          {servicesMenu.services.map((item) => (
                            <li key={item.name}>
                              {item.href ? (
                                <Link
                                  href={item.href}
                                  className={`block px-2 py-1 rounded-md text-sm transition ${isNavbarLight
                                    ? "hover:bg-gray-100 text-gray-700"
                                    : "hover:bg-white/10 text-white/80"
                                    }`}
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                <span
                                  className={`block px-2 py-1 text-sm cursor-default ${isNavbarLight ? "text-gray-400" : "text-white/40"
                                    }`}
                                >
                                  {item.name}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="relative group">
                    {/* The trigger is a link, not a button: Solutions now has an
                        overview page of its own, and the dropdown still opens on
                        hover over the same element. */}
                    <Link
                      href="/solutions"
                      className={`${navLinkClass} ${pathname === "/solutions/" ? activeLinkClass : inactiveLinkClass} flex items-center gap-1 ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Solutions

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
                    </Link>

                    {/* Same hover-bridge/dropdown mechanics as the Services menu above,
                        two columns since there are 10 solutions. */}
                    <div
                      className="
                        invisible opacity-0 translate-y-3
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300
                        absolute left-0 top-full pt-[24px] z-50
                      "
                    >
                      <div
                        className={`shadow-2xl min-w-[420px] p-6 border transition-colors duration-500 backdrop-blur-xl ${isNavbarLight
                          ? "bg-white/80 border-gray-200/30 text-gray-800"
                          : "bg-white/10 border-white/20 text-white"
                          }`}
                      >
                        <div className="grid grid-cols-2 gap-8">
                          {solutionsColumns.map((column, columnIndex) => (
                            <ul key={columnIndex} className="space-y-2">
                              {column.map((item) => (
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
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="relative group">
                    {/* The trigger is a link, not a button: Industries now has an
                        overview page of its own, and the dropdown still opens on
                        hover over the same element. */}
                    <Link
                      href="/industries"
                      className={`${navLinkClass} ${pathname === "/industries/" ? activeLinkClass : inactiveLinkClass} flex items-center gap-1 ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Industries

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
                    </Link>

                    {/* Same hover-bridge/dropdown mechanics as the Services menu above,
                        two columns since there are 10 industries. No per-industry pages
                        exist yet, so every item points at the /industries overview. */}
                    <div
                      className="
                        invisible opacity-0 translate-y-3
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300
                        absolute left-0 top-full pt-[24px] z-50
                      "
                    >
                      <div
                        className={`shadow-2xl min-w-[620px] p-6 border transition-colors duration-500 backdrop-blur-xl ${isNavbarLight
                          ? "bg-white/80 border-gray-200/30 text-gray-800"
                          : "bg-white/10 border-white/20 text-white"
                          }`}
                      >
                        <div className="grid grid-cols-2 gap-8">
                          {industryColumns.map((column, columnIndex) => (
                            <ul key={columnIndex} className="space-y-2">
                              {column.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className={`block px-2 py-1 rounded-md text-sm transition whitespace-nowrap ${isNavbarLight
                                      ? "hover:bg-gray-100 text-gray-700"
                                      : "hover:bg-white/10 text-white/80"
                                      }`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link
                      href="/who-we-are"
                      className={`${navLinkClass} ${pathname === "/who-we-are/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/partnership"
                      className={`${navLinkClass} ${pathname === "/partnership/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Partners
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/careers"
                      className={`${navLinkClass} ${pathname === "/careers/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact-us"
                      className={`${navLinkClass} ${pathname === "/contact-us/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Logo — pinned to the right edge; ml-auto keeps it there regardless of
                  the row's justify-between (the center menu is absolutely positioned,
                  so this is the only real flex child otherwise free to drift). */}
              <div className="hidden lg:flex items-center gap-3 ml-auto pr-[52px]">
                {/* <LanguageSelector isNavbarLight={isNavbarLight} /> */}
                {/* <ContactUsButton /> */}
                {/* <BookAcallButton
                  isNavbarLight={isNavbarLight}
                  setShowCalendly={setShowCalendly} /> */}
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="group flex items-center overflow-hidden"
                >
                  <div className="relative z-10 flex-shrink-0 px-[12px]">
                    <Image
                      src={isNavbarLight ? logo2 : logo}
                      alt="Ascendus Logo"
                      width={160}
                      height={40}
                      className="h-8 sm:h-10 w-auto object-contain transition-all duration-300 ease-out"
                    />
                  </div>
                </Link>

              </div>
            </div>
          </div>

          {/* Improved Mobile Layout Header */}
          <div className={`flex justify-between items-center lg:hidden w-full px-6 py-2.5 md:px-8 md:py-5 border-b shadow-md transition-all duration-500 ease-in-out backdrop-blur-md ${isNavbarLight
            ? "bg-white/80 border-gray-200/20 text-black shadow-md"
            : "bg-neutral-900/90 border-neutral-800/30 text-white"
            }`}>
            {/* Mobile menu toggle button */}
            <button
              className={`lg:hidden transition-colors duration-300 flex items-center justify-center p-2 ${isNavbarLight
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-neutral-800"
                }`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <IoMdMenu className="text-3xl sm:text-4xl" />
            </button>

            <Link href="/" onClick={closeMenu} className="flex items-center p-2">
              <Image
                src={isNavbarLight ? logo2 : logo}
                alt="Ascendus Logo"
                className="h-8 sm:h-10 w-auto"
                width={160}
                height={40}
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 lg:hidden transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
          {/* Right side controls (Close Menu button) */}
          <div className="flex items-center gap-3">
            {/* Language selector hidden for now (also disabled in desktop navbar) */}
            {/* <LanguageSelector isNavbarLight={true} /> */}
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
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <div
                className={`w-full flex items-center justify-between ${pathname.startsWith("/services") ? "bg-gray-100" : ""
                  }`}
              >
                {/* Tapping the label opens the overview page; the chevron beside
                    it still expands the per-service list. */}
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className={`flex-1 py-3 px-4 text-2xl sm:text-3xl font-medium rounded-lg transition-colors duration-300 ${pathname === "/services/"
                    ? "text-[#2d8ec5]"
                    : "text-gray-800 hover:text-[#2d8ec5]"
                    }`}
                >
                  Services
                </Link>

                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="py-3 px-4 text-gray-800 hover:text-[#2d8ec5] transition-colors duration-300 flex items-center justify-center"
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

                <div className="bg-gray-50 border border-gray-200 overflow-hidden">
                  <ul className="py-3">
                    {servicesMenu.services.map((item) => (
                      <li key={item.name}>
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="block pl-8 pr-4 py-2 text-gray-600 hover:text-[#2d8ec5]"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <span className="block pl-8 pr-4 py-2 text-gray-400 cursor-default">
                            {item.name}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div
                className={`w-full flex items-center justify-between ${pathname.startsWith("/solutions") ? "bg-gray-100" : ""
                  }`}
              >
                {/* Tapping the label opens the overview page; the chevron beside
                    it still expands the per-solution list. */}
                <Link
                  href="/solutions"
                  onClick={closeMenu}
                  className={`flex-1 py-3 px-4 text-2xl sm:text-3xl font-medium rounded-lg transition-colors duration-300 ${pathname === "/solutions/"
                    ? "text-[#2d8ec5]"
                    : "text-gray-800 hover:text-[#2d8ec5]"
                    }`}
                >
                  Solutions
                </Link>

                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="py-3 px-4 text-gray-800 hover:text-[#2d8ec5] transition-colors duration-300 flex items-center justify-center"
                  aria-label="Toggle Solutions dropdown"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""
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

              <div
                className={`overflow-hidden transition-all duration-300 ${isSolutionsOpen ? "max-h-[1000px] mt-2" : "max-h-0"
                  }`}
              >
                <div className="bg-gray-50 border border-gray-200 overflow-hidden">
                  <ul className="py-3">
                    {solutionsMenu.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block pl-8 pr-4 py-2 text-gray-600 hover:text-[#2d8ec5]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div
                className={`w-full flex items-center justify-between ${pathname.startsWith("/industries") ? "bg-gray-100" : ""
                  }`}
              >
                {/* Tapping the label opens the overview page; the chevron beside
                    it still expands the per-industry list. */}
                <Link
                  href="/industries"
                  onClick={closeMenu}
                  className={`flex-1 py-3 px-4 text-2xl sm:text-3xl font-medium rounded-lg transition-colors duration-300 ${pathname === "/industries/"
                    ? "text-[#2d8ec5]"
                    : "text-gray-800 hover:text-[#2d8ec5]"
                    }`}
                >
                  Industries
                </Link>

                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="py-3 px-4 text-gray-800 hover:text-[#2d8ec5] transition-colors duration-300 flex items-center justify-center"
                  aria-label="Toggle Industries dropdown"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${isIndustriesOpen ? "rotate-180" : ""
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

              {/* No per-industry pages exist yet, so every item points at the
                  /industries overview, same as the desktop dropdown. */}
              <div
                className={`overflow-hidden transition-all duration-300 ${isIndustriesOpen ? "max-h-[1000px] mt-2" : "max-h-0"
                  }`}
              >
                <div className="bg-gray-50 border border-gray-200 overflow-hidden">
                  <ul className="py-3">
                    {servicesMenu.industries.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block pl-8 pr-4 py-2 text-gray-600 hover:text-[#2d8ec5]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/who-we-are"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/who-we-are/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/partnership"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/partnership/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Partners
              </Link>
            </li>

            <li>
              <Link
                href="/careers"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/careers/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/contact-us/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Book a call — not wanted in the navbar for now. The desktop instance above
            was already commented out; this was the last live one (the floating button
            inside the open mobile menu). The import and the Calendly modal below are
            left in place so this is a one-line revert when it's wanted again. The
            ContactUsButton that sat alongside it here was already commented out before
            this, and is dropped from the block rather than nested inside the comment. */}
        {/* {isMenuOpen && (
          <div className="lg:hidden fixed bottom-6 right-6 z-[70]">
            <BookAcallButton setShowCalendly={setShowCalendly} />
          </div>
        )} */}
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
          primaryColor: "#2d8ec5",
          textColor: "#2d8ec5",
        }}
      />
    </>
  );
};

export default Navbar;