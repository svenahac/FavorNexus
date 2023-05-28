import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { supabase } from "../functions/supabase";
import { Favor } from "../api/types";
import MyRequestCard from "../components/MyRequestCard";
import AppCard from "../components/AppCard";
import AppCardConfirmed from "../components/AppCardConfirmed";

export default function RequestPage() {
  let favor: Favor = {
    id: 0,
    title: "string",
    by_user: "string",
    description: "string",
    favos_price: 0,
    location: "string",
    datetime: "string",
    open_slots: 0,
    created_at: "string",
  };
  const [user, setUser] = useState<string>("");
  const [data, set_data] = useState<any>(null);

  let get_user = async () => {
    let user_promise = await supabase.auth.getUser();
    let data = user_promise.data.user?.id;
    if (data != undefined) {
      await setUser(data);
    }
  };
  get_user();

  useEffect(() => {
    get_user();
  }, []);

  useEffect(() => {
    supa();
  }, []);

  let supa = async () => {
    if (user != "") {
      set_data(await supabase.from("favor").select("*").eq("by_user", user));
    }
  };
  supa();
  console.log(data);

  if (data != null && favor != undefined) {
    favor = data.data[0];
  }

  return (
    <div>
      <Navbar />
      <div>
        <MyRequestCard
          favor={favor}
          key={`${favor.location}-${favor.favos_price}-${favor.created_at}`}
        ></MyRequestCard>
      </div>
      <hr className="bg-gradient-to-r from-cyan-500 to-blue-500 h-0.5"></hr>
      <h1 className="text-primaryGreen font-bold text-xl text-center mt-1">
        APPLICATIONS TO YOUR REQUEST
      </h1>
      <div className="no-scrollbar overflow-y-scroll rounded-md w-full min-h-screen flex flex-col items-center mt-2 p-2">
        <AppCard />
        <AppCardConfirmed />
      </div>
      <Footer />
    </div>
  );
}
