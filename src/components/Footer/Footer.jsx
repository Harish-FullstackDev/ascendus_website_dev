"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Brand/Ascendus_Logo_Secondary.png";
import wordmark from "../../assets/Footer/Ascendus_Outline_Wordmark.svg";
import InstagramIcon from "../../assets/Footer/Instagram_Icon.svg";
import LinkedinIcon from "../../assets/Footer/LinkedIn_Icon.svg";
import TwitterIcon from "../../assets/Footer/X_Icon.svg";

const linkClass = "hover:text-white transition-colors duration-200";
const labelClass = "text-gray-500 cursor-default";

// One entry per footer column. The link row is a 7-column grid so every column
// is the same width and the row can never wrap onto a second line; Industries
// and Solutions each take two of those columns, the second carrying no heading.
const columns = [
  {
    heading: "Industries",
    items: [
      { name: "Manufacturing" },
      { name: "Retail & Consumer" },
      { name: "Government & Public Sector" },
      { name: "Banking & Financial Services" },
      { name: "Energy & Utilities" },
    ],
  },
  {
    heading: null,
    items: [
      { name: "Engineering & Construction" },
      { name: "Healthcare & Life Sciences" },
      { name: "Technology, Media & Communications" },
      { name: "Transportation & Logistics" },
      { name: "Education & Research" },
    ],
  },
  {
    heading: "Solutions",
    items: [
      { name: "SAP S/4HANA", href: "/solutions" },
      { name: "SAP Ariba", href: "/solutions" },
      { name: "SAP SuccessFactors", href: "/solutions" },
      { name: "SAP BTP", href: "/solutions" },
      { name: "SAP Analytics", href: "/solutions" },
    ],
  },
  {
    heading: null,
    items: [
      { name: "SAP Integration", href: "/solutions" },
      { name: "SAP EHS", href: "/solutions" },
      { name: "SAP CX", href: "/solutions" },
      { name: "RISE with SAP", href: "/solutions" },
      { name: "GROW with SAP", href: "/solutions" },
    ],
  },
  {
    heading: "Services",
    items: [
      { name: "SAP Transformation", href: "/what-we-do/enterprise-transformation/sap-transformation" },
      { name: "Business Transformation" },
      { name: "Digital & Technology Transformation" },
    ],
  },
  {
    heading: "Insights",
    items: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "SAP Insights" },
      { name: "Industry Insights", href: "/industry-reports" },
      { name: "Blog", href: "/blog" },
      { name: "Whitepapers", href: "/whitepapers" },
    ],
  },
  {
    heading: "Quick Links",
    items: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/who-we-are" },
      { name: "Partners", href: "/partnership" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact-us" },
      { name: "Book a call", href: "/book-a-consultation" },
    ],
  },
];

const socials = [
  {
    href: "https://www.linkedin.com/company/ascendus-company/?viewAsMember=true",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/ascendus.ksa",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://x.com/ascendus_ksa",
    icon: TwitterIcon,
    label: "Twitter",
  },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "/legal/terms" },
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Security Policy", href: "/legal/security" },
  { name: "Cookie Policy", href: "/legal/cookies" },
  { name: "Disclaimer", href: "/legal/disclaimer" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 px-8 pt-8 md:px-16 md:pt-16">
      <div className="relative h-8 w-auto aspect-[4/1] mb-6 md:hidden">
        <Image
          src={logo}
          alt="Ascendus Logo"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      {/* Link row. Seven equal columns at md and up, so widths and gaps are
          uniform and the row can never drop onto a second line. The resulting
          column width is narrow enough that a long label such as
          "Government & Public Sector" wraps its last word rather than
          widening its column. */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-7 md:gap-6 lg:gap-8 ">
        {columns.map((column, index) => (
          <div key={column.heading || "continued-" + index}>
            {column.heading ? (
              <h2 className="text-white text-base lg:text-lg font-semibold mb-4">
                {column.heading}
              </h2>
            ) : (
              /* Continuation column: an invisible heading keeps its first item
                 level with the first item of the column it continues. */
              <h2
                className="hidden md:block text-white text-base lg:text-lg font-semibold mb-4 invisible"
                aria-hidden="true"
              >
                &nbsp;
              </h2>
            )}

            <ul className="space-y-2 text-sm">
              {column.items.map((item) => (
                <li key={item.name}>
                  {/* Entries with no page yet stay plain labels rather than
                      becoming links to nowhere. */}
                  {item.href ? (
                    <Link href={item.href} className={linkClass}>
                      {item.name}
                    </Link>
                  ) : (
                    <span className={labelClass}>{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom band. The wordmark sits behind this whole block as a faint
          backdrop, with the contact details, divider and legal lines on top. */}
      <div className="relative overflow-hidden pt-10 md:pt-14 pb-6 md:pb-8">
        {/* Figma runs the outline wordmark the full width of the footer, flush
            left, and lets it bleed off the bottom edge. The crop is measured off
            node 62:749's footer, not 67:2850 — both draw the wordmark at the
            same 1340px width, but 62:749 sits it 14px lower, cutting 40.8px of
            the 190.8px glyph height (21.4%) against 67:2850's 26.8px (14.1%).
            w-full against this padded content box is the closest match to the
            design's width; the translate reproduces the crop, which the band's
            own overflow-hidden performs. No opacity class here: the SVG already
            carries the design's 0.32 on its stroke, so stacking another
            multiplier on top would wash it out completely. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          aria-hidden="true"
        >
          <Image src={wordmark} alt="" className="w-full h-auto translate-y-[21.4%]" />
        </div>

        <div className="relative">
          {/* Mobile: icons keep their own centred row above the address —
              not enough width here to also right-align them on this line. */}
          <div className="flex md:hidden justify-center gap-3 mb-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  className="w-10 h-10"
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>

          {/* Desktop: icons sit right-aligned level with the email line,
              directly above the legal-links divider. */}
          <div className="relative flex items-end justify-center">
            <div className="hidden md:flex absolute right-0 bottom-0 gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    className="w-10 h-10"
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>

            {/* Centred and centre-aligned, so the successively shorter lines
                taper the way the address reads on paper. */}
            <div className="text-center text-sm space-y-1">
              <p className="text-white text-lg font-medium">Registered office</p>
              <a
                href="https://maps.app.goo.gl/r13crYbGJBBuQiSE7"
                className={"block " + linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                7731 King Saud Ibn Abdulaziz Saud,<br /> 2839 Al Murabba Dist.,
                <br />
                Riyadh 12624, KSA
              </a>
              <a href="mailto:info@ascendus.sa" className={"block " + linkClass}>
                info@ascendus.sa
              </a>
            </div>
          </div>

          <div className="border-t border-white/15 mt-8 pt-6 text-center text-sm">
            <p className="text-white whitespace-nowrap overflow-x-auto">
              {legalLinks.map((item, index) => (
                <span key={item.href}>
                  {index > 0 && " | "}
                  <a
                    href={item.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </span>
              ))}
            </p>
            <p className="text-white mt-3">
              © 2026 Ascendus. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
