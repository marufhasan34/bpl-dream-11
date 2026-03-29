import React from "react";

import Card from "../Ui/Card";

const AvailablePlayers = ({
  players,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-5 lg:grid-cols-3">
        {players.map((player) => {
          return (
            <Card
            key={player.playerName}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              player={player}
              setCoin={setCoin}
              coin={coin}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
