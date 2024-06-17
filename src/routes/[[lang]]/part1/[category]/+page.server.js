import { supabaseClient } from '$lib/server/supabase.js';

export async function load({ params }) {
    const { category } = params;

    let { data, error } = await supabaseClient
        .from('part1_topics')
        .select('topic,sample_answer')
        .is('isOnline', true)
        .eq('category', category)
        .order('priority', { ascending: false })

    return {
        category,
        topicList: data
    }
}

export const prerender = true;
export const ssr = true;

