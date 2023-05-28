import { Achivement } from "../api/types";
import AchivCard from "../components/AchivCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  let achivs: Achivement[] = [];

  function renderAchivs() {
    return achivs.map((achiv: Achivement) => {
      return (
        <AchivCard
          achiv={achiv}
          key={`${achiv.name}-${achiv.id}-${achiv.gain}`}
        />
      );
    });
  }
  return (
    <div className="m-0 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center text-black">
        <div id="about" className="w-5/6 mt-2 flex flex-col items-center">
          <div className=" w-52 h-52 mb-2 flex justify-center align-center items-center">
            <img
              className="h-48 w-48"
              src={require("../images/avatar.png")}
            ></img>
          </div>
          <div className=" w-full mb-2 md:w-96 h-52 flex flex-col items-center">
            <div>Name Surname</div>
            <div>@username</div>
            <div>Level: 1</div>
            <div className="flex flex-row items-center">
              <img
                className="h-10 w-14"
                src={require("../images/Favo.png")}
              ></img>
              <div className="font-bold">2000</div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div>XP:</div>
              <div className="w-5/6 h-6 bg-gray-600 rounded-full dark:bg-gray-700">
                <div className="h-6  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-1/2"></div>
              </div>
            </div>
            <div className="mt-2 mb-2 w-3/6 h-16  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex justify-center items-center font-bold text-white text-xl">
              CLAIM
              <img
                className="h-10 w-14"
                src={require("../images/Favo.png")}
              ></img>
            </div>
          </div>
          <div className="no-scrollbar overflow-y-scroll border-primary border-2 rounded-md w-full md:w-96 h-96 flex flex-col items-center p-2">
            <div id="achivs">{renderAchivs()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
