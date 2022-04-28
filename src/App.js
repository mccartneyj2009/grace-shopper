import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Meat,
  Home,
  Navbar,
  Login,
  Register,
  Info,
  Cart,
  AddMeat,
} from "./components";

const App = () => {
  const [meats, setMeat] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [tempCart, setTempCart] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [allUsers, setAllUsers] = useState({});
  const fetchUser = async () => {
    try {
      const lstoken = localStorage.getItem("token");
      if (lstoken) {
        setToken(lstoken);
      }
      if (lstoken) {
        const resp = await fetch(`http://localhost:3001/api/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lstoken}`,
          },
        });

        const info = await resp.json();

        if (info) {
          setUser(info.user);
        }

        if (info.administrator) {
          setAdmin(true);
        }

        return info;
      }
    } catch (error) {
      throw error;
    }
  };
  const fetchAllUsers = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/api/users/all`);
      const info = await resp.json();

      setAllUsers(info);
      return info;
    } catch (error) {
      throw error;
    }
  };

  const fetchMeat = async () => {
    const resp = await fetch(`http://localhost:3001/api/meats`);

    const info = await resp.json();

    setMeat(info);
  };

  useEffect(() => {
    fetchUser();
    fetchAllUsers();
    fetchMeat();
  }, []);

  return (
    <div id="container">
      <Navbar user={user} />
      <div id="main-section">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home user={user} admin={admin} allUsers={allUsers} />}
          />

          <Route
            exact
            path="/meat"
            element={
              <Meat
                admin={admin}
                meats={meats}
                setMeat={setMeat}
                tempCart={tempCart}
                setTempCart={setTempCart}
              />
            }
          />
          <Route
            exact
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart tempCart={tempCart} setTempCart={setTempCart} />}
          />
          <Route exact path="/info" element={<Info />} />

          <Route
            exact
            path="meat/addMeat"
            element={<AddMeat user={user} admin={admin} setMeat={setMeat} />}
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
