import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <> 
    <section className="heroimage">
      <div id="nav-one">
<<<<<<< HEAD
        <input
          id="search"
          type="text"
          placeholder="What can we help you find?..."
        ></input>

=======
      <img id="logo" src={require("./title.png")} /> 
        {/* <input id ="search" type="text" placeholder="What can we help you find?..."></input> */}
        
>>>>>>> 11466762192445ab56d884255259af5fe94e7000
        <div id="nav-one-right">
          <FontAwesomeIcon id="cart" icon={faShoppingCart} />

          <Link to="/login" className="linksolo">
            Login/Register
          </Link>
        </div>
      </div>
<div id="nav-two">
      {/* <img id="logo" src={require("./three.png")} />  */}
        <div id="links">
          <Link to="/" className="link">
            Home
          </Link>

          <Link to="/meat" className="link">
            Meats
          </Link>

          <Link to="" className="link">
            Orders
          </Link>

          <Link to="/info" className="link">
            Info
          </Link>
          {user ? (
            <>
              <Link
                className="link"
                to="/"
                onClick={() => {
                  setToken("");
                  setUser(null);
                  localStorage.removeItem("token");
                }}
              >
                Logout
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      </section>
    </>
  );
};
// import React, { useState } from "react";


// const Navbar = ({  }) => {

// const [navbarOpen, setNavbarOpen] = useState(false)
// const handleToggle = () => {
//     setNavbarOpen(!navbarOpen)
//   }
//   const closeMenu = () => {
//     setNavbarOpen(false)
//   }
// return (
//     <nav className="navBar">
//       <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button> 
//       <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>Home</ul>
//       <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>Meats</ul>
//       <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>Orders</ul>
//       <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>Info</ul>
//     </nav>
//   )}
 
export default Navbar;
