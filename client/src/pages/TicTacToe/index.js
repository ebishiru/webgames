import { useState } from "react";

import Board from "./Board";

const PLAYER_1 = "X";
const PLAYER_2 = "O";

const TicTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null)); 
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)

const handleClick = (index) => {
    if (tiles[index] !== null) {
        return;
    }

    const newTiles = [...tiles];
    newTiles[index] = currentPlayer;
    setTiles(newTiles);
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    
    
    
}


    return (
        <>
            <h1>Tic-Tac-Toe</h1>
            <p>It's {currentPlayer}'s turn to go. </p>
            <Board tiles={tiles} onTileClick={handleClick}/>
            <button>Reset Game</button>
        </>
    )
}

export default TicTacToe