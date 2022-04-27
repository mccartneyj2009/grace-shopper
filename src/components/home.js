import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  const [allUsers, setAllUsers] = useState({});
  const fetchAllUsers = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/api/users/all`);
      const info = await resp.json();

      setAllUsers(info);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  console.log(allUsers);
  if (user)
    return (
      <>
        <div id="intro">
          <h1>When you're with Tony, youre with Family</h1>
        </div>
      </>
    );
};

export default Home;
