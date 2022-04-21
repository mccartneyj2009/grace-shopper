import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <>
      <div id="nav-one">
        <input
          id="search"
          type="text"
          placeholder="What can we help you find?..."
        ></input>

        <div id="nav-one-right">
          <FontAwesomeIcon id="cart" icon={faShoppingCart} />

          <Link to="/login" className="linksolo">
            Login/Register
          </Link>
        </div>
      </div>

      <div id="nav-two">
        <img id="logo" src={require("./three.png")} />
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
    </>
  );
};

export default Navbar;
