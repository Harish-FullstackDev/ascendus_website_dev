"use client";

import { useState } from "react";
import Image from "next/image";

import iconEye from "@/assets/Careers/icons/eye-16.svg";
import iconArrow from "@/assets/Careers/icons/arrow-right-14.svg";

// Figma draws a candidate login, but the site has no candidate accounts or
// auth backend yet. The form is laid out and interactive (show/hide password,
// required fields) and tells the visitor plainly that the portal is not live,
// instead of pretending to sign them in.
const NOT_LIVE_MESSAGE =
    "The candidate portal is not live yet. To apply, choose a role under Open Positions.";

export default function CandidateLoginCard({ className = "", paddingClassName = "py-10" }) {
    const [showPassword, setShowPassword] = useState(false);
    const [notice, setNotice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setNotice(NOT_LIVE_MESSAGE);
    };

    return (
        <div
            className={`flex flex-col gap-6 overflow-hidden rounded-[16px] border border-[rgba(229,231,235,0.8)] bg-white/70 px-[29px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[4px] ${paddingClassName} ${className}`}
        >
            <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0e2b4b]">
                Candidate Login
            </p>

            <p className="text-[14px] leading-[1.4] text-[#0e2b4b]">
                Already applied? Log in to track your application status,
                <br className="hidden sm:block" /> update your profile and manage your applications.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">
                <label className="flex flex-col gap-1">
                    <span className="text-[14px] leading-[1.4] text-[#0e2b4b]">Email Address</span>
                    <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="yourname@email.com"
                        className="w-full rounded-[8px] border border-white bg-white px-[13px] pb-3 pt-[11px] text-[14px] leading-[1.4] text-[#0e2b4b] outline-none placeholder:text-[#9ca3af] focus:border-[#0061af]"
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-[14px] leading-[1.4] text-[#0e2b4b]">Password</span>
                    <span className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            required
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            className="w-full rounded-[8px] border border-white bg-white pb-3 pl-[13px] pr-[37px] pt-[11px] text-[14px] leading-[1.4] text-[#0e2b4b] outline-none placeholder:text-[#9ca3af] focus:border-[#0061af]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((value) => !value)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            aria-pressed={showPassword}
                            className="absolute right-[10px] top-1/2 flex -translate-y-1/2 items-center justify-center p-1 transition-opacity hover:opacity-70"
                        >
                            <Image src={iconEye} alt="" className="size-4" />
                        </button>
                    </span>
                </label>

                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#0b1320] py-[10px] text-[14px] leading-[1.4] text-white transition-colors hover:bg-[#1c2636]"
                >
                    Login
                    <Image src={iconArrow} alt="" className="size-[14px]" />
                </button>

                <div className="flex items-center justify-between pt-1 text-[14px] leading-[1.4] text-[#0e2b4b]">
                    <button type="button" onClick={() => setNotice(NOT_LIVE_MESSAGE)} className="hover:underline">
                        Forgot Password?
                    </button>
                    <button type="button" onClick={() => setNotice(NOT_LIVE_MESSAGE)} className="hover:underline">
                        Create an Account
                    </button>
                </div>

                {notice ? (
                    <p role="status" className="rounded-[8px] bg-[#ecf2f9] px-3 py-2 text-[13px] leading-[1.4] text-[#0e2b4b]">
                        {notice}
                    </p>
                ) : null}
            </form>
        </div>
    );
}
