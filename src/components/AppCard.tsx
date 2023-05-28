import { useState } from "react";
import { Favor } from "../api/types";

function AppCard(props: any) {
  let [confirmed, setConfirmed] = useState(false);
  return (
    <div className="no-scrollbar overflow-y-scroll bg-gradient-to-r from-cyan-500 to-blue-500 font-normal border-2 w-full h-52 rounded-md mb-2 flex flex-col ">
      <div className="font-bold">@tewok</div>
      <div className="w-full">
        Hi i saw your post and i want to come help you with your garden i have a
        lot of experience with gardening and i would love to help you out.
      </div>
      <div className="mt-1">Phone: 123-456-789</div>
      {confirmed ? (
        <div className="flex flex-row justify-center space-x-1">
          <div className="p-2 rounded-md bg-gradient-to-r from-green-500 to-green-600">
            <button>Pay</button>
          </div>
          <div className="p-2 rounded-md bg-gradient-to-r from-red-500 to-red-600">
            <button>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center space-x-1">
          <div className="p-2 rounded-md bg-gradient-to-r from-green-500 to-green-600">
            <button>Accept</button>
          </div>
          <div className="p-2 rounded-md bg-gradient-to-r from-red-500 to-red-600">
            <button>Decline</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default AppCard;
