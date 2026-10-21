"use client";

import { useEffect, useState } from "react";

import { getSavedJobSlugs, setJobSaved } from "@/lib/candidateStorage";

// Saved jobs live in this browser until the candidate account has a backend;
// the Saved Jobs tab reads the same list.
export default function useSavedJob(slug) {
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setSaved(getSavedJobSlugs().includes(slug));
    }, [slug]);

    const toggle = () => {
        setSaved((was) => {
            setJobSaved(slug, !was);
            return !was;
        });
    };

    return [saved, toggle];
}
