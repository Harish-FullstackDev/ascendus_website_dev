import CandidateShell from "@/components/Careers/CandidateShell";
import MyApplications from "@/components/Careers/MyApplications";

// Per-candidate page with no public content, so it stays out of search.
export const metadata = {
  title: "My Applications",
  alternates: { canonical: "/careers/my-applications/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <CandidateShell>
      <MyApplications />
    </CandidateShell>
  );
}
