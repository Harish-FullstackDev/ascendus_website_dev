"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import logo from "../../assets/Brand/ASCENDUS.svg";
import logoSecondary from "../../assets/Brand/Ascendus_Logo_Secondary.png";
import InstagramIcon from "../../assets/Footer/Instagram_Icon.svg";
import LinkedinIcon from "../../assets/Footer/LinkedIn_Icon.svg";
import TwitterIcon from "../../assets/Footer/X_Icon.svg";

const LOGO_RATIO = 169 / 1313; // ASCENDUS.svg intrinsic size — height per unit width

const AT_END_PX = 2; // how close to the page bottom counts as being at the end
const RESISTANCE = 0.45; // fraction of the gesture the pull actually travels
const RELEASE_MS = 140; // wheel has no touchend, so a lull in events is the release
const SNAP_BACK = { type: "spring", stiffness: 180, damping: 22, restDelta: 0.5 };

// Elastic overflow scrolling, done by hand. Chrome on Windows has no native
// rubber band, so the gesture is read off the wheel and touch directly: once
// the page is already at its end, further downward input no longer scrolls
// anything, and that leftover input is what opens the wordmark band.
//
// What opens is the band's own height, growing below the footer panel, and
// the view is held against the new page bottom as it grows. So the page
// lifts under the gesture exactly as an overscroll would, while the footer
// panel itself never moves: it cannot be clipped at its top, cannot ride up
// over the section above it, and leaves no gap behind — all of which happen
// the moment the panel is the thing being translated.
//
// At rest the band is zero-height, so there is no empty strip either. Letting
// go shrinks it back, and since it is the last thing on the page the browser
// clamps the scroll as the document shortens, carrying the footer back down
// over the wordmark.
//
// Resistance makes it read as elastic rather than as a drawer — the pull
// travels a fraction of the gesture, and the closer it gets to the limit the
// less each additional pixel buys.
function useElasticOverscroll() {
  const footerRef = useRef(null);
  const pull = useMotionValue(0);
  const [maxPull, setMaxPull] = useState(0);

  const current = useRef(0);
  const release = useRef(null);
  const touchY = useRef(null);

  // The wordmark is `w-full h-auto`, so how far there is to pull is a function
  // of width. Derived from the ratio rather than measured off the element,
  // which keeps it stable while a transform is running.
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return undefined;

    const measure = () => setMaxPull(Math.round(footer.clientWidth * LOGO_RATIO));
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!maxPull) return undefined;

    const atEnd = () =>
      document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) <= AT_END_PX;

    // Raw gesture distance accumulated since the pull began, before easing.
    const applied = { raw: 0 };

    const letGo = () => {
      if (release.current) {
        clearTimeout(release.current);
        release.current = null;
      }
      applied.raw = 0;
      if (current.current === 0) return;
      current.current = 0;
      animate(pull, 0, SNAP_BACK);
    };

    // Past the limit each extra pixel buys less, so the band eases into its
    // stop instead of hitting a wall.
    const stretch = (amount) => {
      const eased = maxPull * (1 - 1 / (amount / maxPull + 1));
      return Math.min(maxPull, eased * 2);
    };

    // Growing the band lengthens the document, and the new space lands below
    // the fold where it would never be seen. Riding the scroll down with it
    // is what turns the growth into a visible pull.
    const openTo = (amount) => {
      current.current = amount;
      pull.set(amount);
      window.scrollTo(0, document.documentElement.scrollHeight);
    };

    const onWheel = (event) => {
      if (event.deltaY <= 0) {
        letGo();
        return;
      }
      if (current.current === 0 && !atEnd()) {
        applied.raw = 0;
        return;
      }

      applied.raw += event.deltaY * RESISTANCE;
      openTo(stretch(applied.raw));

      if (release.current) clearTimeout(release.current);
      release.current = setTimeout(letGo, RELEASE_MS);
    };

    const onTouchStart = (event) => {
      touchY.current = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      if (touchY.current === null) return;

      const delta = touchY.current - event.touches[0].clientY; // up-swipe is positive
      touchY.current = event.touches[0].clientY;

      if (delta <= 0 || (current.current === 0 && !atEnd())) {
        if (current.current > 0 && delta < 0) letGo();
        return;
      }

      applied.raw += delta * RESISTANCE;
      openTo(stretch(applied.raw));
    };

    const onTouchEnd = () => {
      touchY.current = null;
      letGo();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      if (release.current) clearTimeout(release.current);
    };
  }, [maxPull, pull]);

  // The spring undershoots past zero on the way back. A negative height is
  // not a value CSS will take, and an ignored declaration would strand the
  // band at whatever it last held, so it is clamped.
  const bandHeight = useTransform(pull, (value) => Math.max(0, value));

  return { footerRef, bandHeight };
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
  const { footerRef, bandHeight } = useElasticOverscroll();

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

      {/* Zero-height at rest, so it costs the footer nothing and leaves no
          empty strip. The pull grows it; the wordmark is pinned to its bottom
          edge, which keeps the artwork against the page bottom and uncovers
          it upward as the band opens. */}
      <motion.div style={{ height: bandHeight }} className="relative overflow-hidden" aria-hidden="true">
        <Image src={logo} alt="" className="absolute inset-x-0 bottom-0 block w-full h-auto" />
      </motion.div>
    </footer>
  );
};

export default Footer;
