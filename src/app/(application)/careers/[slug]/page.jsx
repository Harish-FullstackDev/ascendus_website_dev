import PageClient from "./PageClient";
import { getJobBySlug, getOtherJobs } from "@/lib/jobs";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
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
    openGraph: {
      title: `${job.title} | Ascendus`,
      description,
      url: `/careers/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  const otherJobs = job ? await getOtherJobs(job.slug) : [];

  return <PageClient job={job} otherJobs={otherJobs} />;
}
