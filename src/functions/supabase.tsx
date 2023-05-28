import { createClient, Session } from "@supabase/supabase-js";


interface CurrentSession {
	session: Session;
	key: string;
}

const	supabase =  createClient((process.env.REACT_APP_SB_URL as string),(process.env.REACT_APP_SB_ANON_API as string))

export { supabase };
export type { CurrentSession };
