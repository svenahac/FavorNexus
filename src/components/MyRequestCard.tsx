import { useState } from "react";
import { Favor } from "../api/types";

function MyRequestCard(props: any) {
  const favor: Favor = props.favor;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-center p-2 h-92">
      <div className="no-scrollbar flex flex-col w-full min-h-full border-2 overflow-y-scroll bg-gradient-to-r from-cyan-500 to-blue-500 font-normal text-white rounded-md">
        <div className="flex flex-row items-center ml-1 mt-1 ">
          <div className="ml-1 mr-1">
            <img
              className="h-8 w-8"
              src={require("../images/avatar.png")}
            ></img>
          </div>
          <div className="text-l">YOU need {favor.open_slots} helpers</div>
        </div>

        <div className="flex flex-col ml-1">
          <div className="ml-1 font-bold text-xl">{favor.title}</div>
          <div className="flex flex-row ml-1">
            <div className="mr-1">
              When & Where: {favor.datetime}, {favor.location}
            </div>
          </div>
        </div>

        <div className="ml-2 mt-2 h-40">{favor.description}</div>
        <div className="flex flex-row justify-between">
          <div className="w-1/3 flex flex-row items-center justify-start">
            <div className="ml-1 mr-1">
              <img
                className="h-10 w-14"
                src={require("../images/Favo.png")}
              ></img>
            </div>
            <div className="font-bold">{favor.favos_price}</div>
          </div>
          <div className="w-1/3 mb-1 mr-2 flex justify-end text-center">
            <button
              className="font-normal rounded-md p-2 bg-gradient-to-r from-green-500 to-green-600"
              onClick={() => setShowModal(true)}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyRequestCard;
