import { useNavigate } from "react-router-dom";
import "../assets/HomePage.css";
import Navbar from "../components/Navbar";
import FavorCard from "../components/FavorCard";
import { Favor } from "../api/types";
import { get } from "http";
import { useEffect } from "react";
import { getFavors } from "../api/api";

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
    },
  ];

  const loadFavors = async () => {
    favors = await getFavors();
  };

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
            <button className="h-12 w-3/6 xl:w-2/6 bg-primary mb-2 mr-2 rounded-xl text-center justify-center flex items-center align-center font-bold text-white">
              Request Favor
            </button>
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
    </div>
  );
}
