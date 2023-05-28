import { useState } from "react";
import { Favor } from "../api/types";

function AppCardConfirmed(props: any) {
  let [confirmed, setConfirmed] = useState(true);
  return (
    <div className="no-scrollbar overflow-y-scroll bg-gradient-to-r from-cyan-500 to-blue-500 font-normal border-2 w-full h-52 rounded-md mb-2 flex flex-col ">
      <div className="font-bold">@johndoe</div>
      <div className="w-full">
        Hello i want to help you clean your backyard and garden.
      </div>
      <div className="mt-1">Phone: 666-999-727</div>
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
export default AppCardConfirmed;
