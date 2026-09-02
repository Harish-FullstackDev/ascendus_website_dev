import PageClient from "./PageClient";
import { getJobBySlug } from "@/components/Constants/Career/jobsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) {
    return {
      title: "Job Not Found",
      alternates: { canonical: `/careers/${slug}` },
    };
  }
  const description =
    job.aboutJob && job.aboutJob.length > 157
      ? `${job.aboutJob.slice(0, 157)}...`
      : job.aboutJob || `${job.title} — apply for this role at Ascendus.`;
  return {
    title: job.title,
    description,
    alternates: { canonical: `/careers/${slug}` },
  };
}

export default function Page() {
  return <PageClient />;
}
