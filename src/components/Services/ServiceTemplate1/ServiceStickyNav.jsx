"use client";
import React, { useState, useEffect } from "react";

const ServiceStickyNav = ({ sections = [] }) => {
  const [activeSection, setActiveSection] = useState("");
  const [navPosition, setNavPosition] = useState("top-[60px]"); // Matches main navbar height
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction to adjust top position based on main navbar visibility
  useEffect(() => {
    const handleScrollPosition = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 60) {
        setNavPosition("top-[60px]");
        return;
      }

      // Check scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down -> main navbar is hidden, sticky nav goes to top-0
        setNavPosition("top-0");
      } else {
        // Scrolling up -> main navbar is visible, sticky nav goes to top-[60px]
        setNavPosition("top-[60px]");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScrollPosition, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, [lastScrollY]);

  // Scroll spy: check which section is in view
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 150; // offset for detection

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    // Initial check
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [sections]);

  // Smooth scroll offset click handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 130; // height of main navbar (60px) + sticky nav (50px) + safety margin
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  if (!sections || sections.length === 0) return null;

  return (
    <div
      className={`sticky ${navPosition} left-0 w-full z-40 bg-slate-900/40 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto no-scrollbar py-3 items-center">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={`flex-shrink-0 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-white hover:text-white hover:bg-white/10"
                  }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default ServiceStickyNav;
