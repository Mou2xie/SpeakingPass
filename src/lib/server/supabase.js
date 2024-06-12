import { SUPABASEURL, SUPABASEKEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(SUPABASEURL, SUPABASEKEY);

export { supabaseClient }