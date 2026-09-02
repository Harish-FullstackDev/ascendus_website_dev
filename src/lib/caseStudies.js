import { supabase } from "@/lib/supabaseClient";

export async function getAllCaseStudies() {
    const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .order("publish_date", { ascending: false });

    if (error) throw error;

    return (data || []).map((row) => ({ ...row, type: "Case Study" }));
}

export async function getCaseStudyBySlug(slug) {
    const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    return { ...data, type: "Case Study" };
}
