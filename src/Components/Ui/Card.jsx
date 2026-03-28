import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
const Card = ({ player }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="w-full h-64 object-cover" src={player.playerImage} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser />
          {player.playerName}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn btn-ghost">{player.playerType}</button>
        </div>
        <div className="divider"></div>
        <h2 className="font-bold">Rating : ({player.rating})</h2>
        <div className="flex justify-between gap-4">
          <p>{player.battingStyle}</p>
          <p className="text-gray-400 text-right">{player.bowlingStyle}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price :{player.price}</p>
          <button className="btn  btn-ghost">Choose player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
