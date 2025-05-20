import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home/index"

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home /> } />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    )
}

export default App