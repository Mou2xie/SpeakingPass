import { supabaseClient } from '$lib/server/supabase.js';

export async function load({ params }) {

    const { category, page } = params;

    let { data, error } = await supabaseClient
        .from('part2_topics')
        .select('id,topic')
        .eq('category', category)
        .eq('isOnline', true)
        .order('priority', { ascending: false })

    return {
        topicList: data,
        category,
        page
    }
}

export const prerender = true;
export const ssr = true