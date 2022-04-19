import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Meat, Home, Navbar, Login } from "./components";

const App = () => {
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});

    return (
        <div id="container">
            <Navbar />
            <div id="main-section">
                <div id="main-section">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/meat" element={<Meat />} />
                        {/* <Route exact path="/register" element={<Meat />} /> */}
                    </Routes>
                </div>
            </div>
            <Routes>
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};
export default App;
