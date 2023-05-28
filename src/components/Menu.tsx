import React from "react";

const Menu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md text-white focus:outline-none focus:text-white "
      >
        Home
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white focus:outline-none focus:text-white"
      >
        Leaderboard
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white  focus:outline-none focus:text-white "
      >
        Achievments
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white focus:outline-none focus:text-white "
      >
        Profile
      </a>
    </div>
  );
};

export default Menu;
