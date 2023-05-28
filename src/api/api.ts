import { CurrentSession, supabase } from "../functions/supabase";

async function getFavors(currentsession: CurrentSession) {

  const {data, error} = await supabase.from("favor").select("*");
  if (error == null) {
    console.log(data);
    return data;
  }
}

export { getFavors };
