import impactBg from "@/assets/career/Impact bg.svg";
import mentorshipPhoto from "@/assets/Service/Artificial Intelligence/AI Strategy/feature-workforce-productivity.png";

// Auto-rotating "Learning and Development" cards. `image` accepts either a
// statically imported asset or a public/ path string. All images are
// landscape-oriented so they fill the wide banner without awkward cropping.
export const learningDevelopmentSlides = [
    {
        title: "Impact",
        description:
            "You'll join a great place to build your skills and launch your career. From summer internships to innovation-led opportunities, we welcome your curiosity.",
        image: impactBg,
        gradient: "from-black/80 via-black/40 to-transparent",
    },
    {
        title: "Mentorship",
        description:
            "Learn directly from senior engineers and consultants who invest in your growth, with regular 1:1s, code reviews, and structured career check-ins.",
        image: mentorshipPhoto,
        gradient: "from-[#0b2540]/85 via-[#0b2540]/35 to-transparent",
    },
    {
        title: "Flexibility",
        description:
            "Work the way that helps you do your best work, with hybrid and remote-friendly options and schedules that flex around what matters to you.",
        image: "/CareerPage/Flexwork.png",
        objectPosition: "center 38%",
        gradient: "from-[#1a3a1f]/85 via-[#1a3a1f]/35 to-transparent",
    },
    {
        title: "Community",
        description:
            "Be part of a close-knit, collaborative team that celebrates wins together, shares knowledge openly, and genuinely enjoys building great products.",
        image: "/ServicePage/Digital Engineering/laptop-hands-developer.jpg",
        gradient: "from-[#3a1a3a]/85 via-[#3a1a3a]/35 to-transparent",
    },
];
