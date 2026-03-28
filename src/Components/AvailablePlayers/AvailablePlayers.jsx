import React from "react";

import Card from "../Ui/Card";

const AvailablePlayers = ({ players }) => {
  console.log(players);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-5 lg:grid-cols-3">
        {players.map((player) => {
          return (
           <Card player={player}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
