import { supabase } from "@/lib/supabaseClient";

export async function getAllWhitepapers() {
    const { data, error } = await supabase
        .from("white_papers")
        .select("*")
        .order("publish_date", { ascending: false });

    if (error) throw error;

    return (data || []).map((row) => ({ ...row, type: "Whitepaper" }));
}

export async function getWhitepaperBySlug(slug) {
    const { data, error } = await supabase
        .from("white_papers")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    return { ...data, type: "Whitepaper" };
}
