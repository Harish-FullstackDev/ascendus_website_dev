"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import logo from "../../assets/Brand/ASCENDUS.svg";
import logoSecondary from "../../assets/Brand/Ascendus_Logo_Secondary.png";
import InstagramIcon from "../../assets/Footer/Instagram_Icon.svg";
import LinkedinIcon from "../../assets/Footer/LinkedIn_Icon.svg";
import TwitterIcon from "../../assets/Footer/X_Icon.svg";

const HOLD_MS = 1800; // how long the wordmark stays out before it springs away
const CLOSE_AT_PX = 4; // distance from the page bottom that counts as "at the end"
const REARM_PX = 320; // scrolling back this far from the bottom re-arms the cycle

const LOGO_RATIO = 169 / 1313; // ASCENDUS.svg intrinsic size — height per unit width

// The elastic half of the effect: the band springs shut, it does not slide
// shut on a fixed clock. Overshoot and settle are the whole point.
const SNAP_BACK = { type: "spring", stiffness: 120, damping: 18, restDelta: 0.5 };
const REOPEN = { duration: 0.35, ease: "easeOut" };

// What collapses is the wordmark band's own height, so the footer box shrinks
// with it. Nothing is translated and nothing is masked, which is what keeps a
// dead strip from opening up at either end: when the band is at full height
// the wordmark is simply there, and when it has collapsed to zero the footer
// ends immediately below the legal row.
//
// Because the band is the last thing on the page, collapsing it shortens the
// document. At the bottom of the page the browser clamps the scroll to match,
// so the whole footer visibly travels down over the wordmark as the band
// closes — the footer itself doing the covering, under its own momentum.
//
// The artwork is pinned to the band's bottom edge, so a shrinking band crops
// it from the top and the footer above appears to descend across it.
function useElasticFooter() {
  const footerRef = useRef(null);
  const height = useMotionValue(0);
  const [openHeight, setOpenHeight] = useState(0);

  const { scrollY } = useScroll();

  const closed = useRef(false);
  const timer = useRef(null);

  // Derived from the footer's width rather than measured off the image: the
  // band's own height is the thing being animated, so measuring it would feed
  // back into itself.
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return undefined;

    const measure = () => setOpenHeight(Math.round(footer.clientWidth * LOGO_RATIO));
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (openHeight && !closed.current) height.set(openHeight);
  }, [openHeight, height]);

  const sync = useCallback(() => {
    if (!openHeight || typeof document === "undefined") return;

    const fromBottom =
      document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);

    if (closed.current) {
      if (fromBottom > REARM_PX) {
        closed.current = false;
        animate(height, openHeight, REOPEN);
      }
      return;
    }

    if (fromBottom <= CLOSE_AT_PX) {
      if (!timer.current) {
        timer.current = setTimeout(() => {
          timer.current = null;
          closed.current = true;
          animate(height, 0, SNAP_BACK);
        }, HOLD_MS);
      }
    } else if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, [openHeight, height]);

  useMotionValueEvent(scrollY, "change", sync);

  // Covers landing straight at the bottom of the page, where no scroll event
  // ever fires, and re-runs once the band has been measured.
  useEffect(() => {
    sync();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [sync]);

  return { footerRef, height };
}

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
  const { footerRef, height } = useElasticFooter();

  return (
    <footer ref={footerRef} className="relative bg-neutral-900 text-gray-400">
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
                (Industries does); the rest stay plain labels. */}
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

      {/* Last thing on the page, and the only thing whose height changes. The
          artwork is pinned to its bottom edge so collapsing the band crops the
          wordmark from the top rather than sliding it about. */}
      <motion.div style={{ height }} className="relative overflow-hidden" aria-hidden="true">
        <Image src={logo} alt="" className="absolute inset-x-0 bottom-0 block w-full h-auto" />
      </motion.div>
    </footer>
  );
};

export default Footer;
