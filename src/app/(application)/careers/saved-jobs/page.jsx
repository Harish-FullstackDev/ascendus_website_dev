import CandidateShell from "@/components/Careers/CandidateShell";
import SavedJobs from "@/components/Careers/SavedJobs";

// Per-candidate page with no public content, so it stays out of search.
export const metadata = {
  title: "Saved Jobs",
  alternates: { canonical: "/careers/saved-jobs/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <CandidateShell>
      <SavedJobs />
    </CandidateShell>
  );
}
