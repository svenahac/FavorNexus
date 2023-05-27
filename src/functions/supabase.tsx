import { createClient } from "@supabase/supabase-js";

const url = (process.env.REACT_APP_SB_URL as string);
const api = (process.env.REACT_APP_SB_ANON_API as string);

export function supa_connection() {
	console.log(url, api);
	return createClient(url,api)
}


export {}
