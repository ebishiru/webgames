import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home/index"
import TicTacToe from "./pages/TicTacToe"

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home /> } />
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    )
}

export default App