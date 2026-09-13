"use client";

const PRINCIPLES = [
    {
        title: "Ownership",
        description:
            "Minimize custom code in the SAP core to ensure seamless upgrades and innovations.",
    },
    {
        title: "Precision",
        description:
            "Build extensions on SAP Business Technology Platform to stay upgrade safe.",
    },
    {
        title: "Transparency",
        description:
            "Use standard APIs and integration suites instead of direct system modifications.",
    },
    {
        title: "Regional Fluency",
        description:
            "Adopt cloud native practices for scalability, agility, and continuous innovation.",
    },
];

export default function WhatShapesHowWeDeliver() {
    return (
        <section className="w-full px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16">
            {/* No max-width cap: the 1300px cap centred this block inside the
                section's content box, leaving the outer cards short of the 64px
                inset on wide screens. Full width means the first card's left edge
                and the last card's right edge land exactly on the section padding
                at any viewport; the 18px gutters are unchanged and the cards take
                up the extra width themselves. */}
            <div className="flex flex-col gap-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-[28px] font-semibold text-[#2E3033]">What Shapes How We Deliver</h2>
                    <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                        Four principles carried into every engagement, not values printed on a wall and left there.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[18px]">
                    {PRINCIPLES.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#D3DAE2] flex flex-col justify-start p-6 h-[220px] sm:h-[237px]"
                        >
                            <h2 className="text-2xl text-[#2E3033] font-semibold">
                                {item.title}
                            </h2>
                            <p className="font-light mt-4 leading-relaxed text-lg text-[#55595E]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
