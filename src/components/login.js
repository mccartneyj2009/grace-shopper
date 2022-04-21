import { url } from "./App";
import { useNavigate } from "react-router-dom";

const Login = ({
    username,
    setUsername,
    password,
    setPassword,
    token,
    setToken,
    error,
    setError,
  }) => {
    const history = useNavigate();
  
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`${url}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const data = await response.json();
        if (data.error) {
          setError(data.error);
          return;
        }
        setToken(data.token);
        localStorage.setItem("token", data.token);
        history("/");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
        <form onSubmit={handleLogin}>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login!</button>
        </form>
        <p>{error}</p>
      </>
    );
  };
        export default Login;
