import { useNavigate } from "react-router-dom";
import "../assets/HomePage.css";
import Navbar from "../components/Navbar";
import FavorCard from "../components/FavorCard";
import { Favor } from "../api/types";
import { get } from "http";
import { useEffect, useState } from "react";
import { getFavors } from "../api/api";
import Footer from "../components/Footer";

export default function HomePage() {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  let favors: Favor[] = [
    {
      id: 1,
      title: "Favor 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nostrum, voluptatum, quibusdam, quia voluptates voluptate quos quas fkgdmdfkgmfgk kgmsd kgmdsk gmsdkg d dkgmsdmk gmdskgsdm kgmd",
      price: 2400,
      slots: 4,
      datetime: "25.7.2023",
      created_at: "2h ago",
      location: "Koper",
      byUser: "4",
    },
    {
      id: 2,
      title: "Obisk Vilijeve mame",
      description:
        "Obisk starejše osebe, ki živi sama in ji je dolgčas. Obisk bi trajal 2 uri. Oseba živi v centru Ljubljane. Oseba je stara 80 let in je zelo prijazna.",
      price: 400,
      slots: 1,
      datetime: "5.8.2023",
      created_at: "5h ago",
      location: "Ljubljana",
      byUser: "1",
    },
  ];

  const loadFavors = async () => {
    favors = await getFavors();
  };
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadFavors();
  }, []);

  function renderFavors() {
    return favors.map((favor: Favor) => {
      return (
        <FavorCard
          favor={favor}
          key={`${favor.location}-${favor.price}-${favor.created_at}`}
        />
      );
    });
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col mt-4 items-center">
        <div className="flex flex-row w-5/6">
          <div className="flex flex-row w-1/2 lg:w-1/3">
            <button
              onClick={() => setShowModal(true)}
              className="h-12 w-3/6 xl:w-2/6 bg-primary mb-2 mr-2 rounded-xl text-center justify-center flex items-center align-center font-bold text-white"
            >
              Request Favor
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                        <form className="flex flex-col">
                          <label className="text-lg font-semibold">Title</label>
                          <input
                            className="border-2 border-primary rounded-md p-2 mb-2"
                            type="text"
                            placeholder="Title"
                          />
                          <label className="text-lg font-semibold">
                            Description
                          </label>
                          <textarea
                            className="border-2 border-primary rounded-md p-2 mb-2"
                            placeholder="Description"
                          />
                          <label className="text-lg font-semibold">Price</label>
                          <input
                            className="border-2 border-primary rounded-md p-2 mb-2"
                            type="number"
                            placeholder="Price"
                          />
                          <label className="text-lg font-semibold">Slots</label>
                          <input
                            className="border-2 border-primary rounded-md p-2 mb-2"
                            type="number"
                            placeholder="Slots"
                          />
                          <label className="text-lg font-semibold">Date</label>
                          <input
                            className="border-2 border-primary rounded-md p-2 mb-2"
                            type="date"
                            placeholder="Date"
                          />
                          <label className="text-lg font-semibold">
                            Location
                          </label>
                          <input
                            className="border-2 border-primary rounded-md p-2 mb-2"
                            type="text"
                            placeholder="Location"
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
                          className="bg-primary text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowModal(false)}
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

            <button className="h-12 w-12 bg-primary rounded-full flex items-center">
              <svg
                className="h-9 w-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-h-screen w-5/6 border-primary border-2 mr-2 ml-2 rounded-md">
          <div id="favors">{renderFavors()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
