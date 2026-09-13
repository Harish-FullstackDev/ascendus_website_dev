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

export default function CleanPrinciples() {
    return (
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-[28px] font-semibold text-[#2E3033]">What Shapes How We Deliver </h2>
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
