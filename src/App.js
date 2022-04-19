import { Route, Routes } from "react-router-dom";
import { Meat, Home, Navbar } from "./components";
import background from "./components/backdrop.png";

const App = () => {
  const backgroundStyle=`background-image: url(${background})`
  return (
    <>
    <div style={backgroundStyle}></div>
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/meat" element={<Meat />} />
        </Routes>
      </div>
    </div>
    </>
  );
};
export default App;
