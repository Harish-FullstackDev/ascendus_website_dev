import { supabase } from "@/lib/supabaseClient";

function formatPostedAgo(dateString) {
    const posted = new Date(dateString);
    const days = Math.max(0, Math.floor((Date.now() - posted.getTime()) / (1000 * 60 * 60 * 24)));

    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    if (days < 7) return `${days} days ago`;

    const weeks = Math.floor(days / 7);
    if (weeks === 1) return "1 week ago";
    if (weeks < 5) return `${weeks} weeks ago`;

    const months = Math.floor(days / 30);
    if (months <= 1) return "1 month ago";
    return `${months} months ago`;
}

function mapJob(row) {
    return {
        slug: row.slug,
        title: row.title,
        company: row.company,
        location: row.location,
        modeOfWork: row.mode_of_work,
        typeOfWork: row.type_of_work,
        experienceLevel: row.experience_level,
        postedAgo: formatPostedAgo(row.posted_at),
        categories: row.categories || [],
        aboutJob: row.about_job,
        responsibilities: row.responsibilities || [],
        qualifications: row.qualifications || [],
    };
}

export async function getAllJobs() {
    const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("status", "Open")
        .order("posted_at", { ascending: false });

    if (error) throw error;

    return (data || []).map(mapJob);
}

export async function getJobBySlug(slug) {
    const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("slug", slug)
        .eq("status", "Open")
        .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    return mapJob(data);
}

export async function getOtherJobs(slug, limit = 3) {
    const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("status", "Open")
        .neq("slug", slug)
        .order("posted_at", { ascending: false })
        .limit(limit);

    if (error) throw error;

    return (data || []).map(mapJob);
}
