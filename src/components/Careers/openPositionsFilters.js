// Placeholder filter categories for the Open Positions section.
//
// These are dummy values until the categories are managed from the admin
// panel. The job rows themselves already come live from the `jobs` table
// (src/lib/jobs.js), so several of these names were picked to match values
// that table uses today, which keeps the filters returning results in the
// meantime. Replace this list, or build it from the database, once the admin
// panel owns the categories.
//
// `field` is the key on a mapped job (see mapJob in src/lib/jobs.js) that the
// filter matches against. `width` is the dropdown width from Figma (602:2153).
export const OPEN_POSITION_FILTERS = [
    {
        key: "department",
        label: "Department",
        field: "categories",
        width: "w-[143px]",
        options: [
            "SAP Consulting & Delivery",
            "Engineering & Technology",
            "Data Analysis",
            "Design",
            "Marketing",
            "Sales & Business Development",
        ],
    },
    {
        key: "location",
        label: "Location",
        field: "location",
        width: "w-[122px]",
        options: ["Riyadh, KSA", "Dubai, UAE", "Chennai, India", "Hybrid", "Remote"],
    },
    {
        key: "experience",
        label: "Experience Level",
        field: "experienceLevel",
        width: "w-[186px]",
        options: ["Fresher", "1 - 4 Years", "2 - 5 Years", "3 - 8 Years", "Expertise"],
    },
    {
        key: "workType",
        label: "Work Type",
        field: "typeOfWork",
        width: "w-[137px]",
        options: ["Full-time", "Part-time", "Contract", "Internship"],
    },
];
