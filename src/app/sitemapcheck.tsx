import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default async function SitemapPage() {
  const baseUrl = "https://www.ascendus.com"; // TODO: swap for the real Ascendus domain

  const staticRoutes = [
    { name: "Home", path: "" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Careers", path: "/careers" },
    { name: "Book a Call", path: "/bookacall" },
    { name: "Trust Center", path: "/trustcenter" },
    { name: "Privacy Policy", path: "/privacyPolicy" },
    { name: "Terms of Service", path: "/termsOfService" },
  ];

  let services: any[] = [];

  try {
    const { data } = await supabase
      .from("services")
      .select("slug")
      .eq("is_active", true);

    services = data || [];
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">HTML Sitemap</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
        <ul className="list-disc pl-6 space-y-2">
          {staticRoutes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path || "/"}
                className="text-blue-600 hover:underline"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>

        {services.length > 0 ? (
          <ul className="list-disc pl-6 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {service.slug}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No services found.</p>
        )}
      </section>
    </main>
  );
}