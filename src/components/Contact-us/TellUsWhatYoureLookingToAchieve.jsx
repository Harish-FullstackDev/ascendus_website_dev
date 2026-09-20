"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import meetingRoomImg from "@/assets/Contact-us/Meeting_Room.webp";
import chevronDownIcon from "@/assets/Contact-us/icons/chevron-down.svg";
import uploadIcon from "@/assets/Contact-us/icons/upload.svg";
import mailIcon from "@/assets/Contact-us/icons/mail.svg";
import phoneIcon from "@/assets/Contact-us/icons/phone.svg";

const JOB_TITLES = [
    "C-Level Executive",
    "Vice President / Director",
    "Head of Department",
    "Manager",
    "Architect / Consultant",
    "Engineer / Specialist",
    "Other",
];

const COUNTRIES = [
    "Saudi Arabia",
    "United Arab Emirates",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
    "India",
    "United States",
    "United Kingdom",
    "Other",
];

const AREAS_OF_INTEREST = [
    "Enterprise Transformation",
    "Artificial Intelligence",
    "Cloud & Infrastructure",
    "Data & Intelligence",
    "Digital Engineering",
    "Customer Experience",
    "Experience Design",
    "Intelligent Automation",
    "Cybersecurity & Digital Trust",
    "Managed Services",
    "Business Advisory",
    "Innovation & Emerging Technologies",
];

const ACCEPTED_FILE_TYPES = ".pdf,.doc,.docx";
const MAX_FILE_BYTES = 10 * 1024 * 1024;

const INITIAL_VALUES = {
    areaOfInterest: "",
    company: "",
    country: "",
    email: "",
    fullName: "",
    jobTitle: "",
    message: "",
};

const fieldClass =
    "w-full rounded-[10px] border border-[#d3dae2] bg-white px-[15px] py-3 text-sm text-[#0a3a52] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#2d8ec5]";

function Label({ children, htmlFor }) {
    return (
        <label htmlFor={htmlFor} className="text-sm font-medium text-[#334155] leading-4">
            {children} <span className="text-[#ef4444]">*</span>
        </label>
    );
}

// A native <select> keeps keyboard and mobile behaviour intact, so the Figma
// chevron is layered over it (appearance-none) rather than rebuilt as a custom
// listbox.
function SelectField({ id, label, onChange, options, placeholder, value }) {
    return (
        <div className="flex flex-col gap-1.5">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative">
                <select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    className={`${fieldClass} appearance-none pr-10 ${value ? "" : "text-[#94a3b8]"}`}
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option} value={option} className="text-[#0a3a52]">
                            {option}
                        </option>
                    ))}
                </select>
                <Image
                    src={chevronDownIcon}
                    alt=""
                    className="pointer-events-none absolute right-[15px] top-1/2 w-[15px] h-[15px] -translate-y-1/2"
                />
            </div>
        </div>
    );
}

