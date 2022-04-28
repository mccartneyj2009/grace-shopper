import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigate();

  const lstoken = localStorage.getItem("token");

  const handleRegisterUser = async () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password != confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const resp = await fetch(`http://localhost:3001/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          first_name,
          last_name,
        }),
      });

      const info = await resp.json();

      if (info.error) {
        setError(info.error);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFirst_name("");
        setLast_name("");
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
      <div className="registerstyle">
        <h1>Register Here</h1>
        <form
          className="registerForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegisterUser();
          }}
        >
          <label htmlFor="email-address">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            type="email"
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
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            required
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
          ></input>
          <label htmlFor="fname">First Name</label>
          <input
            onChange={(e) => {
              setFirst_name(e.target.value);
            }}
            value={first_name}
            required
            type="text"
            id="fname"
            placeholder="First Name"
          ></input>
          <label htmlFor="lname">Last Name</label>
          <input
            onChange={(e) => {
              setLast_name(e.target.value);
            }}
            value={last_name}
            required
            type="text"
            id="lname"
            placeholder="Last Name"
          ></input>
          <button>Register</button>
        </form>
        <p>{error}</p>
        <p>
          Already have an account? <Link to="/login">Login Here!</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
