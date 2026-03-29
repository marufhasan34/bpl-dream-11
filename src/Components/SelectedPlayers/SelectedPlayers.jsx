import React from "react";
import SelectedCard from "../Ui/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div className="mt-5">
      <div className="space-y-5">
        {selectedPlayers.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="font-bold text-3xl mb-3">No players selected yet</h2>
            <p className="text-gray-700 font-semibold">
              Go to Available tab to select players
            </p>
          </div>
        ) : (
          selectedPlayers.map((player, ind) => {
            return (
              <SelectedCard
                key={ind}
                player={player}
                handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
              ></SelectedCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
