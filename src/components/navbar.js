import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ user, setToken, setUser }) => {
  const lstoken = localStorage.getItem("token");

  return (
    <>
      <div id="nav-one">
        <img id="logo" src={require("./title.png")} />

        <div id="nav-one-right">
          <FontAwesomeIcon id="user" icon={faUser} />

          <Link to="/cart">
            <FontAwesomeIcon id="cart" icon={faShoppingCart} />
          </Link>
          {!lstoken ? (
            <Link to="/login" className="linksolo">
              Login/Register
            </Link>
          ) : (
            <Link
              to="/"
              className="linksolo"
              onClick={() => {
                localStorage.removeItem("token");

                setToken("");
                setUser({});
              }}
            >
              Logout
            </Link>
          )}
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

          <Link to="/cart" className="link">
            Cart
          </Link>

          <Link to="/info" className="link">
            About Us
          </Link>
          {lstoken ? (
            <>
              <Link
                className="link"
                to="/"
                onClick={() => {
                  localStorage.removeItem("token");

                  setToken("");
                  setUser({});
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
    </>
  );
};

export default Navbar;
