import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
        <h1>Welcome to Web Games</h1>
        <p>A list of games to pass time.</p>
        <div>
            <Link to="/tictactoe">Tic Tac Toe</Link>
        </div>
        </>
    )
}

export default Home;