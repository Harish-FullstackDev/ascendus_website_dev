import { NextResponse } from "next/server";
import "@/lib/pdfPolyfill";
import { PDFParse } from "pdf-parse";
import mammoth from "mammoth";
 
export const runtime = "nodejs";
 
const EXPERIENCE_LEVELS = ["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"];
 
const US_STATES = new Set([
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT",
    "VA", "WA", "WV", "WI", "WY", "DC",
]);
 
const COUNTRY_NAMES = new Set([
    "INDIA", "USA", "UNITED STATES", "UNITED STATES OF AMERICA", "UK", "UNITED KINGDOM",
    "CANADA", "AUSTRALIA", "GERMANY", "FRANCE", "SINGAPORE", "UAE", "UNITED ARAB EMIRATES",
    "NETHERLANDS", "IRELAND", "NEW ZEALAND", "SOUTH AFRICA", "BRAZIL", "MEXICO", "JAPAN",
    "CHINA", "SPAIN", "ITALY", "SWEDEN", "SWITZERLAND", "PHILIPPINES", "PAKISTAN",
    "BANGLADESH", "SRI LANKA", "NEPAL", "MALAYSIA", "INDONESIA",
]);
 
// International dialing codes, longest-prefix first so e.g. "971" (UAE) is
// checked before a shorter unrelated code could accidentally match.
const PHONE_COUNTRY_CODES = [
    ["971", "United Arab Emirates"], ["977", "Nepal"], ["880", "Bangladesh"],
    ["94", "Sri Lanka"], ["92", "Pakistan"], ["91", "India"], ["86", "China"],
    ["81", "Japan"], ["65", "Singapore"], ["64", "New Zealand"], ["63", "Philippines"],
    ["62", "Indonesia"], ["61", "Australia"], ["60", "Malaysia"], ["55", "Brazil"],
    ["52", "Mexico"], ["49", "Germany"], ["46", "Sweden"], ["44", "United Kingdom"],
    ["41", "Switzerland"], ["39", "Italy"], ["34", "Spain"], ["33", "France"],
    ["27", "South Africa"], ["1", "United States"],
];
 
const ROLE_KEYWORDS = /\b(intern(?:ship)?s?|developer|engineer|analyst|manager|designer|consultant|lead|architect|specialist|coordinator|associate|officer|scientist|administrator)\b/i;
 
// PDF/DOCX text extraction can reorder content relative to the visual layout
// (e.g. all section headers pulled to the front) and different resume
// templates use very different formats for the same field. Every heuristic
// below is deliberately conservative: when it can't find a confident,
// well-bounded match it returns an empty value rather than guessing from
// loosely related text.
 
function extractEmail(text) {
    const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    return match ? match[0] : "";
}
 
