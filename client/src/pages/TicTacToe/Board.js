import Strike from "./Strike";
import Tile from "./Tile";
import styled from "styled-components";

const Board = ({tiles}) => {

    return (
        <Gameboard>
            <Tile value={tiles[0]}/>
            <Tile value={tiles[1]}/>
            <Tile value={tiles[2]}/>
            <Tile value={tiles[3]}/>
            <Tile value={tiles[4]}/>
            <Tile value={tiles[5]}/>
            <Tile value={tiles[6]}/>
            <Tile value={tiles[7]}/>
            <Tile value={tiles[8]}/>
            <Strike />
        </Gameboard>
    )
}

export default Board;

const Gameboard = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
`