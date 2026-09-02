import PageClient from "./PageClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    alternates: { canonical: `/careers/${slug}` },
  };
}

export default function Page() {
  return <PageClient />;
}
