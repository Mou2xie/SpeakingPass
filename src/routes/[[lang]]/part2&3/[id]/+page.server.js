import { supabaseClient } from '$lib/server/supabase.js';

export async function load({ params }) {
    const { id } = params;

    let { data, error } = await supabaseClient
        .from('part2_topics')
        .select('topic,subTopics,sample_answer,part3')
        .eq('id', id)
        .is('isOnline', true)
        
    return {
        topic: data
    }
}

export const prerender = true;
export const ssr = true;