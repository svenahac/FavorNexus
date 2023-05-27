import { createClient } from "@supabase/supabase-js";

const	supabase =  createClient((process.env.REACT_APP_SB_URL as string),(process.env.REACT_APP_SB_ANON_API as string))

export { supabase }
