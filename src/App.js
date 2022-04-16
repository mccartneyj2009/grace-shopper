import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  import Home from "./Home";
  import Navbar from "./Navbar";

  // const App = () => {

  return (
    <div id="container">
      <Navbar />
      {/* <div id="main-section">
        <Routes>
          <Route exact element={<Home  />} path="/" />

          <Route exact element={<Meats  />}
             />
            </Routes>
            </div> */}
    </div>
  );
};
export default App;
