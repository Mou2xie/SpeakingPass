import { supabaseClient } from '$lib/server/supabase.js';

export async function load() {
    let { data, error } = await supabaseClient
        .from('part1_category')
        .select('category,isNew')
        .is('isOnline', true)
        .order('priority', { ascending: false });

    return { categoryList: data }
}

export const prerender = true;
export const ssr = true;