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
                    <FontAwesomeIcon id="cart" icon={faShoppingCart} />
              
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
               
            
        </>
    );
};


export default Navbar;
