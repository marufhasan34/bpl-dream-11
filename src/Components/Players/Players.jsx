import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({PlayersPromise}) => {
    const players = use(PlayersPromise)
    return (
        <div>

            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;