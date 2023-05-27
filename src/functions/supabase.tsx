import { createClient } from "@supabase/supabase-js";

const url = (process.env.REACT_APP_URL as string);
const api = (process.env.REACT_APP_ANON_API as string);

export function supa_connection() {
	return createClient(url,api)
}


export {}
