import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
      <a
        href="/home"
        className="active block md:inline-block px-3 py-2 rounded-md hover:text-primaryGreen focus:outline-none focus:text-primaryGreen "
      >
        Home
      </a>
      <a
        href="/leaderboard"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-primaryGreen focus:outline-none focus:text-primaryGreen"
      >
        Leaderboard
      </a>
      <a
        href="/request"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-primaryGreen  focus:outline-none focus:text-primaryGreen "
      >
        My Request
      </a>
      <a
        href="/profile"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-primaryGreen focus:outline-none focus:text-primaryGreen "
      >
        Profile
      </a>
    </div>
  );
};

export default Menu;
