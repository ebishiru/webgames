import styled from "styled-components";

const Tile = ({value, onClick}) => {

    return (
        <GameTile value={value} onClick={onClick}>{value}</GameTile>
    )
}

export default Tile;

const GameTile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    border: solid 2px var(--color1);
    border-radius: 10px;
    margin: 0.25rem;
    background-color: ${({ value }) => {
        if (value === "X") return 'var(--color5)';
        else if (value === "O") return 'var(--color2)';
        return 'var(--color3)';
    }};
`