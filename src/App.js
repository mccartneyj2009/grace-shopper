import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Meat, Home, Navbar} from "./components";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [meats, setMeat] = useState("");

  const fetchMeat = async () => {
    const resp = await fetch(`api/meats`);

    const info = await resp.json();

    setMeat(info);
  };

  useEffect(() => {
    fetchMeat();
  }, []);

  return (
    <>
  
    <div id="container">
      <Navbar />
      
      <div id="main-section">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/meat" element={<Meat meats={meats} />} />
          {/* <Route
            exact
            element={
              <Login
                token={token}
                setToken={setToken}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                error={error}
                setError={setError}
              />
            }
            path="/Login"
            />
             <Route
            exact
            element={
              <Register
                token={token}
                setToken={setToken}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                confirm={confirm}
                setConfirm={setConfirm}
                error={error}
                setError={setError}
              />
            }
            path="/Register"
          /> */}
        </Routes>
      </div>
    </div>
    </>
  );
};
export default App;
