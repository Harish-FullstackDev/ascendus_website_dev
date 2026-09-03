export const sections = [
  "Introduction",
  "What Are Cookies",
  "Cookies We Use",
  "Third-Party Cookies",
  "Managing Cookie Preferences",
  "Changes To This Policy",
  "Contact Us",
];

export const sectionContent = {
  Introduction: {
    title: "Cookie Policy",
    paragraphs: [
      `This Cookie Policy explains how Ascendus ("Ascendus") uses cookies and the purposes for which they are used, and the choices available to you.`,
      "By continuing to use our Website, you consent to the use of cookies as described in this Policy, unless you choose to disable them through your browser settings or cookie preferences.",
    ],
  },

  "What Are Cookies": {
    title: "What Are Cookies?",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. They help websites function efficiently, improve user experience, remember preferences, and provide information about how the Website is used.",
      "Cookies set by Ascendus are referred to as first-party cookies, while cookies set by external service providers are referred to as third-party cookies. Third-party cookies may support features such as embedded maps, scheduling tools, and video content.",
    ],
  },

  "Cookies We Use": {
    title: "Cookies We Use",
    paragraphs: [
      "Ascendus uses only the cookies necessary to support the functionality of the Website and its integrated services.",
    ],
    table: [
      {
        name: "cookie_consent",
        provider: "Ascendus",
        purpose: "Stores your cookie preferences to prevent the consent banner from reappearing.",
        duration: "365 days",
      },
      {
        name: "Google Maps Cookies",
        provider: "Google LLC",
        purpose: "Supports the display and functionality of embedded maps.",
        duration: "Varies",
      },
      {
        name: "Calendly Cookies",
        provider: "Calendly LLC",
        purpose: "Enables appointment scheduling and protects the scheduling service.",
        duration: "Varies",
      },
      {
        name: "YouTube Cookies",
        provider: "Google LLC / YouTube",
        purpose: "Supports embedded video playback and related functionality.",
        duration: "Varies",
      },
    ],
  },

  "Third-Party Cookies": {
    title: "Third-Party Cookies",
    paragraphs: [
      "Some features of our Website rely on third-party services such as Google Maps, Calendly, and YouTube. These providers may set cookies in accordance with their own privacy and cookie policies. Ascendus does not control the use of these cookies.",
    ],
  },

  "Managing Cookie Preferences": {
    title: "Managing Your Cookie Preferences",
    paragraphs: [
      "When you first visit our Website, you can choose to accept or reject non-essential cookies through the cookie banner. Your preference is stored for up to 365 days using the cookie_consent cookie.",
      "You may also manage or delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of features such as interactive maps, appointment scheduling, and embedded videos.",
    ],
  },

  "Changes To This Policy": {
    title: "Changes to This Cookie Policy",
    paragraphs: [
      "Ascendus may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or our use of cookies. The latest version will always be available on our Website.",
    ],
  },

  "Contact Us": {
    title: "Contact Us",
    paragraphs: [
      "If you have any questions about this Cookie Policy or our use of cookies, please contact us:",
    ],
    contacts: [
      { label: "Email", value: "sstdpo@isupportz.com", href: "mailto:sstdpo@isupportz.com" },
      { label: "Phone", value: "+91 413 2191301", href: "tel:+914132191301" },
      {
        label: "Registered Address",
        value:
          "Ascendus, 7731 King Saud Ibn Abdulaziz Saud, 2839 Al Murabba Dist., Riyadh 12624, Kingdom of Saudi Arabia.",
        href: "https://maps.app.goo.gl/dwn46nzVzmjKjuP86",
      },
    ],
  },
};
