// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// const Navbar = ({ user, setToken, setUser }) => {
//   return (
//     <> 
//       <div id="nav-one">
//         <input id ="search" type="text" placeholder="What can we help you find?..."></input>
        
//         <div id="nav-one-right">
//           <FontAwesomeIcon id="cart" icon={faShoppingCart} />

//           <Link to="/Register" className="linksolo">
//             Login/Register
//           </Link>
//         </div>
//       </div>

//       <div id="nav-two">

//       <img id="logo" src={require("./three.png")} /> 
//         <div id="links">
//           <Link to="/" className="link">
//             Home
//           </Link>

//           <Link to="/meat" className="link">
//             Meats
//           </Link>

//           <Link to="" className="link">
//             Orders
//           </Link>

//           <Link to="" className="link">
//             Info
//           </Link>
//           {user ? (
//             <>
//               <Link
//                 className="link"
//                 to="/"
//                 onClick={() => {
//                   setToken("");
//                   setUser(null);
//                   localStorage.removeItem("token");
//                 }}
//               >
//                 Logout
//               </Link>
//             </>
//           ) : (
//             <></>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
import React, { useState } from "react";

const Navbar = ({  }) => {

const [navbarOpen, setNavbarOpen] = useState(false)
const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button> 
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>Home</ul>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>Meats</ul>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>Orders</ul>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>Info</ul>
    </nav>
  )}
 
export default Navbar;
