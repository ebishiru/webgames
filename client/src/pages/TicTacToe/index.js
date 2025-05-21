import { useState } from "react";
import styled from "styled-components";

import Board from "./Board";

const PLAYER_1 = "X";
const PLAYER_2 = "O";

//randomize starting player
const randomizeStartingPlayer = () => {
    return Math.random() < 0.5? PLAYER_1 : PLAYER_2
}

//Initialize Tic-Tac-Toe Game
const TicTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null)); 
    const [currentPlayer, setCurrentPlayer] = useState(randomizeStartingPlayer)
    const [gameStatus, setGameStatus] = useState("playing");

const handleClick = (index) => {
    //verify that game is still playing.
    if (gameStatus !== "playing") {
        return;
    }

    //verify that tile has not already been taken.
    if (tiles[index] !== null) {
        return;
    }

    const newTiles = [...tiles];
    newTiles[index] = currentPlayer;
    setTiles(newTiles);

    //verify win condition
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
        if (newTiles[a] && newTiles[a] === newTiles[b] && newTiles[a] === newTiles[c]) {
            setGameStatus("winner");
            return;
        }
    }

    //verify draw condition
    if (newTiles.every(tile => tile)) {
        setGameStatus("draw");
        return;
    }
    
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
}

const handleReset = () => {
    setTiles(Array(9).fill(null));
    setCurrentPlayer(randomizeStartingPlayer());
    setGameStatus("playing");
}


    return (
        <Page>
            <h1>Tic-Tac-Toe</h1>
            { gameStatus === "playing" && <p>It's {currentPlayer}'s turn to go. </p>}
            { gameStatus === "winner" && <p>Player {currentPlayer} Wins !!</p>}
            { gameStatus === "draw" && <p>The Game ends in a Draw.</p>}
            <BoardContainer>
                <Board tiles={tiles} onTileClick={handleClick}/>
            </BoardContainer>
            <button onClick={()=>{handleReset()}}>Reset Game</button>
        </Page>
    )
}

export default TicTacToe

const Page = styled.div`
    text-align: center;

    h1 {
        margin: 1rem 0;
        font-size: 2rem;
    }

    p {
        margin: 2rem 0;
        font-size: 1.5rem;
    }

    button {
        font-size: 1.25rem;
        padding: 0.5rem;
        border: solid 2px var(--color1);
        border-radius: 5px;
    }

    button:hover {
        cursor: pointer;
    }

    button:active {
        transform: scale(0.9);
    }
`

const BoardContainer = styled.div`
    display: flex;
    margin: 2rem 0;
`