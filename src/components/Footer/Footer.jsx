"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Brand/ASCENDUS.svg";
import logoSecondary from "../../assets/Brand/Ascendus_Logo_Secondary.png";
import InstagramIcon from "../../assets/Footer/Instagram_Icon.svg";
import LinkedinIcon from "../../assets/Footer/LinkedIn_Icon.svg";
import TwitterIcon from "../../assets/Footer/X_Icon.svg";

// Height of the pinned wordmark band at the end of the footer. Its flow
// space doubles as the window the reveal happens through.
const revealHeight = "h-40 sm:h-48 lg:h-[200px]";

const linkClass = "hover:text-white transition-colors duration-200";
const labelClass = "text-gray-500 cursor-default";

// One entry per footer column. Each renders as its own natural-width block
// (not an equal-width grid cell), so a short list like Quick Links stays
// narrow while Industries and Solutions — both full 10-item lists — take
// the width their longest label needs.
const columns = [
  {
    heading: "Industries",
    headingHref: "/industries",
    items: [
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
  },
  {
    heading: "Solutions",
    headingHref: "/solutions",
    items: [
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
    <footer className="relative bg-neutral-900 text-gray-400">
      <div className="relative z-10 bg-neutral-900 px-8 py-8 md:px-16 md:pt-16 md:pb-9">
        <div className="relative h-8 w-auto aspect-[4/1] mb-6 md:hidden">
          <Image
            src={logoSecondary}
            alt="Ascendus Logo"
            fill
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>

        {/* Main row: the five nav columns on the left, each its own natural
          width, with the logo / registered-office / social block pinned to
          the right via ml-auto. flex-wrap lets that right block drop below
          the columns on narrow screens instead of squeezing them. */}
        <div className="flex flex-wrap items-start gap-x-12 gap-y-10">
          {columns.map((column) => (
            <div key={column.heading} className="shrink-0">
              {/* A heading links out only when its section has a page of its own
                (Industries and Solutions do); the rest stay plain labels. */}
              <h2 className="text-white text-base lg:text-lg font-semibold mb-4">
                {column.headingHref ? (
                  <Link href={column.headingHref} className={linkClass}>
                    {column.heading}
                  </Link>
                ) : (
                  column.heading
                )}
              </h2>

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

          {/* Logo, registered-office address and socials — stacked, right
            aligned on desktop (ml-auto pins the whole block to the row's
            right edge); centred if it wraps onto its own line on mobile. */}
          <div className="ml-auto shrink-0 flex flex-col items-center sm:items-end gap-6 text-center sm:text-right">
            <div className="relative h-9 w-40 aspect-[4/1]">
              <Image
                src={logoSecondary}
                alt="Ascendus Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "right" }}
              />
            </div>

            <div className="text-sm space-y-1">
              <p className="text-white text-lg font-medium">Registered office</p>
              <a
                href="https://maps.app.goo.gl/r13crYbGJBBuQiSE7"
                className={"block " + linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                7731 King Saud Ibn Abdulaziz Saud,<br />
                2839 Al Murabba Dist., Riyadh 12624, KSA
              </a>
              <a href="mailto:info@ascendus.sa" className={"block " + linkClass}>
                info@ascendus.sa
              </a>
            </div>

            <div className="flex gap-3">
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
          </div>
        </div>

        {/* Legal row: one divider, legal links + copyright right-aligned
          beneath it (centred on mobile). */}
        <div className="border-t border-white/15 mt-8 pt-8 text-center sm:text-right text-sm">
          <p className="text-white whitespace-nowrap overflow-x-auto">
            {legalLinks.map((item, index) => (
              <span key={item.href}>
                {index > 0 && " | "}
                <a href={item.href} className="hover:text-gray-300 transition-colors">
                  {item.name}
                </a>
              </span>
            ))}
          </p>
          <p className="text-white mt-3">© 2026 Ascendus. All Rights Reserved.</p>
        </div>
      </div>

      {/* Pinned wordmark, and the last thing in the footer — its own flow
          space is the window it gets revealed through. `sticky bottom-0`
          keeps it pinned to the bottom of the viewport for as long as it
          would otherwise sit below the fold (sticky-bottom pulls an element
          *up*; it never pushes one down, which is why this sits at the end
          of the footer rather than the start). The content block above is
          opaque and on a higher layer, so it covers the pinned wordmark
          until the last stretch of scrolling lifts its bottom edge clear —
          uncovering the wordmark from the bottom up.

          Not `fixed` + a negative z-index: that layer is painted underneath
          the backgrounds of the page's own in-flow blocks, so it never
          shows at all. */}
      <div
        className={`sticky bottom-0 z-0 flex items-end overflow-hidden ${revealHeight}`}
        aria-hidden="true"
      >
        <Image src={logo} alt="" className="w-full h-auto" />
      </div>
    </footer>
  );
};

export default Footer;
