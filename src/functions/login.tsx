
import { createClient } from "@supabase/supabase-js";

const url: string = (process.env.REACT_APP_SB_URL as string);
const api: string = (process.env.REACT_APP_SB_ANON_API as string);


 export async function check_login(req: any) {
 let sb = createClient(url, api);
 
  console.log(req)
}

