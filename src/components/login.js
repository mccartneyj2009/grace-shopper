import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigation = useNavigate();

    const lstoken = localStorage.getItem("token");

    const handleLoginUser = async () => {
        try {
            const resp = await fetch(`http://localhost:3001/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const info = await resp.json();

            if (info.error) {
                setError(info.error);
                setEmail("");
                setPassword("");
                return;
            }

            localStorage.setItem("token", info.token);

            setUser(info.user);

            navigation("/", { replace: true });
        } catch (error) {
            throw error;
        }
    };

    if (lstoken) {
        return <Navigate replace to="/" />;
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLoginUser();
                }}
            >
                <label htmlFor="email-address">Email</label>
                <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    required
                    type="text"
                    id="email-address"
                    placeholder="user@email.com"
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    required
                    type="password"
                    id="password"
                    placeholder="Password"
                ></input>
                <button>Login</button>
            </form>
            <p>{error}</p>
            <p>
                No account? <Link to="/register">Register Here!</Link>
            </p>
        </>
    );
};

export default Login;
