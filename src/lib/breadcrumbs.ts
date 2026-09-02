// Maps a URL path segment to its display label for breadcrumb trails.
// Add an entry here whenever a new /whatWeDo/* (or other) route is created.
export const ROUTE_LABELS: Record<string, string> = {
  whatWeDo: "What We Do",
  "enterprise-transformation": "Enterprise Transformation",
  "sap-transformation": "SAP Transformation",
  "microsoft-services": "Microsoft Services",
  "broader-technology-services": "Broader Technology Services",
  "artificial-intelligence": "Artificial Intelligence",
  "cloud-infrastructure": "Cloud & Infrastructure",
  "customer-experience": "Customer Experience",
  "cybersecurity-digital-trust": "Cybersecurity & Digital Trust",
  "data-intelligence": "Data & Intelligence",
  "digital-engineering": "Digital Engineering",
  "experience-design": "Experience Design",
  "innovation-emerging-technologies": "Innovation & Emerging Technologies",
  "intelligent-automation": "Intelligent Automation",
  "managed-services": "Managed Services",
  "business-advisory": "Business Advisory",
};

export type BreadcrumbItem = { name: string; item: string };

// Builds breadcrumb items (Home first) from a path like "/whatWeDo/experience-design".
// Falls back to a title-cased version of the segment when it isn't in ROUTE_LABELS.
export function buildBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: "Home", item: "/" }];

  let running = "";
  for (const segment of segments) {
    running += `/${segment}`;
    const label =
      ROUTE_LABELS[segment] ||
      segment
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    items.push({ name: label, item: running });
  }

  return items;
}
