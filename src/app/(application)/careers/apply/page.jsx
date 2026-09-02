import PageClient from "./PageClient";

export const metadata = {
  alternates: { canonical: "/careers/apply" },
  description: "Submit your application for an open role at Ascendus. Tell us about your experience and what you would bring to the team.",
  title: "Job Application",
};

export default function Page() {
  return <PageClient />;
}
