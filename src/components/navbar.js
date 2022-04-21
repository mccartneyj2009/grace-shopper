import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ user, setToken, setUser }) => {
    return (
        <>
            <div id="nav-one">
                <input type="text" placeholder="Search.."></input>

<<<<<<< HEAD
        <div id="nav-one-right">
          <FontAwesomeIcon id="cart" icon={faShoppingCart} />
=======
                <div id="nav-one-right">
                    <FontAwesomeIcon id="cart" icon={faShoppingCart} />
>>>>>>> 7a64a09b0d8b12ef45d2b0d046d5e0642aa5afc9

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

                    <Link to="" className="link">
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
