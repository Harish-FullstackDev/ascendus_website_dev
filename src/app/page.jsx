import PageClient from "./PageClient";

export const metadata = {
    alternates: { canonical: "/" },
};

export default function Page() {
    return <PageClient />;
}
