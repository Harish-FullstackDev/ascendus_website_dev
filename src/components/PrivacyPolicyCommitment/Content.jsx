import React, { useEffect, useRef, useState } from "react";
import { introduction, privacyPrinciples } from "./commitmentData";
import Footer from "../Footer/Footer";

const sections = [introduction, privacyPrinciples];

function Paragraph({ item }) {
  if (typeof item === "string") {
    return <p className="text-black font-light leading-[19px] mb-4">{item}</p>;
  }

  if (item.parts) {
    return (
      <p className="text-black font-light leading-[19px] mb-4">
        {item.parts.map((part, index) =>
          typeof part === "string" ? (
            <React.Fragment key={index}>{part}</React.Fragment>
          ) : (
            <a
              key={index}
              href={part.href}
              target={part.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="underline decoration-from-font"
            >
              {part.text}
            </a>
          )
        )}
      </p>
    );
  }

  if (item.medium) {
    return <p className="text-black font-semibold leading-[19px] mb-4">{item.text}</p>;
  }

  return null;
}

export default function PrivacyPolicyCommitment() {
  const [activeSection, setActiveSection] = useState(sections[0].title);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let current = sections[0].title;

      for (const section of sections) {
        const el = sectionRefs.current[section.title];
        if (el && el.offsetTop <= scrollPosition) {
          current = section.title;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (title) => {
    const el = sectionRefs.current[title];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-white">
      <div className="md:ml-7 flex flex-col md:flex-row">
        {/* Sidebar Navigation - in-content quick nav, stretches full column height */}
        <div className="hidden md:block w-[269px] shrink-0 border-r border-[#b3b3b3]">
          <nav className="sticky top-20 py-10 px-6 space-y-1">
            {sections.map((section) => (
              <button
                key={section.title}
                onClick={() => scrollToSection(section.title)}
                className={`w-full cursor-pointer text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${activeSection === section.title
                  ? "bg-[#0061AF] text-white"
                  : "text-black hover:bg-gray-100"
                  }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Right column: Introduction banner + Privacy Principles */}
        <div className="flex-1 min-w-0">
          {/* Introduction Banner */}
          <div
            ref={(el) => (sectionRefs.current[introduction.title] = el)}
            className="bg-[#eaeaea] px-[66px] py-[62px]"
          >
            <div className="flex flex-col gap-[42px] ">
              <h1 className="text-2xl font-semibold text-black">
                {introduction.title}
              </h1>
              <div>
                {introduction.paragraphs.map((item, index) => (
                  <Paragraph key={index} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Privacy Principles */}
          <div
            ref={(el) => (sectionRefs.current[privacyPrinciples.title] = el)}
            className="px-[66px] py-[60px] "
          >
            <h2 className="text-2xl font-semibold text-black mb-[42px]">
              {privacyPrinciples.title}
            </h2>
            {privacyPrinciples.paragraphs.map((item, index) => (
              <Paragraph key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Version / Last Updated Bar */}
      <div className="bg-[#dadada] px-[59px] py-[38px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[7px] text-black">
          <p className="font-medium">Label Version: 2.0</p>
          <p className="font-normal">Last updated on: 20th July 2026</p>
        </div>
      </div>
    </div>
  );
}
