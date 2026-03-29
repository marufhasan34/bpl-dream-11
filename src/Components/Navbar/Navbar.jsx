import React from "react";
import dollarImg from '../../assets/dollar 1.png'
import navbarImg from '../../assets/logo.png'
const Navbar = ({coin}) => {
  return (
    <div className="bg-base-100 py-2 mt-3 sticky top-1 z-10">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"><img src={navbarImg} alt="" /></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">Fixture</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Schedules</a></li>
            <button className="flex font-bold text-xl gap-2 items-center border p-2 rounded-xl border-gray-300">
               {coin} Dollar
                <img className="w-7 h-full" src={dollarImg} alt="" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
