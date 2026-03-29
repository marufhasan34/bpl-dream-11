import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
  return (
    <div className="flex items-center gap-6 justify-between p-10 rounded-2xl border">
      <div className="flex items-center gap-6">
        <img
          className="h-24 w-auto rounded-lg"
          src={player.playerImage}
          alt={player.playerName}
        />
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-2xl">
            <FaRegUser />
            {player.playerName}
          </h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <button
        onClick={() => handleDeleteSelectedPlayer(player)}
        className="btn text-red-600"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedCard;
