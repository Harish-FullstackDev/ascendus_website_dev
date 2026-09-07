"use client";

import React, { useEffect, useRef, useState } from "react";
import { sections, sectionContent } from "./cookieData";

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
              target="_blank"
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

  return null;
}

function SectionBody({ data }) {
  return (
    <>
      {data.paragraphs?.map((item, index) => (
        <Paragraph key={index} item={item} />
      ))}

      {data.table && (
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-[#b3b3b3] text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-[#b3b3b3] px-3 py-2 text-left font-semibold text-black">
                  Cookie
                </th>
                <th className="border border-[#b3b3b3] px-3 py-2 text-left font-semibold text-black">
                  Provider
                </th>
                <th className="border border-[#b3b3b3] px-3 py-2 text-left font-semibold text-black">
                  Purpose
                </th>
                <th className="border border-[#b3b3b3] px-3 py-2 text-left font-semibold text-black">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {data.table.map((row) => (
                <tr key={row.name}>
                  <td className="border border-[#b3b3b3] px-3 py-2 align-top font-medium text-black">
                    {row.name}
                  </td>
                  <td className="border border-[#b3b3b3] px-3 py-2 align-top text-black font-light">
                    {row.provider}
                  </td>
                  <td className="border border-[#b3b3b3] px-3 py-2 align-top text-black font-light">
                    {row.purpose}
                  </td>
                  <td className="border border-[#b3b3b3] px-3 py-2 align-top text-black font-light">
                    {row.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.contacts && (
        <ul className="space-y-3 mb-4">
          {data.contacts.map((contact) => (
            <li key={contact.label} className="text-black font-light leading-[19px]">
              <span className="font-semibold">{contact.label}: </span>
              <a
                href={contact.href}
                target={contact.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="underline decoration-from-font"
              >
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function CookiePolicy() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let current = sections[0];

      for (const section of sections) {
        const el = sectionRefs.current[section];
        if (el && el.offsetTop <= scrollPosition) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const el = sectionRefs.current[section];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const intro = sectionContent.Introduction;
  const bodySections = sections.filter((section) => section !== "Introduction");

  return (
    <div className="relative w-full bg-white">
      <div className="flex flex-col md:ml-7 md:flex-row">
        {/* Sidebar Navigation - in-content quick nav, stretches full column height */}
        <div className="hidden md:block w-[269px] shrink-0 border-r border-[#b3b3b3]">
          <nav className="sticky top-20 py-10 px-6 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`w-full cursor-pointer text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${activeSection === section
                  ? "bg-[#0061AF] text-white"
                  : "text-black hover:bg-gray-100"
                  }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>

        {/* Right column: banner + main content */}
        <div className="flex-1 min-w-0">
          {/* Title Banner */}
          <div
            ref={(el) => (sectionRefs.current["Introduction"] = el)}
            className="bg-[#eaeaea] px-[66px] py-[62px]"
          >
            <div className="flex flex-col gap-[42px] max-w-[848px]">
              <h1 className="text-2xl font-semibold text-black">{intro.title}</h1>
              <div>
                {intro.paragraphs.map((item, index) => (
                  <Paragraph key={index} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-[66px] py-[60px] space-y-[60px]">
            {bodySections.map((section) => (
              <section
                key={section}
                ref={(el) => (sectionRefs.current[section] = el)}
              >
                <h2 className="text-2xl font-semibold text-black mb-[42px]">
                  {sectionContent[section].title}
                </h2>
                <SectionBody data={sectionContent[section]} />
              </section>
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
