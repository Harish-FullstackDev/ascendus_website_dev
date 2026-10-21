// Saved jobs and submitted applications belong to the candidate account,
// which has no backend yet, so both live in this browser until it does.
// Storage can be blocked (private mode, site data cleared), so every read
// falls back to an empty list and every write is best effort.

export const SAVED_JOBS_KEY = "ascendus:savedJobs";
export const APPLICATIONS_KEY = "ascendus:applications";

function readList(key) {
    try {
        const list = JSON.parse(localStorage.getItem(key) ?? "[]");
        return Array.isArray(list) ? list : [];
    } catch {
        return [];
    }
}

function writeList(key, list) {
    try {
        localStorage.setItem(key, JSON.stringify(list));
    } catch {
        // Storage blocked: the change still holds for this visit.
    }
}

export function getSavedJobSlugs() {
    return readList(SAVED_JOBS_KEY);
}

export function setJobSaved(slug, saved) {
    const list = readList(SAVED_JOBS_KEY).filter((s) => s !== slug);
    writeList(SAVED_JOBS_KEY, saved ? [...list, slug] : list);
}

// Newest first. Each entry: { position, appliedAt (ISO), status }.
export function getApplications() {
    return readList(APPLICATIONS_KEY);
}

export function recordApplication(position) {
    const entry = { position, appliedAt: new Date().toISOString(), status: "Application Received" };
    writeList(APPLICATIONS_KEY, [entry, ...readList(APPLICATIONS_KEY)]);
}
