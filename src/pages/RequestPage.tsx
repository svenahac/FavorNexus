import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { supabase } from "../functions/supabase";
import { Favor } from "../api/types";
import MyRequestCard from "../components/MyRequestCard";
import AppCard from "../components/AppCard";

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
  /*
  let applications: any = {
    description: "string",
    contact: "string",
  };

  function renderApplications() {
    return applications.map((application: any) => {
      return (
        <AppCard
          achiv={applications}
          key={`${applications.description}-${applications.contact}`}
        />
      );
    });
  }
  */
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
      </div>
      <Footer />
    </div>
  );
}
