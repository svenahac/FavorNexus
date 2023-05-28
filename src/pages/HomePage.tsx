import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FavorCard from "../components/FavorCard";
import { Favor } from "../api/types";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { getFavors } from "../api/api";
import React from "react";
import { CurrentSession, supabase } from "../functions/supabase";
import LoadingPage from "./LoadingPage";

const supa = await supabase.auth.getSession();
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [favors, setfavors] = useState<Array<any>>([]);
  const [user, setuser] = useState<string>("");
  let getuser = async () => {
    let promis = await supabase.auth.getUser();
    let data = promis.data.user?.id;

    if (data != undefined) {
      await setuser(data);
    }
    }
  getuser();
  const [favor_form, setFavor_form] = useState<Favor>({
  title: "",
  by_user: user,
  description: "",
  favos_price: 0,
  location: "",
  datetime: "YYYY-MM-DD",
  open_slots: 0,
  created_at: "",
  });

  

  
  const send_form = async () => {

    let data_in = {
  title: favor_form.title,
  by_user: user,
  description: favor_form.by_user,
  favos_price: favor_form.favos_price,
  datetime: favor_form.datetime,
  location: favor_form.favos_price,
  open_slots: favor_form.open_slots,
  created_at: favor_form.created_at,
    };
    
    console.log(data_in);
  
    const { data, error } = await supabase
      .from('favor')
      .insert([
  {title: favor_form.title},
  {by_user: user},
  {description: favor_form.by_user},
  {favos_price: favor_form.favos_price},
  {location: favor_form.location},
  {datetime: favor_form.datetime},
  {open_slots: favor_form.open_slots},
    ],{defaultToNull: true} )    
    console.log(data,error);
  }
  const handle_input_change = (event: any ) => {
    const { name, value } = event.target;
    setFavor_form((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  if (supa == null) {
    navigate("/login");
  }
  const loadFavors = async () => {
    let { data, error } = await supabase.from("favor").select("*");
    if (data != null) {
      let out = data;

      setfavors(out);
      return out.at;
    }

    // const {data, error} = await supabase.auth.getSession();
    // if (error) {
    //   console.log("ERROR LOAD FAVORS");
    // } else {
    //   if (data.session != null) {
    //     return await getFavors(data.session);
    //   }
    // }
  };

  let favorsPromise = async () => {
    let a = await loadFavors();
  } 
  
  useEffect(() => {
    getuser();
  }, []);
  useEffect(() => {
    favorsPromise();
  }, []);
  useEffect(() => {
    loadFavors();
  }, []);

  function renderFavors() {
    if (favors.length == 0) {
      return <div>No new Favors</div>;
    }
    return  favors?.map((favor) => {
      return (
        <FavorCard
          favor={favor}
          key={`${favor.location}-${favor.favos_price}-${favor.created_at}`}
        />
      );
    });
  }

    function moment(datetime: string) {
        throw new Error("Function not implemented.");
    }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col mt-4 items-center">
        <div className="flex flex-row justify-center w-5/6">
          <div className="flex flex-row justify-center w-1/2 lg:w-1/3">
            <button
              onClick={() => setShowModal(true)}
              className="h-12 w-4/6 xl:w-2/6  bg-gradient-to-r from-cyan-500 to-blue-500 mb-2 mr-2 rounded-xl text-center justify-center flex items-center align-center font-bold text-white"
            >
              Request Favor
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-gradient-to-r from-cyan-500 to-blue-500 outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Request Favor
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <form className="flex flex-col" onSubmit={()=>{setShowModal(false); send_form }}  >
                          <label className="text-lg font-semibold">Title</label>
                          <input
                            className="border-2 border-border-blue-500 rounded-md p-2 mb-2"
                            type="text"
                            name="title"
                            value={favor_form.title}
                            onChange={handle_input_change}
                            placeholder="Title"
                          />
                          <label className="text-lg font-semibold">
                            Description
                          </label>
                          <textarea
                            className="border-2 border-border-blue-500 rounded-md p-2 mb-2"
                            placeholder="Description"
                            name="description"
                            id="description"
                            value={favor_form.description}
                            onChange={handle_input_change}
                          />
                          <label className="text-lg font-semibold">Price</label>
                          <input
                            className="border-2 border-border-blue-500 rounded-md p-2 mb-2"
                            type="number"
                            placeholder="Price"
                            name="favos_price"
                            value={favor_form.favos_price}
                            onChange={handle_input_change}
                          />
                          <label className="text-lg font-semibold">Slots</label>
                          <input
                            className="border-2 border-border-blue-500 rounded-md p-2 mb-2"
                            type="number"
                            placeholder="Slots"
                            name="open_slots"
                            value={favor_form.open_slots}
                            onChange={handle_input_change}
                          />
                          <label className="text-lg font-semibold">Date</label>
                          <input
                            className="border-2 border-border-blue-500 rounded-md p-2 mb-2"
                            type="date"
                            placeholder="Date"
                            name="datetime"
                            value={favor_form.datetime}
                            onChange={handle_input_change}
                          />
                          <label className="text-lg font-semibold">
                            Location
                          </label>
                          <input
                            className="border-2 border-border-blue-500 rounded-md p-2 mb-2"
                            type="text"
                            placeholder="Location"
                            name="location"
                            value={favor_form.location}
                            onChange={handle_input_change}
                          />
                        </form>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                          
                        >
                          Request
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>

        <div className="min-h-screen w-5/6 rounded-md">
          <div id="favors">{renderFavors()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
