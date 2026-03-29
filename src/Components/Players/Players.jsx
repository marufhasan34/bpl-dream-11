import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ PlayersPromise, setCoin, coin }) => {
  const players = use(PlayersPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-6">
        {selectedType === "available" ? (
          <h2 className="font-bold text-2xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-2xl">
            Selected Players ({selectedPlayers.length}/ {players.length})
          </h2>
        )}
        <div className="flex">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {selectedType === "available" ? (
          <AvailablePlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
            players={players}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
            coin={coin}
            setCoin={setCoin}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default Players;
