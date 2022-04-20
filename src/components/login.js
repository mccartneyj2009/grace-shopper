import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ fetchUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLoginUser = async (e) => {
        console.log(email, password);
        try {
            const resp = await fetch(`api/users/login`, {
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

            localStorage.setItem("token", info.token);

            if (info.error) {
                setError(info.message);
            }

            fetchUser();
        } catch (error) {
            throw error;
        }
    };

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
                    required
                    type="password"
                    id="password"
                    placeholder="Password"
                ></input>
                <button>Login</button>
            </form>
            <p>
                No account? <Link to="/register">Register Here!</Link>
            </p>
        </>
    );
};

export default Login;
