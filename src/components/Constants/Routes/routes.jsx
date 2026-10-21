export const validRoutes = [
  "/",
  "/blog/",
  "/case-studies/",
  "/whitepapers/",
  "/industry-reports/",
  "/sap-insights/",
  "/about-us/",
  "/book-a-consultation/",
  "/careers/",
  "/contact/",
  "/contact-us/",
  "/legal/privacy/",
  "/ascenduserrors/",
  "/ascenduspartner/",
  "/partnership/",
  "/industries/",
  "/solutions/",
  "/services/",
  "/legal/terms/",
  "/trustcenter/",
  "/what-we-do/cybersecurity-digital-trust/",
  "/what-we-do/digital-engineering/",
  "/what-we-do/experience-design/",
  "/what-we-do/artificial-intelligence/",
  "/what-we-do/managed-services/",
  "/what-we-do/customer-experience/",
  "/what-we-do/business-advisory/",
  "/what-we-do/innovation-emerging-technologies/",
  "/what-we-do/intelligent-automation/",
  "/what-we-do/cloud-infrastructure/",
  "/what-we-do/data-intelligence/",
  "/what-we-do/enterprise-transformation/",
  "/what-we-do/enterprise-transformation/sap-transformation/",
  "/what-we-do/enterprise-transformation/microsoft-services/",
  "/what-we-do/enterprise-transformation/broader-technology-services/",
];

// Only the /careers/ landing page (dark hero) is listed above. The pages
// under it are left out on purpose: they keep the solid light navbar from
// the top, since the transparent one's white text blends into their white
// sections.
export const isValidRoute = (pathname) => validRoutes.includes(pathname);
