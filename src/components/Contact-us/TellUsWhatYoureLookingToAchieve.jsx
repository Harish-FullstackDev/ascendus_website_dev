"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import meetingRoomImg from "@/assets/Contact-us/Meeting_Room.webp";
import chevronDownIcon from "@/assets/Contact-us/icons/chevron-down-15.svg";
import uploadIcon from "@/assets/Contact-us/icons/upload.svg";
import arrowButtonIcon from "@/assets/Contact-us/icons/arrow-button-16.svg";
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
    "w-full rounded-[8px] border border-[#d3dae2] bg-[#f8f8f8] px-[9px] py-[13px] text-sm leading-[1.4] text-[#0a3a52] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#2d8ec5]";

function Label({ children, htmlFor }) {
    return (
        <label htmlFor={htmlFor} className="text-base font-normal text-[#334155] leading-[1.5]">
            {children} <span className="text-[#fb0000]">*</span>
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
                    className={`${fieldClass} h-[42px] appearance-none py-0 pr-10 ${value ? "" : "text-[#4a5568]"}`}
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
                    className="pointer-events-none absolute right-[13px] top-1/2 w-[15px] h-[15px] -translate-y-1/2"
                />
            </div>
        </div>
    );
}

// The enquiry band sits on primary/0 rather than white, and closes with the
// hairline rule that separates it from the locations section below.
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
            className="w-full scroll-mt-24 border-b-[0.5px] border-[#8695a7] bg-[#f8f8f8] px-6 sm:px-[64px] py-10 sm:py-[48px]"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-[811px]"
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                    General Enquiry
                </p>
                <h2 className="mt-4 text-[26px] sm:text-[32px] font-medium text-[#0e2b4b] leading-[1.2]">
                    Tell Us What You&apos;re Looking to Achieve
                </h2>
                <p className="mt-3 pt-[2px] text-base font-normal text-[#415773] leading-[1.5]">
                    Have a question or need more information?
                    <br className="hidden sm:block" /> Fill in the form and our team will get back to you.
                </p>
            </motion.div>

            {/* Figma splits the row 709 / 519 with an 84px gutter (278:5481). */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,709fr)_minmax(0,519fr)] gap-10 lg:gap-[84px]">
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
                            className={`${fieldClass} h-[84px] min-h-[84px] resize-y`}
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
                        className="flex cursor-pointer items-center gap-3 rounded-[8px] border border-dashed border-[#e2e8f0] bg-[rgba(248,250,252,0.5)] p-[17px] transition-colors duration-200 hover:border-[#2d8ec5]"
                    >
                        <Image src={uploadIcon} alt="" className="ml-1 w-5 h-5 shrink-0" />
                        <div>
                            <p className="text-base font-normal text-[#334155] leading-[1.5]">
                                {file ? file.name : "Attach File (Optional)"}
                            </p>
                            <p className="mt-[2.5px] text-sm font-normal text-[#94a3b8] leading-[1.4]">
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
                            className="inline-flex h-12 items-center gap-2.5 rounded-[8px] bg-[#0061af] px-[28px] text-base font-normal text-white transition-colors duration-300 hover:bg-[#004e8c] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                            <Image src={arrowButtonIcon} alt="" className="w-4 h-4" />
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
                    {/* Figma wraps the photo in a 1px primary/50 frame, so the
                        border and the inner radius are drawn separately. */}
                    <div className="w-full rounded-[16px] border border-[#f1f5f9] bg-[#f1f5f9] p-px shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                        <div className="relative w-full aspect-[517/256] overflow-hidden rounded-[10px]">
                            <Image
                                src={meetingRoomImg}
                                alt="Ascendus team in a corporate meeting room"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-[16px] bg-[#00223d] p-6">
                        {/* The revised design drops the headset icon that used to
                            sit beside this heading — the card leads with the
                            wordmark line alone. */}
                        <h3 className="text-lg font-medium uppercase text-[#f8f8f8] leading-[1.2]">
                            Prefer to speak with us directly?
                        </h3>

                        <p className="text-base font-normal text-[#d3dae2] leading-[1.5]">Call us or email us at</p>

                        <div className="flex flex-col gap-2 pt-1">
                            <a
                                href="mailto:info@ascendus.com"
                                className="flex items-center gap-2.5 text-base font-normal text-[#e2e8f0] transition-colors duration-200 hover:text-white"
                            >
                                <Image src={mailIcon} alt="" className="w-6 h-6" />
                                info@ascendus.com
                            </a>

                            <a
                                href="tel:+914412345678"
                                className="flex items-center gap-2.5 text-base font-normal text-[#e2e8f0] transition-colors duration-200 hover:text-white"
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
