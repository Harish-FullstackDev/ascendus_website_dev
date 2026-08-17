import LaunchingSoon from "@/components/LaunchingSoon/LaunchingSoon";

export const metadata = {
    title: "Launching Soon",
    description:
        "Ascendus is launching something new. Sign up to be notified when it's live.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function Page() {
    return <LaunchingSoon />;
}

