import { useState } from "react";

import Board from "./Board";

const PLAYER_1 = "X";
const PLAYER_2 = "O";
const randomNumber = Math.ceil(Math.random()*2);
const startPlayer = PLAYER_1;
if (randomNumber === 2) {
    startPlayer = PLAYER_2;
}

const TicTacToe = () => {
    const [tiles, setTiles] = useState([]); 
    const [currentPlayer, setCurrentPlayer] = useState(startPlayer)

const handleClick = () => {}


    return (
        <>
            <h1>Tic-Tac-Toe</h1>
            <Board tiles={tiles}/>
            <button>Reset Game</button>
        </>
    )
}

export default TicTacToe