function extractPhone(text) {
    const match = text.match(/(\+?\d{1,3}[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/);
    return match ? match[0].trim() : "";
}
 
function countryFromPhone(phone) {
    if (!phone || !phone.trim().startsWith("+")) return "";
    const digits = phone.replace(/^\+/, "").replace(/\D/g, "");
    for (const [code, country] of PHONE_COUNTRY_CODES) {
        if (digits.startsWith(code)) return country;
    }
    return "";
}
 
// Resume section headers are almost always multi-word ALL CAPS lines
// ("TECHNICAL SKILLS", "MAJOR PROJECTS AND INTERNSHIP"). A lone all-caps
// word is more often a skill abbreviation (SQL, AWS, CSS) than a header,
// so only treat single-word all-caps lines as headers when they're a
// well-known section title. This check is intentionally NOT used to filter
// name candidates, since candidate names are frequently rendered in all
// caps too ("HARISH D") and would otherwise be misclassified as headers.
const COMMON_SINGLE_WORD_HEADERS = new Set([
    "EXPERIENCE", "EDUCATION", "SUMMARY", "SKILLS", "OBJECTIVE", "STRENGTHS",
    "PROJECTS", "CERTIFICATIONS", "CERTIFICATES", "ACHIEVEMENTS", "INTERNSHIP", "INTERNSHIPS",
    "REFERENCES", "LANGUAGES", "AWARDS", "PUBLICATIONS", "PROFILE", "CONTACT",
    "HOBBIES", "INTERESTS", "QUALIFICATIONS", "ACTIVITIES", "VOLUNTEER",
    "TRAINING", "COURSES", "EMPLOYMENT", "FRESHER", "STUDENT", "GRADUATE", "TRAINEE",
]);
 
function isSectionHeader(line) {
    if (line.length > 50 || !/[A-Z]/.test(line) || /[a-z]/.test(line)) return false;
    if (!/^[A-Z0-9][A-Z0-9\s&,\-/]*$/.test(line)) return false;
 
    const words = line.split(/\s+/).filter(Boolean);
    return words.length >= 2 || COMMON_SINGLE_WORD_HEADERS.has(words[0]);
}
 
// A narrower, keyword-based header check used only to keep resume section
// titles out of name candidates — deliberately not "any all-caps line",
// since candidate names are commonly all caps too.
const HEADER_KEYWORD_REGEX = /\b(SUMMARY|OBJECTIVE|EXPERIENCE|EDUCATION|SKILL|PROJECT|CERTIF|ACHIEVEMENT|STRENGTH|INTEREST|HOBB|REFERENCE|LANGUAGE|AWARD|PUBLICATION|PROFILE|CONTACT|QUALIFICATION|ACTIVIT|VOLUNTEER|TRAINING|COURSE|EMPLOYMENT|ACADEMIC|PERSONAL|DETAIL|INTERNSHIP)\b/i;
 
function toTitleCase(str) {
    return str
        .split(/\s+/)
        .map((w) => (w.length ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w))
        .join(" ");
}
 
// Words that show up in ordinary prose fragments extracted mid-sentence
// (articles, prepositions, conjunctions) — a real name never contains one,
// so this is a much stronger signal than "looks like 2-4 words".
const NAME_STOPWORDS = new Set([
    "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for", "of",
    "with", "is", "are", "was", "were", "be", "been", "this", "that", "these",
    "those", "from", "by", "as", "it", "its", "your", "our", "their", "his", "her",
]);
 
// Degree/tech/institution words that can otherwise slip through the "2-4
// Capitalized Words" shape (e.g. "Advance Java.", "St Joseph's College").
const NAME_FALSE_POSITIVE_HINTS = /\b(java|python|php|html|css|mysql|sql|advance|basic|intermediate|beginner|course|certificate|certification|degree|bachelor|master|diploma|internship|project|website|application|api|framework|javascript|react|node|developer|engineer|analyst|manager|college|university|institute|school|academy)\b/i;
 
function looksLikeName(line) {
    if (/[@\d:]/.test(line) || line.length > 40) return false;
    if (HEADER_KEYWORD_REGEX.test(line)) return false;
    if (NAME_FALSE_POSITIVE_HINTS.test(line)) return false;
 
    const words = line.split(/\s+/).filter(Boolean);
    if (words.length < 2 || words.length > 4) return false;
 
    return words.every((w) => {
        if (!/^[A-Za-z.'-]+$/.test(w) || !/^[A-Z]/.test(w)) return false;
        return !NAME_STOPWORDS.has(w.replace(/[.'-]/g, "").toLowerCase());
    });
}
 
function nameFromLine(line) {
    const words = line.replace(/\.$/g, "").split(/\s+/).filter(Boolean);
    return { firstName: toTitleCase(words[0]), lastName: toTitleCase(words.slice(1).join(" ")) };
}
 
// Anchor on the email/phone line (the contact block sits together in most
// resumes) and look at the couple of lines around it for the actual name,
// since that's far more reliable than a document-wide search when it's
// available. Some templates, though, push the name/title banner to a wholly
// unrelated position in the extracted text order (e.g. rendered last, after
// every section) — when nothing turns up near the contact block, fall back
// to scanning the entire document and picking the shortest valid candidate,
// since a real name is almost always shorter than any other phrase that
// happens to pass the same shape check.
function extractName(lines, email, phone) {
    const anchorIndex = lines.findIndex((l) => (email && l.includes(email)) || (phone && l.includes(phone)));
    if (anchorIndex !== -1) {
        for (const i of [anchorIndex - 1, anchorIndex + 1, anchorIndex - 2, anchorIndex + 2]) {
            const line = lines[i];
            if (line && looksLikeName(line)) return nameFromLine(line);
        }
    }
 
    const candidates = lines.filter(looksLikeName);
    if (candidates.length) {
        candidates.sort((a, b) => a.length - b.length);
        return nameFromLine(candidates[0]);
    }
 
    return { firstName: "", lastName: "" };
}
 
// Tiered, conservative address extraction: only accept a match when a line
// unambiguously encodes a full location, never a substring match against
// arbitrary sentences (that's what previously turned "...skilled in HTML,
// CSS..." into city "...HTML", state "CS").
function extractAddress(lines, phone) {
    const result = { addressLine1: "", city: "", state: "", zip: "", country: "" };
    const withStreetUS = /^(.*),\s*([A-Za-z][A-Za-z\s]{1,25}),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/;
    const cityOnlyUS = /^([A-Za-z][A-Za-z\s]{1,25}),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/;
 
    // Tier 1: strict US "[Street,] City, ST ZIP"
    for (const line of lines) {
        const m1 = line.match(withStreetUS);
        if (m1 && US_STATES.has(m1[3])) {
            result.addressLine1 = m1[1].trim();
            result.city = m1[2].trim();
            result.state = m1[3];
            result.zip = m1[4];
            result.country = "United States";
            return result;
        }
        const m2 = line.match(cityOnlyUS);
        if (m2 && US_STATES.has(m2[2])) {
            result.city = m2[1].trim();
            result.state = m2[2];
            result.zip = m2[3];
            result.country = "United States";
            return result;
        }
    }
 
    // Tier 1.5: Indian-style "City - PINCODE" (6 digits), e.g. "Pondicherry - 605001."
    // The street address commonly wraps across the 1-2 lines just above it
    // (a template column-width artifact), so pull those in too when present.
    const indiaCityZip = /^([A-Za-z][A-Za-z\s]{1,30})\s*[-,–—]\s*(\d{6})\.?$/;
    for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(indiaCityZip);
        if (!m) continue;
        const streetParts = [];
        for (let j = Math.max(0, i - 2); j < i; j++) {
            const prev = lines[j];
            if (!prev || HEADER_KEYWORD_REGEX.test(prev) || /[@]/.test(prev)) continue;
            streetParts.push(prev.replace(/,\s*$/, ""));
        }
        result.addressLine1 = streetParts.join(", ");
        result.city = m[1].trim();
        result.zip = m[2];
        result.country = "India";
        return result;
    }
 
    // Tier 2: an explicitly labeled address/location line, e.g. "Address: 12 Main St, Chennai, India 600001"
    const labeledLine = lines.find((l) => /^(address|location|based in)\s*:/i.test(l));
    if (labeledLine) {
        const value = labeledLine.replace(/^(address|location|based in)\s*:\s*/i, "").trim();
        const parts = value.split(",").map((p) => p.trim()).filter(Boolean);
        if (parts.length >= 2) {
            result.city = parts[parts.length - 2];
            const last = parts[parts.length - 1];
            const zipMatch = last.match(/\d{4,6}/);
            if (zipMatch) result.zip = zipMatch[0];
            result.country = last.replace(/\d{4,6}/, "").trim() || last;
            if (parts.length > 2) result.addressLine1 = parts.slice(0, parts.length - 2).join(", ");
        } else if (parts.length === 1) {
            result.city = parts[0];
        }
        if (!result.country) result.country = countryFromPhone(phone);
        return result;
    }
 
    // Tier 3: a bare "City, Country" line near the top contact block only —
    // never searched deep in the body, to avoid matching unrelated text.
    for (const line of lines.slice(0, 6)) {
        const m3 = line.match(/^([A-Za-z][A-Za-z\s]{1,25}),\s*([A-Za-z][A-Za-z\s]{2,25})$/);
        if (m3 && COUNTRY_NAMES.has(m3[2].trim().toUpperCase())) {
            result.city = m3[1].trim();
            result.country = toTitleCase(m3[2].trim());
            return result;
        }
    }
 
    // No address found at all — still record country if the phone's
    // international dialing code makes it unambiguous.
    result.country = countryFromPhone(phone);
    return result;
}
 
// If a line is "Label: item, item, item", return just the item list —
// used both to collect skills under a heading and as a heading-independent
// fallback signal (see extractSkills).
function stripLabel(line) {
    const m = line.match(/^[•\-*]?\s*([A-Za-z][A-Za-z\s]{2,35}):\s*(.+)$/);
    return m ? m[2].trim() : line.replace(/^[•\-*]\s*/, "");
}
 
// Resumes commonly spread skills across two different shapes in the same
// document — a "Skills" heading followed by bullets, AND separate labeled
// lines elsewhere ("Frontend: HTML, CSS", "Backend: PHP") — so both passes
// always run and get merged, rather than treating one as a fallback for the
// other. Both passes read the whole document; duplicate individual skill
// tokens (not just duplicate whole lines) are then removed at the end.
function extractSkills(lines) {
    const collected = [];
 
    // Pass 1: a "Skills"-style heading, followed by items until the next section.
    const skillsHeadingWord = /\bskills?\b/i;
    let collecting = false;
    for (const line of lines) {
        if (!collecting && isSectionHeader(line) && skillsHeadingWord.test(line)) {
            collecting = true;
            continue;
        }
        if (collecting) {
            if (isSectionHeader(line)) { collecting = false; continue; }
            if (looksLikeName(line)) continue; // stray name/banner line caught mid-section
            collected.push(stripLabel(line).replace(/\.$/, ""));
        }
    }
 
    // Pass 2: "Label: item, item, item" lines anywhere in the document
    // (e.g. "Programming Languages: C, C++, Java", "Frontend: HTML, CSS").
    // This runs across the WHOLE document (not just inside a Skills
    // section), so the label must be an exact match against a known
    // skill-category vocabulary — a substring/keyword test would also match
    // unrelated bullet sub-labels from job descriptions, e.g. "Backend &
    // Security: Built a scalable FastAPI..." (contains "Backend").
    const SKILL_CATEGORY_LABELS = new Set([
        "programming language", "programming languages", "languages", "languages known",
        "web technology", "web technologies", "web development", "mobile development",
        "frontend", "front end", "backend", "back end", "full stack",
        "database", "databases", "data base", "data bases",
        "version control", "tools", "frameworks", "libraries", "platforms",
        "skills", "technical skills", "computer skills", "key skills", "core skills",
        "data science", "soft skills", "soft skill", "stack",
    ]);
    for (const line of lines) {
        const m = line.match(/^[•\-*]?\s*([A-Za-z][A-Za-z\s]{2,35}):\s*(.+)$/);
        if (!m) continue;
        const label = m[1].trim().toLowerCase().replace(/\s+/g, " ");
        const rest = m[2].trim().replace(/\.$/, "");
        if (!SKILL_CATEGORY_LABELS.has(label)) continue;
        collected.push(rest);
    }
 
    if (!collected.length) return "";
 
    const seen = new Set();
    const tokens = collected
        .flatMap((entry) => entry.split(","))
        .map((t) => t.trim())
        .filter(Boolean)
        .filter((t) => {
            const key = t.toLowerCase();
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
 
    return tokens.join(", ");
}
 
function extractExperience(text) {
    const match = text.match(/(\d{1,2})\+?\s*(?:-\s*(\d{1,2})\s*)?years?/i);
    if (!match) return "";
 
    const years = parseInt(match[2] || match[1], 10);
    if (years <= 1) return EXPERIENCE_LEVELS[0];
    if (years <= 3) return EXPERIENCE_LEVELS[1];
    if (years <= 5) return EXPERIENCE_LEVELS[2];
    if (years <= 10) return EXPERIENCE_LEVELS[3];
    return EXPERIENCE_LEVELS[4];
}
 
function candidateFromSegments(segments) {
    if (segments.length < 2) return null;
    let titleIdx = segments.findIndex((s) => ROLE_KEYWORDS.test(s));
    if (titleIdx === -1) titleIdx = segments.length - 1;
    const jobTitle = segments[titleIdx];
    const employer = segments.filter((_, i) => i !== titleIdx).join(", ");
    return { jobTitle, employer };
}
 
// Different resume templates order "Title" and "Company" differently, and
// use a comma or a dash as the separator inconsistently (sometimes both, in
// different roles — e.g. "Company, Title - Seniority" vs "Title – Company,
// City"). Rather than assume one fixed format, try every separator present
// and keep whichever split produces the shortest job title: a correct split
// yields a short, real title, while a wrong split glues the title and
// company together into a long string.
function splitTitleEmployer(rawLine) {
    const line = rawLine
        .replace(/\s+\d{1,2}\/\d{4}(?:\s*[-–—]\s*\d{1,2}\/\d{4})?\s*\|.*$/, "")
        .replace(/\(\s*[A-Za-z]+\.?\s+\d{4}\s*\)\s*$/, "")
        .trim();
 
    const candidates = [];
    if (/[-–—]/.test(line)) {
        candidates.push(candidateFromSegments(line.split(/\s*[-–—]\s*/).map((s) => s.trim()).filter(Boolean)));
    }
    if (line.includes(",")) {
        const idx = line.indexOf(",");
        candidates.push(candidateFromSegments([line.slice(0, idx).trim(), line.slice(idx + 1).trim()]));
    }
    if (/\bat\b/i.test(line)) {
        const parts = line.split(/\s+at\s+/i);
        if (parts.length === 2) candidates.push({ jobTitle: parts[0].trim(), employer: parts[1].trim() });
    }
 
    const valid = candidates.filter(Boolean);
    if (!valid.length) return null;
 
    valid.sort((a, b) => a.jobTitle.split(/\s+/).length - b.jobTitle.split(/\s+/).length);
    return valid[0];
}
 
// Try a proper "Experience" section heading first (matched loosely, so
// "PROFESSIONAL EXPERIENCE" / "WORK EXPERIENCE" both count, not just a line
// starting with the word). Many resumes fold work history into a broader
// "Projects & Internships" style section instead, so fall back to scanning
// for a role-keyword line with a separator.
function extractJobTitleAndEmployer(lines) {
    const expHeadingIndex = lines.findIndex((l) => isSectionHeader(l) && /\bexperience\b/i.test(l));
    if (expHeadingIndex !== -1) {
        for (let i = expHeadingIndex + 1; i < Math.min(lines.length, expHeadingIndex + 6); i++) {
            const line = lines[i];
            if (!line || isSectionHeader(line)) break;
            const result = splitTitleEmployer(line);
            if (result) return result;
            return { jobTitle: line, employer: "" };
        }
    }
 
    // Deliberately stricter than the heading-based path above: a bare comma
    // is too common in ordinary prose (e.g. a summary sentence listing
    // skills) and would false-match before reaching the real job line, so
    // this fallback only fires on an explicit dash separator.
    const roleLine = lines.find((l) => ROLE_KEYWORDS.test(l) && /[-–—]/.test(l));
    if (roleLine) {
        const result = splitTitleEmployer(roleLine);
        if (result) return result;
    }
 
    return { jobTitle: "", employer: "" };
}
 
const EMAIL_PROVIDER_DOMAINS = /\b(gmail|yahoo|outlook|hotmail|icloud|protonmail|aol|live|rediffmail|zoho)\.com\b/i;
 
function extractUrls(text) {
    const matches = text.match(/\b(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\/[^\s|,]*)?/g) || [];
    return matches
        .map((u) => u.replace(/[.,;)]+$/, ""))
        .filter((u) => !EMAIL_PROVIDER_DOMAINS.test(u))
        .filter((u) => /^https?:\/\//i.test(u) || /^www\./i.test(u) || u.includes("/"));
}
 
function withProtocol(url) {
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}
 
function extractLinkedIn(text) {
    const found = extractUrls(text).find((u) => /linkedin\.com/i.test(u));
    return found ? withProtocol(found) : "";
}
 
function extractPortfolio(text) {
    const urls = extractUrls(text);
    const found = urls.find((u) => /github\.com/i.test(u)) || urls.find((u) => !/linkedin\.com/i.test(u));
    return found ? withProtocol(found) : "";
}
 
export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") || formData.get("resume");
 
        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }
 
        const fileName = file.name || "resume.pdf";
        const fileSize = file.size;
 
        const isPdf = /\.pdf$/i.test(fileName);
        const isDocx = /\.docx$/i.test(fileName);
        const isLegacyDoc = /\.doc$/i.test(fileName) && !isDocx;
 
        if (!isPdf && !isDocx && !isLegacyDoc) {
            return NextResponse.json({ error: "Invalid file type. Only PDF and Word documents are allowed." }, { status: 400 });
        }
 
        if (fileSize > 5 * 1024 * 1024) {
            return NextResponse.json({ error: "File exceeds maximum size of 5MB." }, { status: 400 });
        }
 
        if (isLegacyDoc) {
            return NextResponse.json(
                { error: "Legacy .doc files aren't supported for auto-fill. Please upload a PDF or .docx file, or continue and fill the form manually." },
                { status: 422 }
            );
        }
 
        const buffer = Buffer.from(await file.arrayBuffer());
 
        let rawText = "";
        if (isPdf) {
            const parser = new PDFParse({ data: buffer });
            try {
                const result = await parser.getText();
                rawText = result.text || "";
            } finally {
                await parser.destroy();
            }
        } else {
            const result = await mammoth.extractRawText({ buffer });
            rawText = result.value || "";
        }
 
        console.log(`[parse-resume] Extracted ${rawText.length} chars from "${fileName}"`);
        console.log(`[parse-resume] Raw text (first 2000 chars):\n${rawText.slice(0, 2000)}`);
 
        if (!rawText || rawText.trim().length < 20) {
            return NextResponse.json(
                { error: "Couldn't extract readable text from this file. It may be scanned or image-based. Please continue and fill the form manually." },
                { status: 422 }
            );
        }
 
        const lines = rawText
            .split(/\r?\n/)
            .map((l) => l.trim())
            .filter((l) => l && !/^--\s*\d+\s*of\s*\d+\s*--$/i.test(l)); // strip pdf-parse page separators
 
        // Each field is extracted independently and defensively: a bad match
        // (or an unexpected edge case in one heuristic) on a resume with an
        // unusual layout should never blank out every other field.
        const safe = (fn, fallback) => {
            try {
                return fn();
            } catch (err) {
                console.error("[parse-resume] field extraction failed:", err);
                return fallback;
            }
        };
 
        const email = safe(() => extractEmail(rawText), "");
        const phone = safe(() => extractPhone(rawText), "");
        const { firstName, lastName } = safe(() => extractName(lines, email, phone), { firstName: "", lastName: "" });
        const address = safe(() => extractAddress(lines, phone), { addressLine1: "", city: "", state: "", zip: "", country: "" });
        const keySkills = safe(() => extractSkills(lines), "");
        const experience = safe(() => extractExperience(rawText), "");
        const { jobTitle, employer } = safe(() => extractJobTitleAndEmployer(lines), { jobTitle: "", employer: "" });
        const linkedin = safe(() => extractLinkedIn(rawText), "");
        const portfolio = safe(() => extractPortfolio(rawText), "");
 
        const extractedData = {
            firstName,
            lastName,
            email,
            phone,
            addressLine1: address.addressLine1,
            city: address.city,
            state: address.state,
            zip: address.zip,
            country: address.country,
            experience,
            jobTitle,
            employer,
            keySkills,
            linkedin,
            portfolio,
            coverLetter: "",
        };
 
        console.log("[parse-resume] Parsed data:", JSON.stringify(extractedData, null, 2));
 
        return NextResponse.json({
            success: true,
            data: extractedData,
        });
 
    } catch (error) {
        console.error("Resume parsing error:", error);
        return NextResponse.json({ error: "Failed to parse resume: " + error.message }, { status: 500 });
    }
}
 
 