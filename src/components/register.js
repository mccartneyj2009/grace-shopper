import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <label htmlFor="email-address">Email</label>
                <input
                    required
                    type="text"
                    id="email-address"
                    placeholder="user@email.com"
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    required
                    type="password"
                    id="password"
                    placeholder="Password"
                ></input>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    required
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                ></input>
                <button>Register</button>
            </form>
            <p>
                Already have a user account?
                <Link to="/login">Login Here!</Link>
            </p>
        </>
    );
};

export default Register;