// White section following the tinted support band, so it takes the full 64px at
// the top and shares 32px with the equally white locations section below it.
export default function TellUsWhatYoureLookingToAchieve() {
    const fileInputRef = useRef(null);
    const [values, setValues] = useState(INITIAL_VALUES);
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState({ message: "", type: "idle" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((previous) => ({ ...previous, [name]: value }));
    };

    const handleFile = (selected) => {
        if (!selected) return;

        if (selected.size > MAX_FILE_BYTES) {
            setStatus({ message: "That file is larger than 10MB. Please attach a smaller file.", type: "error" });
            return;
        }

        setFile(selected);
        setStatus({ message: "", type: "idle" });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ message: "", type: "idle" });

        try {
            const response = await fetch("/api/contact-us", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, attachmentName: file?.name || "" }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong. Please try again.");
            }

            setValues(INITIAL_VALUES);
            setFile(null);
            setStatus({ message: "Thanks — your enquiry is with our team. We'll be in touch shortly.", type: "success" });
        } catch (error) {
            setStatus({ message: error.message, type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="tell-us-what-youre-looking-to-achieve"
            className="w-full scroll-mt-24 bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#2d8ec5]">General Enquiry</p>
                <h2 className="mt-1 text-2xl sm:text-[32px] font-medium text-[#0a3a52] leading-[36px]">
                    Tell Us What You&apos;re Looking to Achieve
                </h2>
                <p className="mt-2 text-sm text-[#64748b] leading-5">
                    Have a question or need more information? Fill in the form and our team will get back to you.
                </p>
            </motion.div>

            <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1.43fr)_minmax(0,1fr)] gap-10">
                <motion.form
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onSubmit={handleSubmit}
                    noValidate={false}
                    className="flex flex-col gap-4"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="fullName">Full Name</Label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                value={values.fullName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className={fieldClass}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="email">Business Email</Label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={values.email}
                                onChange={handleChange}
                                placeholder="you@company.com"
                                className={fieldClass}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="company">Company</Label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                required
                                value={values.company}
                                onChange={handleChange}
                                placeholder="Enter company name"
                                className={fieldClass}
                            />
                        </div>

                        <SelectField
                            id="jobTitle"
                            label="Job Title"
                            onChange={handleChange}
                            options={JOB_TITLES}
                            placeholder="Select job title"
                            value={values.jobTitle}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SelectField
                            id="country"
                            label="Country / Region"
                            onChange={handleChange}
                            options={COUNTRIES}
                            placeholder="Select country"
                            value={values.country}
                        />

                        <SelectField
                            id="areaOfInterest"
                            label="Area of Interest"
                            onChange={handleChange}
                            options={AREAS_OF_INTEREST}
                            placeholder="Select area of interest"
                            value={values.areaOfInterest}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="message">Message</Label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Tell us how we can help..."
                            className={`${fieldClass} min-h-[90px] resize-y py-3`}
                        />
                    </div>

                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                fileInputRef.current?.click();
                            }
                        }}
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={(event) => {
                            event.preventDefault();
                            handleFile(event.dataTransfer.files?.[0]);
                        }}
                        className="flex cursor-pointer items-center gap-3 rounded-[4px] border border-dashed border-[#e2e8f0] bg-[rgba(248,250,252,0.5)] p-[17px] transition-colors duration-200 hover:border-[#2d8ec5]"
                    >
                        <Image src={uploadIcon} alt="" className="ml-1 w-5 h-5 shrink-0" />
                        <div>
                            <p className="text-xs font-medium text-[#334155] leading-4">
                                {file ? file.name : "Attach File (Optional)"}
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#94a3b8] leading-4">
                                Drag and drop or click to upload (PDF, DOC, DOCX, Max 10MB)
                            </p>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept={ACCEPTED_FILE_TYPES}
                            className="hidden"
                            onChange={(event) => handleFile(event.target.files?.[0])}
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center bg-[#0a3a52] px-6 py-3 text-xs font-semibold text-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:bg-[#0c1938] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                        </button>

                        {status.message ? (
                            <p
                                role="status"
                                className={`text-xs ${status.type === "error" ? "text-[#ef4444]" : "text-[#2d8ec5]"}`}
                            >
                                {status.message}
                            </p>
                        ) : null}
                    </div>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div className="relative w-full aspect-[490/258] overflow-hidden rounded-[16px] border border-[#f1f5f9] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                        <Image
                            src={meetingRoomImg}
                            alt="Ascendus team in a corporate meeting room"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>

                    <div className="flex flex-col gap-4 rounded-[16px] bg-[#0a3a52] p-6">
                        {/* The revised design drops the headset icon that used to
                            sit beside this heading — the card leads with the
                            wordmark line alone. */}
                        <h3 className="text-sm font-semibold uppercase tracking-[0.6px] text-white leading-4">
                            Prefer to speak with us directly?
                        </h3>

                        <p className="text-sm font-medium text-[#d3dae2] leading-4">Call us or email us at</p>

                        <div className="flex flex-col gap-2 pt-1">
                            <a
                                href="mailto:info@ascendus.com"
                                className="flex items-center gap-2.5 text-sm font-light text-[#e2e8f0] transition-colors duration-200 hover:text-white"
                            >
                                <Image src={mailIcon} alt="" className="w-6 h-6" />
                                info@ascendus.com
                            </a>

                            <a
                                href="tel:+914412345678"
                                className="flex items-center gap-2.5 text-sm font-light text-[#e2e8f0] transition-colors duration-200 hover:text-white"
                            >
                                <Image src={phoneIcon} alt="" className="w-6 h-6" />
                                +91 44 1234 5678
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
