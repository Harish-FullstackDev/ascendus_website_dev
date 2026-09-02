import PageClient from "./PageClient";

export const metadata = {
    alternates: { canonical: "/" },
    title: { absolute: "Ascendus | Enterprise Technology, SAP and Managed Services" },
    description: "Ascendus designs, builds and runs enterprise technology — SAP, cloud, data, AI, engineering, security and managed operations — under one accountable team.",
};

export default function Page() {
    return <PageClient />;
}
